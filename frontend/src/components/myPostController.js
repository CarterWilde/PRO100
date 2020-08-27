import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton, imgProperties } from '@fluentui/react';
import { loggedIn, getPosts } from '../index';


export default class myPostController extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({ ...defaultState });
    }

    render() {
        return (
            <div>
                {/*
                 {this.props.data.hasUser && this.props.data.isLogged ? <DefaultButton text="Post" onClick={() => { this.setState({ show: true }) }} style={{ outline: 'none' }} /> : <></>}
                */}
                {/*
                 <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                */}
                 <Modal show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">My Posts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack horizontal horizontalAlign="space-around" tokens={{ childrenGap: 20 }}>
                           
                        </Stack>
                    </Modal.Body>
        
                </Modal>
            </div>
        )
    }
}