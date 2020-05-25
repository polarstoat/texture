import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Texture</Navbar.Brand>
        <Button variant="outline-light" className="ml-auto">Randomise</Button>
      </Navbar>
    );
  }
}

export default Header;
