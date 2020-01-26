import React from 'react';
import './App.css';
import lock from './padlock-10-128.png';
import unlock from './padlock-9-128.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img className="lock" src={lock} alt="lock"/>
          <h1>CryptoCracker</h1>
          <img className="unlock" src={unlock} alt="unlock"/>
      </header>
    </div>
  );
}

export default App;
