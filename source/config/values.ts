import type { Arcana, Level, Practice } from "./types";

export const paths = [
  { name: "Acanthus", arcana: ["Fate", "Time"] },
  { name: "Mastigos", arcana: ["Mind", "Space"] },
  { name: "Obrimos", arcana: ["Forces", "Prime"] },
  { name: "Thyrsus", arcana: ["Life", "Spirit"] },
  { name: "Moros", arcana: ["Death", "Matter"] },
];

export const orders = [
  {
    name: "Guardians of the Veil",
    skills: ["Investigation", "Stealth", "Subterfuge"],
  },
  {
    name: "Adamantine Arrow",
    skills: ["Athletics", "Intimidation", "Medicine"],
  },
  { name: "Silver Ladder", skills: ["Expression", "Persuasion", "Subterfuge"] },
  { name: "Free Council", skills: ["Crafts", "Persuasion", "Science"] },
  { name: "Mysterium", skills: ["Investigation", "Occult", "Survival"] },
];

export const baseCastingTimes = new Map([
  [
    9,
    {
      increment: 1,
      unit: "minute",
    },
  ],
  [
    7,
    {
      increment: 10,
      unit: "minute",
    },
  ],
  [
    5,
    {
      increment: 30,
      unit: "minute",
    },
  ],
  [
    3,
    {
      increment: 1,
      unit: "hour",
    },
  ],
  [
    1,
    {
      increment: 3,
      unit: "hour",
    },
  ],
]);

export const factors = ["castingTime", "duration", "potency", "range", "scale"];

export const practices: { name: Practice; verb: string; level: Level; desc: string }[] = [
  { name: "Knowing", verb: "Know", level: 1, desc: "Gain understanding of phenomena" },
  { name: "Compelling", verb: "Compel", level: 1, desc: "Nudge or activate phenomena" },
  { name: "Unveiling", verb: "Unveil", level: 1, desc: "Gain sensory perception of phenomena" },
  { name: "Ruling", verb: "Rule", level: 2, desc: "Grants elementary control over phenomena" },
  { name: "Veiling", verb: "Veil", level: 2, desc: "Conceal something from phenomena" },
  { name: "Shielding", verb: "Shield", level: 2, desc: "Protect something against phenomena" },
  { name: "Weaving", verb: "Weave", level: 3, desc: "Modify the functions of phenomena" },
  { name: "Fraying", verb: "Fray", level: 3, desc: "Degrade the properties of phemomena" },
  { name: "Perfecting", verb: "Perfect", level: 3, desc: "Improve the properties of phenomena" },
  { name: "Patterning", verb: "Pattern", level: 4, desc: "Transform something about phenomena" },
  { name: "Unraveling", verb: "Unravel", level: 4, desc: "Significantly impair phenomena" },
  { name: "Making", verb: "Make", level: 5, desc: "Create completely new phenomena" },
  { name: "Unmaking", verb: "Unmake", level: 5, desc: "Destroy entirely phenomena" },
];

export const durations = new Map([
  [
    "s1",
    {
      time: "1 turn",
      penalty: 0,
    },
  ],
  [
    "s2",
    {
      time: "2 turns",
      penalty: 2,
    },
  ],
  [
    "s3",
    {
      time: "3 turns",
      penalty: 4,
    },
  ],
  [
    "s4",
    {
      time: "5 turns",
      penalty: 6,
    },
  ],
  [
    "s5",
    {
      time: "10 turns",
      penalty: 8,
    },
  ],
  [
    "a1",
    {
      time: "1 hour",
      penalty: 0,
    },
  ],
  [
    "a2",
    {
      time: "1 day",
      penalty: 2,
    },
  ],
  [
    "a3",
    {
      time: "1 week",
      penalty: 4,
    },
  ],
  [
    "a4",
    {
      time: "1 month",
      penalty: 6,
    },
  ],
  [
    "a5",
    {
      time: "1 year",
      penalty: 8,
    },
  ],
  [
    "a6",
    {
      time: "Indefinitely",
      penalty: 10,
    },
  ],
]);

