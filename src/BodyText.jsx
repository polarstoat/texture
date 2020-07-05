import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* eslint-disable max-len */

class BodyText extends PureComponent {
  render() {
    return (
      <Container fluid className="pt-4 px-4">
        <Row>
          <Col md={6}>
            <p>Each time you shuffle, Texture randomly chooses 6 audio loops and colours, and provides volume sliders for mixing. Once you have created a Texture you like, you can copy and share it’s unique URL, which will save the audio loops, the colours, and the volume levels for future use.</p>
            <p>While there is no prescribed use, Texture was originally proposed to provide texture and atmosphere for synth music and sonic inspiration for soundtracking. Its colourful and simple interface encourages playfulness over perfection. With an ever growing pool of sounds, Texture can breathe life into an overly clean mix in all kinds of unexpected ways. It is both intense, absorbing and capable of a huge range of presences, characteristics and readings.</p>
            <p><a className="btn btn-donate" role="button" href="https://paypal.me/graemejwalker" target="_blank" rel="noreferrer noopener">Donate via PayPal</a></p>
          </Col>
          <Col md={6}>
            <p>Whenever the sounds you’re working with need a bit of roughing up, or needs a refresh or a different perspective, give Texture a try.</p>
            <p>You could try adding texture to:</p>
            <ul>
              <li>Theatre &amp; dance work</li>
              <li>Sound Design</li>
              <li>ASMR, meditation, yoga</li>
              <li>Soundscape</li>
              <li>Improvisation</li>
              <li>Game Design</li>
              <li>Or simply by itself, in the background</li>
            </ul>
            <p>We’ve already recorded hundreds of sounds just for this project, comprising field and studio recordings and software generated audio. They were mostly recorded at 96/48 and downsampled to 24 bit.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BodyText;
