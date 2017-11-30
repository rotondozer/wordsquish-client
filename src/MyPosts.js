import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header, Segment, Button } from 'semantic-ui-react'

import Post from './Post.js'
import CreatePostForm from './CreatePostForm'
import EditPostForm from './EditPostForm'

class MyPosts extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: [],
      editId: '',
      editTitle: '',
      editBody: '',
      editPost: false,
      createPost: false
    }
    this.getMyPosts = this.getMyPosts.bind(this)
    this.showEditPostForm = this.showEditPostForm.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }

  componentWillMount () {
    this.getMyPosts()
  }

  getMyPosts () {
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

  showEditPostForm = (postId, curTitle, curBody) => this.setState({
    editPost: !this.state.editPost,
    editId: postId,
    editTitle: curTitle,
    editBody: curBody
  })

  deletePost (postId) {
    axios({
      method: 'DELETE',
      url: `http://localhost:4741/posts/${postId}`,
      headers: {
        Authorization: `Token token=${this.props.curUser.token}`
      }
    })
      .then(this.getMyPosts)
      .catch((err) => console.log(err))
  }

  render () {
    const createPostForm = (this.state.createPost) ? <CreatePostForm getMyPosts={this.getMyPosts} curUser={this.props.curUser} /> : undefined

    const editPostForm = (this.state.editPost) ? <EditPostForm getMyPosts={this.getMyPosts} curUser={this.props.curUser} id={this.state.editId} title={this.state.editTitle} body={this.state.editBody} /> : undefined

    const posts = this.state.posts.map((post, index) => <Segment
      className='post'
      key={index}>
      <Post
        id={post._id}
        title={post.title}
        body={post.body}
        createdAt={post.createdAt}
        author={this.props.curUser.email}
        // key prop must be in child ^, not grandchild
      />
      <Button color='red' onClick={() => this.deletePost(post._id)}>Delete</Button>
      <Button color='yellow' onClick={() => this.showEditPostForm(post._id, post.title, post.body)}>Edit</Button>
    </Segment>)

    return (
      <Container>
        <Segment clearing>
          <Header floated='left' content='My Posts'/>
          <Button active floated='right' basic color='yellow' onClick={this.showCreatePostForm}>Create POST</Button>
        </Segment>
        <Container className='create-post-container'>
          {createPostForm}
          {editPostForm}
        </Container>

        {posts}
      </Container>
    )
  }
}

export default MyPosts
