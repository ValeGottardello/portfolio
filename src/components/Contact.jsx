import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MdOutlineMail } from 'react-icons/md';
import { FaLinkedin, FaGithub,FaRegClipboard} from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/Contact.css'



export default function Contact () {
    const [state, handleSubmit] = useForm("mzbqolqn");
    const [show, setShow] = useState(true);
   
    return (

        <motion.div className="slides"   
                    id="contact"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ height: "100vh" }}
                    transition={{ duration: 1}}>
                <section className='contact-wrapper'>
                    <div className='contact-sect'>
                        <div>
                            <h1>Conctact</h1>
                            <div>
                                <h3>Find me on:</h3>
                                <ul className='contact-list'>
                                    <li><MdOutlineMail/><a href='mailto:valengottardello37@gmail.com?subject=Change%20the%20subject&body=Hi%20Valentina!'> valengottardello37@gmail.com</a></li>
                                    <li><FaLinkedin/><a href='https://www.linkedin.com/in/valentinagottardello/' target="_blank" rel="noreferrer"> https://www.linkedin.com/in/valentinagottardello/</a></li>
                                    <li><FaGithub/><a href='https://github.com/ValeGottardello/' target="_blank" rel="noreferrer"> https://github.com/ValeGottardello/</a></li>
                                    <a href="/cv/resume_Gottardello.pdf" target="_blank"> <FaRegClipboard/> Check my resume!</a>   
                                </ul>
                                <ul className='icon-details'>
                                    <li><a href='mailto:valengottardello37@gmail.com?subject=Change%20the%20subject&body=Hi%20Valentina!'><MdOutlineMail/></a></li>
                                    <li><a href='https://www.linkedin.com/in/valentinagottardello/' target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
                                    <li><a href='https://github.com/ValeGottardello/' target="_blank" rel="noreferrer"><FaGithub/></a></li>
                                    <li><a href="/cv/CV_Gottardello.pdf" target="_blank"><FaRegClipboard/></a></li>
                                </ul>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="name" name='name'  id="email" placeholder="Name" />
                                </Form.Group>
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" name='email' placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" name='message' id="message" rows={3} placeholder="Message" />
                                    <ValidationError prefix="Message" field="message"  errors={state.errors} />
                                </Form.Group>
                                <motion.button 
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}  
                                                className='cv' type="submit" 
                                                disabled={state.submitting}>
                                    Send me a message!
                                </motion.button>
                            </Form>
                            { state.succeeded && show? (
                                <Alert variant="secondary" > 
                                <Alert.Heading>Thanks for your message! <Button onClick={() => setShow(false)} variant="outline-success">X</Button></Alert.Heading>
                                <hr />
                                </Alert>
                            ) : null}
                        </div>
                        <article>
                        </article>
                    </div>
                </section>
        </motion.div>
    )
}