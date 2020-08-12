import React, { Fragment } from 'react';
import About from '../pages/about/About';
import Portfolio from './portfolio/Portfolio';
import Footer from '../pages/footer/Footer';

import PropTypes from 'prop-types';


const Home = ({heading, paragraph}) => {
  
  return (
    <Fragment>
    <div className='home'>
        <div className="home_heading">
          <h1>{heading}</h1>
          <p>{paragraph}</p>
        </div> 
      <About/>
      <Portfolio />
      <Footer />
    </div>
    </Fragment>
  )
}
Home.defaultProps = {
  heading: 'Full Stack Web Developer',
  paragraph: 'Portfolio Gallery'
};

Home.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired
};
export default Home;