import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../../Converters/ConverterStyles.css';
import CryptoRow from './CryptoRow/CryptoRow';

const BASE_URL = "http://api.coinlayer.com/";

function CryptoConverter() {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 150,
    },
  });

  const classes = useStyles();

  const [cryptoOptions, setCryptoOptions] = useState([])
  const [fromCrypto, setFromCrypto] = useState()
  const [toCrypto, setToCrypto] = useState()
  const [exhangeRate, setExhangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCrypto, setAmountInFromCrypto] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCrypto) {
    fromAmount = amount
    toAmount = amount * exhangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exhangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCrypto = Object.keys(data.rates)[0]
        setCryptoOptions([data.timestamp, ...Object.keys(data.rates)])
        setFromCrypto(data.timestamp)
        setToCrypto(firstCrypto)
        setExhangeRate(data.rates[firstCrypto])
      })
  }, [])

  useEffect(() => {
    if (fromCrypto != null && toCrypto != null) {
      fetch(`${BASE_URL}?base=${fromCrypto}&symbols=${toCrypto}`)
        .then(res => res.json())
        .then(data => setExhangeRate(data.rates[toCrypto]))
    }
  }, [fromCrypto, toCrypto])


  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCrypto(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCrypto(false)
  }


  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <h1>Cryptos</h1>
        <CryptoRow 
          cryptoOptions={cryptoOptions}
          selectedCrypto={fromCrypto}
          onChangeCrypto={e => setFromCrypto(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className="equals">=</div>
        <CryptoRow 
          cryptoOptions={cryptoOptions}
          selectedCrypto={toCrypto}
          onChangeCrypto={e => setToCrypto(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </Card>
    </div>
  );
}

export default CryptoConverter;