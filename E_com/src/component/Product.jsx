import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_API } from "../utils/Api";

function Product(){
    const [products,setProducts]=useState([]);
    const [search, setSearch]=useState('');
    const [sort,setSort]=useState('');
    const [category,setCategory]=useState('')

    let API;
if(sort){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?sort=${sort}`
}else if(category){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?category=${category}`
}else if(search){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?search=${search}`
}else if(sort&category){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?category=${category}&sort=${sort}`
}else if(sort&search){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?search=${search}&sort=${sort}`
}else if(search&category){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?search=${search}&category=${category}`
}else if(sort&category&search){
    API=`https://e-com-backendnode-app.onrender.com/api/product/filter?search=${search}&category=${category}&sort=${sort}`
}else{
    API=`${BASE_API}/getProduct`
}
async function getProducts(){
try {
    const response= await axios.get(API)
    setProducts(response.data)
} catch (error) {
    alert(error.message)
}    
}

useEffect(()=>{
    getProducts()
},[sort,category,search])

console.log(sort)
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
                    <button>Add to Wishlist</button>
                    

                </div>
            ))}
        </div>
        </div>
    )
}

export default Product