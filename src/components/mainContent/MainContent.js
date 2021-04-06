import './MainContent.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './../../pages/AboutPage';
import HomePage from './../../pages/HomePage';
import ProductsPage from './../../pages/ProductsPage';
import ProjectsPage from './../../pages/ProjectsPage';
import SwitchToGaming from '../switchToGaming/SwitchToGaming';

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
          <Route path="/gaming">
            <SwitchToGaming />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    );
  }
}
