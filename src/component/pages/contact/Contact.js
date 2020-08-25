import React, { Fragment } from 'react';
import './Contact.css';
import Footer from '../footer/Footer';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
      <Fragment> 
        <div className='contact-container'>
          <div className="header">
            <h1>CONTACT &nbsp;</h1>
            <p>+1 714-306-2369</p>
            <h3>Fill out the form below to learn more!</h3>
          </div>
          <ContactForm />
          
        </div>
         <Footer />
      </Fragment>
    );
}

export default Contact;
