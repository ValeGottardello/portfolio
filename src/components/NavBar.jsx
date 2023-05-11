import { useState } from 'react';
import { Link } from 'react-router-dom';
import BodyClass from './BodyClass';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/NavBar.css'

import { MdDarkMode, MdOutlineDarkMode  } from "react-icons/md";

function NavBar() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      }
    };
  
  return (
    <>
        <BodyClass className={darkMode ? 'dark' : 'light'}/>
        <Navbar>
            <Navbar.Brand><Link to='/'>icone</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link><Link to='/about' eventKey="link-1">About</Link></Nav.Link>
                <Nav.Link><Link to='/projects' eventKey="link-2">Projects</Link></Nav.Link>
                <Nav.Link><Link to='/skills' eventKey="link-3">Skills</Link></Nav.Link>
                <Nav.Link><Link to='/contact' eventKey="link-4">Contact</Link></Nav.Link>
                <button className='cv'>
                    <a href="/cv/CV_Gottardello.pdf" target="_blank"> Check my resume!</a>
                </button>
                <Button variant="secondary" className='mode' onClick={toggleDarkMode}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/>}</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default NavBar;