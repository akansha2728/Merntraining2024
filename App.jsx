
//import './App.css'

//import ChangeName from "./component/ChangeName"
//import Counter3 from "./component/Counter3"
import MyCard from "./component/MyCard"

import { Routes,Route } from "react-router-dom"
import MyCounter from "./component/MyCounter"
import Languages from "./component/Languages"
//import ResetTotal from "./component/ResetTotal"
import React,{ useState } from "react"
//import ControlledInfo from "./component/ControlledInfo"


import HomePage from "./component/HomePage"
import NavBar from "./component/NavBar"
import ErrorPage from "./component/ErrorPage"
import About from "./component/About"
import Product from "./component/Product"
import Product1 from "./component/Product1"
import Product2 from "./component/Product2"
import Product3 from "./component/Product3"
import Student from "./component/Student"
function App() {
  
  
    // const[name,setName]=useState("KIET")
    // const[sname,setSName]=useState("MCA")


  return (
    <>

     {/* <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
     <ChangeName name={sname} onUpdate={()=>setName("mca kiet")}/> */}
     {/* <ResetTotal/>
     <Counter2/>
     <Counter2/>
     <Counter2/>
     <Counter2/> 
     
    */}
    {/* <MyCard/> */}
    {/* <MyCounter/> */}

     <NavBar/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/MyCard" element={<MyCard/>}/>
      <Route path="/MyCounter" element={<MyCounter/>}/>
      <Route path="/Languages" element={<Languages/>}/>
      <Route path="/About" element={<About/>}/>
      
      <Route path="/Student" element={<Student/>}>
      <Route path="/Student/:name" element={<Student/>}/>
      </Route>


      <Route path="/Product" element={<Product/>}>
      <Route path="Product1" element={<Product1/>}/>
      <Route path="Product2" element={<Product2/>}/>
      <Route path="Product3" element={<Product3/>}/>

      </Route>

      <Route path="*" element={<ErrorPage/>}/>
     </Routes>
     
    </>
  )
}

export default App
