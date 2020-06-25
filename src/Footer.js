import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';

class Footer extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Text><small>Texture &copy; Spike Padley and Graeme Walker 2020</small></Navbar.Text>
      </Navbar>
    );
  }
}

export default Footer;
