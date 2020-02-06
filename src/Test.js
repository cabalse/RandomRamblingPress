import React from 'react';

import logo from './resources/images/logo.png';
import './components/sidebar/Sidebar.css';
import './App.css';

export default function Test() {
  return (
    <div className="page-container container-fluid pl-0">
      <div className="page-row row">
        <div className="sidebar-col col-12 col-sm-3 col-xl-2 pr-0">
          <div className="fluid-container sidebar">
            <div className="row">
              <div className="col-5 col-sm-12">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <div className="col-7 col-sm-12">
                <div className="container mt-sm-4 mt-xl-0">
                  <div className="row mt-xl-0">
                    <div className="col text-sm-center">
                      <a href="">Home</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-sm-center">
                      <a href="">Products</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-sm-center">
                      <a href="">Projects</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col text-sm-center">
                      <a href="">About</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-col col mt-4 mr-5 ml-5 mr-sm-1 ml-sm-1">
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
                      Welcome to Random Rambling Press, the home of RPG
                      adventures and supplements. We focus on OSR games, usually
                      rules-agnostic or a small hint of a rule system. We,
                      ourselves, play a lot of different systems; Mothership,
                      Into the Odd, LotFP, For Coin and Blood, WhiteBox,
                      WhiteHack to name a few.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
