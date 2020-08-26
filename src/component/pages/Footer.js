import React, { Fragment } from 'react';
import SocialMedia from '../../component/layout/headerNav/Social';
import CopyrightYear from 'react-copyright-year';

import '../../footer.css';

const Footer = () => {
  return(
    <Fragment>
      <div className='footer'>
          
          <SocialMedia className='social'/>
          <CopyrightYear /> By Bojurie Rogers-Wright 
      </div>
    </Fragment>
  )
}

export default Footer;