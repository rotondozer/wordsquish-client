import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

import Time from 'react-time'

class Post extends Component {
  constructor (props) {
    super (props)
    this.state = {
      title: '',
      body: '',
      editPost: false
    }
  }

  render () {
    return (
      <Card>
        <Card.Content className='post-container'>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Meta>by: {this.props.author}</Card.Meta>
        </Card.Content>
        <Card.Content description={this.props.body} />
        <Card.Content extra>at <Time value={this.props.createdAt} format='hh:mm' /> on <Time value={this.props.createdAt} format='MM/DD/YYYY'/></Card.Content>
      </Card>
    )
  }
}

export default Post
