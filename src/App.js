import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import BudgetTracker from './BudgetTracker';
import CryptoCurrencyTracker from './CryptoCurrencyTracker';
import CurrencyTracker from './CurrencyTracker';


const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/budgettracker" render={ () => <BudgetTracker />}/>
        <Route path="/cryptocurrencytracker" render={ () => <CryptoCurrencyTracker />}/>
        <Route path="/currencytracker" render={ () => <CurrencyTracker />}/>  
      </div>
    </div>
  );
}

export default App;