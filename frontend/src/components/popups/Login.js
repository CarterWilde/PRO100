import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import shajs from "sha.js";

import { Stack, TextField, DefaultButton, PrimaryButton, ActionButton } from '@fluentui/react';
import { forgotIcon, iconMail, iconPass, emailNotValid } from "./SharedPopup";
import { ErrorView } from '../errors/ErrorView'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: "0",
            comp: "login",
            email: "",
            pass: ""
        }
    }

    LoginHandler = async () => {
        if (emailNotValid(this.state.email)) {
            if (!this.state.email || !this.state.pass) {
                return this.setState({ error: "2" })
            }
            return this.setState({ error: "1" })
        }
        //fetch here 
        const hashPass = shajs('sha256').update(this.state.pass).digest('hex');
        try {
            const login = await (await axios.post('http://localhost:8080/login', { "Email": this.state.email.toLowerCase(), "Password": hashPass }, { withCredentials: true })).data;
            this.props.dispatch({ type: 'STORE_USER', data: { User: login.User } });
            this.props.closePrompt();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ErrorView error={this.state.error} />
                    <Stack tokens={{ childrenGap: 20 }}>
                        <TextField onChange={(_, newValue) => { this.setState({email: newValue})}} label="Email" iconProps={iconMail} />
                        <TextField onChange={(_, newValue) => { this.setState({pass: newValue})}} type="password" label="Password" iconProps={iconPass} />
                    </Stack>
                    <ActionButton iconProps={forgotIcon} text="Forgot password? Click here." style={{ outline: 'none' }} onClick={() => { this.props.showReset() }} />
                </Modal.Body>
                <Modal.Footer>
                    <Stack horizontal tokens={{ childrenGap: 10, reversed: true }}>
                        <PrimaryButton text="Login" style={{ outline: 'none' }} onClick={() => this.LoginHandler()} />
                        <DefaultButton text="Register" style={{ outline: 'none' }} onClick={() => this.props.showRegister()} />
                    </Stack>
                </Modal.Footer>
            </div>
        )
    }
}

export default connect()(Login);