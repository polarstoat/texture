import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

const iconSize = '1.5em';

class MuteButton extends PureComponent {
  render() {
    const { muted, onToggle } = this.props;

    return (
      <Button variant={muted ? 'light' : 'secondary'} className={muted ? 'muted' : 'unmuted'} onClick={onToggle}>{muted ? <BsVolumeMuteFill size={iconSize} /> : <BsVolumeUpFill size={iconSize} />}</Button>
    );
  }
}

MuteButton.propTypes = {
  muted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MuteButton;
