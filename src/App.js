import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavbarFiles/Navbar';
import BudgetTracker from './BudgetTrackerFiles/BudgetTracker';
import CurrencyConverter from './CurrencyConverterFiles/CurrencyConverter';
import CryptoCurrencyTracker from './CryptoTrackerFiles/CryptoCurrencyTracker';


const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/budgettracker" render={ () => <BudgetTracker />}/>
        <Route path="/currencyconverter" render={ () => <CurrencyConverter />}/>
        <Route path="/cryptocurrencytracker" render={ () => <CryptoCurrencyTracker />}/>
      </div>
    </div>
  );
}

export default App;