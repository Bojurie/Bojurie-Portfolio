import React, { useState } from 'react';
import { Link, } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  
    return(
      <nav className='NavbarItems'>
          <h1 className='navbar-logo' onClick={closeMobileMenu}><i className="fab fa-bootstrap"></i>ojurie <i className="far fa-registered"></i>ogers -<i className="fab fa-wikipedia-w"></i>right</h1>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/github' className='nav-links' onClick={closeMobileMenu} target='blank'>
                      <i className="fab fa-github"></i>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/linkedin' className='nav-links' onClick={closeMobileMenu} target='blank'>
                      <i className="fab fa-linkedin"></i>
                    </Link>
                </li>
                 <li className='nav-item'>
                    <Link to='/facebook' className='nav-links' onClick={closeMobileMenu} target='blank'>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                </li>
                 <li className='nav-item'>
                    <Link to='/instagram' className='nav-links' onClick={closeMobileMenu}
                    target='blank'>
                      <i className="fab fa-instagram"></i>
                    </Link>
                </li>
          </ul>
      </nav>
    )
  }
export default Navbar;