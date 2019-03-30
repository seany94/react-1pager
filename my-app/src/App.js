import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav.js';
import Content from './components/Header-content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
            <Nav/>
            <Content/>
        </div>
      </div>
    );
  }
}

export default App;