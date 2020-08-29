import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton, imgProperties } from '@fluentui/react';
import { loggedIn, getPosts } from '../index';
import axios from 'axios';


export default class myPostController extends Component  {
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
        {/*
        const postData = this.props.data.Posts;
        if((postData[0]) && (postData[0].Content !== null && postData.length > 0)){
            for (let i = postData.length - 1; i >= 0; i--) 
            {
                const post = postData[i];
            }
        }
           */}
        return (
            
            <div>
                {/*
                 {this.props.data.hasUser && this.props.data.isLogged ? <DefaultButton text="Post" onClick={() => { this.setState({ show: true }) }} style={{ outline: 'none' }} /> : <></>}
                 <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                */}

                <DefaultButton text="My Post" onClick={() => { this.setState({ show: true }) }} style={{ outline: 'none' }}/>
                 <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">My Posts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack horizontal horizontalAlign="space-around" tokens={{ childrenGap: 20 }}>
                            sample data
                            {this.getPost().catch} 
                                 
                        </Stack>
                    </Modal.Body>
        
                </Modal>
            </div>
        )
    }
}