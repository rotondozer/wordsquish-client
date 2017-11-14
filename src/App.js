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
    this.setState({
      user: user
    })
    console.log(user)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header />
        <Main setUser={this.setUser}/>
      </div>
    )
  }
}

export default App
