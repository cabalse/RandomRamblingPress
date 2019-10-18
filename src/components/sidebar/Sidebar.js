import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "./../../resources/logo.png";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <Container className="sidebar" fluid={true}>
        <Row className="text-center justify-content-center">
          <Col xs="auto">
            <img className="logo img-fluid" src={logo} alt="logo" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/">Home</Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/products">Products</Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/projects">Projects</Link>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Link to="/about">About</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
