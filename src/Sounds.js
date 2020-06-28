import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sound from './Sound.js';

class Sounds extends Component {
  render() {
    const sounds = this.props.sounds.map((sound) => (
      <Col key={sound.filename} className="col-12">
        <Sound filename={sound.filename} hue={sound.hue} muted={this.props.muted} />
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
