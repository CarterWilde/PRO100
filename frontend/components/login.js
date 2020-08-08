import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, MessageBar, MessageBarType, MessageBarButton, PrimaryButton, ActionButton, Label } from '@fluentui/react';
import {EmailError} from './popups-errors/invlaidemail'
import {FeildError} from './popups-errors/filinfields'
import {PasswordErrorInvalid} from './popups-errors/invalidpassword'
import {UserExistsError} from './popups-errors/userExists'
import {PasswordNoMatchError} from './popups-errors/passwordnomatch'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            showPassForgot: false, 
            showRegister: false, 
            showInvalidEmailError: false,
            showFillInFieldsError: false,
            showInvalidPasswordError: false,
            showUserExistsError:false,
            showPasswordNoMatchError:false
         }
    }

    ResetState = () => {
        this.setState({  
            showInvalidEmailError: false,
            showFillInFieldsError: false,
            showInvalidPasswordError: false,
            showUserExistsError:false,
            showPasswordNoMatchError:false
         })
    }

    ResetVals = () => {
        this.email = undefined
        this.pass = undefined
    }

    render() {
        const stackTokens = { childrenGap: 20 }
        const iconMail = { iconName: 'Mail' }
        const iconUser = { iconName: 'Contact' }
        const iconPass = { iconName: 'PasswordField' }
        const forgotIcon = { iconName: 'Permissions' };
        const backIcon = { iconName: 'Back' }
        const inStackTokens = { childrenGap: 10, reversed: true }
        const emailNotValid = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)

        const Login = () => {
            this.ResetState()
            if(emailNotValid){
                if(!this.email || !this.pass) {
                   return this.setState({showFillInFieldsError:true})
                }
                return this.setState({showInvalidEmailError:true})
            }
            //fetch here 
            //set state of the user already exists if user exists  
            //set state of the invalid password if passwords dont match 
            console.log("EMAIL: ", this.email, ", PASS: ", this.pass)
        }

        const ResetPassword = () => {
            this.ResetState()
            if(emailNotValid) {
                if(!this.email) {
                    return this.setState({showFillInFieldsError:true})
                }
                return this.setState({showInvalidEmailError:true})
            }
            //fetch here 
            //set state of the invalid email if email deosnt exist in database
            console.log("EMAIL: ", this.email)
        }
        
        const Register = () => {
            this.ResetState()
            console.log("EMAIL: ", this.email, ", USERNAME: ", this.username, ", PASS: ", this.pass, ", VERI: ", this.veriPass)
            if(emailNotValid) {
                if(!this.email || !this.username || !this.pass || !this.veriPass) {
                    return this.setState({showFillInFieldsError:true})
                }
                if(!(this.pass === this.veriPass)) {
                    return this.setState({showPasswordNoMatchError:true})
                }
                return this.setState({showInvalidEmailError:true})
            }
            //fetch here 
            //set state of the user exists if email exists in database
            console.log("EMAIL: ", this.email, ", USERNAME: ", this.username, ", PASS: ", this.pass)
        }

        return (
            <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered onExited={() => {this.setState({ showPassForgot: false, showRegister: false}); this.ResetState()}}>
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
                        { this.state.showUserExistsError ? <UserExistsError/> : null}
                        { this.state.showPasswordNoMatchError ? <PasswordNoMatchError/> : null}
                    </Stack>
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <Stack tokens={stackTokens}>
                                    <TextField onChange={(_, newValue) => {this.email = newValue; this.ResetState()}} label="Email" iconProps={iconMail} />
                                    <TextField onChange={(_, newValue) => {this.pass = newValue; this.ResetState()}} type="password" label="Password" iconProps={iconPass} />
                                </Stack>
                                : <Stack tokens={stackTokens}>
                                    <TextField label="Email" iconProps={iconMail} onChange={(_, newValue) => {this.email = newValue; this.ResetState()}}/>
                                    <TextField label="Username" iconProps={iconUser} onChange={(_, newValue) => {this.username = newValue; this.ResetState()}}/>
                                    <TextField type="password" label="Password" iconProps={iconPass} onChange={(_, newValue) => {this.pass = newValue; this.ResetState()}}/>
                                    <TextField type="password" label="Verify password" iconProps={iconPass} onChange={(_, newValue) => {this.veriPass = newValue; this.ResetState()}}/>
                                </Stack>
                            }
                          </>
                        : <Stack>
                            <Label disabled>Enter email for password reset.</Label>
                            <TextField label="Email" iconProps={iconMail} onChange={(_, newValue) => {this.email = newValue; this.ResetState()}}/>
                          </Stack>
                    }
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <ActionButton iconProps={forgotIcon} text="Forgot password? Click here." style={{ outline: 'none' }} onClick={() => {this.setState({ showPassForgot: !this.state.showPassForgot }); this.ResetVals(); this.ResetState()}} />
                                : <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => {this.setState({ showRegister: !this.state.showRegister}); this.ResetVals(); this.ResetState()}} />
                            }
                          </>
                        : <ActionButton iconProps={backIcon} text="Back" style={{ outline: 'none' }} onClick={() => {this.setState({ showPassForgot: !this.state.showPassForgot }); this.ResetVals(); this.ResetState()}} />
                    }

                </Modal.Body>
                <Modal.Footer>
                    { !this.state.showPassForgot
                        ? <>
                            { !this.state.showRegister
                                ? <Stack horizontal tokens={inStackTokens}>
                                    <PrimaryButton text="Login" style={{ outline: 'none' }} onClick={() => Login()}/>
                                    <DefaultButton text="Register" style={{ outline: 'none' }} onClick={() => {this.setState({showRegister: !this.state.showRegister}); this.ResetVals()}}/>
                                  </Stack>
                                : <Stack horizontal tokens={inStackTokens}>
                                    <PrimaryButton text="Register" style={{ outline: 'none' }} onClick={() => Register()}/>
                                  </Stack>
                            }
                          </>
                        : <Stack horizontal tokens={inStackTokens}>
                            <PrimaryButton text="Send" style={{ outline: 'none' }} onClick={() => ResetPassword()}/>
                          </Stack>
                    }
                </Modal.Footer>
            </Modal>
        )
    }
}