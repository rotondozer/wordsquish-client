import React, { Component } from 'react'
import axios from 'axios'

import Post from './Post.js'
import CreatePostForm from './CreatePostForm'

class MyPosts extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: [],
      createPost: false
    }
    this.getMyPosts = this.getMyPosts.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentWillMount () {
    this.getMyPosts()
  }

  getMyPosts () {
    // set user in container to avoid having to pass user info as argument
    // each time the function is called
    const user = this.props.curUser
    axios({
      url: `http://localhost:4741/posts/${user._id}/my_posts`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Token token=${user.token}`
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
      .then(this.getMyPosts)
      .catch((err) => console.log(err))
  }

  render () {
    const createPostForm = (this.state.createPost) ? <CreatePostForm getMyPosts={this.getMyPosts} curUser={this.props.curUser} /> : undefined

    const posts = this.state.posts.map((post, index) => <div key={index}>
      <Post
        id={post._id}
        deletePost={this.deletePost}
        title={post.title}
        body={post.body}
        // key prop must be in child, not grandchild
      />
      <button onClick={() => this.deletePost(post._id)}>Delete</button>
    </div>)

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

export default MyPosts
