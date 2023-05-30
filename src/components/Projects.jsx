
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/Projects.css'
import { motion } from 'framer-motion';

export default function Projects () {
    const [key, setKey] = useState('project-5');

    return (
        <motion.div  
            className="slides"  
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ height: "100vh" }}
            transition={{ duration: 2}}>
            <h2>My Projects</h2>
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 projects wrapper-tab"
                >
                <Tab eventKey="project-5" title="FIXUP" > 
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/fixup.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 5: FIXUP</h3>
                            <p> Work space app for a small/medium business. My last project inspirated in past expirience. Users can sign in as a business or dependent, manage their availability, clock in/off (which substract from the current hours), see their assigned tasks and check them done, create and assign new tasks.</p>
                            <div className='github-link'>
                                <motion.a href="https://github.com/ValeGottardello/dashboard" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" 
                                        href="https://github.com/ValeGottardello/server-dashboard">GitHub Code - Server</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"  
                                        href="https://fixup.vercel.app">Demo here</motion.a >
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/bootstrap.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/node.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/express.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/postegresql.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-4" title="PLAN MY PLATE" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/planmyplate.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 4: PLAN MY PLATE</h3>
                            <p>Meal plan app with third party API where users can sign in or not, search and save recipes, create meal plans, and arrange the recipes with a drga and drop weekly plan.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        href="https://github.com/ValeGottardello/react_meal_planner_app">GitHub Code</motion.a >
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" 
                                href="https://planmyplate.netlify.app/">Demo here</motion.a>
                            </div>
                            </div>
                    </div>
                    <div className='skills-used'>
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/react.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/javascript.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/bootstrap.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/firebase.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-3" title="Servo API" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/mapapi.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 3: Servo API</h3>
                            <p>Single Page Application using its own REST JSON API to display all petrol stations that are inside of the boundaries based on current location, is displayed using the Google Maps API. Team project motivated to handle GitHub instance in a collaborative project.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" 
                                        href="https://github.com/ValeGottardello/Project3">GitHub Code</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/javascript.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/node.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/express.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/postegresql.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-2" title="Talker's">
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/talkers.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 2: Talker's</h3>
                            <p>Talkers app is a CRUD Web application data base backed, whose objective is users can connect each other in order to improve and practice the language skills. Users can log in, create their own profile, post and comment on themselves and other profiles. Completly handled from server side, using Node.js, Express and libraries as Ejs for the server side.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                    href="https://github.com/ValeGottardello/project2">GitHub Code</motion.a >
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/javascript.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/node.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/express.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/postegresql.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-1" title="TicTacToe" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/tictactoe.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 1: TicTacToe!</h3>
                            <p>Classic game of circle and crosses. First project in just two weeks of learning Javascript. Users can play eachother, track their scores and reset the game any time.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                         href="https://github.com/ValeGottardello/tictactoe">GitHub Code</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        href="https://valegottardello.github.io/tictactoe/">Demo here</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                       <motion.img  whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/html.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-0" title="Mobilia" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/mobilia.png" alt="" />
                        </div>
                        <div className='info-project'>
                            <h3>Project 0: Mobilia </h3>
                            <p>Final project of the Coderhouse Foundation course, Argentine Institution. Mobilia Muebles is a static web page that I made for a Family Furniture Business located in Argentina. Users can navigate around the page to known more about the business history and the company, contact with them and see the design catalog.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" href="https://github.com/ValeGottardello/proyecto-coderhouse">GitHub Code</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        href="https://mobiliamuebles-proyectocoder-house.netlify.app/">Demo here</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/html.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/css.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/bootstrap.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/sass.svg" alt="" /> 
                    </div>
                </Tab>
            </Tabs>
        </motion.div>
    )
}