import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './css/Navbar.css';

function Navigasibar() {
  return (
    <Navbar expand="md" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#" className="text-white">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#tentang" className="text-white">About</Nav.Link>
            <Nav.Link href="#services" className="text-white">Services</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasibar;
