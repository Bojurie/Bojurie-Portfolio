import React, { Fragment } from 'react';
import About from '../pages/about/About';
// import Portfolio from './portfolio/Portfolio';
import Showcase from './ShowcaseSection/Showcase';
import Cards from './portfolio/Cards';

import '../../App.css';
import Footer from './Footer';


const Home = () => {
  
  return (
    <Fragment>
   
        {/* <div className="home_heading"> */}
      <Showcase />
        {/* </div>   */}
        
      <About/>
      {/* <Portfolio /> */}
      <Cards />
      <Footer />

    </Fragment>
  )
}
// Home.defaultProps = {
//   heading: 'Full Stack Web Developer',
//   paragraph: 'Portfolio Gallery'
// };

// Home.propTypes = {
//   heading: PropTypes.string.isRequired,
//   paragraph: PropTypes.string.isRequired
// };
export default Home;