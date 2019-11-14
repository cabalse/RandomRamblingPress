import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Products from "../products/Products";

export default class ProductsPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col id="pageTitle">
            <h1>PRODUCTS</h1>
          </Col>
        </Row>
        <Row>
          <Col id="pageContent" className="nopadding">
            <Products />
          </Col>
        </Row>
      </Container>
    );
  }
}
