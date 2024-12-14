 import { useEffect } from 'react';
import '../css/product.css'
 
 function Wishlist(){
   let  wishlist_items=JSON.parse(localStorage.getItem("wishList"))||[];

    return (
        <div className='container'>
            {
                wishlist_items?.map((e)=>(
                    <div className="products" key={e._id}>
                    <h3>{e.name}</h3>
                    <p>{e.category}</p>
                    <p>₹{e.price}</p>                    

                </div>
                ))
            }
        </div>
    )
 }
 export default Wishlist