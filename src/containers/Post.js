import React from 'react'
import { Card } from 'semantic-ui-react'
import Time from 'react-time'

const Post = (props) => (
  <Card className='post'>
    <Card.Content className='post-header'>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta className='author'>by: {props.author}</Card.Meta>
    </Card.Content>
    <Card.Content description={props.body} />
    <Card.Content extra>at <Time value={props.createdAt} format='hh:mm' /> on <Time value={props.createdAt} format='MM/DD/YYYY'/></Card.Content>
  </Card>
)

export default Post
