import React from 'react'
import { Table } from 'react-bootstrap'

const Product = ({products}) => {
    return (
        <div>
            {products.map(elt=>
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{elt.id}</td>
                    <td>{elt.imgSrc}</td>
                    <td>{elt.name}</td>
                    <td>{elt.price}</td>
                  </tr>
                </tbody>
              </Table>)}
        </div>
    )
}

export default Product
