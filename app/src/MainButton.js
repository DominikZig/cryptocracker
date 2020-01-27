import React from 'react';
import {Component} from "react";

class MainButton extends Component {
    state = {
        showEncrypt: true,
        showDecrypt: false
    };

    hideEncrypt = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: false,
            showDecrypt: true
        });
    };

    hideDecrypt = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: true,
            showDecrypt: false
        });
    };



    render() {
        return (
            <form>
                <button onClick={this.hideEncrypt} className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}>Encrypt</button>
                <button onClick={this.hideDecrypt} className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </form>
        )
    }
}

export default MainButton;