import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Facts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var fact = this.props.facts;
    return (
      <Container>
        <Row>
          <Col xs="3" offset="1">
            Type
          </Col>
          <Col xs="8">{fact.type}</Col>
        </Row>
        <Row>
          <Col xs="3" offset="1">
            Format
          </Col>
          <Col xs="8">{fact.format}</Col>
        </Row>
        <Row>
          <Col xs="3" offset="1">
            Pages
          </Col>
          <Col xs="8">{fact.pages}</Col>
        </Row>
      </Container>
    );
  }
}
