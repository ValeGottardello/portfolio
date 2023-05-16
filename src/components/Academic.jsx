import '../css/Academic.css'
// import { useState } from "react";
import { motion } from 'framer-motion'

export default function Academic () {



    return (
        <motion.div className="slides"   
                    id="academic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}>        
            <div className='education'>
                <article>
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
                </article>
                <article>
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
                </article>
            </div>
        </motion.div >
    )
}