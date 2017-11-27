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
        <Segment
          onClick={this.togglePageVisibility}
          className='page-title'>
          {this.props.title}
        </Segment>
        <Segment
          hidden={this.state.containerHide}
          className='page-content'>
          <Header dividing content={this.props.heading}/>
          <Container as='div'>
            <p>{this.props.body}</p>
            <Divider />
            {this.props.footer}
          </Container>
        </Segment>
      </Container>
    )
  }
}

export default Page
