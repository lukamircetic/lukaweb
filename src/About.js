import React from 'react'
import LImage from './assets/luka2.jpg';
import BBImage from './assets/lukabball.png';
import BImage from './assets/neuralinkneedle.jpg';
import SWimage from './assets/projects-home2.jpg';
import OImage from './assets/hardware3.jpg';
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
                        <img src={downArrow} className="read-more-arrow"></img>
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
                        <img className="avatar" src={LImage} />
                    </div>
                    <div className="bball-picture">
                        <img src={BBImage} className='lukabball-img'/>
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
    </body>
    // <body>
    // <h className='about-title'>About me</h>
    // <img className='avatar'src={LImage}/>
    // <p className='about-text'>I am currently a second year student enrolled in Software and Biomedical Engineering at McMaster University. I have a passion for software development and engineering medical devices. This summer I am working as a Co-op Analytics Developer at CIBC.</p>
    // <h className='exp-title'>Experience</h>
    // <div className='bar'/>
    // <ul className='skill-bar'>
    //     <li className='skill-py'>Python</li>
    //     <li className='skill-java'>Java</li>
    //     <li className='skill-c'>C/C++</li>
    //     <li className='skill-js'>Javascript</li>
    //     <li className='skill-html'>HTML</li>
    //     <li className='skill-css'>CSS</li>
    //     <li className='skill-react'>React</li>
    // </ul>

    // <h className='proj-title'>Projects</h>
    // <div className='project-bar'>
    //     <div className='biomed-card'>
    //         <img src={BImage} className='biomed-img'/>
    //         <div className='info'>
    //             <h1>Biomedical</h1>
    //             <p>Mostly comprised of my school projects, but I am interested in developing some neural networks that are related to the medical field</p>
    //             <a href='/biomedical'><button>Check them out!</button></a>
    //         </div>
    //     </div>
    //     <div className='biomed-card'>
    //         <img src={SWimage} className='biomed-img'/>
    //         <div className='info'>
    //             <h1>Software</h1>
    //             <p>At the moment I am focusing on creating projects in Python, Java and C++ with a focus on neural networks and automation as well as some games on the side.</p>
    //             <a href='/programming'><button>Check them out!</button></a>
    //         </div>
    //     </div>
    //     <div className='biomed-card'>
    //         <img src={OImage} className='biomed-img'/>
    //         <div className='info'>
    //             <h1>Other</h1>
    //             <p>Other projects that I wish to complete in the future such as electrical engineering projects with the Raspberry Pi. I also enjoy building Computer's.</p>
    //             <a href='/other'><button>Check them out!</button></a>
    //         </div>
    //     </div>
    // </div>
    // <h className='tl-title'>Work and Academics</h>
    // <div id="timeline-content">
    //     {/* <h1>Work and Academics</h1> */}
    //     <ul className="timeline">
    //         <li className="event" data-date="2019-Present">
    //             <h3>McMaster University</h3>
    //             <p>Software and Biomedical Engineering</p>
    //         </li>
    //         <li className="event" data-date="May 2020-Present">
    //             <h3>CIBC</h3>
    //             <p>Analytics Developer</p>
    //             {/* <p>Job Highlights</p>     */}
    //         </li>
    //         {/* <li className="event" id="date" data-date="2009">
    //             <h3>Squareflair was Born</h3>
    //             <p>"We can be all things to Squarespace users!" 📣</p>    
    //         </li> */}
    //     </ul>
    // </div>

    // <h className='bb-title'>Basketball</h>
    // <img src={BBImage} className='lukabball-img'/>
    // <p className='bb-text'>Basketball has been a passion of mine since I was 5 years old and I am currently playing for the McMaster Men's Varsity Basketball Team</p>
    
    // </body>


)
