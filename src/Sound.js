import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

import Slider from './Slider.js';

import './Sound.css';

class Sound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0,
    };

    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleVolumeChange(volume) {
    this.setState({ volume });
  }

  render() {
    return (
      <Form.Group className="sound" style={{ backgroundColor: `hsl(${this.props.backgroundHue}, 58%, 75%)` }}>
        <Slider value={this.state.volume} onChange={this.handleVolumeChange} />
      </Form.Group>
    );
  }
}

export default Sound;
