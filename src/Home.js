import React, { Component } from 'react'
import axios from 'axios'
import { Comment, Header } from 'semantic-ui-react'

import Post from './Post'

class Home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: [],
      users: []
    }
    this.getAllPosts = this.getAllPosts.bind(this)
    this.getAllUsers = this.getAllUsers.bind(this)
    // this.getPostOwner = this.getPostOwner.bind(this)
    // this.getAllPostOwners = this.getAllPostOwners.bind(this)
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
      .then(this.getAllPostOwners)
      .catch((err) => console.log(err))
  }

  // getPostOwner (post, i) {
  //   let stuff = axios({
  //     url: `http://localhost:4741/users/${post._owner}`,
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   })
  //     // .then((res) => setPostOwner(res.data.user))
  //     // // .then(res => applyPostOwner(res.data.user))
  //     // .catch(err => console.log(err))
  //     debugger
  // }
  //
  // getAllPostOwners () {
  //   let posts = this.state.posts
  //   posts.forEach((post, i) => {
  //     // const postOwner
  //     this.getPostOwner(post, i)
  //     // post.owner = postOwner
  //   })
  // }

  getAllUsers () {
    axios({
      url: 'http://localhost:4741/users',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => this.setState({ users: res.data.users }))
      .catch(err => console.log(err))
  }

  componentWillMount () {
    this.getAllPosts()
    this.getAllUsers()
  }

  render () {
    // match posts from state to authors from state
    const posts = this.state.posts.map((post, index) => {
      let author
      this.state.users.forEach((user) => user._id === post._owner ? author = user.email : user)
      return <div
        className='post'
        key={index}>
        <Post
          id={post._id}
          deletePost={this.deletePost}
          title={post.title}
          body={post.body}
          author={author}
          createdAt={post.createdAt}
        />
      </div>
    })

    return (
      <Comment.Group>
        <Header as='h3' dividing>Recent Activity</Header>
        {posts}
      </Comment.Group>

    )
  }
}

export default Home
