import React from 'react'
import { Link } from "react-router-dom";
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
    <Navbar.Brand href="#home">Niv Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto navLink">
      {/* <Link to="/">Home</Link> |{" "}
      <Link  to="/aboutMePage">About Me</Link> |{" "}
      <Link to="/skillsPage">Skill</Link> |{" "}
      <Link to="/contactMePage">Projects</Link> |{" "} */}

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/aboutMePage">About Me</Nav.Link>
        <Nav.Link href="/skillsPage">Skill</Nav.Link>
        <Nav.Link href="/contactMePage">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   )
}

export default NavbarComponent