import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';

class BodyText extends Component {
  render() {
    return (
      <Container fluid className="pt-4 px-4">
        <p>Each time you refresh, Texture randomly chooses 6 audio loops and provides volume sliders for mixing. Once you have created a mix you like, you can copy and share it’s unique URL.</p>
        <p>While there is no prescribed use, Texture was originally proposed to provide texture and atmosphere for synth music and sonic inspiration for soundtracking. With an ever growing pool of sounds, Texture can breathe life into an overly clean mix in all kinds of unexpected ways. It is both intense, absorbing and capable of a huge range of presences, characteristics and readings.</p>
        <p>Whenever the sounds you’re working with need a bit of roughing up, or needs a refresh or a different perspective, give Texture a try.</p>
        <p>You could also try adding texture to:</p>
        <ul>
          <li>Theatre & dance work</li>
          <li>ASMR, meditation, yoga</li>
          <li>Improvisation</li>
          <li>Games</li>
          <li>Or simply by itself, in the background</li>
        </ul>
      </Container>
    );
  }
}

export default BodyText;
