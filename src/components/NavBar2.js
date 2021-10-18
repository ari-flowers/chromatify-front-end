import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink
} from './NavBarElements';


const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavNenu>
        <NavLink to="/newtrack" activeStyle>
          Add track
        </NavLink>
        <NavLink to="/created" activeStyle>
          Created Tracks
        </NavLink>
      </NavMenu>
      </Nav>
  )
}
