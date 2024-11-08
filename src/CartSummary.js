import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary() {
        return (

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    CartSummary
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                                {cartItem.product.productName}
                                <Badge color="success">
                                    {cartItem.quantity}
                                </Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="cart">Go to cart!</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>)
    }


    render() {
        return <div>
            {this.renderSummary()}
        </div>
    }
}
