import React from 'react'
import {FaRegClipboard} from 'react-icons/fa';

import '../css/Welcome.css'


export default function Welcome () {
    return (
        <section className="slides">
            <div className="welcome-section">
                <article className="welcome-info">
                    <div>
                        <h4>Hello, my name is: </h4>
                        <h1>Valentina Gottardello</h1>
                        <h3>Junior Software Engineer</h3>
                        <button className='cv'>
                            <a href="/cv/CV_Gottardello.pdf" target="_blank"> <FaRegClipboard/> Check my resume!</a>
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}
