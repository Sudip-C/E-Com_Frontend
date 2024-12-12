import '../css/product.css'
import { CiHeart } from "react-icons/ci";
function Navbar(){
    return(
        <div className="navBar">
      <h1>E_COM</h1>
      <div className='Items'>
      <p>Products</p>
      <CiHeart />
      </div>
    </div>
    )
}

export default Navbar