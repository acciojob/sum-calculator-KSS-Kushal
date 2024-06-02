
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum, setSum] = useState(0);
  const [number, setNumber] = useState('');
  const change = (e) => {
    const val = e.target.value;
    setNumber(val);
    setSum(prev => prev + parseInt(val));
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" value={number} onChange={change} />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
