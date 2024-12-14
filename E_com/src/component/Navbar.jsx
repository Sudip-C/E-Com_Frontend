import { Link as NavLink } from 'react-router'
import '../css/product.css'
function Navbar(){
    return(
        <div className="navBar">
      <h1>E_COM</h1>
      <div className='Items'>
      <NavLink style={{textDecoration:"none", color:"black"}} to='/'><p>Products</p></NavLink>
      <NavLink style={{textDecoration:"none", color:"black"}}to='/wishlist'><p>Wishlist</p></NavLink>
      </div>
    </div>
    )
}

export default Navbar