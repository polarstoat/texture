import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsShuffle } from 'react-icons/bs';

import MuteButton from './MuteButton.js';

import './Header.css';

class Header extends Component {
  componentDidMount() {
    document.addEventListener('touchend', function() {}, false);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Texture</Navbar.Brand>
        <div className="buttons">
          <MuteButton onToggle={this.props.onMuteToggle} muted={this.props.muted} />
          <Button variant="secondary" onClick={this.props.onRandomise}><BsShuffle size="1.5em" /></Button>
        </div>
      </Navbar>
    );
  }
}

export default Header;
