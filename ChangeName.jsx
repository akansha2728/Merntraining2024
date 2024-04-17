import { useState } from "react"


const ChangeName = (props) => {
    let {name,onUpdate}=props;
    
  return (
    <div className="container mt-3">
        <div>{name}</div>
        <button className="btn btn-warning" onClick={(onUpdate)}
        >change name
        </button>
    </div>
  )
}

export default ChangeName