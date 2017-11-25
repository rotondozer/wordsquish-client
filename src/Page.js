import React from 'react'

const Page = (props) => (
  <div>
    {props.title}
    {props.header}
    {props.body}
    {props.footer}
    ----------------------------
  </div>
)

export default Page
