import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

import "./MainContent.css";
import Home from "./../pages/Home";
import Products from "../pages/Products";
import Projects from "../pages/Projects";
import About from "../pages/About";

export default class MainContent extends Component {
  render() {
    return (
      <Container fluid={true} className="mainContent">
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    );
  }
}
