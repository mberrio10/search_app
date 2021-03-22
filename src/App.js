import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Index from './components/layout/Index';
import { Provider } from './context';
// import FetchRepos from './components/layout/useFetchRepos';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Index} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
