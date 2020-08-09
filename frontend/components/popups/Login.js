import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';

import axios from 'axios';
import shajs from "sha.js";

import {Stack, TextField, DefaultButton, PrimaryButton, ActionButton} from '@fluentui/react';
import {forgotIcon, iconMail, iconPass, emailNotValid} from "./SharedPopup";
import ErrorView from '../errors/ErrorView'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    LoginHandler = async () => {
        if (emailNotValid(this.email)) {
            if (!this.email || !this.pass) {
                return this.setState({ showFillInFieldsError: true })
            }
            return this.setState({ showInvalidEmailError: true })
        }
        //fetch here 
        const hashPass = shajs('sha256').update(this.pass).digest('hex');
        try {
            await axios.post('http://localhost:8080/login', { "Email": this.email.toLowerCase(), "Password": hashPass });
        } catch (error) {
            console.log(error);
        }
        console.log("EMAIL: ", this.email, ", PASS: ", this.pass)
    }

    render() {
        return (
            <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ErrorView/>
                    <Stack tokens={{childrenGap: 20}}>
                        <TextField onChange={(_, newValue) => { this.email = newValue;}} label="Email" iconProps={iconMail} />
                        <TextField onChange={(_, newValue) => { this.pass = newValue;}} type="password" label="Password" iconProps={iconPass} />
                    </Stack>
                    <ActionButton iconProps={forgotIcon} text="Forgot password? Click here." style={{ outline: 'none' }} onClick={() => { this.setState({ showPassForgot: !this.state.showPassForgot }); this.ResetVals(); this.ResetState() }} />
                </Modal.Body>
                <Modal.Footer>
                    <Stack horizontal tokens={{ childrenGap: 10, reversed: true }}>
                        <PrimaryButton text="Login" style={{ outline: 'none' }} onClick={() => this.LoginHandler()} />
                        <DefaultButton text="Register" style={{ outline: 'none' }} onClick={() => {}} />
                    </Stack>
                </Modal.Footer>
            </Modal>
        )
    }
}