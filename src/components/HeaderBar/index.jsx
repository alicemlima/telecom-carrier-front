import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark">
            <Container>
            <Navbar.Brand href="#home">
              <img
                alt='Logo da evolux'
                src='/img/evolux.png'
              />
            </Navbar.Brand>
            </Container>
        </Navbar>
      </div>
    )
  }
}
