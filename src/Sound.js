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

  componentDidMount() {
    this.audio = new Audio(`./audio/${this.props.id}.mp3`);

    this.audio.loop = true;
    this.audio.volume = 0;

    this.audio.play();
  }

  handleVolumeChange(volume) {
    this.setState({ volume });

    this.audio.volume = volume;
  }

  componentWillUnmount() {
    this.audio.pause();

    this.audio = null;
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
