
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
        <input type="number" value={number} onChange={change} />
        <h3>Sum: {sum}</h3>
    </div>
  )
}

export default App
