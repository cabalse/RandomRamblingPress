import React, { Component } from 'react';

import './../components/products/products';

import {
  FluidContainer,
  Container,
  Row,
  Col,
  Image
} from './../components/bootstrap/Bootstrap';
import Products from './../components/products/products';

export default class ProductsPage extends Component {
  render() {
    return (
      <FluidContainer>
        <Row>
          <Col>
            <h1>PRODUCTS</h1>
          </Col>
        </Row>
        <Products />
      </FluidContainer>
    );
  }
}
