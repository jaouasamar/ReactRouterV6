import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import "./Product.css"
import { Link } from 'react-router-dom'

const Product = ({products}) => {
    return (
        <div className='produit'>
            {products.map(elt=>
               <Card style={{ width: '19rem' }} key={elt.id}>
               <Card.Img variant="top" src={elt.imgSrc} width="100px" height="180" />
               <Card.Body>
                 <Card.Title>{elt.name}</Card.Title>
                 <Card.Text>
                  {elt.price}
                 </Card.Text>
                 <Link  to={`/product/${elt.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} ><Button variant="primary">Buy</Button></Link>
               </Card.Body>
             </Card>
               )}
        </div>
    )
}

export default Product
