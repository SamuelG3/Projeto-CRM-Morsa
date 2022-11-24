import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../../styles/header.css"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import userProfile from "../../images/undraw_profile.png"


const UserMenu = (
    <div id="userMenu" class="navComp">
    <span>Ada Wong </span>
    <img
      src={userProfile}
      alt="UserName"
      roundedCircle
      className="m-2"
      style={{ width: '40px'}}
    />
    </div>
  )

export default function AppHeader(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    

    <Navbar className="Navbar" bg="light" expand="lg">
      <Container fluid bg="light">
        <Navbar.Brand className="brand-title" href="/organization/:id">Morsa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <div id="navIcons">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pipes, Databases..."
              className="me-3"
              aria-label="Search"
            />
          </Form>

          <Nav.Link href="/organization/:id/members"><div className="d-flex align-items-center navComp"><i className="bi bi-people"></i> <span className="m-2">Pessoas (160)</span></div></Nav.Link>
          <Nav.Link href="/notifications"><i className="bi bi-bell-fill"></i></Nav.Link>
        
        <Nav.Link href="#action2"><i className="bi bi-question-circle"></i></Nav.Link>
        <div className="topbar-divider"></div>
            <NavDropdown title={UserMenu}
            align="end"
            >
              <NavDropdown.Item className="dropdownItem" href="/user/:id/edit"><i className="bi bi-person-fill"></i><span> Perfil</span></NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem" href="/">
              <i className="bi bi-gear"></i>
            <span>Preferências</span>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdownItem" href="/">
              <i className="bi bi-menu-button-wide-fill"></i>
                <span>Trocar de empresa</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="dropdownItem" onClick={handleShow}>
              <i className="bi bi-door-open-fill"></i>
            <span>Sair</span>
              </NavDropdown.Item>
            </NavDropdown>
            </div>
        </Navbar.Collapse>
      </Container>


     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
  <Modal.Title>Log out?</Modal.Title>
</Modal.Header>
<Modal.Body>Você tem certeza que está pronto para sair?</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
  Cancelar
  </Button>
  <Button variant="primary" onClick={handleClose}>
  Sair
  </Button>
</Modal.Footer>
      </Modal>
    </Navbar>
  

  )
}

{/* <div className="content-wrapper"> 
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top border-bottom d-flex align-items-center justify-content-between">

                    <Link to="/" className="text-dark text-decoration-none mt-2">
                        <h1 className="mx-auto">Morsa</h1>
                    </Link>
                    

                    <div className="d-flex align-items-center justify-content-between">
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-50 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Pipes, Databases..."
                                aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </form>

                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <Link className="nav-link dropdown-toggle" to="/" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </Link>

                            <div className="dropdown-menu dropdown-menu-right p-9 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-question fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <li className="nav-item no-arrow mx-1">
                            <Link className="nav-link" to="/">
                                <div className="d-flex flex-row align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people mr-1 my-0" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                                  </svg>
                                <span className="my-0 small d-none d-md-block" id="membrosNaOrganizacao">Pessoas (160)</span>
                            </div>
                            </Link>
                        </li>

                        
                        <li className="nav-item dropdown no-arrow mx-1">
                            <Link className="nav-link dropdown-toggle" to="/" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                  </svg>
                                <span className="badge badge-danger badge-counter">3+</span>
                            </Link>  
                        </li>

                        
                        <li className="nav-item dropdown no-arrow mx-1">
                            <Link className="nav-link dropdown-toggle" to="/" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </Link>
                        </li>

                        <div className="topbar-divider d-none d-sm-block"></div>

                        <li className="nav-item dropdown no-arrow">
                            <Link className="nav-link dropdown-toggle" to="/" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                
                            </Link>                            
                        </li>
                    </ul>
                </div>
                </nav>
</div> */}
