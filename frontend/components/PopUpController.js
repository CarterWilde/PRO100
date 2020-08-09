import React, { Component } from 'react'

import Login from './popups/Login'
import Register from './popups/Register'
import Reset from './popups/Reset'

export default class PopUpController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            showRegister: false,
            showReset: false
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.showLogin !== prevProps.showLogin) this.setState({showLogin: this.props.showLogin});
        if(this.props.showRegister !== prevProps.showRegister) this.setState({showRegister: this.props.showRegister});
        if(this.props.showReset !== prevProps.showReset) this.setState({showReset: this.props.showReset});
    }

    render() {
        return (
            <div>
                {this.state.showLogin ? <Login {...this.props}></Login>: null}
                {this.state.showRegister ? <Register {...this.props}></Register>: null}
                {this.state.showReset ? <Reset {...this.props}></Reset>: null}
            </div>
        );
    }
}