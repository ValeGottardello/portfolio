import React from 'react'
import { FaRegClipboard } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/Welcome.css'


export default function Welcome () {
    return (
        <motion.div  className="slides" 
                    id="welcome"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ height: "100vh" }}
                    transition={{ duration: 2}}>
            <div className="welcome-section">
                <article className="welcome-info">
                    <div>
                        <h4>Hello, my name is: </h4>
                        <h1>Valentina Gottardello</h1>
                        <h3>Junior Software Engineer</h3>
                        <motion.button className='cv'   whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 1.1 }}
                                                drag="x"
                                                dragConstraints={{ left: -100, right: 100 }}>
                            <a href="/cv/resume_Gottardello.pdf" target="_blank"> <FaRegClipboard/> Check my resume!</a>
                        </motion.button>
                    </div>
                </article>
            </div>
        </motion.div>
    )
}
