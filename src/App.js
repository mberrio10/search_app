import './App.css';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as router,
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
