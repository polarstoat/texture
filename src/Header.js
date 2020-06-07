import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { FaRedoAlt } from 'react-icons/fa';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRandomise();
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Texture</Navbar.Brand>
        <Button variant="secondary" className="ml-auto" onClick={this.handleClick}><FaRedoAlt /></Button>
      </Navbar>
    );
  }
}

export default Header;
