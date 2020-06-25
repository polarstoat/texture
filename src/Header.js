import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { BsShuffle } from 'react-icons/bs';

import MuteButton from './MuteButton.js';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleRandomise = this.handleRandomise.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
  }

  handleRandomise() {
    this.props.onRandomise();
  }

  handleMuteToggle() {
    this.props.onMuteToggle();
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Texture</Navbar.Brand>
        <div className="buttons">
          <MuteButton onToggle={this.handleMuteToggle} muted={this.props.muted} />
          <Button variant="secondary" onClick={this.handleRandomise}><BsShuffle size="1.5em" /></Button>
        </div>
      </Navbar>
    );
  }
}

export default Header;
