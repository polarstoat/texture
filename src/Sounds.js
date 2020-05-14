import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

import Sound from './Sound.js';

class Sounds extends Component {
  render() {
    return (
      <Form>
        <Sound />
        <Sound />
        <Sound />
      </Form>
    );
  }
}

export default Sounds;
