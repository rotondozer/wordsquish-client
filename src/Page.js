import React, { Component } from 'react'
import { Container, Segment, Header, Divider } from 'semantic-ui-react'

class Page extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
    this.togglePageVisibility = this.togglePageVisibility.bind(this)
  }

  togglePageVisibility () {

  }

  render () {
    return (
      <Container>
        <Segment onClick={this.togglePageVisibility}>
          {this.props.title}
        </Segment>
        <Container hidden={}>
          {/* Allow hidden to be removed onClick */}
          <Header dividing content={this.props.heading}/>
          <Container as='div'>
            <p>{this.props.body}</p>
            <Divider />
            {this.props.footer}
          </Container>


        </Container>
      </Container>
    )
  }
}

export default Page
