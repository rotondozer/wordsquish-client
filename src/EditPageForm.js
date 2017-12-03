import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class EditPageForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      title: props.title,
      heading: props.heading,
      body: props.body,
      footer: props.footer
    }
    this.editPage = this.editPage.bind(this)
  }

  editPage () {
    const { title, heading, body, footer } = this.state
    axios({
      url: `http://localhost:4741/pages/${this.props.id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${this.props.curUser.token}`
      },
      data: {
        'page': {
          'title': title,
          'sections': {
            'heading': heading,
            'body': body,
            'footer': footer
          }
        }
      }
    })
      .then(res => console.log(res))
      .then(this.props.getMyPages)
      .then(this.props.showEditPageForm)
      .catch(err => console.log(err))
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render () {
    const { title, heading, body, footer } = this.state
    return (
      <Form onSubmit={this.editPage}>
        <Form.Field>
          <Form.Input name='title' value={title} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name='heading' value={heading} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Form.TextArea name='body' value={body} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Form.Input name='footer' value={footer} onChange={this.handleChange} />
        </Form.Field>

        <Form.Button fluid>Edit This Page</Form.Button>
      </Form>
    )
  }
}

export default EditPageForm
