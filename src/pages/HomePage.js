import React, { Component } from 'react';

import {
  FluidContainer,
  Container,
  Row,
  Col,
  Image
} from './../components/bootstrap/Bootstrap';

import centerImage from './../resources/images/troy.jpg';

export default class HomePage extends Component {
  render() {
    return (
      <div className="fluid-container">
        <div className="row">
          <div className="col">
            <div className="">
              <div className="" id="pageTitle">
                <h1>RANDOM RAMBLING PRESS</h1>
              </div>
            </div>
            <div className="">
              <div className="" id="pageContent">
                <p>
                  Welcome to Random Rambling Press, the home of RPG adventures
                  and supplements.
                  <br />
                  We focus on OSR games, usually rules-agnostic or a small hint
                  of a rule system. We, ourselves, play a lot of different
                  systems; Mothership, Into the Odd, LotFP, For Coin and Blood,
                  WhiteBox, WhiteHack to name a few.
                </p>
                <ul>
                  <li>Products - Our products</li>
                  <li>Projects - Upcoming products in the works</li>
                  <li>
                    About - More about Random Rambling Press, contact
                    information
                  </li>
                </ul>
              </div>
            </div>
            <FluidContainer>
              <Row>
                <Col>
                  <Image className="img-fluid" src={centerImage} />
                </Col>
              </Row>
            </FluidContainer>
          </div>
        </div>
      </div>
    );
  }
}
