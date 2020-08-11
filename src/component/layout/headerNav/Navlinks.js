import React from 'react';
import { Link } from 'react-router-dom';


const Navlinks = () => {
  return(
    <div className="navlinks">
      <ul className="navlinks_wrapper">
          <li>
            <Link to='/home'>Home</Link>
          </li>

           {/* <li>
            <Link to='/about'>About</Link>
          </li>

           <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li> */}
      </ul>
    </div>
  )
}

export default Navlinks;