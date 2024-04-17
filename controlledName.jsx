import React from 'react'
import ChangeName from "./ChangeName"

const controlledName = () => {
    const[name,setName]=useState("KIET")
    const[sname,setSName]=useState("MCA")

  return (
    <div>
         <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
     <ChangeName name={sname} onUpdate={()=>setName("mca kiet")}/>

    </div>
  )
}

export default controlledName