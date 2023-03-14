import React, { PureComponent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */

class BodyText extends PureComponent {
  render() {
    return (
      <Container fluid className="pt-3 px-4">
        <Row>
          <Col md={6}>
            <p>Texture randomly chooses 6 audio loops and colours, with volume sliders for mixing and a shuffle button to swap in all new loops and colours. Once you have created a Texture you like, you can copy its shareable URL, to save the audio loops, colours, and volume levels for future use.</p>
            <p>While there is no prescribed use, Texture was originally proposed to provide ambience, crunchiness and atmosphere for synth music and sonic inspiration for soundtracking. Its colourful and simple interface encourages playfulness over perfection. With an ever growing pool of sounds, Texture can breathe life into an overly clean mix in all kinds of unexpected ways. It is both intense, absorbing and capable of a huge range of presences, characteristics and readings.</p>
            <p>There are <strong>over 3 trillion</strong> unique combinations of audio loops in Texture; this means you probably have a combination that has never been heard by anyone before and probably will never be heard again — unless of course you share it.</p>
            <h6>Like Texture? Buy us an apple</h6>
            <a className="btn btn-donate mb-3" role="button" href="https://paypal.me/graemejwalker" target="_blank" rel="noreferrer noopener">Donate via PayPal</a>
            <p>We&apos;re happy to recieve feedback, comments and questions at <a href="mailto:hi@addtexture.com">hi@addtexture.com</a>.</p>
          </Col>
          <Col md={6}>
            <p>Whenever the sounds you’re working with need a bit of roughing up, or needs a refresh or a different perspective, give Texture a try.</p>
            <p>You could try adding texture to:</p>
            <ul>
              <li>Theatre &amp; dance work</li>
              <li>Sound Design</li>
              <li>ASMR, meditation, yoga &amp; study</li>
              <li>Cut out annoying noise</li>
              <li>Help with sleeping and concentration</li>
              <li>Soundscape</li>
              <li>Improvisation</li>
              <li>Game Design</li>
              <li>Or just enjoy it by itself, in the background</li>
            </ul>
            <p>We’ve already recorded hundreds of sounds just for this project, comprising field and studio recordings and software generated audio. They were mostly recorded at 96&nbsp;kHz/48-bit and downsampled to 24-bit.</p>
            <h6>Licensing</h6>
            <p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img className="float-end ps-2" alt="Creative Commons Licence" src="/images/by-nc.svg" /></a>Texture is free to use for non-commercial projects and live performances under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.</p>
            <p>If you want to use Texture for commercial projects or recordings, you’ll need a Commercial Use Licence which costs £25. This gives you unlimited royalty free single user rights to record the output of addtexture.com for your commercial projects. Contact us at <a href="mailto:licensing@addtexture.com">licensing@addtexture.com</a> for more information.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BodyText;
