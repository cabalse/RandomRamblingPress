import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Col, FluidContainer, Row } from './components/bootstrap/Bootstrap';
import Context, { DEFAULT, GAMING } from './context';
import React, { Component } from 'react';

import MainContent from './components/mainContent/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import { gql_products } from './Config';

const client = new ApolloClient({
  uri: gql_products,
  cache: new InMemoryCache()
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPath: DEFAULT
    };
  }
  setDisplayPath = (display) => {
    this.setState({ displayPath: display });
  };
  render() {
    return (
      <Context.Provider
        value={{
          displayPath: this.state.displayPath,
          setDisplayPath: this.setDisplayPath
        }}
      >
        <ApolloProvider client={client}>
          <Router>
            <FluidContainer className="page-container pl-0">
              {this.state.displayPath === DEFAULT ? (
                <Row className="page-row">
                  <Col className="col-12 col-sm-3 col-xl-2 pr-0">
                    <Sidebar />
                  </Col>
                  <Col className="content-col mt-4 mr-5 ml-5 mr-sm-1 ml-sm-1">
                    <MainContent />
                  </Col>
                </Row>
              ) : null}
            </FluidContainer>
          </Router>
        </ApolloProvider>
      </Context.Provider>
    );
  }
}
