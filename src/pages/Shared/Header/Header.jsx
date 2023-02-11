import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Lighteniam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              Pricing
            </Nav.Link>

            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="#">
                Item 1
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#">
                Item 2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="#">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="#">
              Blog
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link eventKey={2} as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
