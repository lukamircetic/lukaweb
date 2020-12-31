import React from 'react';
import { useState } from 'react'
import { About } from './About';
import { Layout } from './components/layout';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ClickAwayListener } from '@material-ui/core';
import { Link, animateScroll as scroll } from 'react-scroll';
  function App(){
  return (
    <React.Fragment>
         <div className="nav-container">
          <Navbar>
            <NavTitle>Luka Mircetic</NavTitle>
            <Link 
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                <NavItem icon="About"/>
              </Link>
            <Link 
              activeClass="active"
              to="featured"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                <NavItem icon="Projects"/>
              </Link>
            <Link 
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              >
                <NavItem icon="Contact"/>
            </Link>
          </Navbar>
         </div>
          <Layout>
              <About />
          </Layout>
    </React.Fragment>
  );
}

function Navbar(props) {
  return (
    <nav className='navbar'>
     <ul className='navbar-nav'>{props.children}</ul> 
    </nav>
  );
}

function NavTitle(props){
  return (
    <li className='nav-title'>
      <a href="/">
      {props.children}
      </a>
    </li>
  );
}
function NavItem(props){
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
  };
  return(
    <ClickAwayListener onClickAway={handleClickAway}>
    <li className='nav-item'>
      <a href={`/#${props.icon.toLowerCase()}`} className='icon-button' onClick={() => setOpen(!open)}>
        { props.icon }
      </a>
      
      {open && props.children}
    </li>
    </ClickAwayListener>
  );
}
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className='menu-item'>
        <span className='drop-button'>{props.leftIcon}</span>
        {props.children}
      </a>
    );
  }
  return(
    <div className='dropdown'>
      <Link to="/biomedical"><DropdownItem leftIcon={<PlusIcon/>}>Biomedical</DropdownItem></Link>
      <Link to="/programming"><DropdownItem
        leftIcon={<CogIcon />}>
        Software</DropdownItem></Link>
      <Link to="/other"><DropdownItem 
      leftIcon={<ChevronIcon/>}>
        Other</DropdownItem></Link>
    </div>
  );
}
export default App;
