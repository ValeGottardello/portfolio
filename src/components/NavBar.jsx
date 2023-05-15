import '../css/NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import BodyClass from './BodyClass';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
            <Navbar.Brand><motion.a href="#welcome" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}>Home</motion.a></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav> 
                <motion.a href="#about" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}>About</motion.a>
                <motion.a href="#projects" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}>Projects</motion.a>
                <motion.a href="#academic" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}>Skills</motion.a>
                <motion.a href="#contact" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}>Contact</motion.a>
                <motion.a whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}  
                          className='cv' 
                          href="/cv/resume_Gottardello.pdf" target="_blank">CV</motion.a>       
                <Button variant="secondary" className='mode' onClick={toggleDarkMode}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/>}</Button>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  );
}

export default NavBar;

    