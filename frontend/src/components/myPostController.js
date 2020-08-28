import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton, imgProperties } from '@fluentui/react';
import { loggedIn, getPosts } from '../index';
import axios from 'axios'


class myPostController extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            show: false

        }
    }

    handleClose = () => {
        this.setState({ show: false });
    }
   
    getPost = async () => 
    {
        return await (await axios.get("http://localhost:8080/posts")).data;
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
                {this.props.data.hasUser && this.props.data.isLogged ? <DefaultButton text="My Post" onClick={() => { this.setState({ show: true }) }} style={{ outline: 'none' }}/> : null}
                 <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">My Posts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack horizontal horizontalAlign="space-around" tokens={{ childrenGap: 20 }}>
                            {this.getPost()}      
                        </Stack>
                    </Modal.Body>
        
                </Modal>
            </div>
        )
    }
}

export default connect((state) => ({ ...state }))(myPostController);