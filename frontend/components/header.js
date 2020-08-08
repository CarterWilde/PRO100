import React, { Component } from 'react'
import { Button, ButtonToolbar, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import Login from './login'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [], addModalShow: false }
    }

    SearchForPosts = () =>{
        // fetch and display posts 
    }

    render() {
        const { deps } = this.state
        let addModalClose = () => this.setState({ addModalShow: false })

        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Ripple</Navbar.Brand>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <ButtonToolbar inline>
                        <Button variant='primary' className='container' onClick={() => this.setState({ addModalShow: true })}>
                            Login
                        </Button>
                        <Login show={this.state.addModalShow} onHide={addModalClose} />
                    </ButtonToolbar>
                </Navbar>

            </>
        )
    }
}