export const scales = new Map([
  [
    "s1",
    {
      number: 1,
      size: "5",
      area: "within reach",
      penalty: 0,
    },
  ],
  [
    "s2",
    {
      number: 2,
      size: "6",
      area: "small room",
      penalty: 2,
    },
  ],
  [
    "s3",
    {
      number: 4,
      size: "7",
      area: "large room",
      penalty: 4,
    },
  ],
  [
    "s4",
    {
      number: 8,
      size: "8",
      area: "several rooms",
      penalty: 6,
    },
  ],
  [
    "s5",
    {
      number: 16,
      size: "9",
      area: "small house",
      penalty: 8,
    },
  ],
  [
    "s6",
    {
      number: 32,
      size: "10",
      area: "large house",
      penalty: 10,
    },
  ],
  [
    "a1",
    {
      number: 5,
      size: "5",
      area: "large house",
      penalty: 0,
    },
  ],
  [
    "a2",
    {
      number: 10,
      size: "10",
      area: "small warehouse",
      penalty: 2,
    },
  ],
  [
    "a3",
    {
      number: 20,
      size: "15",
      area: "large warehouse",
      penalty: 4,
    },
  ],
  [
    "a4",
    {
      number: 40,
      size: "20",
      area: "shopping mall",
      penalty: 6,
    },
  ],
  [
    "a5",
    {
      number: 80,
      size: "25",
      area: "city block",
      penalty: 8,
    },
  ],
  [
    "a6",
    {
      number: 160,
      size: "30",
      area: "small neighborhood",
      penalty: 10,
    },
  ],
]);

export const arcanaNames = [
  "Prime",
  "Forces",
  "Fate",
  "Time",
  "Mind",
  "Space",
  "Spirit",
  "Life",
  "Death",
  "Matter",
];

export const castingMethods = ["Normal", "Rote", "Praxis"];

export const purviews: Record<Arcana, string> = {
  Prime:
    "truth, resonance, mana, revelation, grimoires, dispelling, casting, or the Supernal World",
  Forces:
    "electricity, gravity, radiation, sound, light, heat, fire, weather, or movement",
  Fate: "blessings, curses, destiny, fortune, oaths, probability, luck, or intentions",
  Time: "speed, divination, prophecy, the future, the past, progression, or history",
  Mind: "communication, hallucination, thought, memory, emotion, goetia, or the Astral Realms",
  Space:
    "conjuration, separation, distance, scrying, sympathy, wards, or teleportation",
  Spirit: "exorcisms, posession, essence, spirits, the Shadow, or the Gauntlet",
  Life: "healing, disease, poison, growth, evolution, metamorphosis, or physicality",
  Death:
    "darkness, decay, ectoplasm, ghosts, souls, cold, absence, endings, or the Underworld",
  Matter:
    "chemicals, gases, solids, liquids, shaping, transmutation, tools, or machines",
};

