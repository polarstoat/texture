import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class ShareURL extends PureComponent {
  render() {
    const { code } = this.props;

    return (
      <Container fluid>
        <Form.Control className="mt-3" type="text" id="share-url" readOnly value={`${window.location.origin}${window.location.pathname}#${code}`} onClick={(event) => { event.target.focus(); event.target.select(); }} />
      </Container>
    );
  }
}

ShareURL.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ShareURL;
