import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Howl } from 'howler';

import VolumeSlider from './VolumeSlider';

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
    const { sound } = this.props;

    this.audio = new Howl({
      src: [`./audio/${sound.filename}`],
      loop: true,
      volume: sound.volume,
      autoplay: true,
    });

    this.audio.once('load', () => {
      this.setState({ loaded: true });
    });
  }

  componentWillUnmount() {
    this.audio.unload();
  }

  handleVolumeChange(volume) {
    const { onVolumeChange, sound } = this.props;

    onVolumeChange(sound, volume);

    this.audio.volume(volume);
  }

  render() {
    const { sound, muted } = this.props;
    const { loaded } = this.state;

    return (
      <Form.Group className="sound" style={{ backgroundColor: `hsl(${sound.hue}, ${muted ? 0 : 58}%, ${sound.lightness}%)` }}>
        <VolumeSlider
          value={sound.volume}
          onChange={this.handleVolumeChange}
          audioLoaded={loaded}
        />
        {process.env.NODE_ENV !== 'production' && process.env.REACT_APP_FILENAMES === 'true' && <small className="filename text-white bg-dark text-monospace">{sound.filename}</small>}
      </Form.Group>
    );
  }
}

Sound.propTypes = {
  sound: PropTypes.exact({
    filename: PropTypes.string,
    hue: PropTypes.number,
    lightness: PropTypes.number,
    volume: PropTypes.number,
  }).isRequired,
  muted: PropTypes.bool.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
};

export default Sound;
