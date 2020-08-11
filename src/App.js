import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/headerNav/Navbar';
import './App.css';
import './about.css';
import '../src/portfolio.css';
import '../src/footer.css';
import About from './component/pages/about/About';
import Portfolio from './component/pages/portfolio/Portfolio';
import Contact from './component/pages/contact/Contact';
import Home from './component/pages/Home';

const App = () => {

  return (
    
    <Router>
        <div>
          <Navbar/>
         
            <Switch>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
              <Route exact path='/portfolio' component={Portfolio}/>
            </Switch>
        
        </div>
    </Router>
  )
}

export default App;
