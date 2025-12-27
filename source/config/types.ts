export type Arcana =
  | "Death"
  | "Fate"
  | "Forces"
  | "Life"
  | "Matter"
  | "Mind"
  | "Prime"
  | "Space"
  | "Spirit"
  | "Time";
export type Category = "mental" | "physical" | "social";
export type Attribute =
  | "Intelligence"
  | "Wits"
  | "Resolve"
  | "Strength"
  | "Dexterity"
  | "Stamina"
  | "Presence"
  | "Manipulation"
  | "Composure";
export type Form = "Improvised" | "Praxis" | "Grimoire" | "Rote";
export type Scale = "subjects" | "area";
export type Skill =
  | "Academics"
  | "Computers"
  | "Crafts"
  | "Investigation"
  | "Medicine"
  | "Occult"
  | "Politics"
  | "Science"
  | "Athletics"
  | "Brawl"
  | "Drive"
  | "Firearms"
  | "Larceny"
  | "Stealth"
  | "Survival"
  | "Weaponry"
  | "Animals"
  | "Empathy"
  | "Expression"
  | "Intimidation"
  | "Persuasion"
  | "Socialise"
  | "Streetwise"
  | "Subterfuge";
export type Level = 1 | 2 | 3 | 4 | 5 | number;
export type Effect = {
  cost?: { type: string; value: number; multiple?: boolean }[];
  requirement?: { arcana?: Arcana; value: number };
  label?: string | boolean;
  effect: string;
};
export type Factor = "castingTime" | "potency" | "range" | "duration" | "scale";
export type Practice =
  | "Knowing"
  | "Compelling"
  | "Unveiling"
  | "Ruling"
  | "Veiling"
  | "Shielding"
  | "Weaving"
  | "Fraying"
  | "Perfecting"
  | "Patterning"
  | "Unraveling"
  | "Making"
  | "Unmaking";
export type Tool = {
  name: string;
  type: string;
  key: string;
  description: string;
  dedicated: boolean;
  id: number;
};
export type Praxis = {
  name: string;
  level: Level;
  arcana: Arcana;
  description: string;
};
export type Grimoire = {
  name: string;
  level: Level;
  arcana: Arcana;
  description: string;
};
export type Rote = {
  name: string;
  level: Level;
  arcana: Arcana;
  skill?: Skill;
  description: string;
};
export type Source = {
  name: string;
  primaryArcana: {
    arcana: Arcana;
    level: Level;
  };
  secondaryArcana?: {
    arcana: Arcana;
    level: Level;
  };
  extraMana?: number;
  practice: Practice;
  withstand?: string;
  factor: "Duration" | "Potency";
  page: string;
  skill?: Skill;
  description: string;
  effects?: Effect[];
};
export type Condition = {
  name: string;
  type:
    | "Mental"
    | "Physical"
    | "Social"
    | "Supernatural"
    | "Awakened"
    | "Paradox"
    | "Other"
    | string;
  page: string;
  persist: true | false | undefined;
  description: string;
};
export type Yantra = {
  id?: number;
  name: string;
  description: string;
  bonus: number;
  value: string;
  label: string;
  yantraKey: string;
  isDedicatedTool: boolean;
};
