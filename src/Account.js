import React from 'react'

import SignInForm from './SignInForm'

const Account = (props) => (
  <div>
    <h1>My Account</h1>
    <h3>Sign In</h3>
    <SignInForm setUser={props.setUser}/>
  </div>
)

export default Account
