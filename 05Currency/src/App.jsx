import React, { useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/useCurrency';

function App() {
  const [data, setData] = useState([]);
  const [currency, setCurrency] = useState('usd');
  const [rate, setRate] = useState({}); // Define the rate state variable

  useEffect(() => {
    fetch(`https://api.frankfurter.app/currencies`)
      .then((res) => res.json())
      .then((data) => setData(Object.keys(data)));
  }, []);

  useEffect(() => {
    // Fetch currency rate when currency changes
    fetch(`https://api.frankfurter.app/latest?amount=1&from=${currency}&to=INR`)
      .then((res) => res.json())
      .then((data) => setRate(data.rates));
  }, [currency]);

  return (
    <>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {data.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Display rate in an input field */}
      <input 
        value={rate.INR || ''} // Display rate for INR
        readOnly // Make the input field read-only
      />
    </>
  );
}

export default App;
