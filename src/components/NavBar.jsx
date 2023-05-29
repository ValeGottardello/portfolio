import '../css/NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import BodyClass from './BodyClass';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdDarkMode, MdOutlineDarkMode, MdOutlineContactMail  } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { FaRegClipboard, FaUserAlt, FaCode } from 'react-icons/fa';


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
    <header>
        <BodyClass className={darkMode ? 'dark' : 'light'}/>
        <Navbar expand="lg">
            <Navbar.Brand>
            <h5 className='mode' onClick={toggleDarkMode}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/>}</h5><motion.a href="#welcome" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          className="vg-icon"
                          >Valentina G.</motion.a>
                          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav> 
                <motion.a href="#about" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><FaUserAlt/> About</motion.a>
                <motion.a href="#projects" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><FaCode/> Projects</motion.a>
                <motion.a href="#academic" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><SiMinds/>Skills</motion.a>
                <motion.a href="#contact" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><MdOutlineContactMail/>Contact</motion.a>
                <motion.a whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}  
                          className='cv' 
                          href="/cv/resume_Gottardello.pdf" target="_blank"><FaRegClipboard/> CV</motion.a>       
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
  );
}

export default NavBar;

    