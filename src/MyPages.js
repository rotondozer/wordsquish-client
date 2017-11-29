import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header, Button } from 'semantic-ui-react'

import Page from './Page'
import CreatePageForm from './CreatePageForm'

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
      url: `http://localhost:4741/pages/${user._id}/my_pages`,
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

  showCreatePageForm = () => this.setState({ createPage: !this.state.createPage })

  render () {
    const createPageForm = (this.state.createPage) ? <CreatePageForm getMyPages={this.getMyPages} curUser={this.props.curUser} /> : undefined

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
        <Header content='My Pages' />
        <Button basic color='yellow' onClick={this.showCreatePageForm}>Create Page</Button>
        <Container className='create-page-container'>
          {createPageForm}
        </Container>
        {pages}
      </Container>
    )
  }
}

export default MyPages
