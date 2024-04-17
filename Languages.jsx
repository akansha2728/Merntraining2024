import React from 'react'

function Languages() {
    let lang=[{ id:1, name:"Java"},
    { id:2,name:"JavaScript"},
    {id:3,name:"Kotlin"},
    {id:4,name:"Python"},
    {id:5,name:"C"}]
    var check=true;
  return (
    <div>
        <h1 className={( check===true)?"bg-warning":"bg-success text-white"}>Best Programming Language:</h1>
        <ul>
            {lang.map((item,index)=>(
                <li key={item.id}>{item.name}</li>

            ))}
        </ul>
    </div>
  )
}

export default Languages