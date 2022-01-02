import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({products}) => {
  const {id} = useParams()
    return (
        <div>
            {products.filter(elt=>elt.id==id).map(
                (elt,key)=>
            <div key={elt.id}>
                
                <h1>{elt.name}</h1>
            </div>
            )
            }
        </div>
    )
}

export default ProductDetails
