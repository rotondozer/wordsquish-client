import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyPosts from './MyPosts.js'
import Home from './Home'
import Account from './Account'

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' render={() => (
        <Home />
      )}/>
      <Route path='/posts' render={() => (
        <MyPosts curUser={props.curUser} />
      )}/>
      <Route path='/account' render={() => (
        <Account setUser={props.setUser} />
      )} />
      {/* <Route path='/pages' component={PageContainer} /> */}
    </Switch>
  </main>
)
export default Main
