// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";




function App() {

  const [count, setCount] = useState('0')

  function increament(){
    setCount(count + 1);
  }
  return (
    <div className="App">
        <h4>{count}</h4>
        <button onClick={increament}>Increament</button>   
    </div>
  );
}

export default App;
