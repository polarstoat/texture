import React, { Component } from 'react';
import randomInt from 'random-int';
import { Howler } from 'howler';
import ls from 'local-storage';

import { getUniqueHues, getUniqueLightnesses } from './utility';

import Header from './Header';
import Sounds from './Sounds';
import BodyText from './BodyText';
import Footer from './Footer';

import soundFilenames from './soundFilenames.json';

/**
 * How many different sound sliders to display at once
 * @type {Number}
 */
const SOUNDS_TO_DISPLAY = 6;

function getRandomSounds(currentSounds) {
  const filenames = [];

  while (filenames.length < SOUNDS_TO_DISPLAY) {
    const randomFilename = soundFilenames[randomInt(0, soundFilenames.length - 1)];

    if (
      filenames.indexOf(randomFilename) === -1
      && currentSounds.findIndex((sound) => sound.filename === randomFilename) === -1
    ) filenames.push(randomFilename);
  }

  const hues = getUniqueHues(SOUNDS_TO_DISPLAY);
  const lightnesses = getUniqueLightnesses(SOUNDS_TO_DISPLAY);

  const sounds = filenames.map((filename, index) => ({
    filename,
    hue: hues[index],
    lightness: lightnesses[index],
    volume: 0,
  }));

  return sounds;
}

class App extends Component {
  constructor(props) {
    super(props);

    const sounds = ls.get('sounds') || getRandomSounds([]);
    const muted = sounds.some((sound) => sound.volume > 0);

    Howler.mute(muted);

    this.state = {
      sounds,
      muted,
    };

    this.handleShuffleClick = this.handleShuffleClick.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleShuffleClick() {
    this.setState((prevState) => {
      const previousSounds = prevState.sounds;

      const sounds = getRandomSounds(previousSounds);

      ls.set('sounds', sounds);

      return { sounds };
    });
  }

  handleMuteToggle() {
    this.setState((prevState) => {
      const muted = !prevState.muted;

      Howler.mute(muted);

      return { muted };
    });
  }

  handleVolumeChange(sound, volume) {
    this.setState((prevState) => {
      const { sounds } = prevState;

      sounds[sounds.indexOf(sound)].volume = volume;

      ls.set('sounds', sounds);

      return { sounds };
    });
  }

  render() {
    const { muted, sounds } = this.state;

    return (
      <>
        <Header
          onShuffleClick={this.handleShuffleClick}
          onMuteToggle={this.handleMuteToggle}
          muted={muted}
        />
        <Sounds onVolumeChange={this.handleVolumeChange} sounds={sounds} muted={muted} />
        <BodyText />
        <Footer />
      </>
    );
  }
}

export default App;
