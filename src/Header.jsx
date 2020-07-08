import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsShuffle } from 'react-icons/bs';

import MuteButton from './MuteButton';

import './Header.css';

class Header extends Component {
  componentDidMount() {
    document.addEventListener('touchend', () => {}, false);
  }

  render() {
    const { muted, onMuteToggle, onShuffleClick } = this.props;

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Texture</Navbar.Brand>
        <div className="buttons">
          <MuteButton onToggle={onMuteToggle} muted={muted} />
          <Button variant="primary" onClick={onShuffleClick}><BsShuffle size="1.5em" /></Button>
        </div>
      </Navbar>
    );
  }
}

Header.propTypes = {
  muted: PropTypes.bool.isRequired,
  onMuteToggle: PropTypes.func.isRequired,
  onShuffleClick: PropTypes.func.isRequired,
};

export default Header;
