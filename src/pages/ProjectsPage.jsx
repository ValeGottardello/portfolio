
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/Projects.css'

export default function ProjectsPage () {
    const [key, setKey] = useState('project-5');

    return (
        <div className="projects slides">
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 wrapper-tab"
                >
                <Tab eventKey="project-5" title="Project 5" > 

                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/fixup.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 5: FIXUP</h3>
                            <p> Work space app for a small/medium business. My last project inspirated in past expirience. Users can sign in as a business or dependent, manage their availability, clock in/off (which substract from the current hours), see their assigned tasks and check them done, create and assign new tasks.</p>
                            <a href="https://fixup-git-main-valegottardello.vercel.app/">Try it here</a>
                            <div className='skills-used'>
                               <img className="img-icon" src="/images/icons/react.svg" alt="" /> 
                               <img src="/images/icons/javascript.svg" alt="" /> 
                               <img src="/images/icons/bootstrap.svg" alt="" /> 
                               <img src="/images/icons/node.svg" alt="" /> 
                               <img src="/images/icons/express.svg" alt="" /> 
                               <img src="/images/icons/postegresql.svg" alt="" /> 
                               <img src="/images/icons/css.svg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="project-4" title="Project 4" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/planmyplate.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 4: PLAN MY PLATE</h3>
                            <p>Meal plan app with third party API where users can sign in or not, search and save recipes, create meal plans, and arrange the recipes with a drga and drop weekly plan.</p>
                            <a href="https://planmyplate.netlify.app/">Try it here</a>
                            <div className='skills-used'>
                                <img className="img-icon" src="/images/icons/react.svg" alt="" /> 
                                <img src="/images/icons/javascript.svg" alt="" /> 
                                <img src="/images/icons/bootstrap.svg" alt="" /> 
                                <img src="/images/icons/firebase.svg" alt="" /> 
                                <img src="/images/icons/css.svg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="project-3" title="Project 3" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/mapapi.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 3: Servo API</h3>
                            <p>Single Page Application using its own REST JSON API to display all petrol stations that are inside of the boundaries based on current location, is displayed using the Google Maps API. Team project motivated to handle GitHub instance in a collaborative project.</p>
                            <div className='skills-used'>
                                <img src="/images/icons/javascript.svg" alt="" /> 
                                <img src="/images/icons/node.svg" alt="" /> 
                                <img src="/images/icons/express.svg" alt="" /> 
                                <img src="/images/icons/postegresql.svg" alt="" /> 
                                <img src="/images/icons/css.svg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="project-2" title="Project 2">
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/talkers.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 2: Talker's</h3>
                            <p>Talkers app is a CRUD Web application data base backed, whose objective is users can connect each other in order to improve and practice the language skills. Users can log in, create their own profile, post and comment on themselves and other profiles. Completly handled from server side, using Node.js, Express and libraries as Ejs for the server side.</p>
                            <div className='skills-used'>
                                <img src="/images/icons/javascript.svg" alt="" /> 
                                <img src="/images/icons/node.svg" alt="" /> 
                                <img src="/images/icons/express.svg" alt="" /> 
                                <img src="/images/icons/postegresql.svg" alt="" /> 
                                <img src="/images/icons/css.svg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="project-1" title="Project 1" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/tictactoe.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 1: TicTacToe!</h3>
                            <p>Classic game of circle and crosses. First project in just two weeks of learning Javascript. Users can play eachother, track their scores and reset the game any time.</p>
                            <a href="https://valegottardello.github.io/tictactoe/">Try it here</a>
                            
                            <div className='skills-used'>
                               <img src="/images/icons/javascript.svg" alt="" /> 
                               <img src="/images/icons/html.svg" alt="" /> 
                               <img src="/images/icons/css.svg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="project-0" title="Project 0" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/mobilia.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 0: Mobilia </h3>
                            <p>Final project of the Coderhouse Foundation course, Argentine Institution. Mobilia Muebles is a static web page that I made for a Family Furniture Business located in Argentina. Users can navigate around the page to known more about the business history and the company, contact with them and see the design catalog.</p>
                            <a href="https://mobiliamuebles-proyectocoder-house.netlify.app/">Try it here</a>
                            <div className='skills-used'>
                               <img src="/images/icons/html.svg" alt="" /> 
                               <img src="/images/icons/css.svg" alt="" /> 
                               <img src="/images/icons/bootstrap.svg" alt="" /> 
                               <img src="/images/icons/sass.svg" alt="" /> 
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}