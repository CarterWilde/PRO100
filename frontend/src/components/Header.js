import React, { Component } from 'react'
//import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { SearchBox, PrimaryButton, Stack } from '@fluentui/react';
import PopUpController from './PopUpController'
import PostController from './PostController'
import Logo from "../public/images/logo.png"


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {addLoginModal: false, addPostModal: false}
    }

    //As of now, search anything as 4 results and 1 ad will populate
    SearchForPosts = (val) => {
        this.setSearch(val)
        console.log("SEARCH: ", this.search)
        //Fetch and display results
        if (this.search === "") {
            this.props.setJSON(null)
        }
        else {
            this.props.setJSON({
                "search": ["this is a list of json elements", "more data", "even more data", "some more"]
            })
        }
        
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
                            <PostController/>
                            <PopUpController/>
                        </Stack>
                    </div>
                </div>
            </>
        )
    }
}
