
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropDownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}


function DropDownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');

  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item" 
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    );
  }


  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} 
          goToMenu="settings">
          >
            Settings
      </DropDownItem>

        </div>
      </CSSTransition >



      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
  <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}  goToMenu="main"> >
            Settings
      </DropDownItem>

      
      </div>
      </CSSTransition>
    </div >
  )
}