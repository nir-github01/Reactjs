
import { useState } from "react";


function ObjectCount() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [coins, setCoins] = useState({gold:0, silver:0, platinum:0})
  const  [gold, silver] = coins;
  function goldInc(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
       setCoins((coins)=>({...coins, gold:'gold + 1'}));
    // setCount((count)=>count + 1); //For Syncronous functionality
    // setCount((count)=>count + 1);
    
  }
  function silverInc(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
    setCoins((coins)=>({...coins, silver:'silver + 1'}));
    // setCount((count)=>count + 1); //For Syncronous functionality
    // setCount((count)=>count + 1);
  }

  function platinumInc(){
    // setCount(count + 1); // Normal Condition
    // setCount(count + 1);
    setCoins((coins)=>({...coins, platinum:'platinum + 1'}));
    // setCount((count)=>count + 1); //For Syncronous functionality
    // setCount((count)=>count + 1);
  }

  return (
    <div className="ObjectCount">
        <h4 >{ gold}</h4>   <h4 >{silver}</h4>  <h4 >{platinum}</h4>
        <button onClick={goldInc}>gIncreament</button> 
        <button onClick={silverInc}>sIncreament</button>
        <button onClick={platinumInc}>pIncreament</button>
   
    </div>
  );
}

export default ObjectCount;