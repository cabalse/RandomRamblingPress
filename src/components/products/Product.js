import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Product.css";
import Facts from "./Facts";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var prod = this.props.product;
    return (
      <Container className="productContainer">
        <Row>
          <Col xs="4">
            <Container className="productContainer">
              <Row>
                <Col>{prod.title}</Col>
              </Row>
            </Container>
          </Col>
          <Col xs="8">{prod.short}</Col>
        </Row>
      </Container>
    );
  }
}
