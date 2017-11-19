import React, { Component } from 'react'
import axios from 'axios'

import Post from './Post'

class Home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: []
    }
    this.getAllPosts = this.getAllPosts.bind(this)
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

  componentWillMount () {
    this.getAllPosts()
  }

  render () {
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
        <h2>Recent Activity</h2>
        {posts}
      </div>

    )
  }
}

export default Home
