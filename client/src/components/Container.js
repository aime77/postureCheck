import React from 'react'
import { Container } from 'semantic-ui-react'

const MainContainer = ({children}) => (
  <Container>
    <p>
      {children}
    </p>
  </Container>
)

export default MainContainer;