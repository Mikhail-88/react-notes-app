import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Alert from './components/alert';
import AlertState from './context/alert/AlertState';
import FirebaseState from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
