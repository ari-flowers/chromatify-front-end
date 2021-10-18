import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div>
      <Navbar  className="color-nav" variant="dark">

        <Navbar.Brand href="/">
         <img
           alt=""
           src="https://i.imgur.com/GWB36eY.png"
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

      </Navbar>
    </div>
  )
}

export default NavBar;
