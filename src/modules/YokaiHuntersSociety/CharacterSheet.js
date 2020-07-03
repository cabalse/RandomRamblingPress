import React from 'react';

import { generateYokaiHunterCharacter } from './yokaiHuntersSocietyPCGen';
import './CharacterSheet.css';

import characterSheet from './assets/charactersheet.png';

export default function CharacterSheet() {
  var character = generateYokaiHunterCharacter();
  return (
    <div className="characterSheet">
      <div>
        <div className="title text-center">
          <h1>Yokai Hunters Society</h1>
        </div>
      </div>
      <div className="upperInfoSection">
        <div className="firstRow">
          <div className="leftPart">
            <div className="nameTitle">NAME</div>
            <div className="nameValue">{character.name}</div>
          </div>
          <div className="rightPart">
            <div className="genderTitle">GENDER</div>
            <div className="genderValue">{character.gender}</div>
            <div className="ageTitle">AGE</div>
            <div className="ageValue">{character.age}</div>
          </div>
        </div>
        <div className="secondRow">
          <div className="nameTitle">Traits</div>
          <div className="nameValue">
            {character.traits[0]}, {character.traits[1]}
          </div>
        </div>
        <div className="thirdRow">
          <div className="genderTitle">OCCUPATION</div>
          <div className="genderValue">{character.occupation}</div>
          <div className="ageTitle">WAGE</div>
          <div className="ageValue">{character.wage} sen</div>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <div className="attributeSection">
            <img className="attributeImage no-resize" src={characterSheet} />
            <div className="characterSheetText courage">
              {character.paths.courage}
            </div>
            <div className="characterSheetText selfControl">
              {character.paths.selfcontrol}
            </div>
            <div className="characterSheetText wisdom">
              {character.paths.wisdom}
            </div>
            <div className="characterSheetText sharpness">
              {character.paths.sharpness}
            </div>
            <div className="characterSheetText money"></div>
            <div className="characterSheetText maxHP">
              {character.paths.healthPoints}
            </div>
            <div className="characterSheetText maxCurseResistance">
              {character.paths.curseResistance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
