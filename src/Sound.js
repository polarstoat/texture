import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

import Slider from './Slider.js';

import './Sound.css';

class Sound extends Component {
  render() {
    return (
      <Form.Group className="sound" style={{ backgroundColor: `hsl(${this.props.backgroundHue}, 58%, 75%)` }}>
        <Slider />
      </Form.Group>
    );
  }
}

export default Sound;
