import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Button } from '../../Button';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: ''
}

class ContactForm extends Component {
      state = initialState;
    
      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      validate = () => {
        let nameError = "";
        let emailError = "";
        let subjectError = "";
        let messageError = "";

        if(this.state.name < 4) {
          nameError = 'Name cannot be blank';
        }
        if(!this.state.email.includes('@')){
          emailError = 'Iinvalid email';
        }
        if(!this.state.subject) {
          subjectError = 'Please add a subject';
        }
        if(!this.state.message) {
          messageError = 'Please add your message';
        }
        if(emailError || nameError || subjectError || messageError) {
          this.setState({emailError, nameError, subjectError, messageError})
          return false;
        }
        return true;
      };

      onSubmit = (e) => {
        e.preventDefault(e);
        const isValid = this.validate();
        if(isValid) {
          // clear form
          this.setState(initialState);
        }
        const { name, email, subject, message } = this.state;

        // eslint-disable-next-line
        axios.post('/contact', { name, email, subject, message })
          .then(res => {
            console.log(res)
          });  
      }

  render() {
    const { name, email, subject,message } = this.state;
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
            <div className='half left'>
                <input 
                name='name'
                placeholder='Full Name'
                value={name} 
                onChange={e => this.handleChange(e)}
                />
                <div style={{fontSize: 23, color: "red"}}>
                  {this.state.nameError}
                </div>
                <input 
                name='email'
                placeholder='Email'
                value={email} 
                onChange={e => this.handleChange(e)}
                />
                <div style={{fontSize: 23, color: "red"}}>
                  {this.state.emailError}
                </div>
              <input 
                name='subject'
                placeholder='Subject'
                value={subject} 
                onChange={e => this.handleChange(e)}
                />
                <div style={{fontSize: 23, color: "red"}}>
                  {this.state.subjectError}
                </div>
            </div>
            <div className='half right'>
              <textarea
                name='message' 
                placeholder = 'Message'
                value={message} 
                onChange={e => this.handleChange(e)}
                />
                <div style={{fontSize: 23, color: "red"}}>
                  {this.state.messageError}
                </div>
            </div>
            <Button onClick={e =>this.onSubmit(e)}>Submit</Button>
        </form>
        
      </Fragment>
    )
  };

}
export default ContactForm;