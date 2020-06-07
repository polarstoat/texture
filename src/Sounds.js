import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import randomInt from 'random-int';

import getDistinctYetRandomHues from './getDistinctYetRandomHues.js';
import Sound from './Sound.js';

import allSoundFilenames from './soundFilenames.json';

/**
 * How many different sound sliders to display at once
 * @type {Number}
 */
const SOUNDS_TO_DISPLAY = 6;

const chosenSoundFilenames = [];
while (chosenSoundFilenames.length < SOUNDS_TO_DISPLAY) {
  const randomSoundFilename = allSoundFilenames[randomInt(0, allSoundFilenames.length - 1)];

  if (chosenSoundFilenames.indexOf(randomSoundFilename) === -1) chosenSoundFilenames.push(randomSoundFilename);
}

const backgroundHues = getDistinctYetRandomHues(SOUNDS_TO_DISPLAY);

class Sounds extends Component {
  render() {
    const sounds = chosenSoundFilenames.map((filename) => (
      <Col key={filename} className="col-12">
        <Sound filename={filename} backgroundHue={backgroundHues.shift()} />
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
