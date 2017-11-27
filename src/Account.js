import React from 'react'

import SignInForm from './SignInForm'

const Account = (props) => {


  let acctView = (props.curUser) ? <div>You made it!</div> :
    (
      <div>
        <h3>Sign In</h3>
        <SignInForm setUser={props.setUser}/>
      </div>
    )

  return (
    <div>
      <h1>My Account</h1>
      {acctView}
    </div>
  )

}

export default Account
