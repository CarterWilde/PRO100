import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';
import {ErrorView} from '../errors/ErrorView';
import { Stack, TextField, PrimaryButton, ActionButton, Label } from '@fluentui/react';
import {iconMail, emailNotValid, backIcon} from "./SharedPopup";


export default class Reset extends Component {
    constructor(props) {
        super(props)
        this.state = {error: "0"}
    }

    ResetPassword = () => {
        if (emailNotValid(this.email)) {
            if (!this.email) {
                return this.setState({error: "2"})
            }
            return this.setState({error: "1"})
        }
        //fetch here 
        //set state of the invalid email if email deosnt exist in database
        console.log("EMAIL: ", this.email)
    }

    render() {
        return (
            <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Reset Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ErrorView error={this.state.error}/>
                    <Stack>
                        <Label disabled>Enter email for password reset.</Label>
                        <TextField label="Email" iconProps={iconMail} onChange={(_, newValue) => { this.email = newValue}} />
                    </Stack>
                    <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => {}} />
                </Modal.Body>
                <Modal.Footer>
                    <Stack horizontal tokens={{ childrenGap: 10, reversed: true }}>
                        <PrimaryButton text="Send" style={{ outline: 'none' }} onClick={() => this.ResetPassword()} />
                    </Stack>
                </Modal.Footer>
            </Modal>
        );
    }
}