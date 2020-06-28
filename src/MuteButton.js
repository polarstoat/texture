import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

class MuteButton extends Component {
  render() {
    return (
      <Button variant={this.props.muted ? 'light' : 'secondary'} className={this.props.muted ? 'muted' : 'unmuted'} onClick={this.props.onToggle}>{this.props.muted ? <BsVolumeUpFill size="1.5em" /> : <BsVolumeMuteFill size="1.5em" />}</Button>
    );
  }
}

export default MuteButton;
