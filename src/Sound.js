import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Howl } from 'howler';

import VolumeSlider from './VolumeSlider.js';

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
    this.audio = new Howl({
      src: [`./audio/${this.props.filename}`],
      loop: true,
      volume: 0,
      autoplay: true,
    });
  }

  handleVolumeChange(volume) {
    this.setState({ volume });

    this.audio.volume(volume);
  }

  componentWillUnmount() {
    this.audio.unload();
  }

  render() {
    return (
      <Form.Group className="sound" style={{ backgroundColor: `hsl(${this.props.hue}, ${this.props.muted ? 10 : 58}%, 75%)` }}>
        <VolumeSlider value={this.state.volume} onChange={this.handleVolumeChange} />
        {process.env.NODE_ENV !== 'production' && process.env.REACT_APP_FILENAMES === 'true' && <small className="filename text-white bg-dark text-monospace">{this.props.filename}</small>}
      </Form.Group>
    );
  }
}

export default Sound;
