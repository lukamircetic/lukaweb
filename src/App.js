import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Programming } from './Programming';
import { Layout } from './components/layout';
import { Biomedical } from './Biomedical';
import { Other } from './Other';
import { Gallery } from './Gallery';
import Social from './components/Social'
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import gif from './assets/dribbling.gif';
import { ClickAwayListener } from '@material-ui/core';

  function App(){
  return (
    <React.Fragment>
        <Router basename="/">
         <Navbar>
           <NavTitle logo={gif}>Luka Mircetic</NavTitle>
           <Link className="nav-item" to="/about"><NavItem href="/" icon="About"/></Link>
           <Link className="nav-item" to="/gallery"><NavItem icon="Gallery"/></Link>
           <Link className="nav-item" to="/contact"><NavItem icon="Contact"/></Link>
           <NavItem icon="Projects">
            <DropdownMenu/>
           </NavItem>
         </Navbar>
          <Social/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/programming" component={Programming} />
              <Route path="/biomedical" component={Biomedical} />
              <Route path="/other" component={Other} />
              <Route component={NoMatch} />

            </Switch>
          </Layout>
        </Router>
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
      <img className='nav-img' src={gif}/>
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
      <a href="#" className='icon-button' onClick={() => setOpen(!open)}>
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
