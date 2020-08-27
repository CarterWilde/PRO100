import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner, SpinnerSize } from '@fluentui/react'

import AdComp from '../components/adComp'
import Post from '../components/Post';

class PostComp extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let posts = []
        const postData = this.props.data.Posts;
        console.log(postData.length)
        for (let i = postData.length - 1; i >= 0; i--) {
            const post = postData[i];
            if ((i % 5 === 0) && (i !== postData.length - 1)) posts.push(<AdComp key={`ad${i}`} />)
            posts.push(<Post key={post._id} title={post.Title} price={`$${post.Price}`} descirption={post.Content} imageUrl={post.Image} username={post.PostedBy.Username} votes={post.Votes.Total} />)
        }
        const displayPosts = (
            <div style={{ marginBottom: "50px", width: "100%", marginTop: "100px", display: "grid", alignItems: "center", justifyContent: "center", gridTemplateColumns: "1fr 1fr" }}>
                {posts}
            </div>
        )

        const loader = (
            <div style={{ marginBottom: "50px", width: "100%", marginTop: "100px", alignItems: "center", justifyContent: "center"}}>
                <Spinner label="Posts loading..." size={SpinnerSize.large} style={{ width: "100%" }} />
            </div>
        )

        return (
            <>
                {(postData.length === 0) ? loader : displayPosts}
            </>
        )
    }
}

export default connect(state => ({ ...state }))(PostComp);