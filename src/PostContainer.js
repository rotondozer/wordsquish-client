import React, { Component } from 'react'
import axios from 'axios'

import Post from './Post.js'
import CreatePostForm from './CreatePostForm'

class PostContainer extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: [],
      createPost: false
    }
    this.getAllPosts = this.getAllPosts.bind(this)
  }

  componentWillMount () {
    this.getAllPosts()
  }

  getAllPosts () {
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

  showCreatePostForm = () => this.setState({ createPost: !this.state.createPost })

  render () {
    const createPostForm = (this.state.createPost) ? <CreatePostForm getAllPosts={this.getAllPosts} curUser={this.props.curUser} /> : ''

    const posts = this.state.posts.map((post, index) => <Post
      title={post.title}
      body={post.body}
      key={index}
    />)

    return (
      <div>
        <button onClick={this.showCreatePostForm}>Create POST</button>
        {createPostForm}
        <div> posts: {posts} </div>
      </div>
    )
  }
}

export default PostContainer
