import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import randomInt from 'random-int';

import Sound from './Sound.js';

class Sounds extends Component {
  render() {
    return (
      <Form>
        <Sound backgroundHue={randomInt(360)} />
        <Sound backgroundHue={randomInt(360)} />
        <Sound backgroundHue={randomInt(360)} />
      </Form>
    );
  }
}

export default Sounds;
