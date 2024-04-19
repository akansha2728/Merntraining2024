import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    const goRoute=()=>{
        navigate("/");

    }
  return (
    <div className='container'>
        <h1>this is example of react router dom</h1>
        <button className='btn btn-success' onClick={goRoute}>Home</button>
    </div>
  )
}

export default About