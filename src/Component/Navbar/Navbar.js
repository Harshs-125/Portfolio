import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Navbar.css';
import {AiOutlineUser, AiOutlineHome,AiOutlineFundProjectionScreen,AiOutlineFile} from 'react-icons/ai'
function NavBar(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">HS.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><AiOutlineHome />Home</Nav.Link>
            <Nav.Link href="/about"><AiOutlineUser />About</Nav.Link>
            <Nav.Link href="/project">< AiOutlineFundProjectionScreen />Projects</Nav.Link>
            <Nav.Link href="/resume">< AiOutlineFile />Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
