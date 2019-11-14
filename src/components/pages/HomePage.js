import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col id="pageTitle">
            <h1>RANDOM RAMBLING PRESS</h1>
          </Col>
        </Row>
        <Row>
          <Col id="pageContent">
            <p>
              Welcome to Random Rambling Press, the home of RPG adventures and
              supplements. We focus on OSR games, usually rules-agnostic or a
              small hint of a rule system. We, ourselves, play a lot of
              different systems; Mothership, Into the Odd, LotFP, For Coin and
              Blood, WhiteBox, WhiteHack to name a few.
            </p>
            <p>
              <ul>
                <li>Products - Our products</li>
                <li>Projects - Upcoming products in the works</li>
                <li>
                  About - More about Random Rambling Press, contact information
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
