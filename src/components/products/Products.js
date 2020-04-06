import React, { Component } from 'react';

import productImage from './../../resources/images/130x200.jpg';
import './products.css';

import { GetProducts } from './../../services/ProductAPI';
import {
  FluidContainer,
  Container,
  Row,
  Col,
  Image
} from './../../components/bootstrap/Bootstrap';

export default class Products extends Component {
  constructor() {
    super();
    this.state = { isLoaded: false, productData: [] };
  }

  componentDidMount() {
    this.setState({ isloaded: true, productData: GetProducts() });
  }

  render() {
    return (
      <Row className="product">
        <Col className="">
          <Image src={productImage} />
        </Col>
        <Col className="">
          <h1>Dungescape</h1>
          Aliquam erat volutpat. In ac ultrices eros. In vel eros ut neque
          laoreet fringilla. Vivamus pretium, lacus eu hendrerit feugiat, magna
          orci posuere dolor, id rhoncus nisi erat ut tellus. Nulla cursus dolor
          et nulla euismod volutpat. Suspendisse finibus vel nunc at euismod.
          Morbi eu varius leo.
        </Col>
      </Row>
    );
  }
}
