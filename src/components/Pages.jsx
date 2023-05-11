import AboutPage from '../pages/AboutPage';
import AcademicPage from '../pages/AcademicPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import Carousel from 'react-bootstrap/Carousel';
import Welcome from '../pages/Welcome';
import { useState } from 'react';

function Pages () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Welcome />
              <Carousel.Caption>  
              </Carousel.Caption>   
            </Carousel.Item>
            <Carousel.Item>
              <AboutPage />
              <Carousel.Caption>        
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <AcademicPage />
              <Carousel.Caption>        
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ProjectsPage />
              <Carousel.Caption>             
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <ContactPage /> 
              <Carousel.Caption>                
              </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Pages;
