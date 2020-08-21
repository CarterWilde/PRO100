import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';

import axios from 'axios';
import shajs from "sha.js";

import {Stack, TextField, DefaultButton, PrimaryButton, ActionButton} from '@fluentui/react';
import {forgotIcon, iconMail, iconPass, emailNotValid} from "./SharedPopup";
import {ErrorView} from '../errors/ErrorView'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {error: "0", comp: "login"}
    }

    LoginHandler = async () => {
        if (emailNotValid(this.email)) {
            if (!this.email || !this.pass) {
                return this.setState({error:"2"})
            }
            return this.setState({error: "1"})
        }
        //fetch here 
        const hashPass = shajs('sha256').update(this.pass).digest('hex');
        var login = null
        try {
            login = await (await axios.post('http://localhost:8080/login', { "Email": this.email.toLowerCase(), "Password": hashPass })).data;
            sessionStorage.setItem("user", JSON.stringify(login.User));
            this.props.closePrompt();
        } catch (error) {
            console.log(error);
        }
        console.log("EMAIL: ", this.email, ", PASS: ", this.pass)
    }

    render() {

        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ErrorView error={this.state.error}/>
                    <Stack tokens={{childrenGap: 20}}>
                        <TextField onChange={(_, newValue) => { this.email = newValue;}} label="Email" iconProps={iconMail}/>
                        <TextField onChange={(_, newValue) => { this.pass = newValue;}} type="password" label="Password" iconProps={iconPass} />
                    </Stack>
                    <ActionButton iconProps={forgotIcon} text="Forgot password? Click here." style={{ outline: 'none' }} onClick={() => {this.props.showReset()}} />
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