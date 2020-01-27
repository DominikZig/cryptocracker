import React from 'react';
import './App.css';

class FormInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showEncrypt: true,
            showDecrypt: false,
            plainTextData: "",
            value: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEncryptSubmit = this.handleEncryptSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    };

    handleEncryptSubmit = e => {
        e.preventDefault();

        this.setState({
            showEncrypt: false,
            showDecrypt: true
        });

        // this.state.inputValue = "Changed";
        alert('Your input: ' + this.state.value);
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
                    <div id={"inputBox"}><input className="input is-large inputBox" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter your message"/></div>
                    {/*<div id={"key"}><input className="input key" type="text" placeholder="Key"/></div>*/}
                    <input type="submit" value="Encrypt" className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}/>
            </form>
            <button onClick={this.handleDecryptSubmit} type="submit" className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </React.Fragment>
        )
    }
}

export default FormInput;