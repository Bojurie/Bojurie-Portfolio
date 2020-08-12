import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import './App.css';
import './about.css';
import '../src/portfolio.css';
import '../src/footer.css';

import Contact from './component/pages/contact/Contact';
import Home from './component/pages/Home';

const App = () => {

  return (
    <Router>
        <div>
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
        </div>
    </Router>
  )
}

export default App;
