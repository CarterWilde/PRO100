import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { PrimaryButton } from 'office-ui-fabric-react';
import axios from 'axios';

import Login from './popups/Login';
import Register from './popups/Register';
import Reset from './popups/Reset';

import { loggedIn } from '../index';


class PopUpController extends Component {
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
        this.setState({ show: false });
    }

    handleExited = () => {
        this.setState({ showLogin: true, showRegister: false, showReset: false });
    }

    render() {
        return (
            <div>
                {!this.props.data.hasUser && !this.props.data.isLogged ? <PrimaryButton text="Login" onClick={() => { this.setState({ show: true }) }} style={{ outline: 'none' }} /> : <PrimaryButton text="Logout" onClick={() => { axios.get("http://localhost:8080/logout", { withCredentials: true }).then(() => { loggedIn() }) }}></PrimaryButton>}
                <Modal show={this.state.show} onHide={this.handleClose} onExited={this.handleExited} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
                    {this.state.showLogin ? <Login showRegister={this.showRegister} showReset={this.showReset} closePrompt={() => { this.handleClose(); this.setState({ showLogin: false }) }} /> : null}
                    {this.state.showRegister ? <Register backToLogin={this.showLogin} closePrompt={() => { this.handleClose(); this.setState({ showRegister: false }) }} /> : null}
                    {this.state.showReset ? <Reset backToLogin={this.showLogin} closePrompt={() => { this.handleClose(); this.setState({ showReset: false }) }} /> : null}
                </Modal>
            </div>
        );
    }
}

export default connect((state) => ({ ...state }))(PopUpController);