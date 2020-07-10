import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './ShareURL.css';

class ShareURL extends PureComponent {
  render() {
    const { code } = this.props;

    return (
      <Container fluid>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="shareable-url-label">Shareable URL</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="text" id="shareable-url" aria-label="Shareable URL for this Texture" aria-describedby="shareable-url-label" readOnly value={`${window.location.origin}${window.location.pathname}#${code}`} onClick={(event) => { event.target.focus(); event.target.select(); }} />
        </InputGroup>
      </Container>
    );
  }
}

ShareURL.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ShareURL;
