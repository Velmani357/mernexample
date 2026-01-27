import React from 'react'
import {useParams} from 'react-router-dom'
const ProductDetails = () => {
    const products=[
        {id:1,name:"laptop",price:"30000",description:'Asus laptop'},
        {id:2,name:"charger",price:"2000",description:'c type'},
        {id:1,name:"mouse",price:"500",description:'Gaming mouse'},
        {id:1,name:"keyboard",price:"1500",description:'keyboard with lights'},
    ]
    const {id} = useParams()
    const product = products.find((p)=>p.id===Number(id))
  return (
    <div>
     <h1>Product Details</h1>
     <h2>{product.name}</h2>
     <p>Price:{product.price}</p>
     <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails
