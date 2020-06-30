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
      <FormControl value={this.props.value} onChange={this.handleChange} disabled={!this.props.audioLoaded} type="range" min={0} max={1} step="any" custom />
    );
  }
}

export default Slider;
