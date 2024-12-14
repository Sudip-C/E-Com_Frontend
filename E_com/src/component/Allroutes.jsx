import {Route, Routes} from 'react-router'
import Product from './Product'
import Wishlist from './Wishlist'

function AllRoutes (){

return(
    <Routes>
        <Route path='/' element={<Product/>} />
        <Route path="wishlist" element={<Wishlist/>}/>
    </Routes>
)
}
export default AllRoutes