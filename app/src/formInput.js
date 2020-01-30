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
    }

    componentDidMount() {
        // setInterval(this.getEncrypted, 250);

        setInterval(this.setEncrypted, 1000);
    }

    getEncrypted = () => {
        fetch('/encrypt')
            .then(response => response.text())
            .then(encryptedText => {
                this.setState({encryptedText: encryptedText});
            });
    };

    setEncrypted = () => {

        const PlainText = {
            plainText: this.state.inputTextValue
        };

        // const Key = {
        //     cipherKey: this.state.keyValue
        // };

        console.log(JSON.stringify(PlainText));
        // console.log(JSON.stringify(Key));

        fetch('/encrypt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(PlainText),
            })
            .then((response) => response.text())
            .then((inputTextValue) => {

                this.state.inputTextValue = inputTextValue;

                return inputTextValue;
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

        // this.getEncrypted();

        //this.state.inputTextValue = this.state.encryptedText;
    };

    handleDecryptSubmit = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: true,
            showDecrypt: false
        });
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