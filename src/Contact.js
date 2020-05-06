import React from 'react'
import './Contact.css';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faGithub,
    // faLinkedin,
    
} from "@fortawesome/free-brands-svg-icons"

import {
    faInbox
} from "@fortawesome/free-solid-svg-icons";
export const Contact = () => (
    
    <div className='body-contact'>
        <div className='ct-box'>
            <h className='contact-title'>Get In Touch</h>
            <h className='contact-text'>For business, job or collaboration opportunities feel free to email me or reach me on social media</h>
            <div className='mid-bar'/>
            <div className='btn-tray'>
                <button className='email-btn'>
                <FontAwesomeIcon icon={faInbox} size="lg" color='#dadce1'className='email-icon'/>
                <a href='#'>luka.mircetic@gmail.com</a></button>
                <button className='twitter-btn'>
                <FontAwesomeIcon icon={faTwitter} size="lg" color='#dadce1' className='twitter-icon'/>
                    <a href='#'>@lukamircetic</a></button>
                <button className='github-btn'>
                <FontAwesomeIcon icon={faGithub} size="lg" color='#dadce1' className='gh-icon'/>
                <a href='#'>lukamircetic</a></button>
        </div>
        </div> 
    </div>
)