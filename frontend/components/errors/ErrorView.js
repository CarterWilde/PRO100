import React, { Component } from 'react'
import { Stack, TextField, DefaultButton, PrimaryButton, ActionButton, Label } from '@fluentui/react';

export default class ErrorView extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Stack horizontal>
                { this.props.showInvalidEmailError ? <EmailError/> : null}
                { this.props.showFillInFieldsError ? <FeildError/> : null}
                { this.props.showInvalidPasswordError ? <PasswordErrorInvalid/> : null}
                { this.props.showUserExistsError ? <UserExistsError/> : null}
                { this.props.showPasswordNoMatchError ? <PasswordNoMatchError/> : null}
            </Stack>
        );
    }
}