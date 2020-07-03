import React from 'react';

import { Container, Row, Col } from '../../components/bootstrap/Bootstrap';
import CharacterSheet from './CharacterSheet';

export default function YokaiHuntersSociatyPage() {
  return (
    <div>
      <div>
        <div className="col-12">
          <CharacterSheet />
        </div>
      </div>
    </div>
  );
}
