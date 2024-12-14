import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_API } from "../utils/Api";

function Product(){
    const [products,setProducts]=useState([]);
    const [search, setSearch]=useState('');
    const [sort,setSort]=useState('');
    const [category,setCategory]=useState('')


let filter_params={}

if(category)filter_params.category=category;
if(sort)filter_params.sort=sort;
if(search)filter_params.search=search;

const storedItems=JSON.parse(localStorage.getItem("wishlist"))|| []


const AddToWishList = (itemId) => {
    const clickedItem = products.find((item) => item._id === itemId);
    alert("Product added to Wishlist.")
    if(clickedItem){
        storedItems.push(clickedItem)
        localStorage.setItem("wishList",JSON.stringify(storedItems))
    }
  };

async function getProducts(){
try {
    const response= await axios.get(`${BASE_API}/filter`,{params:filter_params})
    setProducts(response.data)
} catch (error) {
    alert(error.message)
}    
}

useEffect(()=>{
    getProducts()
},[sort,category,search])

    return(
        <div className="main_cont">
            <div className="searchBox">
                <input vlaue={search} placeholder="search by name" onChange={(e)=>setSearch(e.target.value)}></input>
                
            </div>
            <div className="sort">
                <select onChange={(e)=>setSort(e.target.value)}>
                    <option value="">sort by price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>
            <div className="category">
                <select onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">sort by catagory</option>
                    <option value="Bed">Bed</option>
                    <option value="Table">Table</option>
                    <option value="Chair">Chair</option>
                </select>
            </div>
        <div className="container">
            {products?.map((e)=>(
                <div className="products" key={e._id}>
                    <h3>{e.name}</h3>
                    <p>{e.category}</p>
                    <p>₹{e.price}</p>
                    <button onClick={() => AddToWishList(e._id)}>Add to Wishlist</button>
                    

                </div>
            ))}
        </div>
        </div>
    )
}

export default Product