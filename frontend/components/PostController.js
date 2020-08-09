import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton, ActionButton, DefaultPalette } from '@fluentui/react';
import {moneyIcon, titleIcon} from "./popups/SharedPopup";

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const itemStyles = {
            alignItems: 'center',
            background: DefaultPalette.themePrimary,
            color: DefaultPalette.white,
            display: 'flex',
            height: 100,
            justifyContent: 'center',
            width: 100,
        };
        

        return (
            <Modal {...this.props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack horizontal horizontalAlign="space-around"  tokens={{childrenGap: 20}}>
                        <Stack verticalAlign="center" tokens={{childrenGap: 20}} style={{width:"50%"}}>
                            <TextField label="Title:" underlined iconProps={titleIcon}/>
                            <TextField label="Price:" underlined iconProps={moneyIcon}/>
                            <TextField label="Description" multiline resizable={false} style={{height:"200px"}}/>
                        </Stack>
                        <Stack verticalAlign="space-around" horizontalAlign="center" style={{width:"50%"}}>
                            Post component goes here
                        </Stack>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <PrimaryButton variant="outline-success" onClick={this.props.onHide} style={{ outline: 'none' }}>Post</PrimaryButton>
                </Modal.Footer>
            </Modal>
        )
    }
}