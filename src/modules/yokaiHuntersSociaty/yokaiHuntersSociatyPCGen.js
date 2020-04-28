import { traits, maleFirstName, femaleFirstName, lastName } from './data';

export const MALE = 'male';
export const FEMALE = 'female';

export function generateYokaiHunterCharacter() {
  var character = { name: '', gender: '', traits: [] };
  character.gender = getGender();
  character.name = getName(character.gender);
  character.traits = getTraits();
  return character;
}

/** Generating Functions */
function getGender() {
  return rnd(1, 2) === 2 ? FEMALE : MALE;
}

function getName(gender) {
  var name;
  if (gender === MALE) {
    name = maleFirstName[rnd(0, maleFirstName.length)];
  }
  if (gender === FEMALE) {
    name = femaleFirstName[rnd(0, femaleFirstName.length)];
  }
  return name + ' ' + lastName[rnd(0, lastName.length)];
}

function getTraits() {
  var trait1 = traits[roll3D6() - 4];
  var trait2 = traits[roll3D6() - 4];
  while (trait1 === trait2) {
    trait2 = traits[roll3D6() - 4];
  }
  return [trait1, trait2];
}

/** Help Functions */
function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollD6() {
  return rnd(1, 6);
}

function roll3D6() {
  return rollD6() + rollD6() + rollD6();
}
