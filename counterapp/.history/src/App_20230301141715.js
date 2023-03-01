// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";




function App() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [count, setCount] = useState(()=>{
    console.log('useState Excuted');
    return 0;
  })

  function increament(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);

    setCount((count)=>{count + 1}); //For Syncronous functionality
    setCount((count)=>{count + 1});
  }

  function decreament(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);

    setCount((count)=>{count - 1}); //For Syncronous functionality
    setCount((count)=>{count - 1});
  }
  return (
    <div className="App">
        <h4>{count}</h4>
        <button onClick={increament}>Increament</button> 
        <button onClick={decreament}>Decreament</button>  
        <button onClick={reset}>Reset</button>  
    </div>
  );
}

export default App;
