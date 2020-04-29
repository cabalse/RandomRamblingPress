import React from 'react';

import { FluidContainer, Row, Col } from '../../components/bootstrap/Bootstrap';
import { generateYokaiHunterCharacter } from './yokaiHuntersSocietyPCGen';
import './CharacterSheet.css';

export default function CharacterSheet() {
  var character = generateYokaiHunterCharacter();
  return (
    <FluidContainer>
      <Row>
        <Col>
          <h1>Yokai Hunters Society</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Name: {character.name}
          <br />
          Gender: {character.gender}
          <br />
          Age: {character.age}
          <br />
          Traits: {character.traits[0]}, {character.traits[1]}
          <br />
          Occupation: {character.occupation} ({character.wage} sen)
          <br />
          <br />
          Courage: {character.paths.courage}
          <br />
          Self-control: {character.paths.selfcontrol}
          <br />
          Sharpness: {character.paths.sharpness}
          <br />
          Wisdom: {character.paths.wisdom}
          <br />
          <br />
          Health points: {character.healthPoints}
          <br />
          Curse Resistance: {character.curseResistance}
        </Col>
      </Row>
    </FluidContainer>
  );
}
