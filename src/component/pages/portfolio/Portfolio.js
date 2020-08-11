import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from './card';

const image = require('../../../assets/Birthday Countdown.png');
const image1 = require('../../../assets/5PLogix.png');
const image2 = require('../../../assets/brw4.png');
const image3 = require('../../../assets/Github finder.png');
const image4 = require('../../../assets/Property Managment.png');
const image5 = require('../../../assets/class selector.png');

const Portfolio = ({heading}) => {
    return (
      <Fragment>
        <div className='portfolio'>
          <div className='container'>
             <div className='portfolio_heading col-lg-12'>
                <h1>
                  {heading}
                </h1>
              </div>
              <div className='portfolio-images'>
                  <a className='card-image' href = 'https://birthday-countdown-appl.herokuapp.com/' target='blank'>
                      <Card image={image}  />
                  </a>
                  <a className='card-image' href = 'https://www.5p-logix.com/' target='blank'>
                    <Card image={image1} />
                  </a>
                  <a className='card-image' href = 'https://www.beautifulresponsiveweb.com/' target='blank'>
                    <Card image={image2} />
                  </a>
                  <a className='card-image' href = 'https://githubprofiler2020.netlify.app/' target='blank'>
                    <Card image={image3} />
                  </a>
                  <a className='card-image' href = 'https://prop-manage-application.herokuapp.com/' target='blank'>
                    <Card image={image4} />
                  </a>
                  <a className='card-image' href = 'https://redux-course-scheduler.herokuapp.com/' target='blank'>
                    <Card image={image5} />
                  </a>
              </div>
          </div>
        </div>
      </Fragment>
    );
}

Portfolio.defaultProps = {
  heading: 'Portfolio',
};

Portfolio.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Portfolio;
