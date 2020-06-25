import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Sound from './Sound.js';

class Sounds extends Component {
  render() {
    const backgroundHues = this.props.backgroundHues.slice(0);

    const sounds = this.props.soundFilenames.map(filename => (
      <Col key={filename} className="col-12">
        <Sound filename={filename} backgroundHue={backgroundHues.shift()} muted={this.props.muted} />
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
