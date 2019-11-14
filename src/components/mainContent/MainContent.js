import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Switch, Route } from "react-router-dom";

import "./MainContent.css";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";

export default class MainContent extends Component {
  render() {
    return (
      <Container fluid={true} className="mainContent">
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    );
  }
}
