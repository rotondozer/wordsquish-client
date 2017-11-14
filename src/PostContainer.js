import React, { Component } from 'react'
import Post from './Post.js'

import axios from 'axios'

class PostContainer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: []
    }
    this.createPost = this.createPost.bind(this)
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

  createPost () {
    console.log('create post', this.props.curUser.token)
  }

  render () {
    const posts = this.state.posts.map((post, index) => <Post
      title={post.title}
      body={post.body}
      key={index}
    />)

    return (
      <div>
        <button onClick={this.createPost}>Create POST</button>
        <div> posts: {posts} </div>
      </div>
    )
  }
}

export default PostContainer
