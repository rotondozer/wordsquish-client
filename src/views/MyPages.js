import React, { Component } from 'react'
import axios from 'axios'
import { Container, Segment, Header, Button } from 'semantic-ui-react'

import Page from '../containers/Page'
import CreatePageForm from '../forms/CreatePageForm'
import EditPageForm from '../forms/EditPageForm'

class MyPages extends Component {
  constructor (props) {
    super (props)
    this.state = {
      pages: [],
      editId: '',
      editTitle: '',
      editBody: '',
      editPage: false,
      createPage: false
    }
    this.getMyPages = this.getMyPages.bind(this)
    this.showCreatePageForm = this.showCreatePageForm.bind(this)
    this.showEditPageForm = this.showEditPageForm.bind(this)
    this.deletePage = this.deletePage.bind(this)
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

  showCreatePageForm = () => this.setState({ createPage: !this.state.createPage })

  showEditPageForm = (pageId, curTitle, curHeading, curBody, curFooter) => this.setState({
    editPage: !this.state.editPage,
    editId: pageId,
    editTitle: curTitle,
    editHeading: curHeading,
    editBody: curBody,
    editFooter: curFooter
  })

  deletePage (pageId) {
    axios({
      url: `https://wordsquish-api.herokuapp.com/pages/${pageId}`,
      method: 'DELETE',
      headers: {
        Authorization: `Token token=${this.props.curUser.token}`
      }
    })
      .then(this.getMyPages)
      .catch(err => console.log(err))
  }

  render () {
    const createPageForm = (this.state.createPage) ? <CreatePageForm getMyPages={this.getMyPages} curUser={this.props.curUser} showCreatePageForm={this.showCreatePageForm}/> : undefined

    const editPageForm = (this.state.editPage) ? <EditPageForm getMyPages={this.getMyPages} curUser={this.props.curUser} id={this.state.editId} title={this.state.editTitle} heading={this.state.editHeading} body={this.state.editBody} footer={this.state.editFooter} showEditPageForm={this.showEditPageForm}/> : undefined

    const pages = this.state.pages.map((page, index) => <Container
      className='page-segment'
      key={index}>
      <Container className='page-container'>
        <Page
          id={page._id}
          // Delete Page function
          title={page.title}
          heading={page.sections.heading}
          body={page.sections.body}
          footer={page.sections.footer}
        />
        <Container className='page-btn-container'>
          <Button basic color='red' onClick={() => this.deletePage(page._id)}>Delete</Button>
          <Button basic onClick={() => this.showEditPageForm(page._id, page.title, page.sections.heading, page.sections.body, page.sections.footer)}>Edit</Button>
        </Container>
      </Container>
    </Container>)
    return (
      <Container>
        <Segment clearing>
          <Header floated='left' content='My Pages' />
          <Button floated='right' basic color='yellow' onClick={this.showCreatePageForm}>Create A Page</Button>
        </Segment>
        <Container className='create-page-container'>
          {createPageForm}
          {editPageForm}
        </Container>

        {pages}
      </Container>
    )
  }
}

export default MyPages
