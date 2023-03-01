
import React, { useState } from "react";


function Arraycount() {

  // const [count, setCount] = useState(0)  // normal condition 

  //More accureate condition
  const [array, setArray] = useState([1, 2, 3])
  function arrayUpdate(){             
       setArray(arr=>([...arr,  `${arr.length}`]));
  }


  return (
    <div className="ObjectCount">
        <h4>{'Array '+array}</h4>
       
        <button onClick={arrayUpdate}>Array</button>
   
    </div>
  );
}

export default Arraycount;