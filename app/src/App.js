import React from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import lock from './padlock-10-128.png';
import unlock from './padlock-9-128.png';
import FormInput from "./formInput";

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
                <FormInput/>
            </div>
        </body>
    </div>
  );
}

export default App;
