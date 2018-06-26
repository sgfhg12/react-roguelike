import React, { Component } from 'react';
import './App.css';
import GameField from './GameField';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GameField/>
      </div>
    );
  }
}

export default App;
