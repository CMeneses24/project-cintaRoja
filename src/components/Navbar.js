import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl,Button } from 'react-bootstrap';


const Navbar_pers = ()=> {
    return(
  <Navbar variant=" mb-1 mr-1 ml-1" className="navbar border-bottom border-dark">
    <Nav className="mr-auto">
      <Nav.Link href="/Home" className='text-dark'>Inicio</Nav.Link>
      <Nav.Link href="/Invertir "className='text-dark'>Invertir</Nav.Link>
      <Nav.Link href="/Administrar" className='text-dark' >Administrar</Nav.Link>
    </Nav>
  </Navbar>
    );
};

export default Navbar_pers;