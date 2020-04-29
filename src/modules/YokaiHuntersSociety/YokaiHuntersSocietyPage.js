import React from 'react';

import { Container, Row, Col } from '../../components/bootstrap/Bootstrap';
import CharacterSheet from './CharacterSheet';

export default function YokaiHuntersSociatyPage() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="col-5">
          <CharacterSheet />
        </Col>
      </Row>
    </Container>
  );
}
