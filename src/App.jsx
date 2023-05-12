import './css/App.css';
import './css/lightMode.css'
import './css/darkMode.css'
import { FaLinkedin, FaGithub, FaRegClipboard } from 'react-icons/fa';
import { MdOutlineMail  } from "react-icons/md";
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import AboutPage from './pages/AboutPage';
import AcademicPage from './pages/AcademicPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';

function App () {
    
  
    return (
      <div className="App">
        <main className="wrapper">
          <header>
            <NavBar/>
          </header>
          <section className='main'>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/skills" element={<AcademicPage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
            <aside>
              <ul>
                  <li><a href='mailto:valengottardello37@gmail.com?subject=Change%20the%20subject&body=Hi%20Valentina!'><MdOutlineMail/></a></li>
                  <li><a href='https://www.linkedin.com/in/valentinagottardello/' target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                  <li><a href='https://github.com/ValeGottardello/' target="_blank" rel="noreferrer"><FaGithub/></a></li>
                  <li><a href="/cv/CV_Gottardello.pdf" target="_blank"><FaRegClipboard/></a></li>
              </ul>
            </aside>
          </section>
        </main>
      </div>
    )

  
}

export default App;
