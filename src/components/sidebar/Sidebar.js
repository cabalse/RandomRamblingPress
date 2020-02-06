import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../resources/images/logo.png';
import './Sidebar.css';
import { FluidContainer, Container, Row, Col } from './../bootstrap/Bootstrap';

export default class Sidebar extends Component {
  render() {
    return (
      <FluidContainer className="sidebar">
        <Row>
          <Col className="col-5 col-sm-12">
            <img src={logo} alt="logo" className="img-fluid" />
          </Col>
          <Col className="col-7 col-sm-12">
            <Container className="mt-sm-4 mt-xl-0">
              <Row className="mt-xl-0">
                <Col className="text-sm-center">
                  <Link to="/">Home</Link>
                </Col>
              </Row>
              <Row>
                <Col className="text-sm-center">
                  <Link to="/products">Products</Link>
                </Col>
              </Row>
              <Row>
                <Col className="text-sm-center">
                  <Link to="/projects">Projects</Link>
                </Col>
              </Row>
              <Row>
                <Col className="text-sm-center">
                  <Link to="/about">About</Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </FluidContainer>
    );
  }
}
