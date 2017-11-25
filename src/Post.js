import React from 'react'
import { Card } from 'semantic-ui-react'

import Time from 'react-time'

const Post = (props) => (
  <Card>
    <Card.Content className='container'>
      <Card.Header className='inline'>{props.title}</Card.Header>
      <Card.Meta className='inline'>by: {props.author}</Card.Meta>
    </Card.Content>
    <Card.Content description={props.body} />
    <Card.Content extra>at <Time value={props.createdAt} format='hh:mm' /> on <Time value={props.createdAt} format='MM/DD/YYYY'/></Card.Content>
  </Card>
)

export default Post
