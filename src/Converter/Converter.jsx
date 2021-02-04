import React from 'react';
import CurrencyConverter from './CurrencyConverter/CurrencyConverter';
import './ConverterStyles.css';

function Converter() {
  return (
    <div className="converter-container">
      <div className="converter">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default Converter;