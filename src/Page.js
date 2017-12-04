import React, { Component } from 'react'
import { Container, Segment, Header, Divider } from 'semantic-ui-react'

class Page extends Component {
  constructor (props) {
    super (props)
    this.state = {
      containerHide: true
    }
    this.togglePageVisibility = this.togglePageVisibility.bind(this)
  }

  togglePageVisibility () {
    this.setState({
      containerHide: !this.state.containerHide
    })
  }

  render () {
    return (
      <Container>
        {/* Clickable Page Title */}
        <Segment
          onClick={this.togglePageVisibility}
          className='page-title'>
          <Header as='h3' content={this.props.title} />
        </Segment>
        {/* 'The Page' */}
        <Segment
          hidden={this.state.containerHide}
          className='page-content'>
          <Header className='page-heading' dividing content={this.props.heading}/>
          <Container as='div'>
            <p className='page-body'>{this.props.body}</p>
            <Divider />
            {this.props.footer}
          </Container>
        </Segment>
      </Container>
    )
  }
}

export default Page
