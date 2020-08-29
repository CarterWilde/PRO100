import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner, SpinnerSize , Text} from '@fluentui/react'
import {NoSearchResults} from './errors/noSearchResults'
import AdComp from '../components/adComp'
import Post from '../components/Post';
import { PasswordNoMatchError } from './errors/PasswordNoMatchError'

class PostComp extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let posts = []
        const postData = this.props.data.Posts;
        postData.sort((a,b) => a.Votes.Total - b.Votes.Total)
        if((postData[0]) && (postData[0].Content !== null && postData.length > 0)){
            for (let i = postData.length - 1; i >= 0; i--) {
                const post = postData[i];
                if ((i % 5 === 0) && (i !== postData.length - 1)) posts.push(<AdComp key={`ad${i}`} />)
                posts.push(<Post key={post._id} id={post._id} title={post.Title} price={`$${post.Price}`} descirption={post.Content} imageUrl={post.Image} username={post.PostedBy.Username} votes={post.Votes.Total} />)
            }
        }
        const displayPosts = (
            <div style={{ marginBottom: "50px", width: "100%", marginTop: "100px", display: "grid", alignItems: "center", justifyContent: "center", gridTemplateColumns: "1fr 1fr" }}>
                {posts}
            </div>
        )

        const loader = (
            <div style={{display:"flex", alignItems: "center", justifyContent: "center", width:"100%", height:"100vh"}}>
                <Spinner label="Posts loading..." size={SpinnerSize.large} />
            </div>
        )

        const noResults = (
            <div style={{display:"flex", alignItems: "center", justifyContent: "center", width:"100%", height:"100vh"}}>
                <p style={{padding:"10px", fontWeight:"bold", color:"white", height:"45px", backgroundColor:"red", borderRadius:"3px", textAlign:"center"}}>No posts matching search criteria. :(</p>
            </div>
        )

        return (
            <>
                {(postData.length === 0) ? loader : <>{(postData[0].Content !== null) ? displayPosts : noResults}</>}
            </>
        )
    }
}

export default connect(state => ({ ...state }))(PostComp);