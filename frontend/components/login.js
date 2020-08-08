import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        To Add Form Feilds for login.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Register</Button>
                    <Button variant="danger" onClick={this.props.onHide}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}