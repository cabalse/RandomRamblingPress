import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './MainContent.css';
import HomePage from './../../pages/HomePage';
import ProductsPage from './../../pages/ProductsPage';
import ProjectsPage from './../../pages/ProjectsPage';
import AboutPage from './../../pages/AboutPage';

export default function MainContent() {
  return (
    <div className="">
      <Switch>
        <Route path="/products" component={ProductsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path={['/about/:gear', '/about']} component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
