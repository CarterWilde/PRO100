import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton } from '@fluentui/react';
import { moneyIcon, titleIcon, imageIcon } from "./popups/SharedPopup";
import axios from "axios";

import Post from './Post';


export default class PostController extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            title: "Example",
            price: "100",
            descirption: "This is exmaple of what you want to tell the people who see ",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0XsKvLjkn5XZG9XP1S2FO0qQp8qO5E6HJ5w&usqp=CAU"
        }
    }

    handleClose = () => {
        this.setState({show: false,title: "Example",price: "$100",descirption: "This is exmaple of what you want to tell the people who see ",imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0XsKvLjkn5XZG9XP1S2FO0qQp8qO5E6HJ5w&usqp=CAU"});
    }

    render() {

        return (
            <div>
                <DefaultButton text="Post" onClick={() => { this.setState({ show: true }) }} style={{ outline: 'none' }} />
                <Modal show={this.state.show} onHide={this.handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack horizontal horizontalAlign="space-around" tokens={{ childrenGap: 20 }}>
                            <Stack verticalAlign="center" tokens={{ childrenGap: 20 }} style={{ width: "50%" }}>
                                <TextField onChange={(_, newValue) => { this.setState({ title: newValue }) }} maxlength="10" label="Title:" underlined iconProps={titleIcon} />
                                <TextField onChange={(_, newValue) => { this.setState({ price: newValue }) }} label="Price:" prefix='$' underlined iconProps={moneyIcon} /> {/* /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/ */}
                                <TextField onChange={(_, newValue) => { this.setState({ imageUrl: newValue }) }} label="Image Url:" underlined iconProps={imageIcon} />
                                <TextField onChange={(_, newValue) => { this.setState({ descirption: newValue }) }} label="Description" multiline resizable={false} style={{ height: "200px" }} />
                            </Stack>
                            <Stack verticalAlign="space-around" horizontalAlign="center" style={{ width: "50%" }}>
                                <Post title={this.state.title} price={this.state.price} descirption={this.state.descirption} imageUrl={this.state.imageUrl} />
                            </Stack>
                        </Stack>
                    </Modal.Body>
                    <Modal.Footer>
                        <PrimaryButton variant="outline-success" onClick={this.submitHandler} style={{ outline: 'none' }}>Post</PrimaryButton>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}