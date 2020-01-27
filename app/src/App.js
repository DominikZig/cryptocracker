import React, {Component, useState, useEffect} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import lock from './padlock-10-128.png';
import unlock from './padlock-9-128.png';
import MainButton from "./MainButton";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])

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
                <h1>{message}</h1>
            </div>
            <MainButton/>
        </body>
    </div>
  );
}

export default App;
