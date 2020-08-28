import React, { Component } from 'react'
//import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { SearchBox, PrimaryButton, Stack } from '@fluentui/react';
import PopUpController from './PopUpController'
import PostController from './PostController'
import Logo from "../public/images/logo.png"
import MyPostController from './myPostController'
import {searchPosts, loggedIn, getPosts} from '../index'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {addLoginModal: false, addPostModal: false}
    }

    SearchForPosts = (val) => {
        this.setSearch(val)
        if (this.search === "") getPosts()
        else {
            if(searchPosts(val) === -1) {
                
            }
        }
    }

    setSearch = (val) => { this.search = val }

    render() {
        let closeLoginModal = () => this.setState({ addLoginModal: false })
        let closePostModal = () => this.setState({ addPostModal: false })
        const stackTokens = { childrenGap: 10 };
        const searchBoxStyles = { root: { width: 200 } }
    
        return (
            <>
                <div className="nav-bar">
                    <div className="left nav-col"><img className="img" src={Logo} /></div>
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
                            <MyPostController/>
                            <PostController/>
                            <PopUpController/>
                        </Stack>
                    </div>
                </div>
            </>
        )
    }
}
