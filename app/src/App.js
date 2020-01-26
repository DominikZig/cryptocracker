import React from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import lock from './padlock-10-128.png';
import unlock from './padlock-9-128.png';

function App() {
  return (
    <div className="App">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <header className="App-header">
          <img className="lock" src={lock} alt="lock"/>
          <h1>CryptoCracker</h1>
          <img className="unlock" src={unlock} alt="unlock"/>
      </header>
        <body>
            <div className="centre">
                <input className="input is-large" type="text" placeholder="Enter your message"/>
            </div>
            <button className="button is-success">Encrypt</button>
        </body>
    </div>
  );
}

export default App;
