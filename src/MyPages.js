import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'

import Page from './Page'

class MyPages extends Component {
  constructor (props) {
    super (props)
    this.state = {
      pages: [],
      createPage: false
    }
    this.getMyPages = this.getMyPages.bind(this)
    // this.deletePage = this.deletePage.bind(this)
  }

  componentWillMount () {
    this.getMyPages()
  }

  getMyPages () {
    // set user in container to avoid having to pass user info as argument
    // each time the function is called
    const user = this.props.curUser
    axios({
      url: `https://wordsquish-api.herokuapp.com/pages/${user._id}/my_pages`,
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        Authorization: `Token token=${user.token}`
      }
    })
      .then((response) => {
        this.setState({
          pages: response.data.pages
        })
        console.log(this.state.pages)
      })
      .catch((err) => console.log(err))
  }

  render () {
    const pages = this.state.pages.map((page, index) => <div
      className='page'
      key={index}>
      <Page
        id={page._id}
        // Delete Page function
        title={page.title}
        heading={page.sections.heading}
        body={page.sections.body}
        footer={page.sections.footer}
      />
    </div>)
    return (
      <Container>
        <Header divided='horizontally' content='My Pages' />
        {pages}
      </Container>
    )
  }
}

export default MyPages
