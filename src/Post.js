import React, { Component } from 'react'

class Post extends Component {
  render () {
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Body: {this.props.body}</p>
      </div>
    )
  }
}

export default Post
