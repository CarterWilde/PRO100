import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Stack, TextField, DefaultButton, PrimaryButton, ActionButton, Label } from '@fluentui/react';
import axios from 'axios';
import shajs from "sha.js";

import ErrorView from './errors/ErrorView'

import Login from "./popups/Login";
import Register from './popups/Register'
import Reset from './popups/Reset'

export default class PopUpController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassForgot: false,
            showRegister: false,
            showInvalidEmailError: false,
            showFillInFieldsError: false,
            showInvalidPasswordError: false,
            showUserExistsError: false,
            showPasswordNoMatchError: false
        }
    }

    ResetState = () => {
        this.setState({
            showInvalidEmailError: false,
            showFillInFieldsError: false,
            showInvalidPasswordError: false,
            showUserExistsError: false,
            showPasswordNoMatchError: false
        })
    }

    ResetVals = () => {
        this.email = undefined
        this.pass = undefined
    }

    render() {

        return (
            <Login  {...this.props}></Login>
            // <Register {...this.props}></Register>
            // <Reset {...this.props}></Reset>
        )
    }
}