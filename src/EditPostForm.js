import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class EditPostForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      title: props.title,
      body: props.body
    }
    this.editPost = this.editPost.bind(this)
  }

  editPost () {
    const { title, body } = this.state
    axios({
      url: `http://localhost:4741/posts/${this.props.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${this.props.curUser.token}`
      },
      data: {
      'post': {
        'title': title,
        'body': body
        }
      }
    })
      .then(res => console.log(res))
      .then(this.props.getMyPosts)
      .then(this.props.showEditPostForm)
      .catch(err => console.log(err))
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render () {
    const { title, body } = this.state
    return (
      <Form className='post-form' onSubmit={this.editPost}>
        <Form.Field>
          <Form.Input name='title' value={title} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.TextArea name='body' value={body} onChange={this.handleChange}/>
        </Form.Field>

        <Form.Button fluid>Edit This Post</Form.Button>
      </Form>
    )
  }
}

export default EditPostForm
