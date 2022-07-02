import React from 'react'
import { Link } from "react-router-dom";
import logo from '../navbar/logo.png'
import{Navbar,Container,Nav} from 'react-bootstrap'
const NavbarComponent = () => {  
    const navbarStyle= {
        height:"130px",
        background:"transparent",
        textalign:"center",
    }
  return (  
    <Navbar  style={navbarStyle} variant="dark" expand="md">
  <Container>
    <Navbar.Brand href="#home"><img style={{"width":"70px"}} src={logo}/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navLink">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="#aboutMePage">About Me</Nav.Link>
        <Nav.Link href="#skillsPage">Skill</Nav.Link>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#ContactMe">Contact Me </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   )
}

export default NavbarComponent