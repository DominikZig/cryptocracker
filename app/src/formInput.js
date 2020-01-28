import React from 'react';
import './App.css';

class FormInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showEncrypt: true,
            showDecrypt: false,
            plainTextData: "",
            textValue: "",
            keyValue: undefined,
            encryptedText: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEncryptSubmit = this.handleEncryptSubmit.bind(this);
    }

    componentDidMount() {
        setInterval(this.getEncrypted, 250);
    }

    getEncrypted = () => {
        fetch('/encrypt')
            .then(response => response.text())
            .then(encryptedText => {
                this.setState({encryptedText: encryptedText});
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

        this.getEncrypted();

        this.state.textValue = this.state.encryptedText;
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
                    <div id={"inputBox"}><input name="textValue" className="input is-large inputBox" type="text" value={this.state.textValue} onChange={this.handleChange} placeholder="Enter your message"/></div>
                    <div id={"key"}><input name="keyValue" className="input key" type="text" value={this.state.keyValue} onChange={this.handleChange} placeholder="Key"/></div>
                    <input type="submit" value="Encrypt" className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}/>
            </form>
            <button onClick={this.handleDecryptSubmit} type="submit" className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </React.Fragment>
        )
    }
}

export default FormInput;