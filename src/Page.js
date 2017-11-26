import React from 'react'
import { Container, Segment, Header, Divider } from 'semantic-ui-react'

const Page = (props) => (
  <Container>
    <Segment>
      {props.title}
    </Segment>
    <Container >
      {/* Allow hidden to be removed onClick */}
      <Header dividing content={props.heading}/>
      <Container as='div'>
        <p>{props.body}</p>
        <Divider />
        {props.footer}
      </Container>


    </Container>
  </Container>

)

export default Page
