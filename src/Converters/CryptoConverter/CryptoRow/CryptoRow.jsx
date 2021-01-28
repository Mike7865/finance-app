import React from 'react'

export default function CryptoRow(props) {
  const {
    cryptoOptions,
    selectedCrypto,
    onChangeCrypto,
    onChangeAmount,
    amount
  } = props

  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCrypto} onChange={onChangeCrypto}>
        {cryptoOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
