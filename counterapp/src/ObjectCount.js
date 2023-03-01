
import React, { useState } from "react";


function Objectcount() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [coins, setCoins] = useState({gold:0, silver:0, platinum:0})
  const  {gold, silver, platinum} = coins;
  function goldInc(){
       setCoins({...coins, gold:gold + 1});
  }
  function silverInc(){
    setCoins({...coins, silver:silver + 1});
  }

  function platinumInc(){
    setCoins({...coins, platinum:platinum + 1});
  }

  return (
    <div className="ObjectCount">
        <h4 >{'Gold' +':-'+ gold}</h4>   <h4 >{ 'Silver' +':-'+ silver}</h4>  <h4 >{ 'Platinum' +':-'+platinum}</h4>
        <button onClick={goldInc}>gIncreament</button> 
        <button onClick={silverInc}>sIncreament</button>
        <button onClick={platinumInc}>pIncreament</button>
   
    </div>
  );
}

export default Objectcount;