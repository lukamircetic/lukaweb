import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export const Contact = () => (
    <Container>
        <Row>
        <h2 style={{marginTop: 100 + 'px', marginLeft: 400 + 'px', fontSize: 90 + 'px' }}>Contact</h2>
        <h14 style={{marginLeft:280 + 'px'}}>For business, job or collaboration opportunities feel free to email me at</h14>
        <h2 style={{marginTop: 100 + 'px', marginLeft: 450 + 'px', fontSize: 20 + 'px'}}>luka.mircetic@gmail.com</h2>
        </Row>
        <Row>
            <h14 style={{marginLeft:457 + 'px'}}>Or reach out on social media!</h14>
        </Row>
        <Row style={{marginLeft: -100 + 'px', marginTop: 100 + 'px'}}>
            <div className="footer">
                <p>Website designed by Luka Mircetic 2020</p>
            </div>
        </Row>
    </Container>
        
        
)