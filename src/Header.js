import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header>
    <nav>
      <ul>
        <li><b>WordSquish</b></li>
        <li><Link to='/'>Home</Link></li>{'       '}
        <li><Link to='/posts'>Posts</Link></li>{'       '}
        <li><Link to='/account'>Account</Link></li>{'       '}
        <li>{props.curUser.email}</li>
      </ul>
    </nav>
  </header>
)

export default Header
