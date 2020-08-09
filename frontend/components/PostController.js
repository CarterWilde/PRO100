import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton, ActionButton, DefaultPalette } from '@fluentui/react';
import {moneyIcon, titleIcon} from "./popups/SharedPopup";
import {Post} from "../components/Post"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({show: false});
    }

    render() {

        return (
            <div>
                <DefaultButton text="Post" onClick={() => {this.setState({show: true})}} style={{ outline: 'none' }}/>
                <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack horizontal horizontalAlign="space-around"  tokens={{childrenGap: 20}}>
                            <Stack verticalAlign="center" tokens={{childrenGap: 20}} style={{width:"50%"}}>
                                <TextField label="Title:" underlined iconProps={titleIcon}/>
                                <TextField label="Price:" prefix='$' underlined iconProps={moneyIcon}/> {/* /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/ */}
                                <TextField label="Description" multiline resizable={false} style={{height:"200px"}}/>
                            </Stack>
                            <Stack verticalAlign="space-around" horizontalAlign="center" style={{width:"50%"}}>
                              <Post/> 
                            </Stack>
                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <PrimaryButton variant="outline-success" onClick={() => {}} style={{ outline: 'none' }}>Post</PrimaryButton>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}