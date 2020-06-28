import angles from 'angles';
import randomInt from 'random-int';

angles.SCALE = 360;

/**
 * The minimum distance (in degrees) between each generated hue
 *
 * @type {Number}
 */
const MIN_HUE_DISTANCE = 30;

/**
 * The minimum distance (in degrees) between two adjacently displayed hues
 *
 * @type {Number}
 */
const MIN_ADJACENT_HUE_DISTANCE = 60;

/**
 * Checks if the given hue is too close to any in the array of existing hues
 *
 * @param  {Number} hue  The hue to check
 * @param  {Number[]} hues The array of existing hues to check against
 * @return {Boolean}      Whether the given hue is too close to any in the array of existing hues
 */
function hueIsTooClose(hue, hues) {
  if (hues.some(value => angles.distance(value, hue) < MIN_HUE_DISTANCE)) return true;
  return false;
}

/**
 * Checks if the given hue is too close to the previous (adjacently displayed) hue
 *
 * @param  {Number} hue         The hue to check
 * @param  {Number} previousHue The previous hue to check against
 * @return {Boolean}             Whether the given hue is too close to the previous hue
 */
function previousHueIsTooClose(hue, previousHue) {
  if (angles.distance(hue, previousHue) < MIN_ADJACENT_HUE_DISTANCE) return true;
  return false;
}

function getUniqueHues(numberToGet) {
  const hues = [];

  while (hues.length < numberToGet) {
    const hue = randomInt(359);

    if (
      hues.length === 0 ||
      (!hueIsTooClose(hue, hues) &&
      !previousHueIsTooClose(hue, hues[hues.length - 1]))
    ) hues.push(hue);
  }

  return hues;
}

export {
  getUniqueHues,
};
