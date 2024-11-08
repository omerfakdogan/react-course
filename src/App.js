import React, { Component } from 'react';
import { Col, Container, Row } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import alertify from "alertifyjs";

import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from './FormDemo';
import FormDemo2 from './FormDemo2';

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " Added to Cart", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " Removed From Cart");
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                />
                <Route path="/cart" element={<CartList
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}
                />} />
                <Route path="/form1" element={<FormDemo />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route path="*" element={NotFound} />
              </Routes>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
