import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyPosts from './MyPosts.js'
import Home from './Home'
import Account from './Account'

import { Segment } from 'semantic-ui-react'

const Main = (props) => (
  <main>
    <Segment>THIS IS A SEGMENT</Segment>
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
