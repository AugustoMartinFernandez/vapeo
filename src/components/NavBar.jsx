import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar  expand="lg" className='NavBar'>
      <Container>
        <Navbar.Brand className='titulo' href="#home">Vapeo 3.5 <img width="35" height="35" src="https://img.icons8.com/3d-fluency/94/iqos.png" alt="iqos"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#alimentos" className='Navlink'>Recargables</Nav.Link>
            <Nav.Link href="#juguetes" className='Navlink'>Descartables</Nav.Link>
            <Nav.Link href="#camas" className='Navlink'>Puff</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget /> 
      </Container>
    </Navbar>
  );
};

export default NavBar;
