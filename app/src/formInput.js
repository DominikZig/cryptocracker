import React, {useEffect, useState} from 'react';
import {Component} from "react";
import './App.css';

class FormInput extends Component {

    state = {
        showEncrypt: true,
        showDecrypt: false,
        plainTextData: "",
        placeholder: "Enter your message",
    };

    handleEncryptSubmit = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: false,
            showDecrypt: true
        });

        this.state.placeholder = "Test";
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
            <form onSubmit={this.handleEncryptSubmit}>
                    <div id={"inputBox"}><input className="input is-large inputBox" type="text" placeholder={this.state.placeholder}/></div>
                    <div id={"key"}><input className="input key" type="text" placeholder="Key"/></div>
                    <button onClick={this.handleEncryptSubmit} type="submit" className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}>Encrypt</button>
                    <button onClick={this.handleDecryptSubmit} type="submit" className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </form>
        )
    }
}

export default FormInput;