import React, { Component } from 'react'
import {EmailError} from '../errors/invlaidemail'
import {FieldError} from '../errors/filinfields'
import {InvalidPasswordError} from '../errors/invalidpassword'
import {UserExistsError} from '../errors/userExists'
import {PasswordNoMatchError} from '../errors/passwordnomatch'

export class ErrorView extends Component {
    constructor(props) {
        super(props)
    }

    RenderComponent(props){
        switch(props.info) {
            case "1": return <EmailError/> /* ERROR 1 InvalidEmailError*/
            case "2": return <FieldError/> /* ERROR 2 FillInFieldsError*/
            case "3": return <InvalidPasswordError/> /* ERROR 3 InvalidPasswordError*/
            case "4": return <UserExistsError/> /* ERROR 4 UserExistsError*/
            case "5": return <PasswordNoMatchError/> /* ERROR 5 PasswordNoMatchError*/
            default: return <></>
        }
    }

    render() {
        return (
            <>
                <this.RenderComponent info={this.props.error}/>
            </>
        );
    }
}