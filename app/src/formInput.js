import React from 'react';
import './App.css';
import scrambler from "scrambling-letters/js/scrambler";

class FormInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showEncrypt: true,
            showDecrypt: false,
            inputTextValue: "",
            keyValue: undefined,
            encryptedText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEncryptSubmit = this.handleEncryptSubmit.bind(this);
        this.handleDecryptSubmit = this.handleDecryptSubmit.bind(this);
    }

    componentDidMount() {
        this.inputTextValue = this.setEncrypted;
        this.inputTextValue = this.setPlain;
        this.showEncrypt = this.changeButton();
        this.showDecrypt = this.changeButton();
    }

    setPlain = () => {

        const UserInput = {
            inputtedText: this.state.inputTextValue,
            cipherKey: this.state.keyValue
        };

        fetch('/decrypt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(UserInput),
        })
            .then((response) => response.text())
            .then((inputTextValue) => {
                return this.setState({inputTextValue: inputTextValue});
            });
    };

    setEncrypted = () => {

        const UserInput = {
            inputtedText: this.state.inputTextValue,
            cipherKey: this.state.keyValue
        };

        fetch('/encrypt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(UserInput),
            })
            .then((response) => response.text())
            .then((inputTextValue) => {
                return this.setState({inputTextValue: inputTextValue});
            });
    };

    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        if (this.state.inputTextValue.value == null)
        {
            this.encryptRemoveLoad();
            this.changeButton();
        }

        this.setState({
            [name] : value
        });
    };

    handleEncryptSubmit = e => {
        e.preventDefault();

        this.scrambleText();

        setTimeout(() => {

            this.setState({
                showEncrypt: false,
                showDecrypt: true
            });

            this.setEncrypted();
            this.decryptRemoveLoad();
        }, 2200);
    };

    handleDecryptSubmit = e => {
        e.preventDefault();

        this.scrambleText();

        setTimeout(() => {

            this.setState({
                showEncrypt: false,
                showDecrypt: true
            });

            this.setPlain();
            this.encryptRemoveLoad();
            this.changeButton();
        }, 2200);
    };

    changeButton = () => {
        this.setState({
            showEncrypt: true,
            showDecrypt: false
        });
    };

    scrambleText() {
        this.encryptAddLoad();
        this.decryptAddLoad();

        scrambler({
            target: '[data-scrambler]',
            random: [2000, 2000],
            speed: 100
        });
    }

    encryptAddLoad() {
        const add = document.getElementById("encryptButton");
        add.classList.add("is-loading");
    }

    decryptAddLoad() {
        const add = document.getElementById("decryptButton");
        add.classList.add("is-loading");
    }

    encryptRemoveLoad() {
        const encryptAddLoad = document.getElementById("encryptButton");
        encryptAddLoad.classList.remove("is-loading");
    }

    decryptRemoveLoad() {
        const decryptAddLoad = document.getElementById("decryptButton");
        decryptAddLoad.classList.remove("is-loading");
    }

    render() {
        return (
            <React.Fragment>
            <p data-scrambler>This is a Caesar Shift Cipher encrypter/decrypter tool. Enter the text and the desired key below:</p>
            <form onSubmit={this.handleEncryptSubmit}>
                <div id={"inputBox"}><input name="inputTextValue" className="input is-large inputBox" pattern="[A-Za-z ]+" type="text" value={this.state.inputTextValue} onChange={this.handleChange} placeholder="Enter your message" required/></div>
                <div id={"key"}><input name="keyValue" className="input key" type="number" min="1" max="26" value={this.state.keyValue} onChange={this.handleChange} placeholder="Key" required/></div>
                <button id={"encryptButton"} type="submit" className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}>Encrypt</button>
            </form>
            <button id={"decryptButton"} onClick={this.handleDecryptSubmit} type="submit" className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </React.Fragment>
        )
    }
}

export default FormInput;