import './css/App.css';
import './css/lightMode.css'
import './css/darkMode.css'
import BodyClass from './components/BodyClass';
import Pages from './components/Pages';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdDarkMode, MdOutlineDarkMode, MdOutlineMail  } from "react-icons/md";
import { motion } from 'framer-motion';

function App () {
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
      <div className="App">
        <BodyClass className={darkMode ? 'dark' : 'light'}/>
        <main className="wrapper">
          <aside>
            <Button variant="secondary" className='mode' onClick={toggleDarkMode}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/>}</Button>
            <div className='aside'>
                <h2 className="aside-title">
                  PORTFOLIO
                </h2>
            </div>
          </aside>
          <section className='main'>
              <Pages/>
          </section>
        </main>
        <motion.footer>
          <h1 className="footer-title"> VALENTINA</h1>
          <div>
            <ul>
                <li><a href='mailto:valengottardello37@gmail.com?subject=Change%20the%20subject&body=Hi%20Valentina!'><MdOutlineMail/></a></li>
                <li><a href='https://www.linkedin.com/in/valentinagottardello/' target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                <li><a href='https://github.com/ValeGottardello/' target="_blank" rel="noreferrer"><FaGithub/></a></li>
            </ul>
          </div>
        </motion.footer>
      </div>
    )

  
}

export default App;
