import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class CreatePageForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      title: '',
      heading: '',
      body: '',
      footer: ''
    }
    this.createPage = this.createPage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]:value })

  createPage () {
    const { title, heading, body, footer } = this.state
    axios({
      url: 'http://localhost:4741/pages',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: 'Token token=' + this.props.curUser.token
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
      .catch(err => console.log(err))
  }

  render () {
    const { title, heading, body, footer } = this.state

    return (
      <Form className='create-page-form' onSubmit={this.createPage}>
        <Form.Field>
          <Form.Input name='title' value={title} placeholder='Title' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name='heading' value={heading} placeholder='Page Heading' onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.TextArea name='body' value={body} placeholder="Page Body Section" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.TextArea name='footer' value={footer} placeholder="Page Footer" onChange={this.handleChange}/>
        </Form.Field>

        <Form.Button fluid>Create Page</Form.Button>
      </Form>
    )
  }
}

export default CreatePageForm
