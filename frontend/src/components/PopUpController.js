import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';
import {PrimaryButton} from 'office-ui-fabric-react';
import Login from './popups/Login'
import Register from './popups/Register'
import Reset from './popups/Reset'

export default class PopUpController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            showRegister: false,
            showReset: false,
            show: false
        }
    }

    showLogin = () => {
        this.setState({ showLogin: true, showRegister: false, showReset: false });
    }

    showRegister = () => {
        this.setState({ showLogin: false, showRegister: true, showReset: false });
    }

    showReset = () => {
        this.setState({ showLogin: false, showRegister: false, showReset: true });
    }

    handleClose = () => {
        this.setState({show: false});
    }

    handleExited = () => {
        this.setState({ showLogin: true, showRegister: false, showReset: false });
    }

    render() {
        return (
            <div>
                <PrimaryButton text="Login" onClick={() => {this.setState({show: true})}} style={{ outline: 'none' }}/>
                <Modal show={this.state.show} onHide={this.handleClose} onExited={this.handleExited} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
                    {this.state.showLogin ? <Login showRegister={this.showRegister} showReset={this.showReset} closePrompt={() => {this.handleClose(); this.setState({showLogin: false})}}/> : null}
                    {this.state.showRegister ? <Register backToLogin={this.showLogin} closePrompt={() => {this.handleClose(); this.setState({showRegister: false})}}/> : null}
                    {this.state.showReset ? <Reset backToLogin={this.showLogin} closePrompt={() => {this.handleClose(); this.setState({showReset: false})}}/> : null}
                </Modal>
            </div>
        );
    }
}