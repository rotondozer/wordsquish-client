import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

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

  // handleChange (event, formField) {
  //   event.preventDefault()
  //   this.setState({
  //     [formField]: event.target.value
  //   })
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  createPost () {
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
      .then(this.props.getMyPosts)
      .catch((err) => console.log(err))
  }

  render () {
    const { title, body } = this.state

    return (
      <Form className='create-post-form' onSubmit={this.createPost}>
        <Form.Field>
          <Form.Input name='title' value={title} placeholder='Title' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.TextArea name='body' value={body} placeholder="What's on your mind" onChange={this.handleChange}/>
        </Form.Field>

        <Form.Button fluid>Make Post</Form.Button>
      </Form>
    )
  }
}

export default CreatePostForm
