import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';

/* eslint-disable react/jsx-one-expression-per-line */

class Footer extends PureComponent {
  render() {
    return (
      <Navbar>
        <Navbar.Text><small>Texture &copy; Spike Padley and Graeme Walker 2020</small></Navbar.Text>
        <Navbar.Text className="ml-auto"><small>Texture uses cookies to save your current Texture in between sessions and measure traffic. <a href="https://www.cookiesandyou.com/" target="_blank" rel="noreferrer noopener">Learn more about cookies</a>.</small></Navbar.Text>
      </Navbar>
    );
  }
}

export default Footer;
