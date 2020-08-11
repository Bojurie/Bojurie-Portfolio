import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const About = ({heading}) => {
    return (
        <Fragment>
            <div className='about'> 
                <div className="aboutHeading">
                    <h1 className='col-lg-12'>
                        {heading}
                    </h1>
                </div>  
                <div className="about_paragraph">
                    <p className='col-lg-12'>
                    Hey there!My name is Aziz Mohamed and I 'm a 21 year old male based out of beautiful Vancouver, British Columbia. I'
                    m currently self - teaching myself Front - End Web Development through FreeCodeCamp 's online curriculum.

                    Here you 'll see my web development portfolio consisting of my personal projects. I am competent and well-versed in HTML5, CSS3, jQuery and Javascript.

                    My passion is to learn to use technology to help solve real world challenges and help make user experiences go smoothly and seamlessly
                    </p>
                </div>
            </div>
            
      </Fragment>
    );
}
About.defaultProps = {
    heading: 'About',
};

About.propTypes = {
    heading: PropTypes.string.isRequired,
};
export default About;
