import React from 'react'
import './Biomedical.css';
import DP1IMG from './assets/dp1.jpeg';
import DP1PDF from './assets/dp1.pdf';
import DP2IMG1 from './assets/dp2_1.jpeg';
import DP2IMG2 from './assets/dp2_2.jpeg';
import DP2IMG3 from './assets/dp2_3.jpeg';
import DP2IMG4 from './assets/dp2_4.jpeg';
import DP2PDF from './assets/dp2.pdf';
import DP3IMG1 from './assets/dp3_1.jpeg';
import DP3IMG2 from './assets/dp3_2.jpeg';
import DP3IMG3 from './assets/dp3_3.jpeg';
import DP3PDF from './assets/dp3.pdf';
import DP4IMG1 from './assets/dp4_1.jpeg';
import DP4IMG2 from './assets/dp4_2.jpeg';
import DP4IMG3 from './assets/dp4_3.jpeg';
import DP4PDF from './assets/dp4.pdf';
import Y2DPIMG1 from './assets/dpy2_1.jpeg';
import Y2DPIMG2 from './assets/dpy2_2.jpeg';
import Y2DPDF from './assets/dpy2.pdf';
import { Link, animateScroll as scroll } from 'react-scroll';
export const Biomedical = () => (
    <body>
        <div className='body-biomed'/>
        <h className='bmp-title'>Biomedical Projects</h>
            <div className='bm-btn-tray'>
                <Link 
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    >
                <button className='compl-year-btn'>
                    Year 1
                </button>
                </Link>
                <Link 
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    >
                <button className='compl-year-btn'>
                    Year 2
                </button>
                </Link>
                <Link 
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    >
                <button className='ncp-year-btn'>
                    Year 3
                </button>
                </Link>
                <Link 
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                <button className='ncp-year-btn'>
                    Year 4
                </button>
                </Link>
                <Link 
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                <button className='ncp-year-btn'>
                    Year 5
                </button>
                </Link>
            </div>
            <div className='year-box'>
                <section className='year-1' id='section1'>
                    <h1>first year - 2018/19</h1>
                    <h2 className='year-text'>The projects from this year were class projects from the course IBEHS 1P10. They're purpose was to teach 
                        us the basics of Python, AutoCAD, engineering, materials and more.</h2>
                    <div className='p1-box'/>
                    <div className='p2-box'>
                        <h3 className='dp1-title'>Design Project 1 - Ostomy Bag Solution</h3>
                        <h2 className='dp1-t1'>For this project I was in a group of 4 people. We were assigned to an ostomate and were tasked
                            to come up with a solution to the patient's problem. Our patient required a solution that 
                            would allow for their existing ostomy device to be more mobile and have a larger carrying capacity so that they 
                            would not have to wake up as frequently at night. The expectations for this project were to make a low-fidelity design and a written proposal.
                        </h2>
                        <h2 className='dp1-t2'>
                            As a result my group designed a medical device called the Ostobox. The low-fidelity prototype is an extension to the patient's current device
                            consisting of a tubes connecting to a box which can be emptied. Most of the parts were 3d-printed. The written proposal is attached and contains more details about the project.
                        </h2>
                        <img src={DP1IMG} className='dp1-img'/>
                        
                        <a href={DP1PDF}><button className='dp1-pdf-btn'>PDF</button></a>
                        
                    </div>
                    <div className='p3-box'>
                        <h3 className='dp1-title'>Design Project 2 - Artificial Hip Implant</h3>
                        <h2 className='dp1-t1'>My group was assigned a specific case study for a patient with a hip pathology. The patient is an active 19 year old male 
                        who suffers from dysplasia of the right hip. Due to the age of the patient, we decided to create a medical device that would have
                        high osseointegration so that the patient would not need a replacement later on in life.
                        </h2>
                        <h2 className='dp2-t2'>
                            The resulting device created had 5 parts: Acetabular Shell, Artificial Ligament, Liner, Femoral Ball and Neck and the Stem. 
                            For the final deliverable, all of these components were designed with AutoCAD and 3D-printed. The artificial ligament was printed with a special flexible material to demonstrate its movement capabilities.
                            The stem was designed using a computer algorithm which randomly generated holes, to provide an optimal porous characteristic for osseointegration. Read more about this in the research board attached below.
                        </h2>
                        <img src={DP2IMG1} className='dp2_1-img'/>
                        <img src={DP2IMG2} className='dp2_2-img'/>
                        <img src={DP2IMG3} className='dp2_3-img'/>
                        <img src={DP2IMG4} className='dp2_4-img'/>
                        
                        <a href={DP2PDF}><button className='dp2-pdf-btn'>PDF</button></a>
                        
                    </div>
                    <div className='p4-box'>
                        <h3 className='dp1-title'>Design Project 3 - The Reverb (Sound Sensing Device)</h3>
                        <h2 className='dp1-t1'>This project was more open for each group to decide what to do. The objective 
                        was to create a wearable medical device. My group decided to make a noise-detecting device that would alert 
                        the user when the sound entering in their ears would become damaging. The device was designed to work in two ways.

                        </h2>
                        <h2 className='dp2-t2'>
                             It could be worn on the user's wrist and capture noise from the users surroundings. This would be useful in construction or factory settings.    
                        </h2>
                        <h2 className='dp3-t3'>
                            The other way to use it is to attach the module into headphones. This would then alert the user when 
                            they have been listening on their heaphones to the point where there could possibly be damage to the ear. 
                        </h2>
                        <h2 className='dp3-t5'>
                            The algorithm that determines whether a user has been listening to a point where there could be damage is a running average.
                        </h2>
                        <h2 className='dp3-t4'>
                            A high fidelity prototype and a working prototype were both constructed using a Raspberry Pi and 3D-printed materials. 
                            The written technical report with more details is attached below.
                        </h2>
                        <img src={DP3IMG1} className='dp3_1-img'/>
                        <img src={DP3IMG2} className='dp3_2-img'/>
                        <img src={DP3IMG3} className='dp3_3-img'/>
                        
                        <a href={DP3PDF}><button className='dp3-pdf-btn'>PDF</button></a>
                        
                    </div>
                    <div className='p5-box'>
                        <h3 className='dp1-title'>Design Project 4 - SensiTouch (Elevator Accessibility Solution)</h3>
                        <h2 className='dp1-t1'>A quadriplegic expressed their concern for elevator accessibility. They said that they could not reach most elevator buttons and
                        and as a result they required the assistance of a person to use elevators. My group was tasked with finding a solution that would help
                        quadriplegics use elevators more easily and independently.
                        </h2>
                        <h2 className='dp4-t2'>
                            The solution designed would be an attachment to the existing elevator technology. It consists of a mat and and three modules. Two modules contain motored 
                            mechanisms which will be used to press the elevator buttons. 
                        </h2>
                        <h2 className='dp4-t3'>
                            The mat contains pressure
                            sensors that when rolled over or stepped on will trigger the corresponding module's mechanism to press the button.
                        </h2>
                        <h2 className='dp4-t4'>
                            The third larger module houses the Raspberry Pi and wires connecting all the components. It serves as the hub for the device. This is the first project
                            where the device is a high-fidelity working prototype. 
                        </h2>
                        <h2 className='dp4-t5'>
                            This device uses a Raspberry Pi with a PCB serving as a central destination for all the wires. The wires from all the sensors and motors
                            were sautered onto the PCB and then connected to the Raspberry Pi. This allowed for the build to be better organized and more compact. The technical report is attached below
                        </h2>
                        <img src={DP4IMG1} className='dp4_1-img'/>
                        <img src={DP4IMG2} className='dp4_2-img'/>
                        <img src={DP4IMG3} className='dp4_3-img'/>
                        
                        <a href={DP4PDF}><button className='dp4-pdf-btn'>PDF</button></a>
                        
                    </div>
                </section>
                    
                <section className='year-2' id='section2'>
                    <h1>second year - 2019/2020</h1>
                    <h2 className='year-text'>This year the design course was IBEHS 2P03 Genetic Engineering. There was only one design project that spanned over the whole semester.</h2>
                    <div className='p1-box'></div>
                    <div className='py2-box'>
                        <h3 className='dp1-title'>Auto C.A.D. (Coronary Artery Disease)</h3>
                        <h2 className='y2dp-t1'>The objective for this project was to solve a biological problem using synthetic biology.
                        My group decided to tackle the problem of arterial plaque and try to create a bacteria that can dissolve it.
                        </h2>
                        <h2 className='y2dp-t2'>
                            E. Coli cells will be modified using techniques of PCR, digestion, DNA purification, ligation and transformation. 
                            Matlab Simbiology will also be used to model the biological circuit for this bacteria. Additionally, plasmids and other components were selected using
                            were selected using Genome Compiler and NCBI. 
                        </h2>
                        <h2 className='y2dp-t4'>
                            The results from the project and more can be found in the formal research document.
                        </h2>
                        <img src={Y2DPIMG1} className='dpy2_1-img'/>
                        <img src={Y2DPIMG2} className='dpy2_2-img'/>
                        <a href={Y2DPDF}><button className='dpy2-pdf-btn'>PDF</button></a>
                    </div>
                </section>
                <section className='year-3' id='section3'>
                    <h1>third year - 2020/2021</h1>
                    <h4 className='comg-soon'>Coming 2021</h4>
                    <div className='p1-box'></div>
                </section>
                <section className='year-4' id='section4'>
                    <h1>fourth year - 2021/2022</h1>
                    <h4 className='comg-soon'>Coming 2022</h4>
                    <div className='p1-box'></div>
                </section>
                <section className='year-5' id='section5'>
                    <h1>fifth year - 2022/2023</h1>
                    <h4 className='comg-soon'>Coming 2023</h4>
                    <div className='p1-box'></div>
                </section>
            </div>




        </body>

)