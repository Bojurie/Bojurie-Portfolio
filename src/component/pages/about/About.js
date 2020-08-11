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
                    Through the years my passion
                    for anything Technology have always been my compass.Even as a young boy, i have alway been intriged by computer and other technologies so much so that i usually find myself dissamply computers just to see how it works.As time passes i moved from mechanical to software engineering.That was when i decided to start teaching myself how to program.i first started about a year and the half ago by going through resources like free codecamp, Udemy, Bottega etc.From building web applications to building mobile applications i have learned programing languages such as HTML5, CSS3, JavaScript, Swift etc.So weather it Web or Mobile App you need i 'm your guy so please don'
                    t hesitate to contact me
                    if you have any questions.
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
