import React, { Component } from 'react';
import './App.css';
import GameField from './GameField';
import GameMenu from './GameMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <GameMenu />
      <GameField/>
      </div>
    );
  }
}

export default App;
