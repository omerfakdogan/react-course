import React, { Component } from 'react'
import { Table } from 'reactstrap'

export default class CartList extends Component {
    renderCart(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.maps(cartItem=>(
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitInStock}</td>
                                <td>{cartItem.product.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }   

    render() {
        return (
            <div>
                NotFound!
            </div>
        )
    }
}
