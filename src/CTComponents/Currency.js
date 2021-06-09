import React from 'react';
import './Currency.css';

const Currency = ({
  name,
  rates,
  symbols,
}) => {
  return (
    <div className='currency-container'>
      <div className='currency-row'>
        <div className='currency'>
          <h1>{name}</h1>
          <p className='currency-symbol'>{symbols}</p>
        </div>
        <div className='currency-rates'>{rates}</div>
      </div>
    </div>
  );
};

export default Currency;