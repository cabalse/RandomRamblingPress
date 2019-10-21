import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/mainContent/MainContent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container className="mainContainer" fluid={true}>
          <Row className="mainRow">
            <Col xs={3} className="mainContainerCol">
              <Sidebar />
            </Col>
            <Col xs={9} className="mainContainerCol">
              <MainContent />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
