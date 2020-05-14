import React, { Component } from 'react';

import Header from './Header.js';
import Sounds from './Sounds.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Sounds />
        <div>Test</div>
      </React.Fragment>
    );
  }
}

export default App;
