import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route } from 'react-router-dom';
import Converter from './Converter/Converter';
import ExpenceTracker from './ExpenceTracker/ExpenceTracker';

function App (props) {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-content">
        <Route path="/converter" render={ () => <Converter />}/>
        <Route path="/expencetracker" render={ () => <ExpenceTracker />}/>
      </div>
    </div>
  )
}

export default App;

