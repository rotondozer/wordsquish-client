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

    return (
      <header>
        <a><b>WordSquish</b></a>
        <Menu fluid widths={3}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            as={Link} to='/'
          >
            <Icon className="wordpress icon" />
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
        </Menu>
        <div>{this.props.curUser.email}</div>
        {/* <nav>
          <ul>
            <li><b>WordSquish</b></li>
            <li><Link to='/'>Home</Link></li>{'       '}
            <li><Link to='/posts'>Posts</Link></li>{'       '}
            <li><Link to='/account'>Account</Link></li>{'       '}
            <li>{props.curUser.email}</li>
          </ul>
        </nav> */}
      </header>
    )
  }
}

export default Header
