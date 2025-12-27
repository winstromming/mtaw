import { reactive } from "vue";
import type { Arcana, Skill, Source, Tool } from "../config/types";
import type { Casting } from "./casting";

export type Caster = typeof caster;

export const caster = reactive({
  details: {
    name: "",
    cabal: "",
    concept: "",
    virtue: "",
    vice: "",
    path: undefined as undefined | { name: string; arcana: Arcana[] },
    order: undefined as undefined | { name: string; skills: Skill[] },
    legacy: "",
  },
  health: {
    maximum: { base: 0, modifier: 0 },
    bashing: 0,
    lethal: 0,
    aggravated: 0,
  },
  progress: {
    NormalBeats: 0,
    NormalExperience: 0,
    ArcaneBeats: 0,
    ArcaneExperience: 0,
  },
  traits: {
    Size: { base: 5, modifier: undefined },
    Speed: { base: 0, modifier: undefined },
    Defense: { base: 0, modifier: undefined },
    Armour: { base: 0, modifier: undefined },
    Initiative: { base: 0, modifier: undefined },
    Obsessions: {
      1: "",
      2: "",
      3: "",
    },
    Aspirations: {
      1: "",
      2: "",
      3: "",
    },
    Mana: 0,
    Gnosis: 1,
    Wisdom: 7,
    Willpower: 0,
  },
  arcana_attainments: [] as string[],
  legacy_attainments: [
    "",
    "",
    "",
    "",
    "",
  ],
  conditions: [] as string[],
  arcana: {
    Prime: { dots: 0, ruling: false },
    Forces: { dots: 0, ruling: false },
    Fate: { dots: 0, ruling: false },
    Time: { dots: 0, ruling: false },
    Mind: { dots: 0, ruling: false },
    Space: { dots: 0, ruling: false },
    Spirit: { dots: 0, ruling: false },
    Life: { dots: 0, ruling: false },
    Death: { dots: 0, ruling: false },
    Matter: { dots: 0, ruling: false },
  } as Record<Arcana, { dots: number; ruling: boolean }>,
  merits: [
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
    { name: "", dots: 0 },
  ] as { name: string; dots: number }[],
  active: [] as Casting[],
  grimoires: [] as Source[],
  praxes: [] as Source[],
  rotes: [] as Source[],
  tools: [] as Tool[],
  spells: [] as Source[],
  nimbus: "",
  extras: {
    appearance: "",
    backstory: "",
    people: "",
    places: "",
    things: "",
    stuff: "",
  },
  attributes: {
    mental: {
      Intelligence: { dots: 1 },
      Wits: { dots: 1 },
      Resolve: { dots: 1 },
    },
    physical: {
      Strength: { dots: 1 },
      Dexterity: { dots: 1 },
      Stamina: { dots: 1 },
    },
    social: {
      Presence: { dots: 1 },
      Manipulation: { dots: 1 },
      Composure: { dots: 1 },
    },
  },
  skills: {
    mental: {
      Academics: { label: "", dots: 0 },
      Computers: { label: "", dots: 0 },
      Crafts: { label: "", dots: 0 },
      Investigation: { label: "", dots: 0 },
      Medicine: { label: "", dots: 0 },
      Occult: { label: "", dots: 0 },
      Politics: { label: "", dots: 0 },
      Science: { label: "", dots: 0 },
    },
    physical: {
      Athletics: { label: "", dots: 0 },
      Brawl: { label: "", dots: 0 },
      Drive: { label: "", dots: 0 },
      Firearms: { label: "", dots: 0 },
      Larceny: { label: "", dots: 0 },
      Stealth: { label: "", dots: 0 },
      Survival: { label: "", dots: 0 },
      Weaponry: { label: "", dots: 0 },
    },
    social: {
      Animals: { label: "", dots: 0 },
      Empathy: { label: "", dots: 0 },
      Expression: { label: "", dots: 0 },
      Intimidation: { label: "", dots: 0 },
      Persuasion: { label: "", dots: 0 },
      Socialise: { label: "", dots: 0 },
      Streetwise: { label: "", dots: 0 },
      Subterfuge: { label: "", dots: 0 },
    },
  },
  reset() {
    this.details = {
      name: "",
      cabal: "",
      concept: "",
      virtue: "",
      vice: "",
      path: undefined,
      order: undefined,
      legacy: "",
    };
    this.health = {
      maximum: { base: 0, modifier: 0 },
      bashing: 0,
      lethal: 0,
      aggravated: 0,
    };
    this.progress = {
      NormalBeats: 0,
      NormalExperience: 0,
      ArcaneBeats: 0,
      ArcaneExperience: 0,
    };
    this.traits = {
      Size: { base: 5, modifier: undefined },
      Speed: { base: 0, modifier: undefined },
      Defense: { base: 0, modifier: undefined },
      Armour: { base: 0, modifier: undefined },
      Initiative: { base: 0, modifier: undefined },
      Obsessions: {
        1: "",
        2: "",
        3: "",
      },
      Aspirations: {
        1: "",
        2: "",
        3: "",
      },
      Mana: 0,
      Gnosis: 1,
      Wisdom: 7,
      Willpower: 0,
    };
    this.arcana_attainments = [];
    this.legacy_attainments = [
      "",
      "",
      "",
      "",
      "",
    ];
    this.conditions = [];
    this.grimoires = [];
    this.arcana = {
      Prime: { dots: 0, ruling: false },
      Forces: { dots: 0, ruling: false },
      Fate: { dots: 0, ruling: false },
      Time: { dots: 0, ruling: false },
      Mind: { dots: 0, ruling: false },
      Space: { dots: 0, ruling: false },
      Spirit: { dots: 0, ruling: false },
      Life: { dots: 0, ruling: false },
      Death: { dots: 0, ruling: false },
      Matter: { dots: 0, ruling: false },
    };
    this.merits = [
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
      { name: "", dots: 0 },
    ];
    this.active = [];
    this.praxes = [];
    this.rotes = [];
    this.tools = [
      {
        id: 0,
        key: "t1",
        name: "",
        type: "Tool (+0)",
        dedicated: true,
        description: "",
      },
    ];
    this.nimbus = "";
    this.spells = [];
    this.extras = {
      appearance: "",
      backstory: "",
      people: "",
      places: "",
      things: "",
      stuff: "",
    };
    this.attributes = {
      mental: {
        Intelligence: { dots: 1 },
        Wits: { dots: 1 },
        Resolve: { dots: 1 },
      },
      physical: {
        Strength: { dots: 1 },
        Dexterity: { dots: 1 },
        Stamina: { dots: 1 },
      },
      social: {
        Presence: { dots: 1 },
        Manipulation: { dots: 1 },
        Composure: { dots: 1 },
      },
    };
    this.skills = {
      mental: {
        Academics: { label: "", dots: 0 },
        Computers: { label: "", dots: 0 },
        Crafts: { label: "", dots: 0 },
        Investigation: { label: "", dots: 0 },
        Medicine: { label: "", dots: 0 },
        Occult: { label: "", dots: 0 },
        Politics: { label: "", dots: 0 },
        Science: { label: "", dots: 0 },
      },
      physical: {
        Athletics: { label: "", dots: 0 },
        Brawl: { label: "", dots: 0 },
        Drive: { label: "", dots: 0 },
        Firearms: { label: "", dots: 0 },
        Larceny: { label: "", dots: 0 },
        Stealth: { label: "", dots: 0 },
        Survival: { label: "", dots: 0 },
        Weaponry: { label: "", dots: 0 },
      },
      social: {
        Animals: { label: "", dots: 0 },
        Empathy: { label: "", dots: 0 },
        Expression: { label: "", dots: 0 },
        Intimidation: { label: "", dots: 0 },
        Persuasion: { label: "", dots: 0 },
        Socialise: { label: "", dots: 0 },
        Streetwise: { label: "", dots: 0 },
        Subterfuge: { label: "", dots: 0 },
      },
    };
  },
});
