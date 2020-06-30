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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sounds: ls.get('sounds') || [],
      muted: false,
    };

    this.randomiseSounds = this.randomiseSounds.bind(this);
    this.muteToggle = this.muteToggle.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  componentDidMount() {
    const { sounds } = this.state;

    if (sounds.length === 0) this.randomiseSounds();
    else if (sounds.some((sound) => sound.volume > 0)) {
      this.setState({ muted: true });
      Howler.mute(true);
    }
  }

  randomiseSounds() {
    let { sounds } = this.state;

    const filenames = [];

    while (filenames.length < SOUNDS_TO_DISPLAY) {
      const randomFilename = soundFilenames[randomInt(0, soundFilenames.length - 1)];

      if (
        filenames.indexOf(randomFilename) === -1
        && sounds.findIndex((sound) => sound.filename === randomFilename) === -1
      ) filenames.push(randomFilename);
    }

    const hues = getUniqueHues(SOUNDS_TO_DISPLAY);
    const lightnesses = getUniqueLightnesses(SOUNDS_TO_DISPLAY);

    sounds = filenames.map((filename, index) => ({
      filename,
      hue: hues[index],
      lightness: lightnesses[index],
      volume: 0,
    }));

    this.setState({ sounds });
    ls.set('sounds', sounds);
  }

  muteToggle() {
    this.setState((prevState) => {
      const muted = !prevState.muted;

      Howler.mute(muted);

      return { muted };
    });
  }

  handleVolumeChange(sound, volume) {
    const { sounds } = this.state;

    sounds[sounds.indexOf(sound)].volume = volume;

    this.setState(sounds);
    ls.set('sounds', sounds);
  }

  render() {
    const { muted, sounds } = this.state;
    return (
      <>
        <Header onRandomise={this.randomiseSounds} onMuteToggle={this.muteToggle} muted={muted} />
        <Sounds sounds={sounds} muted={muted} onVolumeChange={this.handleVolumeChange} />
        <BodyText />
        <Footer />
      </>
    );
  }
}

export default App;
