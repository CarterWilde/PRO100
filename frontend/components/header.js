import React, { Component } from 'react'
import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { SearchBox } from '@fluentui/react';
import PopUpController from './PopUpController'
import Post from './post'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {addLoginModal: false, addPostModal: false}
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
        let closeLoginModal = () => this.setState({ addLoginModal: false })
        let closePostModal = () => this.setState({ addPostModal: false })
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
                            <DefaultButton text="Post" onClick={() => this.setState({ addPostModal: true })} style={{ outline: 'none' }}/>
                            <PopUpController></PopUpController>
                            <Post show={this.state.addPostModal} onHide={closePostModal} />
                        </Stack>
                    </div>
                </div>
            </>
        )
    }
}
