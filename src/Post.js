import React from 'react'

const Post = (props) => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
    <p>{props.author}</p>
    {/* <button onClick={() => props.deletePost(props.id)}>Delete</button> */}
  </div>
)


export default Post
