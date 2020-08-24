import React, { Component } from 'react'
import {connect} from 'react-redux'

import AdComp from '../components/adComp'
import Post from '../components/Post';

class PostComp extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let posts = []

        const postData = this.props.data.Posts;

        for(let i = postData.length - 1; i >= 0; i--) {
            const post = postData[i];
            if((i % 3 === 0) && (i !== postData.length - 1)) posts.push(<AdComp key={`ad${i}`}/>)
            posts.push(<Post key={post._id} title={post.Title} price={`$${post.Price}`} descirption={post.Content} imageUrl={post.Image} username={post.PostedBy.Username} votes={post.Votes.Total}/>)
        }

        return (
            <div style={{marginBottom:"50px", width:"100%", marginTop:"100px", display:"grid", alignItems:"center", justifyContent: "center", gridTemplateColumns: "1fr 1fr"}}>
                {posts}
            </div>
        )
    }
}

export default connect(state => ({...state}))(PostComp);