import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Form,FormControl,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Navbar_pers = ()=> {
  const history = useHistory();

  const goLogin = () => {
		history.push("/Login");
	}; 
    return(
      <div>
      <div id="wrapper">
    
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon">
              <img width="100" height="50" src="https://raw.githubusercontent.com/CMeneses24/project-cintaRoja/cesarRama/Logo.png"/>
            </div>
          </a>
    
          <hr className="sidebar-divider my-0"/>
    
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Inicio</span></a>
          </li>
    
          <hr className="sidebar-divider"/>
    
          <div className="sidebar-heading">
            MENU
          </div>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog"></i>
              <span>Opciones de Inversión</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench"></i>
              <span>Administrar Fondos</span>
            </a>
          </li>
    
          <hr className="sidebar-divider"/>
  
    
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Historial de Inversión</span></a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-fw fa-table"></i>
              <span>Opciones de Inversión</span></a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span onClick = {goLogin} >Cerrar Sesión</span></a>
          </li>

          <hr className="sidebar-divider d-none d-md-block">
          </hr>
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
    
        </ul>
        <div id="content-wrapper" className="d-flex flex-column">
    
        
    
        </div>
    
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    
     
      </div>
    );
};

export default Navbar_pers;