import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl,Button } from 'react-bootstrap';


const Navbar_pers = ()=> {
    return(
  <Navbar bg="" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
      <Nav.Link href="#features">Invertir</Nav.Link>
      <Nav.Link href="#pricing">Administrar</Nav.Link>
    </Nav>
  </Navbar>
    );
};

export default Navbar_pers;