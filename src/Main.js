import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostContainer from './PostContainer.js'
import Home from './Home'
import Account from './Account'

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/posts' render={() => (
        <PostContainer curUser={props.curUser} />
      )}/>
      <Route path='/account' render={() => (
        <Account setUser={props.setUser} />
      )} />
      {/* <Route path='/pages' component={PageContainer} /> */}
    </Switch>
  </main>
)
export default Main
