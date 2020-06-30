import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Howl } from 'howler';

import VolumeSlider from './VolumeSlider.js';

import './Sound.css';

class Sound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  componentDidMount() {
    this.audio = new Howl({
      src: [`./audio/${this.props.sound.filename}`],
      loop: true,
      volume: this.props.sound.volume,
      autoplay: true,
    });

    this.audio.once('load', () => {
      this.setState({ loaded: true });
    });
  }

  handleVolumeChange(volume) {
    this.props.onVolumeChange(this.props.sound, volume);

    this.audio.volume(volume);
  }

  componentWillUnmount() {
    this.audio.unload();
  }

  render() {
    return (
      <Form.Group className="sound" style={{ backgroundColor: `hsl(${this.props.sound.hue}, ${this.props.muted ? 0 : 58}%, ${this.props.sound.lightness}%)` }}>
        <VolumeSlider value={this.props.sound.volume} onChange={this.handleVolumeChange} audioLoaded={this.state.loaded} />
        {process.env.NODE_ENV !== 'production' && process.env.REACT_APP_FILENAMES === 'true' && <small className="filename text-white bg-dark text-monospace">{this.props.sound.filename}</small>}
      </Form.Group>
    );
  }
}

export default Sound;
