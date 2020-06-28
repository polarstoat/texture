import React, { Component } from 'react';
import randomInt from 'random-int';
import { Howler } from 'howler';

import { getUniqueHues } from './utility.js';

import Header from './Header.js';
import Sounds from './Sounds.js';
import BodyText from './BodyText.js';
import Footer from './Footer.js';

import soundFilenames from './soundFilenames.json';

/**
 * How many different sound sliders to display at once
 * @type {Number}
 */
const SOUNDS_TO_DISPLAY = 6;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: [],
      muted: false,
    };

    this.randomiseSounds = this.randomiseSounds.bind(this);
    this.muteToggle = this.muteToggle.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  componentDidMount() {
    this.randomiseSounds();
  }

  randomiseSounds() {
    const filenames = [];

    while (filenames.length < SOUNDS_TO_DISPLAY) {
      const randomFilename = soundFilenames[randomInt(0, soundFilenames.length - 1)];

      if (
        filenames.indexOf(randomFilename) === -1 &&
        this.state.sounds.findIndex((sound) => sound.filename === randomFilename) === -1
      ) filenames.push(randomFilename);
    }

    const hues = getUniqueHues(SOUNDS_TO_DISPLAY);

    const sounds = filenames.map((filename, index) => { return { filename, hue: hues[index], volume: 0 } });

    this.setState({ sounds });
  }

  muteToggle() {
    const muted = !this.state.muted;

    this.setState({
      muted
    });

    Howler.mute(muted);
  }

  handleVolumeChange(sound, volume) {
    const sounds = this.state.sounds;

    sounds[sounds.indexOf(sound)].volume = volume;

    this.setState(sounds);
  }

  render() {
    return (
      <React.Fragment>
        <Header onRandomise={this.randomiseSounds} onMuteToggle={this.muteToggle} muted={this.state.muted} />
        <Sounds sounds={this.state.sounds} muted={this.state.muted} onVolumeChange={this.handleVolumeChange} />
        <BodyText />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
