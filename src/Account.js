import React from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import ChangePasswordForm from './ChangePasswordForm'
import SignOutForm from './SignOutForm'

const Account = (props) => {

  let acctView = (props.curUser) ? (
    <Container>
      <Header as='h3' content='Change Password' />
      <ChangePasswordForm curUser={props.curUser}/>
      <SignOutForm
        setUser={props.setUser}
        curUser={props.curUser} />
    </Container>
  ) : (
    <Container>
      <Header as='h3' content='Sign In' />
      <SignInForm setUser={props.setUser} />
      <Divider />
      <Header as='h3' content='Create an Account' />
      <SignUpForm setUser={props.setUser} />
    </Container>
  )

  return (
    <Container>
      <Header as='h2' content='My Account' />
      {acctView}
    </Container>
  )

}

export default Account
