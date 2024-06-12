import {Race} from "./race.model";
import {Class} from "./class.model";
import {Item} from "./item.model";
import {AbilityScores} from "./ability_scores.model";

interface CoinPurse {
  gold: number;
  silver: number;
  copper: number;
}

interface BasicInformation {
  id: string;
  name: string;
  height: number;
  weight: number;
  age: number;
  appearanceDescription: string;
  backgroundDescription: string;
  abilityScores: AbilityScores;
  coinPurse: CoinPurse;
}

interface BackpackItem {
  item: Item;
  quantity: number;
}

interface Backpack {
  items: BackpackItem[];
}

interface LevelInformation {
  number: number;
  experiencePoints: number;
  experiencePointsToNextLevel: number;
}

export interface Background {
  name: string;
  description: string;
  proficiencies: string[];
  traits: string[];
}

export interface Character {
  "Basic Information": BasicInformation;
  maxLoadInKilograms: number;
  currentLoadInKilograms: number;
  loadStatus: string;
  "Race Information": Race;
  "Class Information": Class;
  "Backpack Information": Backpack;
  "Level Information": LevelInformation;
  "Background Information": Background;
}
