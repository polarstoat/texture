import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

/* eslint-disable react/jsx-one-expression-per-line */

class Footer extends PureComponent {
  render() {
    return (
      <Navbar>
        <Container fluid>
          <Navbar.Text>
            <small>Add Texture &copy; Spike Padley and Graeme Walker 2020</small>
          </Navbar.Text>
          <Navbar.Text className="ml-auto"><small>Texture uses cookies to save your current mix in between sessions and measure traffic. <a href="https://www.cookiesandyou.com/" target="_blank" rel="noreferrer noopener">Learn more about cookies</a>.</small></Navbar.Text>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
