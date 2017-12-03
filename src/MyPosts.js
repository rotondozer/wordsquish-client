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
    this.showCreatePostForm = this.showCreatePostForm.bind(this)
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
      url: `http://localhost:4741/posts/${postId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Token token=${this.props.curUser.token}`
      }
    })
      .then(this.getMyPosts)
      .catch(err => console.log(err))
  }

  render () {
    const createPostForm = (this.state.createPost) ? <CreatePostForm getMyPosts={this.getMyPosts} curUser={this.props.curUser} showCreatePostForm={this.showCreatePostForm}/> : undefined

    const editPostForm = (this.state.editPost) ? <EditPostForm getMyPosts={this.getMyPosts} curUser={this.props.curUser} id={this.state.editId} title={this.state.editTitle} body={this.state.editBody} showEditPostForm={this.showEditPostForm}/> : undefined

    const posts = this.state.posts.map((post, index) => <Container
      className='post-segment'
      key={index}>
      <Container className='post-container'>
        <Post
          id={post._id}
          title={post.title}
          body={post.body}
          createdAt={post.createdAt}
          author={this.props.curUser.email}
          // key prop must be in child ^, not grandchild
        />
        <Container className='post-btn-container'>
          <Button basic color='red' onClick={() => this.deletePost(post._id)}>Delete</Button>
          <Button basic id='toggle-edit-form-btn' onClick={() => this.showEditPostForm(post._id, post.title, post.body)}>Edit</Button>
        </Container>
      </Container>
    </Container>)

    return (
      <Container>
        <Segment clearing>
          <Header floated='left' content='My Posts'/>
          <Button floated='right' basic color='yellow' onClick={this.showCreatePostForm}>Add New Post</Button>
        </Segment>
        <Container className='post-form-container'>
          {createPostForm}
          {editPostForm}
        </Container>

        {posts}
      </Container>
    )
  }
}

export default MyPosts
