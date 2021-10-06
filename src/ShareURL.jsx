import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './ShareURL.css';

class ShareURL extends PureComponent {
  handleClick = (event) => {
    event.target.focus();
    event.target.select();
  }

  render() {
    const { shareableUrl } = this.props;

    return (
      <Container fluid>
        <InputGroup className="mt-3">
          <InputGroup.Text id="shareable-url-label">Shareable URL</InputGroup.Text>
          <Form.Control type="text" id="shareable-url" aria-label="Shareable URL for this Texture" aria-describedby="shareable-url-label" readOnly value={shareableUrl} onClick={this.handleClick} />
        </InputGroup>
      </Container>
    );
  }
}

ShareURL.propTypes = {
  shareableUrl: PropTypes.string.isRequired,
};

export default ShareURL;
