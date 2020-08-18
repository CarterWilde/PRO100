import React, { Component } from 'react'
import { Stack, TextField, DefaultButton, PrimaryButton, DefaultPalette } from '@fluentui/react';
import AdComp from '../components/adComp'
import Post from '../components/Post';

export default class PostComp extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const posts = []
        if(!this.props.JSON) {
            //query databse to return all posts
            console.log("query database for all results")
        }
        else {
            for(var i=0;i<this.props.JSON.search.length;i++){
                if((i % 3 === 0) && (i !== 0)) { posts.push(<AdComp key={`ad${i}`}/>) }
                posts.push(<Post key={`post${i}`} elements={this.props.JSON.search[i]}/>)
            }
        }
        return (
            <>
            {posts}
            </>
        )
    }
}