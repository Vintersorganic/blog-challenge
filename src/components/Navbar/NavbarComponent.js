import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBlog } from '@fortawesome/free-solid-svg-icons'
import './NavbarComponent.css'
import Logout from './Logout'
import { LinkContainer } from 'react-router-bootstrap'

const NavbarComponent = () => {

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/home">
        <Navbar.Brand href="#home" className='logo-color'><FontAwesomeIcon icon={faBlog} /> BlogApp</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <LinkContainer to="/home">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/newblog'>
            <Nav.Link>
              <FontAwesomeIcon icon={ faPlus } /> Agregar Blog
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Logout />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarComponent

