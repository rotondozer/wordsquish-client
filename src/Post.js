import React from 'react'

const Post = (props) => (
  <div className='post'>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
    {/* <button onClick={() => props.deletePost(props.id)}>Delete</button> */}
  </div>
)


export default Post
