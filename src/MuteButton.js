import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

class MuteButton extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.onToggle();
  }

  render() {
    return (
      <Button variant={this.props.muted ? 'light' : 'secondary'} className={this.props.muted ? 'muted' : 'unmuted'} onClick={this.toggle}>{this.props.muted ? <BsVolumeUpFill size="1.5em" /> : <BsVolumeMuteFill size="1.5em" />}</Button>
    );
  }
}

export default MuteButton;
