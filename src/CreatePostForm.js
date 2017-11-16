import React, { Component } from 'react'
import axios from 'axios'

class CreatePostForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      title: '',
      body: ''
    }
    this.createPost = this.createPost.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, formField) {
    event.preventDefault()
    this.setState({
      [formField]: event.target.value
    })
  }

  createPost (event) {
    event.preventDefault()
    // console.log('create post', this.props.curUser.token)
    axios({
      url: 'http://localhost:4741/posts',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: 'Token token=' + this.props.curUser.token
      },
      data: {
        'post': {
          'title': this.state.title,
          'body': this.state.body
        }
      }
    })
      .then((res) => console.log(res))
      .then(this.props.getAllPosts)
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <form onSubmit={(event) => this.createPost(event)}>
        <input placeholder='title' onChange={(event) => this.handleChange(event, 'title')} value={this.state.title}/>
        <input placeholder='body' onChange={(event) => this.handleChange(event, 'body')} value={this.state.body}/>
        <button type='submit'>Post</button>
      </form>
    )
  }
}

export default CreatePostForm