export const yantrasBaseData = new Map([
  // locations.
  [
    "l1",
    {
      name: "Demesne",
      desc: "A prepared ritual space with a Soul Stone.",
      bonus: 2,
      unique: true,
    },
  ],
  [
    "l2",
    {
      name: "Location",
      desc: "A place and time symbolically linked to the spell.",
      bonus: 1,
      unique: true,
    },
  ],
  [
    "l3",
    {
      name: "Verge",
      desc: "A place where the Supernal touches the Fallen World.",
      bonus: 2,
      unique: true,
    },
  ],

  // actions
  [
    "a2",
    {
      name: "Concentration",
      desc: "Duration must be greater than a turn. Ends if you are hurt or take non-reflexive actions.",
      bonus: 2,
      unique: true,
    },
  ],
  [
    "a3",
    {
      name: "Mantra",
      desc: "High Speech. Must be spoken aloud. Cannot be used reflexively.",
      bonus: 2,
      unique: true,
    },
  ],
  [
    "a1",
    {
      name: "Mudra",
      desc: "Uses rote skill dots as bonus. Must be free to make the mnemonic gestures.",
      bonus: 0,
      unique: true,
    },
  ],
  [
    "a4",
    {
      name: "Runes",
      desc: "Must be cast as ritual. Ends if runes on the subject are damaged or disrupted.",
      bonus: 2,
      unique: true,
    },
  ],

  // tools
  [
    "t1",
    {
      name: "Tool",
      desc: "Tool which synchronizes with your Nimbus.",
      bonus: 0,
      unique: true,
    },
  ],
  [
    "t2",
    {
      name: "Path Tool",
      desc: "Tool which aligns closely with your Path.",
      bonus: 1,
      unique: false,
    },
  ],
  [
    "t3",
    {
      name: "Order Tool",
      desc: "Tool which uses symbols and teachings of your Order.",
      bonus: 1,
      unique: false,
    },
  ],
  [
    "t4",
    {
      name: "Perfected Tool",
      desc: "Tool which contains a Perfected Metal suited to the spell.",
      bonus: 2,
      unique: false,
    },
  ],
  // Soul Stones
  [
    "s1",
    {
      name: "Soul Stone",
      desc: "Object which embodies your Gnosis.",
      bonus: 0,
      unique: false,
    },
  ],
  [
    "s2",
    {
      name: "Soul Stone",
      desc: "Object which embodies another's Gnosis.",
      bonus: 2,
      unique: false,
    },
  ],
  [
    "s3",
    {
      name: "Soul Stone",
      desc: "Object which embodies another's higher Gnosis.",
      bonus: 3,
      unique: false,
    },
  ],
  // Sympathy
  [
    "y1",
    {
      name: "Symbolic Sympathy",
      desc: "An indirect representation of the subject.",
      bonus: 0,
      unique: false,
    },
  ],
  [
    "y2",
    {
      name: "Representational Sympathy",
      desc: "An item sympathetically linked to the subject as they were previously.",
      bonus: 1,
      unique: false,
    },
  ],
  [
    "y3",
    {
      name: "Material Sympathy",
      desc: "An item sympathetically linked to the subject as they are now.",
      bonus: 2,
      unique: false,
    },
  ],
  // Sacrement
  [
    "c1",
    {
      name: "Sacrament",
      desc: "An object symbolic of the spell destroyed during casting.",
      bonus: 1,
      unique: false,
    },
  ],
  [
    "c2",
    {
      name: "Rare Sacrament",
      desc: "A sacrament which requires significant effort to acquire.",
      bonus: 2,
      unique: false,
    },
  ],
  [
    "c3",
    {
      name: "Otherworldly Sacrament",
      desc: "A sacrament from somewhere other than the material realm.",
      bonus: 3,
      unique: false,
    },
  ],
  // Persona
  [
    "p1",
    {
      name: "Shadow Name",
      desc: "Using symbolism from your Shadow Name.",
      bonus: 1,
      unique: true,
    },
  ],
  [
    "p2",
    {
      name: "Shadow Name",
      desc: "Using symbolism from your Shadow Name.",
      bonus: 2,
      unique: true,
    },
  ],
  [
    "p3",
    {
      name: "Shadow Name",
      desc: "Using symbolism from your Shadow Name.",
      bonus: 3,
      unique: true,
    },
  ],
  [
    "p4",
    {
      name: "Cabal Theme",
      desc: "Using symbolism from your Cabal Theme.",
      bonus: 1,
      unique: true,
    },
  ],
  [
    "p5",
    {
      name: "Cabal Theme",
      desc: "Using symbolism from your Cabal Theme.",
      bonus: 2,
      unique: true,
    },
  ],
  [
    "p6",
    {
      name: "Cabal Theme",
      desc: "Using symbolism from your Cabal Theme.",
      bonus: 3,
      unique: true,
    },
  ],
]);

export const obsessionLimit: Record<number, number> = {
  1: 1,
  2: 1,
  3: 2,
  4: 2,
  5: 2,
  6: 3,
  7: 3,
  8: 3,
  9: 4,
  10: 4,
};

export const manaLimit: Record<number, number> = {
  1: 10,
  2: 11,
  3: 12,
  4: 13,
  5: 15,
  6: 20,
  7: 25,
  8: 30,
  9: 50,
  10: 75,
};

export const combinedLimit: Record<number, number> = {
  1: 1,
  2: 1,
  3: 2,
  4: 2,
  5: 2,
  6: 3,
  7: 3,
  8: 3,
  9: 4,
  10: 4,
};
