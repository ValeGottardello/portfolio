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
        <Navbar expand="lg">
            <Navbar.Brand><Link to='/'>icone</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Link className='item-nav' to='/about' >About</Link>
                <Link className='item-nav' to='/projects' >Projects</Link>
                <Link className='item-nav' to='/skills' >Skills</Link>
                <Link className='item-nav' to='/contact' >Contact</Link>
                <a className='cv' href="/cv/CV_Gottardello.pdf" target="_blank">CV</a>       
                <Button variant="secondary" className='mode' onClick={toggleDarkMode}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/>}</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default NavBar;

