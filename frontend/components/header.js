import React, { Component } from 'react'
import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { SearchBox } from '@fluentui/react';
import Login from './login'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {addModalShow: false}
    }

    SearchForPosts = (val) => {
        this.setSearch(val)
        console.log("SEARCH: ", this.search)
        //Fetch and display results
    }

    setSearch = (val) => { 
        this.search = val
        console.log(this.search)
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        const stackTokens = { childrenGap: 10 };
        const searchBoxStyles = { root: { width: 200 } }
    
        return (
            <>
                <div className="nav-bar">
                    <div className="left nav-col"><img className="img" src="/images/logo.png" /></div>
                    <div className="center nav-col">
                        <Stack horizontal tokens={stackTokens}>
                            <SearchBox id="ser" styles={searchBoxStyles} placeholder="Search"
                                onEscape={() => {}}
                                onClear={() => {this.setSearch("")}}
                                onChange={(_, newValue) => this.setSearch(newValue)}
                                onSearch={newValue => this.SearchForPosts(newValue)}
                            />
                            <PrimaryButton text="Search" onClick={() => this.SearchForPosts(document.getElementById('ser').value)} style={{ outline: 'none' }} />
                        </Stack>
                    </div>
                    <div className="right nav-col">
                        <Stack horizontal tokens={stackTokens}>
                            <DefaultButton text="Post" onClick={() => this.setState({ addModalShow: true })} style={{ outline: 'none' }}/>
                            <PrimaryButton text="Login" onClick={() => this.setState({ addModalShow: true })} style={{ outline: 'none' }}/>
                            <Login show={this.state.addModalShow} onHide={addModalClose} />
                        </Stack>
                    </div>
                </div>
            </>
        )
    }
}
