import React, { Component } from 'react'
import axios from 'axios'
import { Container, Grid, Header } from 'semantic-ui-react'

import Post from './Post'
import Page from './Page'

class Home extends Component {
  constructor (props) {
    super (props)
    this.state = {
      posts: [],
      pages: [],
      users: []
    }
    this.getAllPosts = this.getAllPosts.bind(this)
    this.getAllPages = this.getAllPages.bind(this)
    this.getAllUsers = this.getAllUsers.bind(this)
  }

  getAllPosts () {
    axios({
      url: 'https://wordsquish-api.herokuapp.com/posts',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => {
        this.setState({
          posts: response.data.posts
        })
        console.log(this.state.posts)
      })
      .catch((err) => console.log(err))
  }

  getAllPages () {
    axios({
      url: 'https://wordsquish-api.herokuapp.com/pages',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
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

  getAllUsers () {
    axios({
      url: 'https://wordsquish-api.herokuapp.com/users',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => this.setState({ users: res.data.users }))
      .catch(err => console.log(err))
  }

  componentWillMount () {
    this.getAllPosts()
    this.getAllPages()
    this.getAllUsers()
  }

  render () {
    // match posts from state to authors from state
    const posts = this.state.posts.map((post, index) => {
      let author
      this.state.users.forEach(user => user._id === post._owner ? author = user.email : user)
      return <Container
        className='post-segment'
        key={index}>
        <Post
          id={post._id}
          // deletePost={this.deletePost}
          title={post.title}
          body={post.body}
          author={author}
          createdAt={post.createdAt}
        />
      </Container>
    })

    const pages = this.state.pages.map((page, index) => {
      let author
      this.state.users.forEach(user => user._id === page._owner ? author = user.email : user)
      return <div className='page'
        key={index}>
        <Page
          id={page._id}
          title={page.title}
          heading={page.sections.heading}
          body={page.sections.body}
          footer={page.sections.footer}
          author={author}
        />
      </div>
    })

    return (
      <Container>
        <Header as='h2' dividing>Recent Activity</Header>

        <Grid stackable divided relaxed='very'>
          <Grid.Column width={10} className='pages-column'>
            {pages}
          </Grid.Column>

          <Grid.Column width={6} className='posts-column'>
            {posts}
          </Grid.Column>

        </Grid>
      </Container>

    )
  }
}

export default Home
