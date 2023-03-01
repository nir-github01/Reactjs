
import { useState } from "react";




function ObjectCount() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [coins, setCoins] = useState({gold:0; silver:0; platinum:0})

  function goldInc(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
       setCoins((coins)=>({...coins, gold:gold + 1}));
    // setCount((count)=>count + 1); //For Syncronous functionality
    // setCount((count)=>count + 1);
  }
  function silverInc(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
       setCoins(...coins, silver + 1);
    // setCount((count)=>count + 1); //For Syncronous functionality
    // setCount((count)=>count + 1);
  }

  function platinumInc(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
       setCoins(...coins, platinum + 1);
    // setCount((count)=>count + 1); //For Syncronous functionality
    // setCount((count)=>count + 1);
  }

  function decreament(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
    if(count >= 1){
      setCount((count)=>count - 1);
    }
     //For Syncronous functionality
    // setCount((count)=>count - 1);
  }

  function reset(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);

    setCount((count)=> count =0); //For Syncronous functionality
    setCount((count)=> count =0);
  }
  return (
    <div className="ObjectCount">
        <h4 >{gold}</h4>   <h4 >{silver}</h4>  <h4 >{platinum}</h4>
        <button onClick={goldInc}>Increament</button> 
        <button onClick={silverInc}>Increament</button>
        <button onClick={platinumInc}>Increament</button>
        <button onClick={decreament}>Decreament</button>  
        <button onClick={reset}>Reset</button>  
    </div>
  );
}

export default ObjectCount;