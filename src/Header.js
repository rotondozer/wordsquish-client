import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'semantic-ui-react'

class Header extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }

  handleItemClick = (event, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    const userName = (this.props.curUser.email === undefined) ? 'Not Signed In' : `Hello, ${this.props.curUser.email}!`

    return (
      <header>
        <Menu fixed='top' className='navbar'>
          <Menu.Item
            className='logo'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link} to='/'
          >
            WordSquish
          </Menu.Item>

          <Menu.Item
            name='posts'
            active={activeItem === 'posts'}
            onClick={this.handleItemClick}
            as={Link} to='/posts'
          >
            My Posts
          </Menu.Item>

          <Menu.Item
            name='account'
            active={activeItem === 'account'}
            onClick={this.handleItemClick}
            as={Link} to='/account'
          >
            My Account
          </Menu.Item>
          <Menu.Item position='right'>
            {userName}
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}

export default Header
