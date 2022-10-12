import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";
import "./Navbar.css";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineFile,
} from "react-icons/ai";
function NavBar(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          HS.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKet="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome />
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                <AiOutlineUser />
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project">
                <AiOutlineFundProjectionScreen />
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                <AiOutlineFile />
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
