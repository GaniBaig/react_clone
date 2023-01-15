import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Logo from "./Pictures/blowhorn.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [fix,setFix]=useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  function setFixed(){
   if (window.scrollY>=6000 && window.scrollY<7200){
    setFix(true)}
    else{
      setFix(false)
    }
   }
  window.addEventListener("scroll",setFixed)
  return (
    <div>
    <nav className={fix?'navbar2':"navbar"}>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo}></img>
        </Link>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <a href="#" id="style-2" data-replace="Home"><span>Home</span></a>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              
            <a href="#" id="style-2" data-replace="Our Solutions"><span>Our Solutions</span></a>
              <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            ><a href="#" id="style-2" data-replace="Our Story"><span>Our Story</span></a>
             
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <a href="#" id="style-2" data-replace="Become a Driver-Superhero"><span>Become a Driver-Superhero</span></a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
           <a href="#" id="style-2" data-replace="Resources"><span>Resources</span></a>
             </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <a href="#" id="style-2" data-replace="Integrations"><span>Integrations</span></a>
            </Link>
          </li>
                <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <a href="#" id="style-2" data-replace="Track"><span>Track</span></a>
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar;
