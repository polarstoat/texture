import React, { Component } from 'react';

import FormControl from 'react-bootstrap/FormControl';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.valueAsNumber);
  }

  render() {
    return (
      <FormControl value={this.props.value} onChange={this.handleChange} type="range" min={0} max={1} step={0.01} custom />
    );
  }
}

export default Slider;
