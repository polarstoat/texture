import React, { Component } from 'react';

import FormControl from 'react-bootstrap/FormControl';

class Slider extends Component {
  render() {
    return (
      <FormControl type="range" min={0} max={1} step={0.01} custom />
    );
  }
}

export default Slider;
