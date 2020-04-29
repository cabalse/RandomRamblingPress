import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FluidContainer, Row, Col } from './components/bootstrap/Bootstrap';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';
import YokaiHuntersSociety from './pages/YokaiHuntersSociety';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/yokai-hunters-society">
            <YokaiHuntersSociety />
          </Route>
          <Route path="/">
            <FluidContainer className="page-container pl-0">
              <Row className="page-row">
                <Col className="col-12 col-sm-3 col-xl-2 pr-0">
                  <Sidebar />
                </Col>
                <Col className="content-col mt-4 mr-5 ml-5 mr-sm-1 ml-sm-1">
                  <MainContent />
                </Col>
              </Row>
            </FluidContainer>
          </Route>
        </Switch>
      </Router>
    );
  }
}
