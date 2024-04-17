import React, { useState } from 'react'

const Counter3 = (props) => {
  const {counter,decrement,increment,deleteCounter}=props;
  const [count,setCount]=useState(0);
    const checkValue=()=>{
       return counter.count===0?"Zero":counter.count;
    }
    const checkCounter=()=>{
        return counter.count===0
        ?" badge bg-danger m-3  p-2 rounded text-white"
        :" badge bg-warning m-3 p-2 text-black rounded";
    }
     
   
  return (
    <div className='container mt-3'>
        <button className="btn btn-primary" onClick={()=>decrement(counter)}>Decrement</button>
       <span className={checkCounter()}> {checkValue()}</span>                
        <button className='btn btn-primary' onClick={()=>increment(counter)}>Increment</button>
        <button className='btn btn-danger ' onClick={()=>deleteCounter(counter)}>Delete</button>
    </div>
  )
}

export default Counter3