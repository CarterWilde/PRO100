import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, IconButton, Icon, PrimaryButton, ActionButton, Label } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { showPassForgot: false, showRegister: false }
    }


    render() {
        const stackTokens = { childrenGap: 20 }
        const iconMail = { iconName: 'Mail' }
        const iconPass = { iconName: 'PasswordField' }
        const forgotIcon = { iconName: 'Permissions' };
        const backIcon = { iconName: 'Back' }
        const inStackTokens = { childrenGap: 10, reversed: true }


        return (
            <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    {this.state.showPassForgot
                        ? <>
                        { this.state.showRegister
                            ? <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                            : <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
                        }
                          </>
                        : <Modal.Title id="contained-modal-title-vcenter">Reset Password</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    {this.state.showPassForgot
                        ? <Stack tokens={stackTokens}>
                            <TextField label="Email" iconProps={iconMail} />
                            <TextField id='field' type="password" label="Password" iconProps={iconPass} />
                          </Stack>
                        : <Stack>
                            <Label disabled>Enter email for password Reset.</Label>
                            <TextField label="Email" iconProps={iconMail} />
                          </Stack>
                    }
                    {this.state.showPassForgot
                        ? <ActionButton iconProps={forgotIcon} text="Forgot Password? Click Here." style={{ outline: 'none' }} onClick={() => this.setState({ showPassForgot: !this.state.showPassForgot })} />
                        : <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => this.setState({ showPassForgot: !this.state.showPassForgot })} />
                    }

                </Modal.Body>
                <Modal.Footer>
                    {this.state.showPassForgot
                        ? <Stack horizontal tokens={inStackTokens}>
                            <PrimaryButton text="Login" style={{ outline: 'none' }} />
                            <DefaultButton text="Register" style={{ outline: 'none' }} />
                          </Stack>
                        : <Stack horizontal tokens={inStackTokens}>
                            <PrimaryButton text="Send" style={{ outline: 'none' }} />
                          </Stack>
                    }

                </Modal.Footer>
            </Modal>
        )
    }
}