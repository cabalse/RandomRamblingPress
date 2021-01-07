import React, { Component } from 'react';

import dungescape1 from './../resources/images/dungescape_1.jpg';
import demonHunterTshirt from './../resources/images/demon_hunters-tshirt.png';

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
