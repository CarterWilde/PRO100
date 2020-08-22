import { Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import { Stack, TextField, PrimaryButton, ActionButton } from '@fluentui/react';
import {iconUser, iconMail, iconPass, emailNotValid, backIcon} from "./SharedPopup";
import {ErrorView} from '../errors/ErrorView'
import shajs from "sha.js";
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {error: "0"}
    }

    RegisterHandler = async () => {
        if (!this.email || !this.username || !this.pass || !this.veriPass) {
            return this.setState({error: "2"})
        }
        else {
            if (emailNotValid(this.email)) {
                return this.setState({error: "1"})
            }
            if (this.pass !== this.veriPass) {
                return this.setState({error: "5"})
            }
        }
        const hashPass = shajs('sha256').update(this.pass).digest('hex');
        //fetch here 
        try {
            const res = await axios.post("http://localhost:8080/createuser", {}, {
                headers: {
                    "new-user-object": JSON.stringify({
                        "Username": this.username,
                        "Email": this.email,
                        "Password": hashPass
                    })
                }
            })
            const status = res.data.Status;
            if(status.FailureCode) {
                this.setState({error: "4"});
            } else {
                this.props.closePrompt();
            }
            
        } catch(err) {
            console.log("Couldn't Create User Request Error", err)
        }
    }
    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ErrorView error={this.state.error}/>
                    <Stack tokens={{childrenGap: 20}}>
                        <TextField label="Email" iconProps={iconMail} onChange={(_, newValue) => { this.email = newValue}} />
                        <TextField label="Username" iconProps={iconUser} onChange={(_, newValue) => { this.username = newValue}} />
                        <TextField type="password" label="Password" iconProps={iconPass} onChange={(_, newValue) => { this.pass = newValue }} />
                        <TextField type="password" label="Verify password" iconProps={iconPass} onChange={(_, newValue) => { this.veriPass = newValue}} />
                    </Stack>
                    <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => {this.props.backToLogin()}} />
                </Modal.Body>
                <Modal.Footer>
                    <Stack horizontal tokens={{ childrenGap: 10, reversed: true }}>
                        <PrimaryButton text="Register" style={{ outline: 'none' }} onClick={() => this.RegisterHandler()} />
                    </Stack>
                </Modal.Footer>
            </div>
        )
    }
}