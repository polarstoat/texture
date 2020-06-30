import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

class MuteButton extends PureComponent {
  render() {
    const { muted, onToggle } = this.props;

    return (
      <Button variant={muted ? 'light' : 'secondary'} className={muted ? 'muted' : 'unmuted'} onClick={onToggle}>{muted ? <BsVolumeUpFill size="1.5em" /> : <BsVolumeMuteFill size="1.5em" />}</Button>
    );
  }
}

MuteButton.propTypes = {
  muted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MuteButton;
