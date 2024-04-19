
import { Outlet,NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div className='container'>
        <h2>product main page</h2>

        <div className='d-flex flex-row'> 
            <NavLink to="Product1" className="p-2">Product1</NavLink>
            <NavLink to="Product2" className="p-2">Product2</NavLink>
            <NavLink to="Product3" className="p-2">Product3</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product