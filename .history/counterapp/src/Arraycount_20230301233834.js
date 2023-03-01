
import React, { useState } from "react";


function Arraycount() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [array, setArray] = useState([])
  const  {gold, silver, platinum} = coins;
  function arrayUpdate(){             
       setCoins();
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

export default Arraycount;