import { motion } from 'framer-motion'
import '../css/About.css'
import '../css/lightMode.css'

export default function About () {
    return (
        <motion.div className='slides'
                    id="about">
            <div className='about-wrapper'>
                <div><img src="" alt="" /></div>
                <motion.article initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0, 0.71, 0.2, 1.01]
                                }} 
                                className='about-sect'>
                    <h2>About me</h2>
                    
                    <p>
                        I am a Software Engineer who completed a 12-week immersive course at General Assembly in May 2023. With four years of experience in the legal field, followed by three years working in the fitness industry as a Head Coach-Manager and pursuing a full-time professional athlete career, I made the decision to explore new horizons. This led me to embark on a transformative journey of relocation abroad, which propelled me into an exciting career path in the field of software engineering.
                    </p>
                    <p>
                        With a strong dedication to my professional growth, nurtured by my experience in sports, I am driven to make a significant impact in the field of software engineering. I am always fully prepared to face challenges head-on.
                    </p>
                    <p>
                        As I embark on the next phase of my career, I am actively seeking opportunities in front-end, back-end, and full-stack development. I am eager to leverage my diverse experience and contribute to innovative projects.
                    </p>
                </motion.article>
                <div> <img src="" alt="" /></div>
            </div>
        </motion.div >
    )
}
