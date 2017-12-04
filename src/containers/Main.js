import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MyPosts from '../views/MyPosts'
import MyPages from '../views/MyPages'
import Home from '../views/Home'
import Account from '../views/Account'

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' render={() => (
        <Home />
      )} />
      <Route path='/posts' render={() => (
        <MyPosts curUser={props.curUser} />
      )} />
      <Route path='/account' render={() => (
        <Account curUser={props.curUser}
          setUser={props.setUser} />
      )} />
      <Route path='/pages' render={() => (
        <MyPages curUser={props.curUser} />
      )} />
    </Switch>
  </main>
)
export default Main
