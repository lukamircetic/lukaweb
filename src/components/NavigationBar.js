import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import gif from '../assets/dribbling.gif';
const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    a, .navbar-brand, .navbar-nav, .nav-link .nav-dropdown {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img
                    src={gif}
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Luka Mircetic"
                />{' '}
                Luka Mircetic
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link> 
                                <Link to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/about">About</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                                <Nav.Link>
                                    <Link to="/projects">Projects Home</Link>
                                </Nav.Link>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to ="/programming">Programming</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to ="/biomedical">Biomedical</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link>
                                    <Link to ="/other">Other</Link>
                                </Nav.Link>
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)