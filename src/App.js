import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import './App.css';

import Contact from './component/pages/contact/Contact';
import Home from './component/pages/Home';

const App = () => {
  return (
    <Fragment>
        <Router>
            <div>
              <Navbar />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/contact' component={Contact}/>
                  <Route path='/github' component={() =>{
                    window.location.href = 'https://github.com/Bojurie?tab=repositories';
                    return null;
                  }}/>
                  <Route path='/linkedin' component={() =>{
                    window.location.href = 'https://www.linkedin.com/in/bojurie-rogers-wright/';
                    return null;
                  }}/>
                  <Route path='/facebook' component={() =>{
                    window.location.href = 'https://www.facebook.com/bojurie.rogers/';
                    return null;
                  }}/>
                  <Route path='/instagram' component={() =>{
                    window.location.href = 'https://www.instagram.com/bojuriescode/';
                    return null;
                  }}/>

                  {/* Past work links */}
                  <Route path='/birthday' component={() =>{
                    window.location.href = 'https://birthday-countdown-appl.herokuapp.com/';
                    return null;
                  }}/>

                  <Route path='/5plogix'  component={() =>{
                    window.location.href = 'https://www.5p-logix.com/index.html';
                    return null;
                  }}/>
                  <Route path='/brw' component={() =>{
                    window.location.href = 'https://www.beautifulresponsiveweb.com';
                    return null;
                  }}/>
                  <Route path='/gitf' component={() =>{
                    window.location.href = 'https://githubprofiler2020.netlify.app/';
                    return null;
                  }}/>
                  <Route path='/propm' component={() =>{
                    window.location.href = 'https://prop-manage-application.herokuapp.com';
                    return null;
                  }}/>
                  <Route path='/newL' component={() =>{
                    window.location.href = 'https://www.beautifulresponsiveweb.com';
                    return null;
                  }}/>
                  <Route path='/dailysmarty' component={() =>{
                    window.location.href = 'https://dailysmarty-ui.herokuapp.com/';
                    return null;
                  }}/>
                  <Route path='/Scheduler' component={() =>{
                    window.location.href = 'https://redux-course-scheduler.herokuapp.com/';
                    return null;
                  }}/>


                </Switch>
            </div>
        </Router>
    </Fragment>
  )
}

export default App;
