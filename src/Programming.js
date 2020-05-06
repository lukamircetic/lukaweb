import React from 'react'
import './Programming.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'react-bootstrap/Image';
import FImage from './assets/flappyweb.png';
import SImage from './assets/astar3.png';
import DImage from './assets/flies.png';
import FibImage from './assets/fib26.png';
import NImage from './assets/numtorch.png';
import ZImage from './assets/dogs.png';
import CitImage from './assets/cities.png';
import CalImage from './assets/calendar.png';
// import Table from 'react-bootstrap/Table'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {
    faGithub,
    // faYoutube
} from "@fortawesome/free-brands-svg-icons"
const scrollToTop = () => {
    scroll.scrollToTop(); 
};

export const Programming = () => (
        <body>
            <h className='soft-title'>Software Projects</h>
            <div className='sw-btn-tray'>
                <button className='js-btn'>
                    <Link 
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                    Javascript
                    </Link>
                </button>
                <button className='py-btn'>
                    <Link 
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                    Python
                    </Link>
                </button>
                <button className='c-btn'>
                    <Link 
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                    C/C++
                    </Link>
                </button>
                <button className='j-btn'>
                    <Link 
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                    Java
                    </Link>
                </button>
                <button className='o-btn'>
                    <Link 
                        activeClass="active"
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                    Other
                    </Link>
                </button>
            </div>
            <div>
                <div className='soft-body'>
                </div>
                <div className='js-box'>
                    <p className='js-box-title' id='section1'>Javascript Projects</p>
                    <div className='top-box'>
                        <Image src={FImage} className="flappy-image" />
                        <h className='flappy-title'>Flappy Bird Game and Neural Net</h>
                        <p className='flappy-text'>Developed using p5.js, the goal of this game was to develop a basic reinforcement neural network to teach the birds to fly. I made a version using an existing neural net library and one with tensorflow.js.</p>
                        <button onClick={() => {window.location.href="https://lukamircetic.github.io/flappybirdneuralnet/"} }
                            className='flappy-btn'
                        >Regular</button>
                        <button onClick={() => {window.location.href="https://lukamircetic.github.io/flappybirdneuralnet/tensorflowflappy"} }
                        className='flappy-tf-btn'>
                        Tensorflow</button>
                        <button onClick={() => {window.location.href="https://github.com/lukamircetic/flappybirdneuralnet"} }
                        className='code-btn'>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a href='#' className='code-cl'>Code</a></button>
                    </div>
                    <div className='bot-box'>
                        <Image src={SImage} className="astar-img"/>
                        <h className='astar-title'>A* Pathfinding Visualizer</h>
                        <p className='astar-text'>Developed using p5.js, this project is useful for visualizing and understanding the A* algorithm. In the future I would like to add more algorithms to this project</p>
                        <button onClick={() => {window.location.href="https://lukamircetic.github.io/PathfindingVisualizer/"} }
                            className='astar-btn'
                        >Visualizer</button>
                        <button onClick={() => {window.location.href="https://github.com/lukamircetic/PathfindingVisualizer/"}}
                        className='code-btn'>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                </div>
                <div className='py-box' id='section2'>
                    <p className='js-box-title'>Python Projects</p>
                    <div className='top-box'>
                        <Image src={NImage} className="num-img" />
                        <div className='num-title'>Numbers Pytorch</div>
                        <div className='num-text'>Neural network developed using the Pytorch framework that can distinguish between different handwritten numbers</div>
                        <button className='nn-code-btn' onClick={() => {window.location.href="https://github.com/lukamircetic/numberspytorch"}}>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                    <div className='bot-box'>
                    <Image src={ZImage} className="num-img"/>
                        <div className='num-title'>DogsVsCats Neural Network</div>
                        <div className='num-text'>Neural network in Pytorch that learns to disinguish between dog and cat images at an accuracy of around 75%</div>
                        <button className='nn-code-btn' onClick={() => {window.location.href="https://github.com/lukamircetic/DogsVsCatsNeuralNetwork"} }>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                </div>
                <div className='c-box' id='section3'>
                    <p className='js-box-title'>C/C++ Projects</p>
                    <div className='top-box'>
                        <Image src={FibImage} className="fib-img" />
                        <div className='flappy-title'>Fibonacci Fractal Visualizer</div>
                        <div className='flappy-text'>Makes a visual of the Fibonacci Fractal algorithm, similar to the Julia Set. To the left is a small portion of the fractal for the number 26. The algorithm is explained in full detail on the github.</div>
                        <button className='ff-code-btn' onClick={() => {window.location.href="https://github.com/lukamircetic/fibonacci-fractal-visualizer"}}>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                    <div className='bot-box'>
                    <Image src={CitImage} className="fib-img"/>
                        <div className='flappy-title'>Cities CSV</div>
                        <div className='flappy-text'>Project developed in C, used to parse a CSV input file and sort the cities by population from greatest to least.</div>
                        <button className='ff-code-btn' onClick={() => {window.location.href="https://github.com/lukamircetic/cities-csv"} }>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                </div>
                <div className='j-box' id='section4'>
                    <p className='js-box-title'>Java Projects</p>
                    <div className='top-box'>
                        <Image src={DImage} className="flies-img" />
                        <div className='num-title'>Flies AI</div>
                        <div className='num-text'>Neural network developed using the Processing framework. The population of flies develops through reinforcement learning to reach the target.</div>
                        <button className='nn-code-btn' onClick={() => {window.location.href="https://github.com/lukamircetic/cities-csv"}}>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                    <div className='bot-box'>
                        <div className='coming-soon'>Coming Soon!</div>
                    </div>
                </div>
                <div className='o-box' id='section5'>
                    <p className='js-box-title'>Miscellaneous Language Projects</p>
                    <div className='top-box'>
                        <Image src={CalImage} className="cal-img" />
                        <div className='flappy-title'>CalendarToDo - Svelte and Flask</div>
                        <div className='flappy-text'>A web application which allows for you to keep a to-do list for specific days. The tasks are stored in a database using Flask for future reference.</div>
                        <button onClick={() => {window.location.href="http://calendartodo.surge.sh/"} }
                            className='astar-btn'
                        >App</button>
                        <button className='code-btn' onClick={() => {window.location.href="https://github.com/lukamircetic/TodoApp"}}>
                        <FontAwesomeIcon icon={faGithub} size="lg" color='#1f1f1f' className='gh-symbol'/>
                        <a className='code-cl'>Code</a></button>
                    </div>
                    <div className='bot-box'>
                        <div className='coming-soon'>Coming Soon!</div>
                    </div>
                </div>
            </div>
            
        </body>
                //     <Row style={{marginTop: 20 + 'px'}}>
        //         <Table bordered responsive variant="dark">
        //             <thead>
        //                 <tr>
        //                     <th>Project</th>
        //                     <th>Language (Platform//Framework)</th>
        //                     <th>Source Code</th>
        //                     <th>Date</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>Handwritten Numbers NN</td>
        //                     <td>Python (PyTorch)</td>
        //                     <td>
        //                         <a href="https://github.com/lukamircetic/numberspytorch">Link</a>
        //                     </td>
        //                     <td>12/12/2019</td>
        //                 </tr>
        //                 <tr>
        //                     <td>DogsVsCats NN</td>
        //                     <td>Python (PyTorch)</td>
        //                     <td>
        //                         <a href="https://github.com/lukamircetic/DogsVsCatsNeuralNetwork">Link</a>
        //                     </td>
        //                     <td>22/12/2019</td>
        //                 </tr>
        //                 <tr>
        //                     <td>lukaweb (personal website)</td>
        //                     <td>Javascript (React-Bootstrap)</td>
        //                     <td>
        //                         <a href="https://github.com/lukamircetic/lukaweb">Link</a>
        //                     </td>
        //                     <td>25/12/2019</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Flies.ai</td>
        //                     <td>Java (Processing)</td>
        //                     <td>
        //                         <a href="https://github.com/lukamircetic/flies">Link</a>
        //                     </td>
        //                     <td>27/12/2019</td>
        //                 </tr>
        //                 <tr>
        //                     <td>A* Pathfinding Visualizer</td>
        //                     <td>Javascript (P5.js)</td>
        //                     <td>
        //                         <a href="https://github.com/lukamircetic/PathfindingVisualizer">Link</a>
        //                     </td>
        //                     <td>30/12/2019</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Flappy Bird Game and Neural Net</td>
        //                     <td>Javascript (P5.js)</td>
        //                     <td>
        //                         <a href="https://github.com/lukamircetic/flappybirdneuralnet">Link</a>
        //                     </td>
        //                     <td>01/01/2020</td>
        //                 </tr>
        //                 <tr>
                            
        //                 </tr>
        //             </tbody>
        //         </Table>
        //     </Row>
)