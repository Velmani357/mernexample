import React from 'react'
import {Link} from 'react-router-dom'
const Products = () => {
    const products=[
        {id:1,name:"laptop",price:"30000"},
        {id:2,name:"charger",price:"2000"},
        {id:1,name:"mouse",price:"500"},
        {id:1,name:"keyboard",price:"1500"},
       

    ]
  return (
    <div>
      <h1>Products</h1>
      {products.map((product)=>(
       <div key ={product.id}>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
        <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    ))}
    </div>
  )
}

export default Products
