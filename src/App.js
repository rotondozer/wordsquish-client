import React, {Component} from 'react'

import Header from './Header.js'
import Main from './Main.js'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      user: ''
    }
    this.setUser = this.setUser.bind(this)
  }

  setUser (user) {
    this.setState({ user })
  }

  render() {
    return (
      <div>
        <Header />
        <Main setUser={this.setUser} curUser={this.state.user}/>
      </div>
    )
  }
}

export default App
