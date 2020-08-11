import React from 'react';
import Navlinks from '../headerNav/Navlinks';
import SocialMedia from '../headerNav/Social';
import PropTypes from 'prop-types';

const Navbar = ({title}) => {
  return(
    <nav className='navbar primary'>
      <Navlinks />
      <h1>{title}</h1>
      <SocialMedia /> 
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Bojurie Rogers-Wright',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;