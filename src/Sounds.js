import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import randomInt from 'random-int';

import Sound from './Sound.js';

/**
 * Total number of sound files available to draw from
 * @todo Generate this integer dynamically based on content of /public/audio/ folder
 * @type {Number}
 */
const NUMBER_OF_SOUNDS = 9;
/**
 * How many different sound sliders to display at once
 * @type {Number}
 */
const SOUNDS_TO_DISPLAY = 6;

const soundIds = [];
while (soundIds.length < SOUNDS_TO_DISPLAY) {
  const ran = randomInt(1, NUMBER_OF_SOUNDS);
  if (soundIds.indexOf(ran) === -1) soundIds.push(ran);
}

class Sounds extends Component {
  render() {
    const sounds = soundIds.map(id => (
      <Col key={id} className="col-12 col-lg-6">
        <Sound id={id} backgroundHue={randomInt(360)} />
      </Col>
    ));

    return (
      <Row className="no-gutters">
        {sounds}
      </Row>
    );
  }
}

export default Sounds;
