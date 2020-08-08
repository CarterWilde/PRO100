import React, { Component } from 'react'
import { Modal} from 'react-bootstrap'
import { Stack, TextField, DefaultButton } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const stackTokens = { childrenGap: 20 }
        const iconMail = { iconName: 'Mail' }
        const iconPass = { iconName: 'PasswordField' }
        const inStackTokens = { childrenGap: 10 }
        const buttonStyles = { root: { width: 25 } }

        return (
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack tokens={stackTokens}>
                        <TextField label="Email" iconProps={iconMail}/>
                        <Stack horizontal tokens={inStackTokens}>
                            <TextField type="password" label="Password" iconProps={iconPass}/>
                            <DefaultButton styles={buttonStyles}/>
                        </Stack>
                    </Stack>


                    {/* <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="outline-success mr-1" onClick={this.props.onHide}>
                            Submit
                        </Button>
                        <Button variant="outline-secondary" onClick={this.props.onHide}>
                            Register
                        </Button>
                    </Form> */}
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}