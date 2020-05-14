import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import randomInt from 'random-int';

import Sound from './Sound.js';

/**
 * Total number of sound files available to draw from
 * @todo Generate this integer dynamically based on content of /public/audio/ folder
 * @type {Number}
 */
const NUMBER_OF_SOUNDS = 10;
/**
 * How many different sound sliders to display at once
 * @type {Number}
 */
const SOUNDS_TO_DISPLAY = 6;

const soundIds = [];
while (soundIds.length < SOUNDS_TO_DISPLAY) {
  const ran = randomInt(NUMBER_OF_SOUNDS);
  if (soundIds.indexOf(ran) === -1) soundIds.push(ran);
}

class Sounds extends Component {
  render() {
    const sounds = soundIds.map(id => (
      <Sound id={id} backgroundHue={randomInt(360)} />
    ));

    return (
      <Form>
        {sounds}
      </Form>
    );
  }
}

export default Sounds;
