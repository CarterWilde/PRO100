import React,{Component} from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import Login from './login'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {deps:[], addModalShow:false}
    }  

    render() {
        const {deps} = this.state
        let addModalClose = () => this.setState({addModalShow:false})

        return (
            <>
            <ButtonToolbar>
                <Button variant='primary' className='container' onClick={()=> this.setState({addModalShow:true})}>
                    Login
                </Button>
                <Login show={this.state.addModalShow} onHide={addModalClose}/>
            </ButtonToolbar>
            </>
        )
    }
}
