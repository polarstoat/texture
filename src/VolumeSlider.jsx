import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange } = this.props;
    onChange(event.target.valueAsNumber);
  }

  render() {
    const { value, audioLoaded } = this.props;
    return (
      <FormControl value={value} onChange={this.handleChange} disabled={!audioLoaded} type="range" min={0} max={1} step="any" custom />
    );
  }
}

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  audioLoaded: PropTypes.bool.isRequired,
};

export default Slider;
