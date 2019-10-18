import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

import "./MainContent.css";

export default class MainContent extends Component {
  render() {
    return (
      <Container fluid={true} className="mainContent">
        <Switch>
          <Route path="/products">
            <p>Products</p>
          </Route>
          <Route path="/projects">
            <p>Projects</p>
          </Route>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/">
            <p>Under Construction!</p>
          </Route>
        </Switch>
      </Container>
    );
  }
}
