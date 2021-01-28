import React from 'react';
import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import CryptoConverter from './CryptoConverter/CryptoConverter';
import './ConverterStyles.css';

function Converters() {
  return (
    <div className="converters">
      <div className="converter">
        <CurrencyConverter />
      </div>
      <div className="converter">
        <CryptoConverter />
      </div>
    </div>
  );
}

export default Converters;