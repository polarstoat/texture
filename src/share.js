import { Base64 } from 'js-base64';

import soundFilenames from './soundFilenames.json';

/* eslint-disable no-bitwise */

const VOLUME_PRECISION = 1000;
const HUE_BITS = 9;

function validateInt(int, min, max) {
  if (!Number.isInteger(int) || int < min || int > max) return false;

  return true;
}

/**
 * Combines a hue (integer of 0-360, stored in 9 bits) and lightness (integer of 0-100, stored in
 *   7 bits) into one 16 bit integer
 *
 * ┌───────────────────────────────────────────────────────────────┐
 * │ Combined hue and lightness (35523)                            │
 * ├───────────────────────────┬───────────────────────────────────┤
 * │ Lightness (69)            │ Hue (195)                         │
 * ├───┬───┬───┬───┬───┬───┬───┼───┬───┬───┬───┬───┬───┬───┬───┬───┤
 * │ 1 │ 0 │ 0 │ 0 │ 1 │ 0 │ 1 │ 0 │ 1 │ 1 │ 0 │ 0 │ 0 │ 0 │ 1 │ 1 │
 * └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
 *
 * @param  {number} hue       The hue to combine
 * @param  {number} lightness The lightness to combine
 * @return {number}           The combined hue and lightness
 */
function combineHueAndLightness(hue, lightness) {
  if (!validateInt(hue)) throw new RangeError(`Invalid hue: ${hue}`);
  if (!validateInt(lightness)) throw new RangeError(`Invalid lightness: ${lightness}`);

  return (lightness << HUE_BITS) + hue;
}

/**
 * Separates a combined hue and lightness created from the above function `combineHueAndLightness()`
 *
 * @param  {number} combined The combined hue and lightness
 * @return {{hue: number, lightness: number}} An object with the separated hue and lightness as keys
 */
function separateHueAndLightness(combined) {
  // Create a mask over the lightness bits
  // See: https://en.wikipedia.org/wiki/Mask_(computing)#Masking_bits_to_0
  const mask = 0b111111111;

  const hue = combined & mask;
  const lightness = combined >> HUE_BITS;

  return {
    hue,
    lightness,
  };
}

/**
 * Write a sound data array to the specified buffer
 *
 * @param  {ArrayBuffer} buffer    The buffer to write the data to
 * @param  {number} index     The index of the sound (0-5)
 * @param  {number[]} soundData The array of numbers to write
 */
function writeSoundData(buffer, index, soundData) {
  const view = new DataView(buffer, index * 6, 6);

  view.setUint16(0, soundData[0]);
  view.setUint16(2, soundData[1]);
  view.setUint16(4, soundData[2]);
}

/**
 * Read a sound data array from the specified buffer
 *
 * @param  {ArrayBuffer} buffer The buffer to read the data from
 * @param  {number} index  The index of the sound to read (0-5)
 * @return {number[]}        The data array
 */
function readSoundData(buffer, index) {
  const view = new DataView(buffer, index * 6, 6);

  const soundData = [];

  soundData.push(view.getUint16(0));
  soundData.push(view.getUint16(2));
  soundData.push(view.getUint16(4));

  return soundData;
}

function encodeShareURL(sounds) {
  const buf = new ArrayBuffer(36);

  sounds.forEach((sound, index) => {
    const {
      filename,
      hue,
      lightness,
      volume,
    } = sound;

    const fileIndex = soundFilenames.indexOf(filename);
    const combined = combineHueAndLightness(hue, lightness);

    writeSoundData(buf, index, [
      fileIndex,
      Math.round(volume * VOLUME_PRECISION),
      combined,
    ]);
  });

  const byteArray = new Uint8Array(buf);

  return Base64.fromUint8Array(byteArray, true);
}

function decodeShareURL(encodedString) {
  const byteArray = Base64.toUint8Array(encodedString);
  const buf = byteArray.buffer;

  const sounds = [];

  for (let index = 0; index < 6; index += 1) {
    const [fileIndex, volume, combined] = readSoundData(buf, index);

    const { hue, lightness } = separateHueAndLightness(combined);

    sounds.push({
      filename: soundFilenames[fileIndex],
      hue,
      lightness,
      volume: volume / VOLUME_PRECISION,
    });
  }

  return sounds;
}

export { encodeShareURL, decodeShareURL };
