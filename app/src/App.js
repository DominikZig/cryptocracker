import React, {useState, useEffect} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css';
import lock from './padlock-10-128.png';
import unlock from './padlock-9-128.png';
import MainButton from "./MainButton";

function App() {
    const [encryptedText, setEncryptedText] = useState("");

    useEffect(() => {
        fetch('/hello')
            .then(response => response.text())
            .then(encryptedText => {
                setEncryptedText(encryptedText);
            });
    }, []);

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
                <div id={"inputBox"}><input className="input is-large inputBox" type="text" placeholder="Enter your message"/></div>
                <div id={"key"}><input className="input key" type="text" placeholder="Key"/></div>
            </div>
            <MainButton/>
            {/*<h1>{encryptedText}</h1>*/}
        </body>
    </div>
  );
}

export default App;
