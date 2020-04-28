import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './MainContent.css';
import HomePage from './../../pages/HomePage';
import ProductsPage from './../../pages/ProductsPage';
import ProjectsPage from './../../pages/ProjectsPage';
import AboutPage from './../../pages/AboutPage';
import YokaiHuntersSociety from '../../pages/YokaiHuntersSociety';

export default class MainContent extends Component {
  render() {
    return (
      <div className="">
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
          <Route path="/yokai-hunters-society">
            <YokaiHuntersSociety />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    );
  }
}
