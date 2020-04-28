import {
  traits,
  maleFirstName,
  femaleFirstName,
  lastName,
  occupations
} from './data';

const baseWeight = 1;
const basePathWeight = 0;
const wRed1 = -0;
const wRed2 = -0;
const wRed3 = -0;

export const MALE = 'male';
export const FEMALE = 'female';

export function generateYokaiHunterCharacter() {
  var character = {
    name: '',
    gender: '',
    age: 0,
    traits: [],
    occupation: '',
    wage: '',
    paths: {
      courage: 0,
      selfcontrol: 0,
      sharpness: 0,
      wisdom: 0
    },
    healthPoints: 0,
    curseResistance: 0
  };

  var occ = getOccupation();
  character.gender = getGender();
  character.name = getName(character.gender);
  character.traits = getTraits();
  character.occupation = occ.occupation;
  character.wage = occ.wage;
  character.age = getAge();
  var paths = randomizePaths(occ.weightedPath);
  character.paths = paths;
  character.healthPoints = calcHealthPoints(character.paths.courage);
  character.curseResistance = calcCurseResistance(character.paths.selfcontrol);

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

function getOccupation() {
  return occupations[roll3D6() - 4];
}

function randomizePaths(pathWeight) {
  var paths = weightedPaths(pathWeight);
  for (let index = 1; index <= 4; index++) {
    var totalWeight = totalPathWeight(paths);
    var roll = rnd(1, totalWeight);
    paths = IncreasePath(paths, roll);
  }
  return {
    courage: paths.courage.score,
    selfcontrol: paths.selfcontrol.score,
    sharpness: paths.sharpness.score,
    wisdom: paths.wisdom.score
  };
}

function getAge() {
  return 18 + (roll3D6() - 4) * 2;
}

function calcHealthPoints(courage) {
  return 8 + courage;
}

function calcCurseResistance(selfcontrol) {
  let cr = 2 + selfcontrol;
  return cr > 4 ? 4 : cr;
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

function weightedPaths(pathWeight) {
  var paths = {
    courage: { weight: baseWeight, score: 0 },
    selfcontrol: { weight: baseWeight, score: 0 },
    sharpness: { weight: baseWeight, score: 0 },
    wisdom: { weight: baseWeight, score: 0 }
  };
  switch (pathWeight) {
    case 'sharpness':
      paths.sharpness.weight += basePathWeight;
      break;
    case 'courage':
      paths.courage.weight += basePathWeight;
      break;
    case 'self-control':
      paths.selfcontrol.weight += basePathWeight;
      break;
    case 'wisdom':
      paths.wisdom.weight += basePathWeight;
      break;
    default:
      break;
  }
  return paths;
}

function totalPathWeight(paths) {
  return (
    paths.courage.weight +
    paths.sharpness.weight +
    paths.selfcontrol.weight +
    paths.wisdom.weight
  );
}

function weightReduction(weight, score) {
  var red = 0;
  switch (score) {
    case 1:
      red = wRed1;
      break;
    case 2:
      red = wRed2;
      break;
    case 3:
      red = wRed3;
      break;
    default:
      break;
  }
  let returnWeight = weight + red;
  return returnWeight > 0 ? returnWeight : 1;
}

function IncreasePath(paths, roll) {
  /** Courage */
  roll -= paths.courage.weight;
  if (roll <= 0) {
    paths.courage.score += 1;
    paths.courage.weight = weightReduction(
      paths.courage.weight,
      paths.courage.score
    );
    return paths;
  }
  /** Self-control */
  roll -= paths.selfcontrol.weight;
  if (roll <= 0) {
    paths.selfcontrol.score += 1;
    paths.selfcontrol.weight = weightReduction(
      paths.selfcontrol.weight,
      paths.selfcontrol.score
    );
    return paths;
  }
  /** Sharpness */
  roll -= paths.sharpness.weight;
  if (roll <= 0) {
    paths.sharpness.score += 1;
    paths.sharpness.weight = weightReduction(
      paths.sharpness.weight,
      paths.sharpness.score
    );
    return paths;
  }
  /** Wisdom */
  roll -= paths.wisdom.weight;
  if (roll <= 0) {
    paths.wisdom.score += 1;
    paths.wisdom.weight = weightReduction(
      paths.wisdom.weight,
      paths.wisdom.score
    );
    return paths;
  }
  return paths;
}
