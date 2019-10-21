import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>RANDOM RAMBLING PRESS</h1>
        <p>
          Welcome to Random Rambling Press, the home of RPG adventures and
          supplements. We focus on OSR games, usually rules-agnostic or a small
          hint of a rule system. We, ourselves, play a lot of different systems;
          Mothership, Into the Odd, LotFP, For Coin and Blood, WhiteBox,
          WhiteHack to name a few.
        </p>
        <p>
          <ul>
            <li>Products - Our products</li>
            <li>Projects - Upcoming products in the works</li>
            <li>
              About - More about Random Rambling Press, contact information
            </li>
          </ul>
        </p>
      </div>
    );
  }
}
