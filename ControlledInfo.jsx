import React from 'react'
import Info from './Info'

const ControlledInfo = () => {
    const lang=["java","javascript","kotlin","python","C++"]
  return (
    <div>
        <Info lang={lang}/>
    </div>
  )
}

export default ControlledInfo