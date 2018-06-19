import * as React from 'react'
import styled from 'styled-components'

type Props = {}

export default (props: Props) => {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
}

const Container = styled.div`
  color: red;
`
