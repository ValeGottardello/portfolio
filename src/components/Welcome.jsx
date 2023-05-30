import React from 'react'
import { FaRegClipboard } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../css/Welcome.css'
import Arrow from './Arrow.jsx';


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
                        <h1 className='typing-name'>Valentinaa</h1>
                        <h1 className='typing-surname'>Gottardello</h1>
                        <h3>Junior Software Engineer</h3>
                        <motion.button className='cv'   whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 1.1 }}
                                                drag="x"
                                                dragConstraints={{ left: -100, right: 100 }}>
                            <a href="/cv/resume_Gottardello.pdf" target="_blank"> <FaRegClipboard/> Check my resume!</a>
                        </motion.button>
                        <Arrow page={"#about"}/>
                    </div>
                </article>
                <div className='my-pic-sec'>
                    <motion.div
                        className='box-animate'
                        animate={{
                        scale: [1, 1.2, 1.2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.1, 0.3, 0.6, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                    />
                    <img src="/images/mypic.png" className='mypicture' alt="" />
                </div>
            </div>
        </motion.div>
    )
}
