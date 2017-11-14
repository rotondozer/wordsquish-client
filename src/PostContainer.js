import React, { Component } from 'react'
import Post from './Post.js'

import axios from 'axios'

class PostContainer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      author: 'Nick',
      body: 'body',
      posts: []
    }
  }

  componentWillMount () {
    axios({
      url: 'http://localhost:4741/posts',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => {
        this.setState({
          posts: response.data.posts
        })
        console.log(this.state.posts)
      })
      .catch((err) => console.log(err))
  }

  render () {
    const posts = this.state.posts.map((post, index) => <Post
      title={post.title}
      body={post.body}
      key={index}
    />)

    return (
      <div> posts: {posts} </div>
    )
  }
}

export default PostContainer
