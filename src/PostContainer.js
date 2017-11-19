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
    this.deletePost = this.deletePost.bind(this)
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

  deletePost (postId) {
    // Regex in the server will not process token unless it is
    // included in the header exactly like this
    console.log('token = ' + this.props.curUser.token)
    console.log('post id = ' + postId)
    axios({
      method: 'DELETE',
      url: `http://localhost:4741/posts/${postId}`,
      headers: {
        Authorization: 'Token token=' + this.props.curUser.token
      }
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  render () {
    const createPostForm = (this.state.createPost) ? <CreatePostForm getAllPosts={this.getAllPosts} curUser={this.props.curUser} /> : undefined

    const posts = this.state.posts.map((post, index) => <Post
      id={post._id}
      deletePost={this.deletePost}
      title={post.title}
      body={post.body}
      // Why not just make the key the id instead of index?
      key={index}
    />)

    return (
      <div>
        <button onClick={this.showCreatePostForm}>Create POST</button>
        {createPostForm}
        <h1>Posts</h1>
        <div>{posts}</div>
      </div>
    )
  }
}

export default PostContainer
