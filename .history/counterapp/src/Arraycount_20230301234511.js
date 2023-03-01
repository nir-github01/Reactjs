
import React, { useState } from "react";


function Arraycount() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [array, setArray] = useState([])
  function arrayUpdate(){             
       setCoins(arr=>([...arr,  `${arr.length}`]));
  }


  return (
    <div className="ObjectCount">
        <h4>{array}</h4>
       
        <button onClick={arrayUpdate}>Array</button>
   
    </div>
  );
}

export default Arraycount;