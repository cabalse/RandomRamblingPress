import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ProductsPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col id="pageTitle">
            <h1>PROJECTS</h1>
          </Col>
        </Row>
        <Row>
          <Col id="pageContent">
            <p>Coming Soon!!!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
