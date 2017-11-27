import React from 'react'

import SignInForm from './SignInForm'
import ChangePasswordForm from './ChangePasswordForm'
import SignOutForm from './SignOutForm'

const Account = (props) => {

  let acctView = (props.curUser) ? (
    <div>
      <h3>Change Password</h3>
      <ChangePasswordForm curUser={props.curUser}/>
      <SignOutForm
        setUser={props.setUser}
        curUser={props.curUser} />
    </div>
  ) : (
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
