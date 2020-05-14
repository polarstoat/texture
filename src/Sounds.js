import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import randomInt from 'random-int';

import Sound from './Sound.js';

class Sounds extends Component {
  render() {
    return (
      <Form>
        <Sound id={1} backgroundHue={randomInt(360)} />
        <Sound id={2} backgroundHue={randomInt(360)} />
        <Sound id={3} backgroundHue={randomInt(360)} />
      </Form>
    );
  }
}

export default Sounds;
