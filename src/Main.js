import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MyPosts from './MyPosts'
import MyPages from './MyPages'
import Home from './Home'
import Account from './Account'

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
        <Account curUser={props.curUser} setUser={props.setUser} />
      )} />
      <Route path='/pages' render={() => (
        <MyPages curUser={props.curUser} />
      )} />
    </Switch>
  </main>
)
export default Main
