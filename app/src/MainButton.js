import React from 'react';
import {Component} from "react";

class MainButton extends Component {
    state = {
        showEncrypt: true,
        showDecrypt: false
    };

    showEncrypt = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: false,
            showDecrypt: true
        });
    };

    showDecrypt = e => {
        e.preventDefault();
        this.setState({
            showEncrypt: true,
            showDecrypt: false
        });
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.showEncrypt} className="button is-success" style={{ display : this.state.showEncrypt ? "" : "none"}}>Encrypt</button>
                <button onClick={this.showDecrypt} className="button is-danger" style={{ display : this.state.showDecrypt ? "" : "none"}}>Decrypt</button>
            </React.Fragment>
        )
    }
}

export default MainButton;