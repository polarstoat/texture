import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sound from './Sound.js';

class Sounds extends Component {
  constructor(props) {
    super(props);

    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleVolumeChange(sound, volume) {
    this.props.onVolumeChange(sound, volume);
  }

  render() {
    const sounds = this.props.sounds.map((sound) => (
      <Col key={sound.filename} className="col-12">
        <Sound sound={sound} muted={this.props.muted} onVolumeChange={this.handleVolumeChange} />
      </Col>
    ));

    return (
      <Row className="no-gutters">
        {sounds}
      </Row>
    );
  }
}

export default Sounds;
