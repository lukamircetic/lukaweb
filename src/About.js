import React from 'react'
import LImage from './assets/luka.png';
import BBImage from './assets/lukabball.png';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BImage1 from './assets/Biomed2.jpg';
import BImage from './assets/neuralinkneedle.jpg';
import CImage from './assets/sit.png';
import DImage from './assets/elec.jpg';
import SWimage from './assets/projectshome.jpg';
import OImage from './assets/hardware.jpg';
import './About.css';

export const About = () => (
    // <Container>
    //     <Row>
    //     <h2 style={{marginLeft: 485 + 'px'}}>About me</h2>
    //     </Row>
    //     <Row>
    //         <Image src={LImage} roundedCircle className="luka-img"/>
    //     </Row>
    //     <Row>
    //         <h14 style={{marginLeft:100 + 'px', textAlign: "center", marginRight: 50 + 'px'}}>I am currently a second year student enrolled in Software and Biomedical Engineering at McMaster University. I have a passion for software development and engineering medical devices. I am currently seeking a Software/Engineering internship for the Summer 2020 term.</h14>
    //     </Row>
    //     <Row>
    //         <Image src={BImage} roundedCircle className="lukabball-img"/>
    //     </Row>
    //     <Row>
    //         <h14 style={{marginLeft:100 + 'px', textAlign: "center", marginRight: 50 + 'px'}}>Basketball has been a passion of mine since I was 5 years old and I am currently playing for the McMaster Men's Varsity Basketball Team</h14>
    //     </Row>
    //     <Row>
    //         <h2 style={{marginLeft:505 + 'px', marginTop: 100 + 'px'}}>Skills</h2>
    //     </Row>
    //     <Row>
    //         <Col>
    //             <Row>
    //                 <h1 style={{marginLeft: 150 + 'px', marginTop: 75 + 'px', fontSize: 20 + 'px'}}>Programming Languages</h1>
    //             </Row>
    //             <h2 style={{marginTop: 50 + 'px', fontSize: 20 + 'px', textAlign: "center"}}>&lt; C++ | C | Java | Javascript | Python | Matlab | AutoCAD | Microsoft Office /&gt;</h2>
    //         </Col>
    //         <Col>
    //         <Row>
    //         <h1 style={{marginLeft: 150 + 'px', marginTop: 75 + 'px', fontSize: 20 + 'px'}}>Environments // Frameworks</h1>
    //         </Row>
    //         <h2 style={{marginLeft: 30 + 'px',marginTop: 50 + 'px', fontSize: 20 + 'px', textAlign: "center"}}> &lt; Jupyter Notebook | Pytorch | Processing | P5.js | Tensorflow | numpy | Pandas /&gt;</h2>
    //         </Col>
    //     </Row>
    //     <Row style={{marginLeft: -100 + 'px', marginTop: 100 + 'px'}}>
    //         <div className="footer">
    //             <p>Website designed by Luka Mircetic 2020</p>
    //         </div>
    //     </Row>
    // </Container>
    <body>
    <h className='about-title'>About me</h>
    <img className='avatar'src={LImage}/>
    <p className='about-text'>I am currently a second year student enrolled in Software and Biomedical Engineering at McMaster University. I have a passion for software development and engineering medical devices. This summer I am working as a Co-op Analytics Developer at CIBC.</p>
    <h className='exp-title'>Experience</h>
    {/* <p className='exp-text'>Basketball has been a passion of mine since I was 5 years old and I am currently playing for the McMaster Men's Varsity Basketball Team</p> */}
    <div className='bar'/>
    <ul className='skill-bar'>
        <li className='skill-py'>Python</li>
        <li className='skill-java'>Java</li>
        <li className='skill-c'>C/C++</li>
        <li className='skill-js'>Javascript</li>
        <li className='skill-html'>HTML</li>
        <li className='skill-css'>CSS</li>
        <li className='skill-react'>React</li>
    </ul>

    <h className='proj-title'>Projects</h>
    <div className='project-bar'>
        <div className='biomed-card'>
            <img src={BImage} className='biomed-img'/>
            <div className='info'>
                <h1>Biomedical</h1>
                <p>Mostly comprised of my school projects, but I am interested in developing some neural networks that are related to the medical field</p>
                <button>Check them out!</button>
            </div>
        </div>
        <div className='biomed-card'>
            <img src={SWimage} className='biomed-img'/>
            <div className='info'>
                <h1>Software</h1>
                <p>At the moment I am focusing on creating projects in Python, Java and C++ with a focus on neural networks and automation as well as some games on the side.</p>
                <button>Check them out!</button>
            </div>
        </div>
        <div className='biomed-card'>
            <img src={OImage} className='biomed-img'/>
            <div className='info'>
                <h1>Other</h1>
                <p>Other projects that I wish to complete in the future such as electrical engineering projects with the Raspberry Pi. I also enjoy building Computer's.</p>
                <button>Check them out!</button>
            </div>
        </div>
    </div>
    <h className='tl-title'>Work and Academics</h>
    <div id="timeline-content">
        {/* <h1>Work and Academics</h1> */}
        <ul className="timeline">
            <li className="event" data-date="2019-Present">
                <h3>McMaster University</h3>
                <p>Software and Biomedical Engineering</p>
            </li>
            <li className="event" data-date="May 2020-Present">
                <h3>CIBC</h3>
                <p>Analytics Developer</p>
                {/* <p>Job Highlights</p>     */}
            </li>
            {/* <li className="event" id="date" data-date="2009">
                <h3>Squareflair was Born</h3>
                <p>"We can be all things to Squarespace users!" 📣</p>    
            </li> */}
        </ul>
    </div>

    <h className='bb-title'>Basketball</h>
    <img src={BBImage} className='lukabball-img'/>
    <p className='bb-text'>Basketball has been a passion of mine since I was 5 years old and I am currently playing for the McMaster Men's Varsity Basketball Team</p>
    
    </body>


)