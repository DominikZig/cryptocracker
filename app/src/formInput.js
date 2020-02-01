import React from 'react';
import './App.css';

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

        this.setState({
            [name] : value
        });
    };

    handleEncryptSubmit = e => {
        e.preventDefault();

        this.setState({
            showEncrypt: false,
            showDecrypt: true
        });

        this.setEncrypted();
    };

    handleDecryptSubmit = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: true,
            showDecrypt: false
        });

        this.setPlain();
    };

    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.handleEncryptSubmit}>
                    <div id={"inputBox"}><input name="inputTextValue" className="input is-large inputBox" type="text" value={this.state.inputTextValue} onChange={this.handleChange} placeholder="Enter your message"/></div>
                    <div id={"key"}><input name="keyValue" className="input key" type="text" value={this.state.keyValue} onChange={this.handleChange} placeholder="Key"/></div>
                    <input type="submit" value="Encrypt" className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}/>
            </form>
            <button onClick={this.handleDecryptSubmit} type="submit" className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </React.Fragment>
        )
    }
}

export default FormInput;