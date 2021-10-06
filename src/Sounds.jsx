import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sound from './Sound';

class Sounds extends Component {
  constructor(props) {
    super(props);

    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleVolumeChange(sound, volume) {
    const { onVolumeChange } = this.props;

    onVolumeChange(sound, volume);
  }

  render() {
    const { sounds, muted } = this.props;

    const columns = sounds.map((sound) => (
      <Col key={sound.filename} className="col-12">
        <Sound onVolumeChange={this.handleVolumeChange} sound={sound} muted={muted} />
      </Col>
    ));

    return (
      <Row className="g-0">
        {columns}
      </Row>
    );
  }
}

Sounds.propTypes = {
  sounds: PropTypes.arrayOf(PropTypes.exact({
    filename: PropTypes.string,
    hue: PropTypes.number,
    lightness: PropTypes.number,
    volume: PropTypes.number,
  })).isRequired,
  muted: PropTypes.bool.isRequired,
  onVolumeChange: PropTypes.func.isRequired,
};

export default Sounds;
