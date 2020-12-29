import React from 'react'
import ProjectsTable from './components/ProjectsTable/ProjectsTable';
import LImage from './assets/luka2.jpg';
import BBImage from './assets/lukabball.png';
import calIMG from './assets/calendarview.png';
import flappy from './assets/flappyview.png';
import './About.css';
import downArrow  from './assets/sort-down.svg';
export const About = () => (
    <body>
        <div className="background-about">
            <div className="short-intro-container">
                <div className="short-intro-section">
                    <div className="short-intro-name">
                        Luka Mircetic
                    </div>
                    <div className="short-intro-description">
                        Learning software and biomedical engineering through my studies and personal projects.  
                    </div>
                    <div classname="">
                        <a class="email-link" href="mailto:luka.mircetic@gmail.com">Get in Touch</a>
                    </div>
                </div>
                <div className="read-more-container">
                    <div className="read-more-title">
                        More about me
                    </div>
                    <button className="read-more-button">
                        <img alt={"down arrow"}src={downArrow} className="read-more-arrow"></img>
                    </button>
                </div>
            </div>
        </div>
        <div className="main-section">
            <div className="main-section-top">
                <div className="section-title-left">ABOUT ME</div>
            </div>
            <div className="about-section">
            <div className="main-content">
                <div className="main-content-text">
                    <div className="main-content-section">
                        Hi, I'm Luka, a software and biomedical engineering student at McMaster University.
                        I have a passion for developing cool software applications and engineering medical devices. 
                    </div>
                    <div className="main-content-section">
                        Most of my experience is in web development but I am also interested in picking up artifical intelligence such as deep learning.
                    </div>
                    <div className="main-content-section">
                        For the past 8 months, I worked at CIBC where I worked on multiple applications that were used country-wide.
                    </div>
                    <div className="main-content-section">
                        When I'm not hacking away you can usually find me on the court playing for the McMaster Men's Basketball team.
                    </div>
                    <div className="main-content-section">
                        Here are some framework and technologies that I am familiar with:
                    </div>
                </div>
                <div className="main-content-pics">
                    <div className="profile-picture">
                        <img alt={"Headshot"}className="avatar" src={LImage} />
                    </div>
                    <div className="bball-picture">
                        <img alt={"Luka Basketball"}src={BBImage} className='lukabball-img'/>
                    </div>
                </div>
            </div>
            <div className="skills-content">
                    <div className="skills-list-languages">
                        <div className="list-title">Languages</div>
                        <ul className="lang-list">
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>C/C++</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <div className="list-title">Web Development</div>
                        <ul className="skills-list-ul">
                            <li>React</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                            <li>OracleDB</li>
                            <li>Typescript</li>
                            <li>Flask</li>
                            <li>HTML and CSS</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <div className="list-title">Data and Visualization</div>
                        <ul className="skills-list-ul">
                            <li>Tensorflow</li>
                            <li>Pytorch</li>
                            <li>Processing.js</li>
                            <li>Numpy</li>
                            <li>Matplotlib</li>
                            <li>OpenCV</li>
                            <li>Pandas</li>
                        </ul>
                    </div>
                    <div className="skills-list">
                        <div className="list-title">Hardware</div>
                        <ul className="skills-list-ul">
                            <li>Verilog</li>
                            <li>AutoDesk</li>
                            <li>Raspberry Pi</li>
                            <li>3D Printing</li>
                            <li>Arduino</li>
                            <li>Soldering</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-section" style={{ height: "180vh"}}>
            <div className="main-section-top">
                <div className="featured-title-left">FEATURED PROJECTS</div>
            </div>
            <div className="project-container">
                <div className="description-container">
                    <div className="project-title">
                        Calendar To-Do
                        <div className="links-container">
                            <a href="https://github.com/lukamircetic/Calendar-ToDo" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="41" width="25" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://calendar-todo-luka.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="link-icon" width="25" height="41" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="description-section">
                        <p className="project-description">Google Keep and Google Calendar were missing something, so I combined them! Full stack application which organizes your to-do lists by date.</p>
                    </div>
                    <div className="description-section">
                        <h2 className="features-title">Technical Features</h2>
                        <ul>
                            <li>login and authentication system for users to save their lists for future use</li>
                            <li>website backend for handling routes and requests</li>
                            <li>connected to the cloud using MongoDB Atlas</li>
                        </ul>
                    </div>
                        <div className="project-frameworks">
                            <ul>
                                <li>Svelte</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Heroku</li>
                            </ul>
                    </div>
                </div>
                <div className="feature-container">
                    <img alt={"Calendar To-Do Website"}className="feature-pic" src={calIMG}/>
                </div>
            </div>
            <div className="project-container">
                <div className="feature-container-right">
                    <img alt={"Flappy Bird Game"}className="feature-pic-right" src={flappy}/>
                </div>
                <div className="description-container-right">
                    <div className="project-title-right">
                        Flappy Bird ML
                        <div className="links-container">
                            <a className="icon-a" href="https://github.com/lukamircetic/flappybirdneuralnet" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="41" width="25" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a className="icon-a" href="https://lukamircetic.github.io/flappybirdneuralnet/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="link-icon" width="25" height="41" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="description-section">
                        <p className="project-description">One of the games I spent hours on and could never get the best score, so I decided to recreate it and train a neural network to do it for me!</p>
                    </div>
                    <div className="description-section">
                        <h2 className="features-title">Technical Features</h2>
                        <ul>
                            <li>Developed game using the Processing.js framework</li>
                            <li>Used reinforcement learning to train two different models for the neural network</li>
                        </ul>
                    </div>
                        <div className="project-frameworks">
                            <ul>
                                <li style={{ flex: "0 0 50%"}}>Processing.js</li>
                                <li style={{ flex: "0 0 50%"}}>Tensorflow.js</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="project-container">
                <div className="description-container">
                    <div className="project-title">
                        AutoMute <span className="in-progress">(In Progress)</span>
                    </div>
                    <div className="description-section">
                        <p className="project-description">Tool for popular video chat applications like Zoom, Discord and Teams, which automatically mutes your microphone if you sip water or someone walks into your room.</p>
                    </div>
                    <div className="description-section">
                        <h2 className="features-title">Technical Features</h2>
                        <ul>
                            <li>Using a neural network to detect drinking water, people walking into room, and user gestures</li>
                        </ul>
                    </div>
                        <div className="project-frameworks">
                            <ul>
                                <li style={{ flex: "0 0 50%"}}>Python</li>
                                <li style={{ flex: "0 0 50%"}}>OpenCV</li>
                            </ul>
                    </div>
                </div>
                <div className="feature-container">
                    <div className="automute-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" class="automute-icon"viewBox="0 0 24 24"><path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"/></svg>
                        <p style={{ fontWeight: "400"}}>automute</p>
                        <p style={{ fontWeight: "400", fontSize: "14px"}}>coming soon</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-section" style={{ height: "150vh"}}>
            <div className="main-section-top">
                <div className="featured-title-left">ALL PROJECTS</div>
            </div>
            <ProjectsTable />
        </div>
    </body>
)
