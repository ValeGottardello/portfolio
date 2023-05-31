import './css/App.css';
import './css/lightMode.css'
import './css/darkMode.css'
import { FaLinkedin, FaGithub, FaRegClipboard } from 'react-icons/fa';
import { MdOutlineMail  } from "react-icons/md";
import Welcome from './components/Welcome';
import About from './components/About';
import Academic from './components/Academic';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar';


function App () {
      
    return (
      <div className="App">
          <section className='main'>
            <NavBar/>
            <Welcome/>
            <About/>
            <Projects/>
            <Academic/>
            <Contact/> 
          </section>
          <footer>
            <ul>
                <li><a href='mailto:valengottardello37@gmail.com?subject=Change%20the%20subject&body=Hi%20Valentina!'><MdOutlineMail/></a></li>
                <li><a href='https://www.linkedin.com/in/valentinagottardello/' target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                <li><a href='https://github.com/ValeGottardello/' target="_blank" rel="noreferrer"><FaGithub/></a></li>
                <li><a href="/cv/CV_Gottardello.pdf" target="_blank"><FaRegClipboard/></a></li>
            </ul>
          </footer>
      </div>
    ) 
}

export default App;




