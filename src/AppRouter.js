import './App.css';
import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import User from './components/User';


function AppRouter() {
  return (
    <Router>
    <div className="App">
      <Route path='/' exact>
        <div>This is Home Page</div>
      </Route>

      <Route path='/about' exact>
        <div>This is About Page</div>
      </Route>

      <Route path='/user/:username' exact component={User}></Route>

      <ul>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/about'>About Page</Link>
        </li>
        <li>
          <Link to='/user/:Peter'>User</Link>
        </li>
      </ul>
      
    </div>
    </Router>
  );
}

export default AppRouter;
