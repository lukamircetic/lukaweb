import React from 'react'
import Limage from './assets/LUKA.jpg';
import Bimage from './assets/Biomed2.jpg';
import Cimage from './assets/coding.jpg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactRotatingText from 'react-rotating-text';
import './Home.css';
export const Home = () => (
    <body>
        <p className='biomed-text'>Biomedical Engineering</p>
        <p className='soft-text'>Software Development</p>
        <p className='fn-text'>Luka</p>
        <p className='ln-text'>Mircetic</p>
        <a href="/about" className="animated-button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter
        </a>
        
    </body>
);
