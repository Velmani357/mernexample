import React from 'react'
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
const ProductDetails = () => {
    const[product,setProduct]=useState({})
    const {id} = useParams()
   
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProduct(data));
    },[])
    // const product = products.find((p)=>p.id===Number(id))
  return (
    <div>
     <h1>Product Details</h1>
     <h2>{product.title}</h2>
     <p>Price:{product.price}</p>
     <p>{product.description}</p>
       <p>{product.category}</p>
    </div>
  )
}

export default ProductDetails
