import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FluidContainer, Row, Col } from './components/bootstrap/Bootstrap';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';

const client = new ApolloClient({
  uri: 'http://localhost:8080/service',
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
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
        </Router>
      </ApolloProvider>
    );
  }
}
