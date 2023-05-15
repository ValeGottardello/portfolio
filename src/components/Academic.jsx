import '../css/Academic.css'
// import { useState } from "react";
import { motion } from "framer-motion";

export default function Academic () {



    return (
        <motion.div className="slides"   
                    id="academic">        
            <div className='education'>
                <motion.article initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                    <h2>Tech skills</h2>
                    <div className='skills-wrapper'>
                        <img className='skills-icon' src="/images/icons/html.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/css.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/javascript.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/react.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/node.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/express.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/postegresql.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/bootstrap.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/sass.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/git.svg" alt="" /> 
                        <img className='skills-icon' src="/images/icons/firebase.svg" alt="" /> 
                    </div>
                </motion.article>
                <motion.article initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }}>
                    <h2>Other expiriences</h2>
                    <div className='other-exp-sect'>
                        <div>
                            <h3>Customer Service</h3>
                            <ul>
                                <li>Brooklyn Cocktail Bar - Bartender.</li>
                                <span>Melbourne,  Australia.</span>
                                <span>Aug 2022 - Feb 2023</span>
                                <li>La Drogheria Cocktail Bar - Bartender & Runner</li>
                                <span>Turin,  Italy.</span>
                                <span>Jun 2021 - Jan 2022</span>
                            </ul>
                        </div>
                        <div>
                            <h3>Health Care, Fitness & Social</h3>
                            <ul>
                                <li>Beat Community Fitness - Gym manager - Head Coach.</li>
                                <span>Cordoba,  Argentina.</span>
                                <span>Mar 2019 - Jun 2021</span>
                            </ul>
                        </div>
                        <div>
                            <h3>Legal & Professional Service</h3>
                            <ul>
                                <li>Boetto Law Firm - Paralegal & Legal Secretary.</li>
                                <span>Cordoba,  Argentina.</span>
                                <span>Jan 2013 - Jul 2018</span>
                            </ul>
                        </div>
                    </div>
                </motion.article>
            </div>
        </motion.div >
    )
}