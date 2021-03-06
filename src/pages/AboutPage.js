import { Col, FluidContainer, Row } from './../components/bootstrap/Bootstrap';
import React, { Component } from 'react';

import jorgenProfileImage from './../resources/images/jorgen_profile.jpg';

export default class AboutPage extends Component {
  render() {
    return (
      <FluidContainer className="pl-0 pr-sm-5">
        <Row>
          <Col>
            <h1>ABOUT US</h1>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <p>
              Random Rambling Press is a small "company" with the passion to
              write and publish roleplaying supplements, add-ons, and
              adventures. We do what we love and we hope that shows in what we
              do. This also means that we play more then we write so the
              publishing part comes second.
            </p>
            <p>
              Since we love to play and to play different things. We usually
              don't stick to one rule system. We try new things because it's
              fun. We have some favorites that we stick to but overall the
              things we do we aim for it to be rules/system-agnostic.
            </p>
            <p>
              Through this website, you will find information on the products we
              offer. We usually run each publication as a small print run and
              then make them available as pdf through.
              <br />
              <a
                href="https://www.drivethrurpg.com/browse/pub/15518/Random-Rambling-Press/"
                target="_blank"
              >
                Random Rambling Press on DriveThru RPG
              </a>
            </p>
            <p>
              This site is not super dynamic, not a blog. Follow us on Instagram
              if you want to keep a closer eye on what is happening.
              <br />
              <a
                href="https://www.instagram.com/random.rambling.press/"
                target="_blank"
              >
                Random Rambling Press on Instagram
              </a>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <h1>THE TEAM</h1>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="col-auto">
            <img src={jorgenProfileImage} alt="" />
          </Col>
          <Col>
            <b>NAME:</b> J Bengtsson
            <br />
            <b>YEARS IN HOBBY:</b> 10 years roleplaying and a lifetime
            boardgaming
            <br />
            <b>FAVORITE GAME:</b> Ghost Recon Wildlands by Ubisoft
            <br />
            <b>BEST RPG RULESETS:</b> Electric Bastionland, Yokai Hunters
            Society, Ghost Orbit
            <br />
            <b>BEST RPG MODULE:</b> Winter's Daughter by Necrotic Gnome
            <br />
            <b>MOST MEMORABLE PLAY:</b> Village of the Damned, Into the Jungle
            at KryptCon 1<br />
            <b>LOOKING FORWARD TO:</b> The Dee Sanction: Elizabethan Agents of
            the Supernatural
            <br />
            <b>FAVORITE GENRE:</b> Horror, Investigation and Sci-Fi
            <br />
            <b>WHERE DO I FIND INSPIRATION?</b> Movies and tv series
            <br />
          </Col>
        </Row>
      </FluidContainer>
    );
  }
}
