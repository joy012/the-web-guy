import React, { useState } from 'react';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
   setExpand(!expand);
  }
  return (
    <Navbar expand="md" className={`zIndex navbar-dark fixed-top ${expand? 'bg-secondary': ''}`}>
      <Navbar.Brand>
        <h1 className="text-white mb-0">JoY</h1>
      </Navbar.Brand>
      <Navbar.Toggle onClick={handleExpand} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link className="btn button px-3" href="https://drive.google.com/file/d/1E7M5WalMdJljc_rj_Ojl0dmvfxj7I338/view?usp=sharing" target='_blank'>Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
