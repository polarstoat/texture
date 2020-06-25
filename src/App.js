import React, { Component } from 'react';

import randomInt from 'random-int';

import { Howler } from 'howler';

import getDistinctYetRandomHues from './getDistinctYetRandomHues.js';

import Header from './Header.js';
import Sounds from './Sounds.js';
import BodyText from './BodyText.js';
import Footer from './Footer.js';

import allSoundFilenames from './soundFilenames.json';

/**
 * How many different sound sliders to display at once
 * @type {Number}
 */
const SOUNDS_TO_DISPLAY = 6;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSoundFilenames: [],
      backgroundHues: [],
      muted: false,
    };

    this.randomiseSounds = this.randomiseSounds.bind(this);
    this.muteToggle = this.muteToggle.bind(this);
  }

  componentDidMount() {
    this.randomiseSounds();
  }

  randomiseSounds() {
    const chosenSoundFilenames = [];
    while (chosenSoundFilenames.length < SOUNDS_TO_DISPLAY) {
      const randomSoundFilename = allSoundFilenames[randomInt(0, allSoundFilenames.length - 1)];

      if (
        chosenSoundFilenames.indexOf(randomSoundFilename) === -1
        && this.state.chosenSoundFilenames.indexOf(randomSoundFilename) === -1
      ) chosenSoundFilenames.push(randomSoundFilename);
    }

    const backgroundHues = getDistinctYetRandomHues(SOUNDS_TO_DISPLAY);

    this.setState({
      chosenSoundFilenames,
      backgroundHues,
    });
  }

  muteToggle() {
    const muted = !this.state.muted;

    this.setState({
      muted
    });

    Howler.mute(muted);
  }

  render() {
    return (
      <React.Fragment>
        <Header onRandomise={this.randomiseSounds} onMuteToggle={this.muteToggle} muted={this.state.muted} />
        <Sounds soundFilenames={this.state.chosenSoundFilenames} backgroundHues={this.state.backgroundHues} muted={this.state.muted} />
        <BodyText />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
