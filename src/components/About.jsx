import { motion } from 'framer-motion'
import '../css/About.css'
import '../css/lightMode.css'
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';
import Arrow from './Arrow.jsx';

export default function About () {
    return (
        <motion.div className='slides'
                    id="about"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ height: "100vh" }}
                    transition={{ duration: 2}}
                    >
            <div className='about-wrapper'>
                <h2>About me</h2>
                <h3 className='subtitle-about'>Know my history</h3>
                <article className='about-sect' initial={{ opacity: 0, scale: 0.5 }}>
                    <p>
                        <span className='presentation'>My name is <span className='myname'>
                             Valentina</span></span>
                        , I am a Web Developer who completed a 12-week immersive course at General Assembly, a 500+ hours bootcamp where I have built experience with both frontend and backend technologies. 
                    </p>
                    <p>
                        With four years of experience in the legal field, followed by three years working in the fitness industry as a Head Coach-Manager, I made the decision to explore new horizon and embark on a transformative journey of relocation abroad and an exciting career path in the field of software engineering.
                    </p>
                    <p>
                        With a strong dedication to my professional growth, I am   driven to make a significant impact in the field of software engineering. I am always fully prepared to face challenges head-on.
                    </p>
                </article>
                <article className='details-about-sec'>
                    <h3><span><BiMap/> Based in </span>  
                    Melbourne, Australia</h3>
                    <h3>
                        <span><HiOutlineMail/> My email address is </span>
                        valengottardello37@gmail.com</h3>
                    <h3><span><AiOutlinePhone/> My phone number is </span> 
                        0493258402</h3>
                </article>
                <Arrow page={"#projects"}/>
            </div>
        </motion.div >
    )
}

// className="card-container"
// initial="offscreen"
// whileInView="onscreen"
// viewport={{ once: true, amount: 0.8 }}