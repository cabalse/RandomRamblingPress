import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Product.css";
import { GetProducts } from "../../services/ProductAPI";
import Product from "../products/Product";

export default class Products extends Component {
  constructor() {
    super();
    this.state = { isLoaded: false, products: [] };
  }
  componentDidMount() {
    this.setState({ isLoaded: true, products: GetProducts() });
  }
  render() {
    return (
      <>
        <p>Some Text for productlist</p>
        <Container className="productContainer">
          <Row>
            <Col>
              {this.state.isLoaded ? (
                this.state.products.map(product => (
                  <Product key={product.id} product={product} />
                ))
              ) : (
                <p>Loading ...</p>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
