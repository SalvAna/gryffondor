import React, { Component } from 'react';
import './App.css';
import Gride from './Gride';
import Menusplay from './Menusplay';



class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SPELL OF DUEL</h1>
        </header>
        < Gride />
        <br />
        < Menusplay />
      </div>
    );
  }
}

export default App;
