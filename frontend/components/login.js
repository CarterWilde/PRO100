import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, PrimaryButton, ActionButton, Label } from '@fluentui/react';
import {EmailError} from './popups-errors/invlaidemail'
import {FeildError} from './popups-errors/filinfields'
import {PasswordErrorInvalid} from './popups-errors/invalidpassword'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            showPassForgot: false, 
            showRegister: false, 
            showInvalidEmailError: false,
            showFillInFieldsError: false,
            showInvalidPasswordError: false
         }
    }

    ResetState = () => {
        this.setState({showFillInFieldsError:false, showInvalidEmailError:false})
    }

    

    render() {
        const stackTokens = { childrenGap: 20 }
        const iconMail = { iconName: 'Mail' }
        const iconPass = { iconName: 'PasswordField' }
        const forgotIcon = { iconName: 'Permissions' };
        const backIcon = { iconName: 'Back' }
        const inStackTokens = { childrenGap: 10, reversed: true }
        const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)

        const Login = () => {
            this.ResetState()
            if(!emailValid){
                if(!this.email || !this.pass) {
                   return this.setState({showFillInFieldsError:true})
                }
                return this.setState({showInvalidEmailError:true})
            }
            //fetch here 
            //set state of the invalid password if passwords dont match 
            console.log("EMAIL: ", this.email, ", PASS: ", this.pass)
        }
        

        return (
            <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered onExited={() => this.setState({ showPassForgot: false, showRegister: false, showInvalidEmailError: false, showFillInFieldsError: false})}>
                <Modal.Header closeButton>
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
                                : <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
                            }
                          </>
                        : <Modal.Title id="contained-modal-title-vcenter">Reset Password</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <Stack horizontal>
                        { this.state.showInvalidEmailError ? <EmailError/> : null}
                        { this.state.showFillInFieldsError ? <FeildError/> : null}
                        { this.state.showInvalidPasswordError ? <PasswordErrorInvalid/> : null}
                    </Stack>
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <Stack tokens={stackTokens}>
                                    <TextField onChange={(_, newValue) => {this.email = newValue; this.ResetState()}} label="Email" iconProps={iconMail} />
                                    <TextField onChange={(_, newValue) => {this.pass = newValue; this.ResetState()}} type="password" label="Password" iconProps={iconPass} />
                                </Stack>
                                : <Stack tokens={stackTokens}>
                                    <TextField label="Email" iconProps={iconMail} />
                                    <TextField type="password" label="Password" iconProps={iconPass} />
                                    <TextField type="password" label="Verify password" iconProps={iconPass} />
                                </Stack>
                            }
                          </>
                        : <Stack>
                            <Label disabled>Enter email for password reset.</Label>
                            <TextField label="Email" iconProps={iconMail} />
                          </Stack>
                    }
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <ActionButton iconProps={forgotIcon} text="Forgot Password? Click here." style={{ outline: 'none' }} onClick={() => this.setState({ showPassForgot: !this.state.showPassForgot })} />
                                : <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => this.setState({ showRegister: !this.state.showRegister})} />
                            }
                          </>
                        : <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => this.setState({ showPassForgot: !this.state.showPassForgot })} />
                    }

                </Modal.Body>
                <Modal.Footer>
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <Stack horizontal tokens={inStackTokens}>
                                    <PrimaryButton text="Login" style={{ outline: 'none' }} onClick={() => Login()}/>
                                    <DefaultButton text="Register" style={{ outline: 'none' }} onClick={() => this.setState({showRegister: !this.state.showRegister})}/>
                                  </Stack>
                                : <Stack horizontal tokens={inStackTokens}>
                                    <PrimaryButton text="Register" style={{ outline: 'none' }} />
                                  </Stack>
                            }
                          </>
                        : <Stack horizontal tokens={inStackTokens}>
                            <PrimaryButton text="Send" style={{ outline: 'none' }} />
                          </Stack>
                    }
                </Modal.Footer>
            </Modal>
        )
    }
}