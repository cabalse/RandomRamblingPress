import React from 'react';

import { FluidContainer, Row, Col } from './../components/bootstrap/Bootstrap';
import { generateYokaiHunterCharacter } from '../modules/yokaiHuntersSociaty/yokaiHuntersSociatyPCGen';

export default function YokaiHuntersSociety() {
  var character = generateYokaiHunterCharacter();
  return (
    <FluidContainer className="pl-0 pr-sm-5">
      <Row>
        <Col>
          <h1>Yokai Hunters Society</h1>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          Name: {character.name}
          <br />
          Gender: {character.gender}
          <br />
          Traits: {character.traits[0]}, {character.traits[1]}
          <br />
        </Col>
      </Row>
    </FluidContainer>
  );
}
