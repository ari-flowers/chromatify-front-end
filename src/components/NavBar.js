import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
         <img
           alt=""
           src=""
           width="40"
           height="40"
           className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Brand href="/">Chromatify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/chromatify/created">Added Tracks</Nav.Link>
            <Nav.Link href="/chromatify/newtrack">Add Track</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
