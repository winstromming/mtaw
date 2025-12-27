import type { Source } from "./types";

export const spells: Source[] = [
  {
    name: "Ectoplasmic Shaping",
    primaryArcana: {
      arcana: "Death",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p128",
    description:
      "Shape and mold ectoplasm, or create Open Condition on an object or location for a ghost to Manifest.",
  },
  {
    name: "Deepen Shadows",
    primaryArcana: {
      arcana: "Death",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p128",
    description: "Apply Poor Light Tilt in area.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Apply Blinded Tilt in an area.",
      },
    ],
  },
  {
    name: "Forensic Gaze",
    primaryArcana: {
      arcana: "Death",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p128",
    description: "Learn how a subject died.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Witness final moments of a corpse's life.",
      },
    ],
  },
  {
    name: "Shadow Sculpting",
    primaryArcana: {
      arcana: "Death",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p128",
    description: "Shape shadows to your liking.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Both shape and animate shadows.",
      },
    ],
  },
  {
    name: "Soul Marks",
    primaryArcana: {
      arcana: "Death",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p128",
    description: "Learn about a subjects soul.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can use spell on unattached souls.",
      },
    ],
  },
  {
    name: "Speak with the Dead",
    primaryArcana: {
      arcana: "Death",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p128",
    description:
      "Sense and communicate with ghosts in Twilight. Sense anchors and determine a ghosts rank.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "See if an anchor is temporary or permanent.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can be understood by ghosts that don't share your language.",
      },
    ],
  },
  {
    name: "Corpse Mask",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p129",
    description: "Alter a corpse's apparent time and cause of death.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can cast this spell on injured living subjects. Turn cuts to burns etc.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Change corpse appearance completely even age and sex.",
      },
    ],
  },
  {
    name: "Decay",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Mage the Awakening p129",
    description: "Age an object, lowering durability.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Decrease structure instead.",
      },
    ],
  },
  {
    name: "Ectoplasm",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p129",
    description: "Create ectoplasm from your own orifices or that of a corpse.",
  },
  {
    name: "Ghost Shield",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Shielding",
    factor: "Potency",
    page: "Mage the Awakening p129",
    description:
      "Protects subject form ghostly Numina, Influences and Manifestations as well as Death-Based entities.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "to protect from the physical attacks of Ghosts.",
      },
    ],
  },
  {
    name: "Sacrificial Relinquishment",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Signs of Sorcery p73",
    description:
      "Instead of spending a willpower dot to relinquish a spell you may instead make a blood sacrifice. This must be a sacrifice of Value, such as dozens of small unintelligent creatures, a few intelligent creatures or a single human.",
  },
  {
    name: "Shape Ephemera",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p129",
    description: "Shape ephemera into objects, weapons or armor.",
  },
  {
    name: "Soul Armor",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p129",
    description: "Protect soul against hostile spells.",
  },
  {
    name: "Soul Jar",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p129",
    description: "Trap unattached soul into container.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Bind soul to person with the soulless condition. An unwilling person may Withstand.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Make this spell lasting.",
      },
    ],
  },
  {
    name: "Suppress Aura",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p129",
    description:
      "Suppress Nimbus to appear as a sleeper to Mage Sight. Impose penalty to Empathy checks and supernatural attempts to read your emotional or mental state.",
  },
  {
    name: "Suppress Life",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p130",
    description: "Appear to be a corpse.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Cast reflexively.",
      },
    ],
  },
  {
    name: "Touch of the Grave",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p130",
    description:
      "Interact with ghosts and other things in Death-attuned Twilight. Can pull objects from Twilight and make them visible and solid but with low durability.",
  },
  {
    name: "Without a Trace",
    primaryArcana: {
      arcana: "Death",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p130",
    description: "Leave no forensic evidence like fingerprints.",
  },
  {
    name: "Cold Snap",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p130",
    description: "Apply Ice Tilt to area.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Also apply Extreme Cold Tilt.",
      },
    ],
  },
  {
    name: "Damage Ghost",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p130",
    description: "Deal bashing damage to ghost.",
  },
  {
    name: "Death Touched Item",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p64",
    description:
      "Turns ordinary objects into one capable of affecting objects of Death-attuned ephemera and shadow. It can interact with anything in Death attuned twilight or even items crafted of shadows by Death magic. It can deal damage to a Ghosts Corpus or Shadow items structure or prevent harm to the wearer. If the item is brought into twilight it doesn't lose its material form while under the effects of this spell.",
  },
  {
    name: "Devouring the Slain",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p130",
    description:
      "Can take Willpower or Scour the pattern of an injured person.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "May affect a healty person who has recently taken damage.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell does not count toward limit of Scouring per day.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Use spell on ghosts.",
      },
    ],
  },
  {
    name: "Ghost Gate",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p130",
    description:
      "Create a 2 dimensional gateway that converts anything passing through it into Death-attuned Twilight.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can transform a subject into Twilight directly without a gate.",
      },
    ],
  },
  {
    name: "Ghost Summons",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p131",
    description: "Call a ghost in the local area to you.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell also creates the Open Condition.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can give the ghost a single word command to follow.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "When near an Iris to the Underworld can call a ghost from there instead.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Can give ghost a complex command to follow.",
      },
    ],
  },
  {
    name: "Reaping Relinquishment",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Signs of Sorcery p73",
    description:
      "The mage destroys a soul to relinquish a spell safely instead of spending a Willpower dot.",
    effects: [
      {
        requirement: {
          arcana: "Prime",
          value: 2,
        },
        effect:
          "The caster can destroy a soul stone instead for the same effect.",
      },
    ],
  },
  {
    name: "Quicken Corpse",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p131",
    description: "Create a zombie.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Create zombie suited for combat.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Imbue zombie with exceptional physical prowess.",
      },
    ],
  },
  {
    name: "Quicken Ghost",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p131",
    description: "Can boost ghost's Attributes or heal them.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Increase ghost's Rank by 1.",
      },
    ],
  },
  {
    name: "Rotting Flesh",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p132",
    description: "Inflict bashing damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Subject suffers penalty to Social rolls.",
      },
    ],
  },
  {
    name: "Sever Soul",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p132",
    description:
      "Take the soul from a Sleeper. Inflicts the Soulless Condition.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Skip the Soulless Condition and inflict the Enervated Condition instead.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Skip both the Soulless and Enervated Conditions and inflict the Thrall Condition instead.",
      },
    ],
  },
  {
    name: "Shadow Crafting",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p132",
    description: "Shape shadows into objects, weapons or armor.",
  },
  {
    name: "Unliving Vessel",
    primaryArcana: {
      arcana: "Death",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Resistance",
    page: "Signs of Sorcery p69",
    description:
      "Prepares a Subject under the purview of Death for the Imbue Item Attainment. Can be used on items found in Ghostly Twilight, Items made of Ectoplasm, Corpses and Ghosts which will automatically withstand this spell. The Ghost must either be cast on within Twilight or while Manifested.",
  },
  {
    name: "Enervation",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Stamina",
    page: "Mage the Awakening p132",
    description: "Apply either the Leg Wrack Tilt or the Arm Wreck Tilt.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Apply the Immobilized Tilt.",
      },
    ],
  },
  {
    name: "Exorcism",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p132",
    description: "Destroy Manifestation Condition of a ghost or it's host.",
    effects: [
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "Spell works on Goetia.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Target cannot attempt to recreate destroyed conditions for the duration of the spell.",
      },
    ],
  },
  {
    name: "Goetic Evocatuion (Death Substitute)",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Rank",
    page: "Signs of Sorcery p90",
    description:
      "May convert pieces of a persons Psyche from a soul stone into a Ghost.",
  },
  {
    name: "Haunted Grimoire",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Arcanum Dots + Rank",
    page: "Signs of Sorcery p86",
    extraMana: 1,
    description:
      "The Mage binds a Ghost to a grimoire, writing its essence into the vessel's pattern. This doesn't host the Ghost's numina or influences. The Grimoire gains the Open and Resonant Conditions. When cast the spell is increased by the Ghost's Rank for Primary Factor however the Ghost has a chance to escape with a Clash of Wills to the caster. When someone memorizes a Rote the Ghost has a chance to possess them using a Clash of Wills. This spell is a Wisdom Sin against Understanding.",
  },
  {
    name: "Revenant",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p132",
    description: "Grant a ghost a Manifestation condition.",
    effects: [
      {
        requirement: {
          arcana: "Mind",
          value: 4,
        },
        effect: "Spell works on Goetia",
      },
    ],
  },
  {
    name: "Scribe Daimonomikon",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Attainment Rank + 10 - Gnosis",
    page: "Signs of Sorcery p87",
    extraMana: 1,
    description:
      "Scribe a Daimonomikon for the Mage's Legacy. A Mage must be of Gnosis 2 or above to cast this. Anyone initiated into a Legacy via a Daimonomikon must spend 1 Arcane Experience and if used to learn more Legacy Attainments must use the Experience cost listed for learning without a tutor. These serve as a sympathetic Yantra worth +2 Dice for members of the inscribed Legacy.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Duration is Lasting.",
      },
    ],
  },
  {
    name: "Shadow Flesh",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p132",
    description: "Transform subject into a two or three-dimensional shadow.",
  },
  {
    name: "Soul Grafting",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p90",
    description:
      "Graft another Mage's soul stone to your own soul, this does not increase Gnosis but grants a +1 for soul stone or +2 for complete souls Gnosis for the purpose of Spell casting time, Determining range for Aimed spells, Clash of Wills, Mana spends per turn, spell control, combining spells and Yantras per turn. You also recieve a +2 for Soul Stone and +3 for full souls Gnosis for Calculating Paradox. This is an act against Falling wisdom.",
  },
  {
    name: "Withering",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p133",
    description: "Inflict lethal damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Inflict aggravated damage instead.",
      },
    ],
  },
  {
    name: "Create Anchor",
    primaryArcana: {
      arcana: "Death",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p133",
    description: "Apply the Anchor Condition to a subject.",
  },
  {
    name: "Create Avernian Gate",
    primaryArcana: {
      arcana: "Death",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p133",
    description:
      "Create a gateway to the upper levels of the Underworld. This gives the area a Death Resonance and the Gateway Condition.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The gateway can lead to anywhere in the Underworld the mage has been before.",
      },
    ],
  },
  {
    name: "Create Ghost",
    primaryArcana: {
      arcana: "Death",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p133",
    description: "Create a ghost of Rank 1, loyal to you.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Ghost created is Rank 2.",
      },
    ],
  },
  {
    name: "Deny the Reaper",
    primaryArcana: {
      arcana: "Death",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    page: "Mage the Awakening p133",
    description:
      "Reverse the effects of decay and age up to a number of months.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can bring the recently dead back to life. Subject suffers Soulless Condition.",
      },
    ],
  },
  {
    name: "Empty Presence",
    primaryArcana: {
      arcana: "Death",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Duration",
    page: "Mage the Awakening p133",
    description:
      "Destroys all evidence of a subjects existence and renders them invisible to the naked eye. If the subject takes violent action the spell ends immediately.",
  },
  {
    name: "Sever the Awakened Soul",
    primaryArcana: {
      arcana: "Death",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p133",
    description:
      "Severs the soul of an Awakened mage. Inflicts the Soulless Conditions.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Skip the Soulless Condition and inflict the Enervated Condition instead.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Skip both the Soulless and Enervated Conditions and inflict the Thrall Condition instead.",
      },
    ],
  },
  {
    name: "Interconnections",
    primaryArcana: {
      arcana: "Fate",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p134",
    description:
      "Reveal sympathetic connections, who has violated an oath or geas and spells with conditional duration.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Detect possession, supernatural mind control and alterations of destiny.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Discern information about a persons destiny.",
      },
    ],
  },
  {
    name: "Oaths Fulfilled",
    primaryArcana: {
      arcana: "Fate",
      level: 1,
    },
    practice: "Knowing",
    factor: "Duration",
    page: "Mage the Awakening p135",
    description: "Know when the subject breaks or fulfills an oath.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Also receive a brief vision of the subject when the oath is fullfilled.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Track the subject of the spell.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Trigger event may be something that could only be seen by Mage Sight.",
      },
    ],
  },
  {
    name: "Quantum Flux",
    primaryArcana: {
      arcana: "Fate",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p135",
    description:
      "Negate a number of penalties to your Mundane actions or wait a turn to receive a bonus to your next mundane action.",
  },
  {
    name: "Reading the Outmost Eddies",
    primaryArcana: {
      arcana: "Fate",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p135",
    description:
      "Subject of spell receives a minor blessing or curse. Choose one of three effects: exceptional successes on three success (potency number of rolls), eliminating 10-again on actions (potency number of rolls), or small twist of fate within 24 hours. Only hostile applications are Withstood.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell takes effect within an hour.",
      },
    ],
  },
  {
    name: "Serendipity",
    primaryArcana: {
      arcana: "Fate",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p135",
    description:
      "Reveal what course of action will bring you closer to your goal.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "When making a roll to achieve your stated goal, you may substitute the used Skill with another of the same type (Mental, Physical, Social).",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "As above but may substitute any Skill.",
      },
    ],
  },
  {
    name: "Exceptional Luck",
    primaryArcana: {
      arcana: "Fate",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p136",
    description:
      "Subject receives a boon or hex. A hex may be withstood. Number of effects equal to potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Boon or hex can affect spellcasting rolls.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Boon turns 9-again to 8-again.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "This spell can be cast reflexive.",
      },
    ],
  },
  {
    name: "Fabricate Fortune",
    primaryArcana: {
      arcana: "Fate",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p136",
    description:
      "Conceal and falsify a subjects fate or Destiny. This can fool spells with conditional triggers.",
  },
  {
    name: "Fools Rush In",
    primaryArcana: {
      arcana: "Fate",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p136",
    description:
      "Suffer no untrained skill penalties when facing a situation unprepared.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Receive a dice bonus (not to spellcasting rolls).",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 3,
          },
        ],
        effect: "Recieve a dice bonus that may apply to spellcasting rolls.",
      },
    ],
  },
  {
    name: "Lucky Number",
    primaryArcana: {
      arcana: "Fate",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p136",
    description:
      "Guess the right password, phone number, etc. on the first try.",
  },
  {
    name: "Shifting the Odds",
    primaryArcana: {
      arcana: "Fate",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p136",
    description:
      "Find a particular kind of person, place or thing within 24 hours. Or temporarily gain social merits with a rating no greater than dots in Fate.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Find desired object within an hour.",
      },
    ],
  },
  {
    name: "Warding Gesture",
    primaryArcana: {
      arcana: "Fate",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p136",
    description:
      "Protect a subject against supernatural effect that would alter her fate including supernatural compulsion. Subject may also be excluded form any area-effect spell you may cast.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Subject may be excluded from any spell/attainment you cast.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Subject may be protected from any supernatural effects that target an area instead of individuals.",
      },
    ],
  },
  {
    name: "Grave Misfortune",
    primaryArcana: {
      arcana: "Fate",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p137",
    description:
      "The next time the subjects suffers damage, increase the damage.",
  },
  {
    name: "Monkey's Paw",
    primaryArcana: {
      arcana: "Fate",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p137",
    description: "Bless or curse an object altering it's equipment bonus.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Anybody who caries the item also receives a boon or a hex. Number of effects equal to potency.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Boon or hex can affect spellcasting rolls.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Boon turns 9-again to 8-again.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Bonus or penalty may exceed five dice.",
      },
    ],
  },
  {
    name: "Shared Fate",
    primaryArcana: {
      arcana: "Fate",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p137",
    description:
      "Two or more subjects are bound together. Any damage, Tilt or Condition suffered by one will also affect the other.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Link is only one way.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Subject is not linked to any other subjects. Instead, she suffers any damage, Tilt or Condition she inflicts on others.",
      },
    ],
  },
  {
    name: "Superlative Luck",
    primaryArcana: {
      arcana: "Fate",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p137",
    extraMana: 1,
    description: "Gain the rote quality.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Rote quality may effect ritual spellcasting but this also doubles the casting time.",
      },
    ],
  },
  {
    name: "Sworn Oaths",
    primaryArcana: {
      arcana: "Fate",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p137",
    description:
      "Supernaturally enforce a vow. Adhere to the oath and the subject receives a boon, break and she suffers a hex. Number of effects equal to potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "If spell control is maintained the mage is aware if the spell is a boon or a hex.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Boon or hex can affect spellcasting rolls.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Boon turns 9-again to 8-again.",
      },
    ],
  },
  {
    name: "The Right Tool",
    primaryArcana: {
      arcana: "Fate",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p64",
    description:
      "Turn an ordinary object into the object needed to get the job done. During the duration of the spell this item could be conceivable used as the item needed to complete a task. When used for the new purpose the Items equipment bonus is increased (up to 5+) by the Potency, Items not normally used for the situation begin at 0.",
  },
  {
    name: "Atonement",
    primaryArcana: {
      arcana: "Fate",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Countered effect's Potency",
    page: "Mage the Awakening p137",
    description:
      "If a subject is cursed can grant them a quest that, if fulfilled, will lift the curse. Stronger curses require greater quests.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Quest can be undertaken by another on the subjects behalf.",
      },
    ],
  },
  {
    name: "Chaos Mastery",
    primaryArcana: {
      arcana: "Fate",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p138",
    description:
      "Can realize complex possibility such as causing a 1.000 coins to turn up heads.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "This spell when used as an attack can deal aggravated damage.",
      },
    ],
  },
  {
    name: "Divine Intervention",
    primaryArcana: {
      arcana: "Fate",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p138",
    description:
      "Replace one of the subjects Aspirations with a stated goal. Subject suffers ill luck when no pursuing this goal. This can also be reversed causing bad luck only when pursuing the goal.",
  },
  {
    name: "Scribe Daimonomikon",
    primaryArcana: {
      arcana: "Fate",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Attainment Rank + 10 - Gnosis",
    page: "Signs of Sorcery p87",
    extraMana: 1,
    description:
      "Scribe a Daimonomikon for the Mage's Legacy. A Mage must be of Gnosis 2 or above to cast this. Anyone initiated into a Legacy via a Daimonomikon must spend 1 Arcane Experience and if used to learn more Legacy Attainments must use the Experience cost listed for learning without a tutor. These serve as a sympathetic Yantra worth +2 Dice for members of the inscribed Legacy.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Spell's Duration is Lasting.",
      },
    ],
  },
  {
    name: "Strings of Fate",
    primaryArcana: {
      arcana: "Fate",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p138",
    description:
      "The mage can encourage a specific event to befall the subject. The event will come pass when circumstances allow. If the subject's cooperation is required opportunities for this event to come to pass will appear once a week.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Opportunities appear once a day.",
      },
    ],
  },
  {
    name: "Sever Oaths",
    primaryArcana: {
      arcana: "Fate",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p138",
    description:
      "Can have a variety of effects such as freeing a bound ephemeral entity or dispelling a conditional trigger.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Spell's effects are lasting.",
      },
    ],
  },
  {
    name: "Forge Destiny",
    primaryArcana: {
      arcana: "Fate",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p139",
    description:
      "Mage can grant the subject a supernatural merit or increase and decrease an existing one. Mage can impose Aspirations, Obsessions or a Doom on the subject.",
  },
  {
    name: "Miracle",
    primaryArcana: {
      arcana: "Fate",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p140",
    description:
      "Mage gains a number of Intercessions that can be spend reflexively to increase/decrease dice pools or to cause likely events to happen on command.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Willpower",
            value: 1,
          },
        ],
        effect:
          "Spend one Intercession and Willpower to cause a low-probability event to pass.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Willpower",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect:
          "Spend one Intercession, Willpower and Mana to let the incredible come to pass.",
      },
    ],
  },
  {
    name: "Pariah",
    primaryArcana: {
      arcana: "Fate",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p139",
    description: "Turns the whole world against the subject.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Mage can adjust the sensitivity of the curse.",
      },
    ],
  },
  {
    name: "Swarm of Locusts",
    primaryArcana: {
      arcana: "Fate",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p140",
    description:
      "Create chaotic conditions that cause Environmental Tilts of player's choosing on the area. This spell is a breaking point for most Sleepers.",
  },
  {
    name: "Influence Electricity",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p140",
    description: "Operate or shut down electrical devices.",
  },
  {
    name: "Influence Fire",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p140",
    description: "Guide flames along a particular path.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Increase or decrease the size of a flame.",
      },
    ],
  },
  {
    name: "Kinetic Efficiency",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p141",
    description: "Run faster, jump further or lift more.",
  },
  {
    name: "Influence Heat",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p141",
    description:
      "Control the flow of heat in an area. Can protect against heat- or cold-related Environments up to level 2(see p.224).",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Protect against Environments up to level 3.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Protect against Environments up to level 4.",
      },
    ],
  },
  {
    name: "Nightvision",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p141",
    description:
      "Suffer no penalty form dim to no light. Bright lights can inflict the Blind Condition.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "No longer risk the Blind Condition from sudden bright lights.",
      },
    ],
  },
  {
    name: "Receiver",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p141",
    description: "Hear sounds outside normal human frequency.",
  },
  {
    name: "Tune In",
    primaryArcana: {
      arcana: "Forces",
      level: 1,
    },
    practice: "Knowing",
    factor: "Duration",
    page: "Mage the Awakening p141",
    description: "Become able to see and listen to data transmission.",
  },
  {
    name: "Control Electricity",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p142",
    description:
      "Alter the flow of a current or decrease it, but you cannot increase it. Direct a buildings electricity to one outlet, or divide the power from one outlet to many other sources.",
  },
  {
    name: "Control Fire",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p142",
    description: "Increase or decrease the heat or size of a fire.",
  },
  {
    name: "Control Gravity",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p142",
    description: "Cause gravity to pull upwards or horizontally.",
  },
  {
    name: "Control Heat",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p142",
    description:
      "Increase or decrease the temperature of an area this may cause an Extreme Environment.",
  },
  {
    name: "Control Light",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p142",
    description:
      "Can focus or disperse light, and alter its wavelength on the spectrum.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can create a mirroring effect or a complete black-out which causes the Blinded Tilt or provides substantial cover.",
      },
    ],
  },
  {
    name: "Control Sound",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p142",
    description:
      "Amplify or dampen sound, can also influence the direction of sound. Loud sounds can cause the Deafened Tilt in combat.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Create an echoing effect which imposes a penalty to stealth rolls.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Gain a bonus to hearing-based perception rolls.",
      },
    ],
  },
  {
    name: "Control Weather",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p143",
    description:
      "Make changes to the weather may create an Extreme Environments up to level 4.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Weather changes are more gradual.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Required for more drastic changes.",
      },
    ],
  },
  {
    name: "Environmental Shield",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p143",
    description:
      "This spell gives resistance to any Conditions and Tilts caused by the environment.",
  },
  {
    name: "Invisibility",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p143",
    description: "Make a subject invisible.",
  },
  {
    name: "Kinetic Blow",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p143",
    description: "Unarmed attacks gain a bonus.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Apply the Knocked Down Tilt.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Apply the Stunned Tilt.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell can affect held weapons.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Spell affects thrown weapons but can also grant bullets Armor Piercing.",
      },
    ],
  },
  {
    name: "Transmission",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p144",
    description:
      "Hijack existing signals and change the transmitted data or its destination.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The signal becomes 'encrypted' only specific actions will allow somebody to read them.",
      },
    ],
  },
  {
    name: "Zoom In",
    primaryArcana: {
      arcana: "Forces",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p144",
    description: "See distant objects or better examine small ones.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "See clearly for miles.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Clearly examine dust-sized particles.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "No longer suffer penalties form atmospheric conditions.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Clearly see microscopic particles, even molecular bonds.",
      },
    ],
  },
  {
    name: "Call Lightning",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p144",
    description:
      "Can call lightning from an existing storm which may be created with 'Control Weather'.",
  },
  {
    name: "Data Hog",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p65",
    description:
      "increase or decrease a computer device's capability to process, accept and transfer data by Potency.",
  },
  {
    name: "Energize Object",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p69",
    extraMana: 1,
    description:
      "Primes an object with the potential for activation to hold a spell. Once the object is primed a mage may spend a Mana to cast any other spell on the object which doesn't activate until appropriate force is applied to the object. May store spells up to Potency which won't take affect until either the controlling mage cancels this spell, the duration ends or the correct force is applied to the object.",
  },
  {
    name: "Gravitic Supremacy",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p144",
    description: "Increase or decrease gravity.",
  },
  {
    name: "Perpetual Motion",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p65",
    description:
      "The subject no longer requires an energy input for the duration of the spell.",
  },
  {
    name: "Rapid Access Memory",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p69",
    description:
      "Allows the Subject to use the attainment Imbue Item on computer Software which can later be activated on a computer.",
  },
  {
    name: "Telekinesis",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p144",
    description:
      "Use telekinetic force to lift or manipulate an object remotely. Potency is applied to either Strength or Dexterity the remaining stat becomes 1.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Divide Potency between Two of the Three Physical Attributes.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Divide Potency between any of the Three Physical Attributes.",
      },
    ],
  },
  {
    name: "Telekinetic Strike",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p145",
    description: "Deal bashing damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Apply the Knocked Down or Stunned Tilt.",
      },
    ],
  },
  {
    name: "Turn Momentum",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p145",
    description:
      "When applying defense against an object this spell may be used, causing the object to be deflected in an uncontrolled direction though it never reverses direction.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell can be used as an reflexive action.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Mage has control over where the object is deflected, sol long as the new direction is within 90 degrees of the original arc.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Objects direction can be completely reversed Ranged weapons hit their users.",
      },
      {
        requirement: {
          arcana: "Time",
          value: 1,
        },
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "You can now turn objects too fast for you to apply defense against.",
      },
    ],
  },
  {
    name: "Velocity Control",
    primaryArcana: {
      arcana: "Forces",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p145",
    description: "Increase or decrease an objects speed.",
  },
  {
    name: "Electromagnetic Pulse",
    primaryArcana: {
      arcana: "Forces",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p145",
    description:
      "By Unraveling electricity in the Subject this Creates an EMP that snuffs out powered devices in the affected area. Military devices may be shielded. Magical devices require a Clash of Wills. If used on a Living being this acts as an attack spell.",
  },
  {
    name: "Levitation",
    primaryArcana: {
      arcana: "Forces",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p145",
    description:
      "Levitate a subject, if unwilling the spell is withstood. You may direct the levitation each turn as an instant action. Without the mages focus the subject simply stops and floats in midair.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Subject retains momentum form turn to turn, floating slowly in whatever direction it was last directed in.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Subject can fly freely, apply defense normally and a speed equal to the mage's Gnosis+spell's Potency.",
      },
    ],
  },
  {
    name: "Rend Friction",
    primaryArcana: {
      arcana: "Forces",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p145",
    description:
      "Increase or decrease friction. Increases can cause lethal damage. Decreases cause objects to move after they normally would have stopped.",
  },
  {
    name: "Thunderbolt",
    primaryArcana: {
      arcana: "Forces",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p146",
    description: "Deal lethal damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Spell deals aggravated damage.",
      },
    ],
  },
  {
    name: "Transform Energy",
    primaryArcana: {
      arcana: "Forces",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p146",
    description: "Transform one type of energy into another of the same level.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "May decrease the level of transformed energy by one. This Reach can be applied multiply times.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Split one type of energy into two others.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Increase the level of transformed energy by one.",
      },
    ],
  },
  {
    name: "Adverse Weather",
    primaryArcana: {
      arcana: "Forces",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p146",
    description:
      "Create Extreme Environments of nearly any kind up to level 4.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can create weather drastically different from the local conditions.",
      },
    ],
  },
  {
    name: "Create Energy",
    primaryArcana: {
      arcana: "Forces",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p146",
    description:
      "Create any type of energy form nothing, including sunlight and radiation.",
  },
  {
    name: "Eradicate Energy",
    primaryArcana: {
      arcana: "Forces",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    page: "Mage the Awakening p146",
    description:
      "Explosively destroy energy, if used on a creature the spell is instantly fatal.",
  },
  {
    name: "Earthquake",
    primaryArcana: {
      arcana: "Forces",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p147",
    description:
      "Apply damage to all structures within the affected area. Buildings made to withstand earthquakes subtract their Durability.",
  },
  {
    name: "Analyze Life",
    primaryArcana: {
      arcana: "Life",
      level: 1,
    },
    practice: "Knowing",
    factor: "Duration",
    page: "Mage the Awakening p148",
    description:
      "Observe a creature and learn information like species, age, sex and overall health. A supernatural creature's species shows up as unknown unless the mage has studied it's kind before. Can discern amount of dots in physical attributes and any illnesses, injuries, Personal Tilts and Condition on target.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "May learn a specific Physical Attribute level, rather than just the total number of dots.",
      },
    ],
  },
  {
    name: "Cleanse the Body",
    primaryArcana: {
      arcana: "Life",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    page: "Mage the Awakening p148",
    description: "Help subject resist any toxins in her system.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The subject may make a resistance roll immediately, in addition to the normal ones from regular intervals.",
      },
    ],
  },
  {
    name: "Heightened Senses",
    primaryArcana: {
      arcana: "Life",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p149",
    description: "Heighten desired senses. Grants bonus to perception roles.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "You can track by scent.",
      },
    ],
  },
  {
    name: "Speak With Beasts",
    primaryArcana: {
      arcana: "Life",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p148",
    description:
      "Magically speak with a specific species of animal. Animals have limited ability to understand things around them, for example a rat may refer to a cat and vampire alike as simply a 'predator'.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "May communicate with all animals rather than only a single species.",
      },
    ],
  },
  {
    name: "Web of Life",
    primaryArcana: {
      arcana: "Life",
      level: 1,
    },
    practice: "Knowing",
    factor: "Duration",
    page: "Mage the Awakening p148",
    description:
      "Detect all forms of specified life in the spells area of effect.",
  },
  {
    name: "Body Control",
    primaryArcana: {
      arcana: "Life",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p148",
    description:
      "Slow Breathing, Heartbeat and/or Metabolism. Up your Initiative, eliminate or increase body odors and halve healing time for bashing damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Gain 1/0 armor.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Half healing time for lethal damage.",
      },
    ],
  },
  {
    name: "Control Instincts",
    primaryArcana: {
      arcana: "Life",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p149",
    description:
      "Trigger a specific instinctual response in animals(includes humans). Subject suffers a Condition related to the desired instinct.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Control instincts of living supernatural creatures.",
      },
    ],
  },
  {
    name: "Lure and Repel",
    primaryArcana: {
      arcana: "Life",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p149",
    description:
      "Create a lure or repellent that works on a specific organism. Plant and bacteria have 0 resolve for the purposes of this spell.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Lured creatures may offer food or small favors a appropriate for the animal.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Lured creatures treat the subject good if a lure or bad if a repellent for the purposes of first impressions in Social maneuvering.",
      },
    ],
  },
  {
    name: "Mutable Mask",
    primaryArcana: {
      arcana: "Life",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p149",
    description:
      "Change a subjects appearance, apparent sex, voice, smell, etc. Changes are illusionary, bio-metric devices will still pick up the truth. Cannot imitate specific people.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Can duplicate the appearance of a specific person, including fingerprints.",
      },
    ],
  },
  {
    name: "Purge Illness",
    primaryArcana: {
      arcana: "Life",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Mage the Awakening p149",
    description:
      "Cure yourself of an illness. Compare Potency to the illness'rating if less, reduce the illness by the difference if more, eliminate the illness.",
  },
  {
    name: "Bruise Flesh",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p150",
    description: "Deal bashing damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Inflict an additional -1 penalty to any wound penalties the target might have.",
      },
    ],
  },
  {
    name: "Contact High",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p65",
    description:
      "Creates a drug that targets the nervous system. Anyone who comes into contact with the Subject is affected by this drug for one scene. The Caster determines if it increases Initiative equal to Potency or penalizes Initiative equal to Potency. The drug affects a living subject as well as any touching it.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Living subjects are Immune but still spread the drug to anything they touch.",
      },
    ],
  },
  {
    name: "Degrading the Form",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Fraying",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p150",
    description: "Reduce a targets Physical Attributes, but only one.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell may effect two different Physical Attributes.",
      },
    ],
  },
  {
    name: "Honing the Form",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p150",
    description:
      "Raise Strength, Dexterity or Stamina, but no higher than a subjects max for these stats.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Spell may effect two different Physical. This effect can be applied twice so that all three attributes may be affected.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "May increase stats beyond the allowed maximum.",
      },
    ],
  },
  {
    name: "Knit",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p150",
    description: "Heal 2 bashing damage per Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "You can heal Personal Tilts such as Arm Wrack.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can heal damage done by deprivation.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Reproduce the effect of night's rest, regain a Willpower point if appropriate.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Heal one lethal per Potency instead of 2 Bashing.",
      },
    ],
  },
  {
    name: "Living Vessel",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Stamina",
    page: "Signs of Sorcery p69",
    description:
      "Prepare a subject under the purview of Life for the Imbue Item Attainment. The mage can use the Attainment to imbue any living subject.",
  },
  {
    name: "Many Faces",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p150",
    description:
      "Like 'Mutable Mask' only the changes are real rather than an illusion. Poor vision or other senses can be restored. Missing organs and limbs can not be restored however. You may also rearrange the subjects Physical Attributes.",
    effects: [
      {
        requirement: {
          arcana: "Time",
          value: 3,
        },
        effect: "You can change physical age as well.",
      },
    ],
  },
  {
    name: "Steal Life Force",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Fraying",
    factor: "Duration",
    withstand: "Resolve",
    page: "Signs of Sorcery p72",
    description:
      "This spell is cast on a mage to alter his imbument process causing the item to damage the user. The item appears to function as normal but requires Life force to function. This item deals 1 point of Lethal damage for each point of Mana spent to cast the imbued spell, if the Item runs out of Mana it deals Lethal to the user to replenish its Mana.",
  },
  {
    name: "Transform Life",
    primaryArcana: {
      arcana: "Life",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    withstand: "Stamina",
    page: "Mage the Awakening p150",
    description:
      "Give life features normally belonging to other organisms. Gills, Claws, Senses, Etc.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The bestowed feature, if permanent, can be passed on to a creatures descendants.",
      },
    ],
  },
  {
    name: "Accelerate Growth",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p151",
    description:
      "Cause a lifeform to rapidly grow, at the end of the duration the subject will return to their actual age. If the subject exceeds its natural lifespan, it will die of old age.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "When the spell ends the subject will rapidly de-age at an even faster rate than they grew, returning to their actual age in minutes. This puts great stress on the target. They must make a Stamina roll and on a failure they will enter a coma for a number of days.",
      },
    ],
  },
  {
    name: "Animal Minion",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Stamina",
    page: "Mage the Awakening p151",
    description:
      "The mage takes complete bodily control of a subject. Difference in gait may be noticeable to those familiair with the subject. The mage's body will be inert while this spell is active.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Target behaves more normally, as you understand the targets habits.",
      },
    ],
  },
  {
    name: "Life-Force Assault",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p152",
    description: "Deal lethal damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Inflict an additional -2 penalty to any wound penalties the target might have.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Spend a point of Mana, deal aggravated damage.",
      },
    ],
  },
  {
    name: "Living Grimoire",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Total Arcanum dots used in the Rote + Stamina",
    page: "Signs of Sorcery p85",
    description:
      "The Mage scribes a single rote per casting of this spell onto a living being. Casting this spell constitutes as an act of Hubris against Understanding Wisdom.",
  },
  {
    name: "Mend",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p152",
    description: "Heal 2 lethal wounds per Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can erase scars.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can heal damage done by deprivation.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Reproduce the effect of night's rest, regain a Willpower point if appropriate.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Can heal aggravated damage.",
      },
    ],
  },
  {
    name: "Regeneration",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p152",
    extraMana: 1,
    description: "Restore lost organs or limbs.",
  },
  {
    name: "Shapechanging",
    primaryArcana: {
      arcana: "Life",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Stamina",
    page: "Mage the Awakening p152",
    description:
      "Take on the form of another creature. Clothes and gear do not change with you. Instincts of the new form may need to be resisted with a Composure + Resolve roll.",
    effects: [
      {
        requirement: {
          arcana: "Matter",
          value: 4,
        },
        effect: "Gear changes with you to fit the new form.",
      },
    ],
  },
  {
    name: "Create Life",
    primaryArcana: {
      arcana: "Life",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p153",
    description:
      "Design and create any form of life you desire. If cast with finite duration life will disappear at the end of the spell, this may count as an Act of Hubris.",
    effects: [
      {
        requirement: {
          arcana: "Mind",
          value: 5,
        },
        effect: "Give your organism a true mind as appropriate to type.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Creature can be given additional features as per 'Transform Life'.",
      },
    ],
  },
  {
    name: "Contagion",
    primaryArcana: {
      arcana: "Life",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p153",
    description: "Create minor or life-threatening diseases.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Create a never before seen disease. This is likely to be an Act of Hubris as no creature in the world could have developed any defenses against it.",
      },
    ],
  },
  {
    name: "Salt the Earth",
    primaryArcana: {
      arcana: "Life",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Duration",
    page: "Mage the Awakening p153",
    description:
      "Destroy life-force in an area. This Creates an Extreme Environment equal to Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Individual living things that survive, will still suffer an additional -1 to any wound penalties they might have.",
      },
    ],
  },
  {
    name: "Craftsmen's Eye",
    primaryArcana: {
      arcana: "Matter",
      level: 1,
    },
    practice: "Knowing",
    factor: "Duration",
    page: "Mage the Awakening p154",
    description:
      "Study an object for one turn to learn it's intended function. If the object has no purpose that will be revealed instead. If something prevents the object from fulfilling it's function, the spell will reveal the nature of the problem.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Learn how to use the studied object. This grants the 8-Again when using the object. Only one object can benefit from this bonus at once.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Learn all possible uses for an object.",
      },
      {
        requirement: {
          arcana: "Fate",
          value: 1,
        },
        effect:
          "Name a task while casting the spell. All objects that could help you with this task will become obvious to you.",
      },
    ],
  },
  {
    name: "Detect Substance",
    primaryArcana: {
      arcana: "Matter",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p154",
    description:
      "Become aware of a chosen type of substance in the area. 'Iron', 'A knife' and 'My hunting Knife' are all valid choices.",
    effects: [
      {
        requirement: {
          arcana: "Time",
          value: 1,
        },
        effect: "Determine if an object has been in the area.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 1,
        },
        effect: "Search for a specific type of electronic information.",
      },
    ],
  },
  {
    name: "Discern Composition",
    primaryArcana: {
      arcana: "Matter",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p154",
    description:
      "Become aware of an objects weight, density and the precise elements in it's makeup.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Also become aware of any objects hidden within the studied object.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "You know an object's structural weak points. Reduce Durability by spell Potency.",
      },
      {
        requirement: {
          arcana: "Space",
          value: 2,
        },
        effect:
          "Know not only what an object was made of but also where the materials came from.",
      },
    ],
  },
  {
    name: "Lodestone",
    primaryArcana: {
      arcana: "Matter",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p154",
    description:
      "Choose a substance or type of object. Those objects will be drawn toward you or repelled away from you.",
  },
  {
    name: "Remote Control",
    primaryArcana: {
      arcana: "Matter",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    page: "Mage the Awakening p155",
    description:
      "Control a mechanical object, to make it fulfill its function.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Perform more complex task while controlling the object.",
      },
    ],
  },
  {
    name: "Alchemist's Touch",
    primaryArcana: {
      arcana: "Matter",
      level: 2,
    },
    practice: "Shielding",
    factor: "Potency",
    page: "Mage the Awakening p155",
    description:
      "Choose a material, you become largely immune to its deleterious effects. The material cannot inflict bashing damage and lethal damage is reduced by spell Potency. The spell does not protect against damage from a sword or gun.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Choose an additional material to be protected against.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Your immune to both the bashing and lethal, aggravated damage is reduced by Potency.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 2,
        },
        effect:
          "You are now also protected against the damage from the extreme temperature of a material.",
      },
    ],
  },
  {
    name: "Find the Balance",
    primaryArcana: {
      arcana: "Matter",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p155",
    description:
      "Improve the balance and heft of an item. This grants it the 9-Again quality.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Grant a tool the 8-Again quality instead.",
      },
    ],
  },
  {
    name: "Hidden Hoard",
    primaryArcana: {
      arcana: "Matter",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p156",
    description:
      "Make matter difficult to detect. Mundane attempts to locate automatically fail. Supernatural power enters a Clash of Wills.",
  },
  {
    name: "Machine Invisibility",
    primaryArcana: {
      arcana: "Matter",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p156",
    description:
      "Become invisible to mechanical sensors. Supernatural items enter a Clash of Wills.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "This spell now also works on constructs animated with magic, like zombies and golems. This triggers a Clash of Wills.",
      },
    ],
  },
  {
    name: "Shaping",
    primaryArcana: {
      arcana: "Matter",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Mage the Awakening p156",
    description:
      "Shape liquids and gases in any form you desire in defiance of gravity.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can alter solids as well. Warped tools or weapons will have their equipment bonus reduced by potency, if reduced to 0 the object becomes useless.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "If creating or repairing an object in an extended action reduce its required successes by this spell's Potency, the number cannot fall below one.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The shaping can create an appropriate Environmental Tilt, such as Earthquake, Flooded or Howling Winds.",
      },
    ],
  },
  {
    name: "Aegis",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p156",
    description:
      "For each level of Potency grant an object one of the following: Raise/lower ballistic Armor by 1, raise/lower general Armor by 1, raise/lower Defense penalty by 1.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The armor becomes immune to the Armor-Piercing effect.",
      },
    ],
  },
  {
    name: "Alter Conductivity",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p156",
    description: "Make an object more or less conductive to electricity.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Alter an objects conductivity to other forms of energy. Each additional type is an extra Reach.",
      },
    ],
  },
  {
    name: "Alter Integrity",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    withstand: "Durability",
    page: "Mage the Awakening p156",
    description: "Increase or decrease an objects Durability.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Instead of increasing Durability by 1 increase structure by 2.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "The effect is lasting.",
      },
    ],
  },
  {
    name: "Crucible",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p157",
    description:
      "Grant a tool the 8-Again for a number of turns. Valuable objects will have their Availability rating increased, this rating cannot become more than double the original rating.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect:
          "The object gains the rote quality for a number of rolls. So long as the durability last this effect can be recharged by spending more Mana.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Availability may be triple the original rating.",
      },
    ],
  },
  {
    name: "Hone the Perfected Form",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p61",
    extraMana: 1,
    description:
      "The mage takes an ordinary metal (iron, gold, silver, mercury, copper, tin or lead) and transmutes it into its perfected metal.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The spell may Perfect another substance like Glass or Gemstones.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 3,
        },
        effect: "May perfect fire.",
      },
    ],
  },
  {
    name: "Nigredo and Albedo",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p157",
    description: "Repair or damage an objects Structure.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "When damaging ignore durability.",
      },
    ],
  },
  {
    name: "Shrink and Grow",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    withstand: "Durability",
    page: "Mage the Awakening p157",
    description: "Increase or decrease an objects size.",
    effects: [
      {
        requirement: {
          arcana: "Life",
          value: 3,
        },
        effect:
          "Can be cast on living subjects, unwilling subjects may Withstand with Stamina.",
      },
    ],
  },
  {
    name: "Spell Potion",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p70",
    extraMana: 1,
    description:
      "Magically alters an ingested item, making it act as a storage vessel for another spell. Once the Ingested item has been primed for holding a mage may spend a Mana to cast any other spell on the item if it uses touch/self range. The cast spell doesn't take affect until the item is ingested. May store spells up to level of Potency which don't activate until either Spell Potion is canceled, the Duration ends or the food is injested.",
  },
  {
    name: "State Change",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Durability",
    page: "Mage the Awakening p157",
    description:
      "Change material one step along the path from solid to liquid to gas. This does not cause any temperature change.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "You may transform solids directly int gas and vice versa.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 3,
        },
        effect: "You may transmute matter into plasma.",
      },
    ],
  },
  {
    name: "Windstrike",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p157",
    description: "Deal bashing damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Create an appropriate Environmental Tilt.",
      },
    ],
  },
  {
    name: "Wonderful Machine",
    primaryArcana: {
      arcana: "Matter",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p157",
    description: "Integrate multiple machines into one another.",
    effects: [
      {
        requirement: {
          arcana: "Life",
          value: 3,
        },
        effect:
          "Machine properties can be grafted onto a living thing or vice versa.",
      },
    ],
  },
  {
    name: "Endless Bounty",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Signs of Sorcery p66",
    description:
      "Never run out of small expendable items. Enchant a single item that contains a smaller expendable item. For the duration of the spell the expendable item never runs out E.g.: Money in wallet, Bullets in magazine, Gas in car tank.",
  },
  {
    name: "Forge Dumanium",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Signs of Sorcery p62",
    extraMana: 1,
    description:
      "Combine perfected metals into a single metal called Dumanium. The object is Durability 1 and holds 1 point of Mana. Weapons made from Dumanium can spend Mana to deal aggravated Damage for a single attack.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The Spell is Lasting however this relies on all the Metals to remain perfect, should a perfected metal become mundane the alloy will collapse.",
      },
    ],
  },
  {
    name: "Forge Sophis",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Signs of Sorcery p62",
    extraMana: 1,
    description:
      "Combine perfected metals into a single metal that scavenges Mana called Sophis. The object is Durability 1 and can hold 1 Mana. Potency increases this 1 for 1 for Durability and Mana.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The Spell is Lasting however this relies on all the Metals to remain perfect, should a perfected metal become mundane the alloy will collapse.",
      },
    ],
  },
  {
    name: "Forge Thaumium",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Signs of Sorcery p62",
    extraMana: 1,
    description:
      "Combine perfected metals to create Thaumium, The object is Durability 1 and holds 1 point of Mana which it spends to shield against Magic.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The Spell is Lasting however this relies on all the Metals to remain perfect, should a perfected metal become mundane the alloy will collapse.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "Thaumium can protect against Death.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "Thaumium can protect against Mind.",
      },
      {
        requirement: {
          arcana: "Prime",
          value: 2,
        },
        effect: "Thaumium can protect against Prime.",
      },
      {
        requirement: {
          arcana: "Spirit",
          value: 2,
        },
        effect: "Thaumium can protect against Spirit.",
      },
      {
        requirement: {
          arcana: "Life",
          value: 2,
        },
        effect: "Thaumium can protect against Life.",
      },
      {
        requirement: {
          arcana: "Time",
          value: 2,
        },
        effect: "Thaumium can protect against Time.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 2,
        },
        effect: "Thaumium can protect against Forces.",
      },
      {
        requirement: {
          arcana: "Matter",
          value: 2,
        },
        effect: "Thaumium can protect against Matter.",
      },
    ],
  },
  {
    name: "Ghostwall",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p158",
    description: "Turn objects intangible.",
    effects: [
      {
        requirement: {
          arcana: "Death",
          value: 3,
        },
        effect:
          "The object may be shifted into the Twilight, attuned to Death.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 3,
        },
        effect: "The object may be shifted into the Twilight, attuned to Mind.",
      },
      {
        requirement: {
          arcana: "Spirit",
          value: 3,
        },
        effect:
          "The object may be shifted into the Twilight, attuned to Spirit.",
      },
    ],
  },
  {
    name: "Golem",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p158",
    description: "Animate a statue or other object.",
    effects: [
      {
        requirement: {
          arcana: "Death",
          value: 4,
        },
        effect: "A ghost may serve as the intelligence of the golem.",
      },
      {
        requirement: {
          arcana: "Spirit",
          value: 4,
        },
        effect: "A spirit may serve as the intelligence of the golem.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 5,
        },
        effect: "Grant true intelligence see 'Psychic Genesis'.",
      },
    ],
  },
  {
    name: "Piercing Earth",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p158",
    description: "Deal lethal damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Create an appropriate Environmental Tilt.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Deal aggravated damage.",
      },
    ],
  },
  {
    name: "Transubstantiation",
    primaryArcana: {
      arcana: "Matter",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p158",
    description: "Transform any type of matter into another type.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Transmute multiply substance into a single substance or vice versa.",
      },
      {
        requirement: {
          arcana: "Life",
          value: 4,
        },
        effect: "Transform matter into living things or vice versa.",
      },
    ],
  },
  {
    name: "Annihilate Matter",
    primaryArcana: {
      arcana: "Matter",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Durability",
    page: "Mage the Awakening p158",
    description: "Destroy matter completely.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect:
          "Spend a point of Mana, can now destroy magical objects as well.",
      },
    ],
  },
  {
    name: "Ex Nihilo",
    primaryArcana: {
      arcana: "Matter",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p158",
    description:
      "Create an object or relatively uncomplicated tool out of nothing.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Create a complex machine or electronic device, like a car or smartphone.",
      },
    ],
  },
  {
    name: "Self-Repairing Machine",
    primaryArcana: {
      arcana: "Matter",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p159",
    description: "Cause a machine to repair Potency in Structure per day.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The machine heals every hour.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "The machine heals every 15 minutes.",
      },
    ],
  },
  {
    name: "Know Nature",
    primaryArcana: {
      arcana: "Mind",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p159",
    description:
      "Determine a subject's Virtue, Vice and Mental and Social Attribute levels.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Also determine Aspirations and Obsessions.",
      },
    ],
  },
  {
    name: "Mental Scan",
    primaryArcana: {
      arcana: "Mind",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p159",
    description:
      "Ask storyteller questions about a subject's mental or emotional state.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Read surface thoughts for snippets of a subject's current ideas or words and phrases before they are actually spoken.",
      },
    ],
  },
  {
    name: "One Mind, Two Thoughts",
    primaryArcana: {
      arcana: "Mind",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p159",
    description:
      "Perform two Mental or Social extended tasks at the same time. Neither can be a purely Physical task.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "May perform two Mental instant tasks at the same time.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "If in the Astral Realms one of the actions may be 'Physical'.",
      },
    ],
  },
  {
    name: "Perfect Recall",
    primaryArcana: {
      arcana: "Mind",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Potency",
    page: "Mage the Awakening p160",
    description: "Recall old memories with perfect accuracy.",
  },
  {
    name: "Alter Mental Pattern",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Veiling",
    factor: "Potency",
    page: "Mage the Awakening p160",
    description:
      "Add to subterfuge rolls. Supernatural powers that read surface thoughts or emotions provoke a Clash of Wills.",
  },
  {
    name: "Dream Reaching",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p160",
    description:
      "Enter a subject's dream. You can influence but not take part in the dream. Cast on self to be able to remember your own dreams.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "You can become an active part of the dream. Cast on self induces lucid dreaming.",
      },
    ],
  },
  {
    name: "Emotional Urging",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p160",
    description: "Open or close a subject's doors.",
  },
  {
    name: "First Impressions",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p160",
    description: "Raise or lower the first impression.",
  },
  {
    name: "Incognito Presence",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p160",
    extraMana: 1,
    description:
      "The Mage hides the Subject's Psychic Presence which Prevents people form remembering their presence or looking their way. Active attempts to do so with supernatural abilities (Including active Mage sight) provoke a Clash of Wills.",
  },
  {
    name: "Memory Hole",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p160",
    description:
      "Hide a specific memory forgetting it completely for the duration of the spell, One memory per Potency.",
  },
  {
    name: "Mental Shield",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p160",
    description:
      "Protects the Subject from Mental Attacks, Goetia Powers, Influences or Manifestations that target them.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Also Protects from Physical attacks of Goetia.",
      },
    ],
  },
  {
    name: "Narcissus' Mirror (Mind)",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p94",
    description:
      "The mage can reflect the mental and emotional effects of a Nimbus tilt back onto its source. Whenever the Mage is subjected to a tilt that affects a Mental or Social trait this spell provokes a Clash of Wills. If the mage wins affect the instigator of the Tilt. Can be cast if the Mage is already under the effects of a tilt to immediately create a Clash of Wills.",
    effects: [
      {
        requirement: {
          arcana: "Life",
          value: 2,
        },
        effect: "This Spell affects all types of Nimbus Tilt.",
      },
      {
        requirement: {
          arcana: "Prime",
          value: 2,
        },
        effect:
          "Affects other type of Supernatural Auras with the appropriate kinds of effects.",
      },
    ],
  },
  {
    name: "Narcissus' Mirror (Life)",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p94",
    description:
      "The mage can reflect the Physical effects of a Nimbus tilt back onto its source. Whenever the Mage is subjected to a tilt that affects a Physcial trait this spell provokes a Clash of Wills. If the mage wins affect the instigator of the Tilt. Can be cast if the Mage is already under the effects of a tilt to immediately create a Clash of Wills.",
    effects: [
      {
        requirement: {
          arcana: "Life",
          value: 2,
        },
        effect: "This Spell affects all types of Nimbus Tilt.",
      },
      {
        requirement: {
          arcana: "Prime",
          value: 2,
        },
        effect:
          "Affects other type of Supernatural Auras with the appropriate kinds of effects.",
      },
    ],
  },
  {
    name: "Physic Domination",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p161",
    description:
      "Send one word commands to a subject that they are compelled to act upon, even against their will.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "take control of a subject, forcing him to take actions against their will. These actions cannot put him serious danger however.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Force the subject to take an additional task.",
      },
    ],
  },
  {
    name: "Ritual Focus",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p55",
    description:
      "A Variant on Telepathy linking a Mage and his Subjects allowing him to guide them as they work in unison on a particular spell (see 'Teamwork', MtAw 2e p.119) Must have Scale to affect every other Awakened participant in Ritual. Secondary Actors in ritual add Potency to dice pool.",
  },
  {
    name: "Soul Windows",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Signs of Sorcery p90",
    description:
      "By Splitting their senses a mage may view whats happening around their Soul Stone 360° or hears the sounds in its vicinity. This doesn't require sympathetic range.",
    effects: [
      {
        requirement: {
          arcana: "Forces",
          value: 2,
        },
        effect:
          "The mage may project their voice through the stone to speak or create a hologram of themselves.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The mage experiences the Stone's surroundings with all their Senses.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "For each reach spent the Mage may split their senses to another Soul Stone.",
      },
    ],
  },
  {
    name: "Telepathy",
    primaryArcana: {
      arcana: "Mind",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p161",
    description:
      "Surface thoughts of the subjects play out in the each others minds. This may grant a bonus or penalty between the subjects. A deliberate message may be send along the link.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Only thoughts that the originating subject wants to share are shared.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "All subjects have the ability to send and receive thoughts.",
      },
    ],
  },
  {
    name: "Astral Grimoire",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Weaving",
    factor: "Potency",
    withstand: "Total Arcanum dots used in rote",
    page: "Signs of Sorcery p85",
    extraMana: 1,
    description:
      "Scribe a Rote within ones own Oneiros, these can be cast from the Grimoire without needing to meditate to the Astral.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The Mage can scribe the grimoire within the Temenos making it available to any who travel there. These can only be cast directly from the Astral representation or with its Summoned goetia.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Spell's duration is lasting.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The Mage can scribe within the Anima Mundi, these don't manifest as books or scrolls but as constellations or rock formations. Figuring these out is a mystery of itself.",
      },
    ],
  },
  {
    name: "Augment Mind",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p161",
    description:
      "Increase a Mental or Social Attribute by Potency, up to normal limits.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Divide increase between an additional Attribute.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Go above normal limits.",
      },
    ],
  },
  {
    name: "Befuddle",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    withstand: "Composure or Resolve",
    page: "Mage the Awakening p163",
    description:
      "Lower a Mental or Social Attributes. One Potency equal one dot to a minimum of one.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "May lower an additional Attribute per reach, dividing Potency among the options.",
      },
    ],
  },
  {
    name: "Broken Relinquishment",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Fraying",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p73",
    description:
      "This spell creates a breaking point for the subject as a way to relinquish spells without spending a willpower dot. The next act of hubris, braking point or genre equivalent by a subject of this spell suffers penalty by Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The Subject of this spell immediately suffers a breaking point.",
      },
    ],
  },
  {
    name: "Clear Thoughts",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p161",
    description:
      "Suppress a Mental Condition or Tilt per Potency, for the Duration. Can't affect Paradox Conditions; those cause by the supernatural provoke a Clash of Wills.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "subject gains 1 Willpower.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "effect is lasting.",
      },
    ],
  },
  {
    name: "Enhance Skill",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p161",
    description:
      "Increase an Skill with already at least one rank by Potency, for the Duration, up to their normal limits.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Divide increase between an additional Skill.",
      },
      {
        cost: [
          {
            value: 2,
            type: "Reach",
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Go above normal limits.",
      },
    ],
  },
  {
    name: "Give Me That",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p66",
    description:
      "The subject item evokes a concept of ownership. Those who do not Withstand the spell gain the Persistent Condition: Obsession with the object as their focus.",
    effects: [
      {
        requirement: {
          arcana: "Space",
          value: 3,
        },
        effect:
          "Individuals with the Obsessed Condition to the object also gain a Strong sympathetic link to it for the spells duration.",
      },
    ],
  },
  {
    name: "Goetic Summons",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p162",
    description:
      "Call the nearest Goetia; one personally known, specified by type of Resonance, or the nearest generally.",
    effects: [
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "it gains the Materialized Condition for the duration.",
      },
      {
        requirement: {
          arcana: "Spirit",
          value: 2,
        },
        effect: "it gains the Materialized Condition for the duration.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Also creates the Open Condition.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "May give it a one-word command.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "may give a complex but single task command.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "summon a Goetia from the subject's Oneiros at a place one could reach the Astral. Must spend the Mana it would take to enter.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "summon from the Temenos.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 3,
          },
        ],
        effect: "summon from Anima Mundi.",
      },
    ],
  },
  {
    name: "Imposter",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p162",
    description:
      "Cause the subject to believe the caster is someone else. Manipulation + Subterfuge every minute if mimicking a specific person. Can't replicate Social Merits; any Doors opened benefit the assumed identity.",
  },
  {
    name: "Psychic Assault",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p162",
    description: "Deal Bashing equal to Potency, mimicking a stroke.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "give target -1 to Mental rolls.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "give target -2 to Mental rolls.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 3,
          },
        ],
        effect: "give target -3 to Mental rolls.",
      },
    ],
  },
  {
    name: "Sleep of the Just",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p162",
    description:
      "Control sleep cycle and dreams. Anything else entering or influencing dreams provokes Clash of Wills.",
  },
  {
    name: "Supernal Translation",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p28",
    description:
      "Allows the subject to comprehend and translate High Speech as they hear or read it as if they had up Mage Sight. Does not allow them to Speak or Write it back and is still subject to Dissonance and Quiescence.",
  },
  {
    name: "Read the Depths",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p162",
    description: "Read memories and ideas from target's subconscious.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "modify one of the memories read, for the Duration.",
      },
    ],
  },
  {
    name: "Universal Language",
    primaryArcana: {
      arcana: "Mind",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p162",
    description:
      "Target can understand and translate any language they are able to perceive: spoken, written, symbols, encoded signals, body language, hand symbols, or thoughts. Does not allow non-Awakened to understand High Speech.",
  },
  {
    name: "Haunted Grimoire",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Total Arcanum dots of Rote + Rank",
    page: "Signs of Sorcery p86",
    extraMana: 1,
    description:
      "The Mage binds a Goetia to a grimoire, writing its essence into the vessel's pattern. This doesn't host the Goetia's numina or influences nor does it have an essence pool. The Grimoire gains the Open and Resonant Conditions. When cast the spell is increased by the Goetia Rank for Primary Factor however the Goetia has a chance to escape with a Clash of Wills to the caster. When someone memorizes a Rote the Goetia has a chance to possess them using a Clash of Wills. This spell is a Wisdom Sin against Understanding.",
  },
  {
    name: "Possession",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p165",
    description:
      "Can possess the subject inflicting the Possessed Condition(see p. 261).",
  },
  {
    name: "Gain Skill",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p163",
    description:
      "Increase a Skill by Potency. This cannot go above the normal maximum.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Divide the increase between an additional Skill.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Go above normal limits.",
      },
    ],
  },
  {
    name: "Goetic Evocatuion",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Rank",
    page: "Signs of Sorcery p90",
    description:
      "May convert pieces of a persons Psyche from a soul stone into a Goetia.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "The Mage may extract the Goetia directly into his own Oneiros.",
      },
    ],
  },
  {
    name: "Hallucination",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p163",
    description: "Create an illusion that affects all senses but touch.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The illusion can now be 'touched' by the subject. It cannot harm or attack.",
      },
    ],
  },
  {
    name: "Mind Flay",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p164",
    description: "Deal lethal damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Cause Insane Tilt.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Deal aggravated damage.",
      },
    ],
  },
  {
    name: "Psychic Projection",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p164",
    description: "Astral project into Twilight or into somebody's dreams.",
    effects: [
      {
        requirement: {
          arcana: "Spirit",
          value: 2,
        },
        effect: "May project into the Shadow. Withstand is Gauntlet rating.",
      },
    ],
  },
  {
    name: "Psychic Reprogramming",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p164",
    description:
      "For each point of Potency change one of the followin: Virtue, Vice, Short-Term Aspiration, Long-Term Aspiration, Obsession, a non-Physical Persistent Condition, or may move one dot between two Social Skills, or between two Mental Skills.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "May also move between two Social Attributes, or two Mental Attributes.",
      },
    ],
  },
  {
    name: "Scribe Daimonomikon",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Attainment Rank + 10 - Gnosis",
    page: "Signs of Sorcery p87",
    extraMana: 1,
    description:
      "Scribe a Daimonomikon for the Mage's Legacy. A Mage must be of Gnosis 2 or above to cast this. Anyone initiated into a Legacy via a Daimonomikon must spend 1 Arcane Experience and if used to learn more Legacy Attainments must use the Experience cost listed for learning without a tutor. These serve as a sympathetic Yantra worth +2 Dice for members of the inscribed Legacy.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Spell's Duration is Lasting.",
      },
    ],
  },
  {
    name: "Terrorize",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p164",
    description:
      "Cause the Insensate Tilt for the duration or until it's resolved.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Inflict Broken Condition instead.",
      },
    ],
  },
  {
    name: "Amorality",
    primaryArcana: {
      arcana: "Mind",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p164",
    description:
      "Remove Virtue or Vice. Without Virtue the subject regains two Willpower for indulging Vice. Without Vice the subject cannot engage in any activity that would be a breaking point or Act of Hubris.",
  },
  {
    name: "No Exit",
    primaryArcana: {
      arcana: "Mind",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p164",
    description:
      "For the duration of the spell the subject is in a catatonic state. Reading of the subjects mind or memory reveals this spell.",
  },
  {
    name: "Mind Wipe",
    primaryArcana: {
      arcana: "Mind",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p164",
    description:
      "Remove large portions of the subjects memories, inflicts the Amnesia Tilt for the duration of the spell. You can affect one month of time per level Potency. You can specify what portions are forgotten.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "May specify what memories are erased, rather than just erasing a single span of time.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "The effect is Lasting.",
      },
    ],
  },
  {
    name: "Psychic Genesis",
    primaryArcana: {
      arcana: "Mind",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p165",
    description:
      "Create a self-aware intelligence. This is a Rank 1 Goetia in Twilight.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The entity works as a sleepwalker for the purposes of assisting ritual casting.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Goetia is Rank 2.",
      },
    ],
  },
  {
    name: "Social Networking",
    primaryArcana: {
      arcana: "Mind",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p165",
    description:
      "For every level of Potency, gain one dot in one of the following Merits: Allies, Contacts or Status.",
  },
  {
    name: "Dispel Magic",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    withstand: "Arcanum rating of the subject spell’s caster",
    page: "Mage the Awakening p165",
    description: "Temporarily suppress or destroy an active spell.",
    effects: [
      {
        requirement: {
          arcana: "Fate",
          value: 1,
        },
        effect: "Selectively suppress spell.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Make the effect Lasting.",
      },
    ],
  },
  {
    name: "Nimbus Tuning",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Signs of Sorcery p94",
    description:
      "The mage can tune in more attentively to any Signature Nimbus he scrutinizes with Focused Mage sight. For Each potency learn one of the following: Gnosis, Wisdom, Virtue/Vice, An Act of Hubris resulting from cast magic, An Obsession related to the remaining Magic, Whether the Magic resulted in Paradox.",
  },
  {
    name: "Pierce Deception",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p165",
    description: "See through falsehoods magical and mundane.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Get a sense of the actual truth.",
      },
    ],
  },
  {
    name: "Sacred Geometry",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p166",
    description: "Reveal ley lines and nodes.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Reveal Hallows.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 1,
        },
        effect: "Reveal Avernian Gates.",
      },
      {
        requirement: {
          arcana: "Spirit",
          value: 1,
        },
        effect: "Reveal Loci.",
      },
    ],
  },
  {
    name: "Scribe Grimoire",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    extraMana: 1,
    withstand: "Arcanum Dots",
    page: "Mage the Awakening p166",
    description:
      "Create a Grimoire full of Rotes or transcribe it from one medium to another.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Make the Grimoire Lasting.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 2,
        },
        effect: "Transcribe the grimoire without needed equipment.",
      },
    ],
  },
  {
    name: "Shared Mage Sight",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    withstand: "Resolve",
    page: "Signs of Sorcery p28",
    description:
      "Share your Mage sight with another Mage. (Costs 1 Mana per Arcanum per subject, select using additional effects).",
    effects: [
      {
        requirement: {
          arcana: "Prime",
          value: 4,
        },
        effect: "Can be used on a Sleepwalker under the effects of Apocalypse.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Mind Mage Sight.",
      },
      {
        requirement: {
          arcana: "Time",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Time Mage Sight.",
      },
      {
        requirement: {
          arcana: "Space",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Space Mage Sight.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Forces Mage Sight.",
      },
      {
        requirement: {
          arcana: "Matter",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Matter Mage Sight.",
      },
      {
        requirement: {
          arcana: "Life",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Life Mage Sight.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Death Mage Sight.",
      },
      {
        requirement: {
          arcana: "Prime",
          value: 1,
        },
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Share Prime Mage Sight.",
      },
    ],
  },
  {
    name: "Supernal Signature",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    page: "Signs of Sorcery p93",
    description:
      "The Mage flares her Immediate Nimbus to imprint her signature on a subject, The signature reflects her Shadow Name and lasts for the Duration of the spell. Anyone who Studies the nimbus under focused mage sight can not only sense the details of the Nimbus but the Casters Supernal Identity. This moves the Caster one impression level up the Social Maneuvering unless the viewer succeeds a Resolve + Composure - Potency roll.",
  },
  {
    name: "Supernal Vision",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Potency",
    page: "Mage the Awakening p166",
    description: "Perceive the Supernal properties of a subject.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Perceive the non-Supernal magical properties of a subject.",
      },
    ],
  },
  {
    name: "Word of Command",
    primaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    page: "Mage the Awakening p166",
    description: "Bypass triggers to activate magical effects of Prime arcana.",
    effects: [
      {
        requirement: {
          arcana: "Life",
          value: 1,
        },
        effect: "Include effects created by Life",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 1,
        },
        effect: "Include effects created by Mind",
      },
      {
        requirement: {
          arcana: "Time",
          value: 1,
        },
        effect: "Include effects created by Time",
      },
      {
        requirement: {
          arcana: "Death",
          value: 1,
        },
        effect: "Include effects created by Death",
      },
      {
        requirement: {
          arcana: "Space",
          value: 1,
        },
        effect: "Include effects created by Space",
      },
      {
        requirement: {
          arcana: "Matter",
          value: 1,
        },
        effect: "Include effects created by Matter",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 1,
        },
        effect: "Include effects created by Forces",
      },
    ],
  },
  {
    name: "As Above, So Below",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p166",
    description: "Empower Yantras with 9-Again on spellcasting rolls.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Make it 8-again.",
      },
    ],
  },
  {
    name: "Cloak Nimbus",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p167",
    description:
      "Veil Nimbus and emotional state of auras. Attempts to see are subject to a Clash of Wills. Immediate Nimbus does not flare unless the caster chooses to. Signature Nimbus viewed by Mage Sight provokes Clash of Wills. Flaring or imprinting your Nimbus will immediately end this spell.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Make your Gnosis appear lesser.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Make your Mana appear lesser.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Make your Arcana appear lesser.",
      },
    ],
  },
  {
    name: "Fractured Grimoire",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Signs of Sorcery p84",
    extraMana: 1,
    description:
      "The mage copies one whole grimoire into two or more disparate parts that individually mean nothing. Only someone with all parts may use the rotes within the Grimoire.",
    effects: [
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        effect: "More than two pieces.",
      },
    ],
  },
  {
    name: "Invisible Runes",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p167",
    description:
      "Leave message in High Speech only visible to Mage Sight. Alteration or overwriting of these messages provokes a Clash of Wills.",
  },
  {
    name: "Light Under a Bushel",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Shielding",
    factor: "Potency",
    page: "Signs of Sorcery p28",
    description:
      "Adds Mages Potency to the number of rolls before Mages Nimbus leaks into a mystery.",
  },
  {
    name: "Nimbus Forgery",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Signs of Sorcery p94",
    description:
      "Once a Mage has scrutinized an Immediate or Signature Nimbus with Focused mage sight she may cast this spell to disguise her own Nimbus as the Scrutinized one. If its the Immediate Nimbus it copies the Tilts of the Forged one instead of her own, if Signature nimbus any spell left behind holds the Forged one instead of her own until this spells duration ends. Any attempt to pierce the deception results with a Clash of Wills.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Forges all three.",
      },
    ],
  },
  {
    name: "Path to Jerusalem",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Veiling",
    factor: "Potency",
    withstand: "Opacity",
    page: "Signs of Sorcery p28",
    description: "Add Spell's Potency to the Opacity of the Subject Mystery.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Plant one falsehood.",
      },
    ],
  },
  {
    name: "Supernal Veil",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p168",
    description:
      "Veil supernatural phenomenon including spells. Peripheral Mage Sight will fail to detect, active attempts cause a Clash of Wills.",
  },
  {
    name: "Sustain Nimbus",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    secondaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Signs of Sorcery p93",
    description:
      "The mage casts this on a Signature Nimbus she's studied under Focused Mage Sight. Rather than fading like normal the Nimbus persists for the Duration of the spell, Once the Duration expires it fades at its usual rate.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Duration is Lasting.",
      },
    ],
  },
  {
    name: "Wards and Signs",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p168",
    description:
      "When subject is target of a spell apply Potency as Withstand rating. Spells used near but not directly at the target are not Withstood by this spell.",
  },
  {
    name: "Words of Truth",
    primaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Mage the Awakening p168",
    description:
      "All subjects of the spell can hear and understand the caster regardless of distance, noise or language barriers. Subjects feel what the mage says is true, but this effect only works on statements the mage knows are true. May remove one Door or improve impression level by one per Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Listener gains condition.",
      },
    ],
  },
  {
    name: "Aetheric Winds",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p168",
    description: "Attack with shrieking aetheric wind.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Create environmental tilt.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Destroy Mana instead of health.",
      },
    ],
  },
  {
    name: "Camera Obscura",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p28",
    extraMana: 1,
    description:
      "This spell enchants a Camera, video recorder or similar device and allows it to record Supernal Energies allowing a mage to study the recordings using Active and Focused mage sight.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Make recordings Lasting.",
      },
    ],
  },
  {
    name: "Channel Mana",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p168",
    description:
      "Move Mana equal to Potency between vessels. This cannot exceed Gnosis-derived the Mana per turn limit though.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Ignore per turn limit.",
      },
    ],
  },
  {
    name: "Cleanse Pattern",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p168",
    description:
      "Remove the dramatic failure of a focused Mage Sight Revelation. This spell will also remove a mage's Signature Nimbus form the subject.",
  },
  {
    name: "Display of Power",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p168",
    description: "Imagos become visible to all forms of Active Mage Sight.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Counterspell gains Rote Quality.",
      },
      {
        requirement: {
          arcana: "Fate",
          value: 1,
        },
        effect: "Clauses of Contracts visible.",
      },
    ],
  },
  {
    name: "Ephemeral Enchantment",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p169",
    description: "Subject becomes solid to any and all Twilight entities.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "It inflicts aggravated damage.",
      },
    ],
  },
  {
    name: "Geomancy",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p169",
    description:
      "Move ley lines within the area of effect. May also change the Resonance Keyword of a Node.",
  },
  {
    name: "Imbue Room",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p69",
    description:
      "Allows a Mage to prepare a room or space for the Imbue Item attainment. Unlike an object the room does not have Mana storage so all Mana must be spent by the user of the Imbued room.",
  },
  {
    name: "Mana Battery",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p70",
    description:
      "Allows a Mage to prime an item to store Mana, The mage casts the spell on a subject prior to using the Attainment Imbue Item. The subject is Primed to accept a Mana pool but not a spell, the Number of successes necessary to imbue the item is equal to the Mana Pool imbued within. An Item created this way can be used to cast spells without using a Mages own Mana, and can be refilled with Mana using the spell Channel Mana.",
  },
  {
    name: "Platonic Form",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p169",
    extraMana: 1,
    description:
      " Create a simple Tass object or tool of Size 5 or less from Mana. Durability is 1 and contains one Mana. Potency may be allocated to the following effects: Increase Durability by +1, Increase Mana capacity by +1, If a tool add +1 equipment bonus though each use of the tool now uses one up Mana. When all Mana is used up the object crumbles. If the spell expires any unused Mana will be lost.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Tool gains 8-Again.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Effect is Lasting.",
      },
      {
        cost: [
          {
            type: "Mana",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Can transfer Mana into it.",
      },
    ],
  },
  {
    name: "Primary Subject",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Resolve",
    page: "Signs of Sorcery p72",
    extraMana: 1,
    description:
      "This spell alters the imbument process, creating an item that will always target the user. The subject of the spell must be a mage.",
  },
  {
    name: "Reveal Marks",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Signs of Sorcery p74",
    description:
      "You may discern all signature Nimbuses associated with the Subject, This spell reduces the difficulty to Focused Mage Sight to scrutinize the subject for a signature Nimbus and reveals all Nimbuses associated with the subject. Add Potency as bonus die to reveal them.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Add to Clash of Wills.",
      },
    ],
  },
  {
    name: "Scribe Palimpsest",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    withstand: "Arcanum Dots +1",
    page: "Signs of Sorcery p84",
    extraMana: 1,
    description:
      "Like 'Scribe Grimoire' this spell gives physical form to a single rote's symbols using a Grimoire that has had its contents erased, scrubbed, scribbled out, painted over or otherwise made unreadable. The Storyteller chooses one Arcanum when the character casts this spell. Whenever a character later casts the rote from the completed Grimoire, it acts as though it incorporated dots of the chosen Arcanum equal to this spell’s Potency, creating unpredictable blended effects.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Duration is Lasting.",
      },
    ],
  },
  {
    name: "Spirit Vessel",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Resistance",
    page: "Signs of Sorcery p69",
    description:
      "Prepare a Spirit for the Imbue Item Attainment. The mage must either cast the spell through the Gauntlet or the spirit must be Manifested. The subject automatically withstands the casting.",
  },
  {
    name: "Steal Mana",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Fraying",
    factor: "Duration",
    withstand: "Stamina",
    page: "Signs of Sorcery p72",
    extraMana: 1,
    description:
      "This spell alters the imbument process resulting in an item that siphons its users Mana. When under this spell when Imbuing an item you may set a Mana capacity to the item, instead of imbuing it with that much Mana it steals it from its user. When someone goes to activate the spell it will steal mana equal to capacity, should it attempt to take more than its capacity the leftover Mana dissipates into the atmosphere. If the user doesn't have enough Mana it deals Bashing damage for each Mana it cannot siphon.",
  },
  {
    name: "Stealing Fire",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p168",
    description:
      "Temporarily turn Sleeper into a Sleepwalker. Breaking points from magic will hit only when the spell expires.",
  },
  {
    name: "Stored Spell",
    primaryArcana: {
      arcana: "Prime",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p70",
    description:
      "A Mage may make an item capable of holding a spell until later activation similar to the Attainment Imbue Item. Once this spell is in effect a mage may spend a Mana to cast any other spell on the item that uses touch/self range, which is contained and unactivated. Stored Spell may store spells up to its level in Potency. These spells don't activate until someone Spends a point of Mana to activate the spell, Stored Spell is canceled, The duration of Stored Spell ends or the Duration of the stored spells end.",
  },
  {
    name: "Apocalypse",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p169",
    description: "Grant a Sleeper the ability to see what a Mage sees.",
    effects: [
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Mind",
          value: 1,
        },
        effect: "add Mind to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Space",
          value: 1,
        },
        effect: "add Space to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Time",
          value: 1,
        },
        effect: "add Time to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Forces",
          value: 1,
        },
        effect: "add Forces to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Prime",
          value: 1,
        },
        effect: "add Prime to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Matter",
          value: 1,
        },
        effect: "add Matter to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Death",
          value: 1,
        },
        effect: "add Death to granted Sight.",
      },
      {
        cost: [
          {
            value: 1,
            type: "Reach",
          },
        ],
        requirement: {
          arcana: "Life",
          value: 1,
        },
        effect: "add Life to granted Sight.",
      },
    ],
  },
  {
    name: "Celestial Fire",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p170",
    description: "Attack spell inflict Lethal equal to Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Ignites flammable objects.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Deals aggravated damage.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Destroy Mana instead of damage.",
      },
    ],
  },
  {
    name: "Destroy Tass",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Durability",
    page: "Mage the Awakening p170",
    description:
      "Successful casting destroys Tass. Mana form the tass is not destroyed but released into the world likely to the nearest Hallow.",
  },
  {
    name: "Hallow Dance",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Hallow Rating",
    page: "Mage the Awakening p170",
    description:
      "Suppress an active Hallow or awaken a dormant one. Rousing requires Potency equal to the Hallow's rating. Dampening reduces the Hallow's dot rating by Potency, if it falls to zero or less the Hallow is rendered dormant.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Effect is Lasting.",
      },
    ],
  },
  {
    name: "Primal Transfer",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p71",
    description:
      "This allows a Mage to transfer spell control of a spell they've cast to another mage. The spell transfers Spells up to Potency from Caster to Subject. Once the Duration ends control returns to the Caster.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Works with imbued items.",
      },
    ],
  },
  {
    name: "Scribe Daimonomikon",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Attainment Rank + 10 - Gnosis",
    page: "Signs of Sorcery p87",
    extraMana: 1,
    description:
      "Scribe a Daimonomikon for the Mage's Legacy. A Mage must be of Gnosis 2 or above to cast this. Anyone initiated into a Legacy via a Daimonomikon must spend 1 Arcane Experience and if used to learn more Legacy Attainments must use the Experience cost listed for learning without a tutor. These serve as a sympathetic Yantra worth +2 Dice for members of the inscribed Legacy.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Duration is Lasting.",
      },
    ],
  },
  {
    name: "Supernal Dispellation",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Arcanum Rating",
    page: "Mage the Awakening p170",
    description:
      "Success suppresses target spell for Supernal Dispellations Duration.",
    effects: [
      {
        requirement: {
          arcana: "Fate",
          value: 1,
        },
        effect: "Selectively suppress spell.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Make the effect Lasting.",
      },
    ],
  },
  {
    name: "Transfer Soul Stone",
    primaryArcana: {
      arcana: "Prime",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Signs of Sorcery p91",
    description:
      "May transfer a Soul Stone from one object to another of size 2 or below.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Effect is Lasting.",
      },
    ],
  },
  {
    name: "Blasphemy",
    primaryArcana: {
      arcana: "Prime",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Hallow Rating",
    page: "Mage the Awakening p170",
    description: "Sever the connection to the Supernal in an area.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Effect is Lasting.",
      },
    ],
  },
  {
    name: "Create Truth",
    primaryArcana: {
      arcana: "Prime",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    withstand: "Hallow Rating",
    page: "Mage the Awakening p170",
    description:
      "Create Hallow with rating equal to Potency, Hallows cannot have a rating above 5. Costs 5 mana per Potency. (Add mana using Additional Effects).",
    effects: [
      {
        cost: [
          {
            type: "Mana",
            value: 5,
            multiple: true,
          },
        ],
        effect: "Costs per Potency.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 5,
          },
        ],
        effect: "Effect is Lasting.",
      },
    ],
  },
  {
    name: "Eidolon",
    primaryArcana: {
      arcana: "Prime",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p171",
    description:
      "Like 'Platonic Form' but can create animate Tass. May spend Potency on an additional effect: Grand the mage a dot of the Retainer Merit. Construct will obey it's owners command, any mage can claim ownership by marking it with his Nimbus.",
    effects: [
      {
        requirement: {
          arcana: "Forces",
          value: 3,
        },
        effect: "Construct isn't obviously magical.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 5,
        },
        effect: "Construct may be given a mind.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Effect is Lasting.",
      },
    ],
  },
  {
    name: "Forge Purpose",
    primaryArcana: {
      arcana: "Prime",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p171",
    description:
      "Subject gains one of the caster's Obsessions. If subject is a mage already possessing the maximum number of Obsessions this spell causes a Clash of Wills. If successful replace one of these Obsessions.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Grant wholly new Obsession.",
      },
    ],
  },
  {
    name: "Word of Unmaking",
    primaryArcana: {
      arcana: "Prime",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Merit Rating or Durability",
    page: "Mage the Awakening p171",
    description: "Destroy a magical item, but not artifacts.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Item explodes violently.",
      },
    ],
  },
  {
    name: "Correspondence",
    primaryArcana: {
      arcana: "Space",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p172",
    description:
      "Learn one of subjects sympathetic links per Potency. The oldest and strongest are revealed first. If the link is nearby you will learn it't exact location too.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Follow a link to it's other end.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Learn the emotional aspect of the connection. Connection 'My childhood home' may carry notes of comfort or fear depending on the subject.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Specify what links you want to learn. The answer comes form the subjects perspective.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "If used on a keyed spell or iris this spell can learn the key.",
      },
    ],
  },
  {
    name: "Ground Eater",
    primaryArcana: {
      arcana: "Space",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    withstand: "Stamina",
    page: "Mage the Awakening p173",
    description: "Add or reduce Speed by Potency. Speed cannot go below 1.",
  },
  {
    name: "Isolation",
    primaryArcana: {
      arcana: "Space",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    withstand: "Composure",
    page: "Mage the Awakening p173",
    description:
      "Any attempt to interact with other people costs a Willpower point. Even then, dice pools are penalized by Potency. Prolonged exposure to spell (a day per point of subject's Composure) may cause breaking points or Conditions like Shaken or Spooked.",
  },
  {
    name: "Locate Object",
    primaryArcana: {
      arcana: "Space",
      level: 1,
    },
    practice: "Knowing",
    factor: "Duration",
    page: "Mage the Awakening p173",
    description: "Can find the subject in spell area.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can track the subject even if it leaves the area.",
      },
    ],
  },
  {
    name: "The Outward and Inward Eye",
    primaryArcana: {
      arcana: "Space",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p174",
    description:
      "Gain 360 degree vision and hearing. All attempts to ambush the character fail, or in the case of exceptional camouflage or distraction a chance die. Finally all penalties due to range, cover or concealment(but not darkness or other poor visibility situations) are reduced by Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Can see through warps or shortcuts in Space. This includes Distortion Irises, additional Arcana may allow sight into other types of Irises, this is at Storyteller's discretion.",
      },
    ],
  },
  {
    name: "Borrow Threads",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Sympathy",
    page: "Mage the Awakening p174",
    description:
      "Allows the transfer of a number of sympathetic connections between the caster and the subject(s) of the spell equal to potency. The caster must be aware of the links, either through other magic or knowledge of the subject.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The caster may also transfer connections between subjects affected without being involved in the transfer.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The caster may copy connections instead of transferring them.",
      },
    ],
  },
  {
    name: "Break Boundary",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Mage the Awakening p174",
    description:
      "Allows the subject to slip past an obstacle that is obstructing a path or similar restriction of movement.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The subject can fit through narrow or restrictive passageways they couldn't normally fit through.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Subjects unable to move can pass through obstructions, appearing on the other side.",
      },
    ],
  },
  {
    name: "Lying Maps",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    withstand: "Resolve",
    page: "Mage the Awakening p174",
    description:
      "Makes a subject certain that a path of the caster's choosing is the correct path to a destination.",
  },
  {
    name: "Scrying",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p174",
    description:
      "Allows the caster to remotely view a distant location, with varying effects depending on the type of Sympathetic connection. Spells can also be cast on subjects as if one were viewing them remotely. The scrying window may be invisible or visible to everyone in the vicinity.",
    effects: [
      {
        requirement: {
          arcana: "Fate",
          value: 2,
        },
        effect:
          "The caster can select specific people who can see the scrying window.",
      },
    ],
  },
  {
    name: "Secret Door",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p175",
    description:
      "Allows the caster to hide a passageway from mundane perception, invoking Clash of Wills against magical perception.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "A Key may be specified to allow entry.",
      },
    ],
  },
  {
    name: "Veil Sympathy",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    withstand: "Sympathy",
    page: "Mage the Awakening p175",
    description: "Conceals one of the subject's sympathetic connections.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "May make the subject appear to have a nonexistent connection.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Prevents the connection from being used as a Sympathetic Yantra.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "The caster may suppress all of the subject's connections.",
      },
    ],
  },
  {
    name: "Ward",
    primaryArcana: {
      arcana: "Space",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p176",
    description: "Prevents space from being manipulated in an area.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The caster may specify a Key that can allow the manipulation of space.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "The caster may ward an Iris.",
      },
    ],
  },
  {
    name: "Ban",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Mage the Awakening p176",
    description:
      "Cuts an area off from the outside world, including light, sound, and air.",
    effects: [
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "Exclude or only ban Mind phenomena.",
      },
      {
        requirement: {
          arcana: "Space",
          value: 2,
        },
        effect: "Exclude or only ban Space phenomena.",
      },
      {
        requirement: {
          arcana: "Matter",
          value: 2,
        },
        effect: "Exclude or only ban Matter phenomena.",
      },
      {
        requirement: {
          arcana: "Forces",
          value: 2,
        },
        effect: "Exclude or only ban Force phenomena.",
      },
      {
        requirement: {
          arcana: "Time",
          value: 2,
        },
        effect: "Exclude or only ban Time phenomena.",
      },
      {
        requirement: {
          arcana: "Prime",
          value: 2,
        },
        effect: "Exclude or only ban Prime phenomena.",
      },
      {
        requirement: {
          arcana: "Life",
          value: 2,
        },
        effect: "Exclude or only ban Life phenomena.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "Exclude or only ban Death phenomena.",
      },
    ],
  },
  {
    name: "Co-Location",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Fraying",
    factor: "Duration",
    page: "Mage the Awakening p176",
    description:
      "Allows the overlapping of multiple locations. Individuals who can perceive this overlap may switch between locations reflexively once a turn.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Anything in the overlapped locations may be made visible to the naked eye.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The caster may make the Co-Location a two-dimensional plane, creating a portal.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The caster may specify a Key needed to use the overlap.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Individuals who can perceive the overlap may reflexively switch locations twice per turn instead of once.",
      },
    ],
  },
  {
    name: "Forced Sympathy",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p73",
    description:
      "Must be cast on a Mage to alter his imbument process. Whenever a user casts the item's spell it always targets the subject with the closest sympathy to the user. Closest sympathy is determined by the best sympathetic Yantra on the user at the time of Casting. If the user has multiple items which could be used as Sympathetic Yantras the spells effect occurs on the one in closest physical range.",
  },
  {
    name: "Optimal Container",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p66",
    description:
      "Expand the dimensions within a container to allow it to hold larger objects than usual. Enhance the sized item a container can hold by its base size + Potency.",
  },
  {
    name: "Perfect Sympathy",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Mage the Awakening p176",
    description:
      "Allows the subject to gain 8-Again when taking an action on a subject that is one of their Strong sympathies.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can redirect spells at Sympathetic Range to a Strong connection instead.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect:
          "The subject gains (Potency) rote actions when taking an action on a subject that is one of their Strong sympathies.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The benefits extend to Medium sympathetic connections.",
      },
    ],
  },
  {
    name: "Warp",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p177",
    description:
      "Deals bashing damage equal to Potency by twisting the space the subject occupies.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The pain inflicts the Arm Wrack or Leg Wrack Tilt.",
      },
    ],
  },
  {
    name: "Web-Weaver",
    primaryArcana: {
      arcana: "Space",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Composure",
    page: "Mage the Awakening p177",
    description: "Allows bolstering of a sympathetic connection.",
    effects: [
      {
        requirement: {
          arcana: "Time",
          value: 2,
        },
        effect:
          "The caster may use temporal sympathy to anything the subject touched in the target time.",
      },
    ],
  },
  {
    name: "Alter Direction",
    primaryArcana: {
      arcana: "Space",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p177",
    description:
      "Allows the caster to change (Potency) absolute directions (e.g. north, south, up, down) in an area, or change directions relative to a chosen subject.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The caster can redefine directions in curves rather than just straight lines.",
      },
    ],
  },
  {
    name: "Collapse",
    primaryArcana: {
      arcana: "Space",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p177",
    description:
      "Forces a subject and a chosen object to occupy the same space, dealing (Potency) lethal damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Damage inflicted becomes Aggravated.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The co-located object remains inside the subject.",
      },
    ],
  },
  {
    name: "Cut Threads",
    primaryArcana: {
      arcana: "Space",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Sympathy (Connection)",
    page: "Mage the Awakening p177",
    description:
      "Destroy a sympathetic connection, effect is lasting, but connection can be restored in time.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Remove the subject's sympathetic name. This is not lasting and only last until the spell expires.",
      },
    ],
  },
  {
    name: "Secret Room",
    primaryArcana: {
      arcana: "Space",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p178",
    description:
      "Enlarge or shrink a space. Making a box bigger on the inside than on the outside, for example. Scale has to encompass the targets current size. And goes up or down equal to Potency in steps along the Area Scale Factor.",
  },
  {
    name: "Teleportation",
    primaryArcana: {
      arcana: "Space",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p178",
    description:
      "Teleport a subject to another location. You may use the Sympathetic Range Attainment on either the subject or the location but not both.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "You may swap the location of two subjects with no more a point of Size difference.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "You may now use two separate Sympathetic Ranges. The spell is Withstood by the worse of the two connections.",
      },
    ],
  },
  {
    name: "Create Sympathy",
    primaryArcana: {
      arcana: "Space",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    withstand: "Desired Sympathy",
    page: "Mage the Awakening p178",
    description:
      "Create a new sympathetic connection for the subject. This is Lasting, but may fade with time.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The created connection is Lasting and never fades. Only magic can sever it now.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "Give a subject a new sympathetic name. This is not Lasting and fades when the spell ends.",
      },
    ],
  },
  {
    name: "Forge No Chains",
    primaryArcana: {
      arcana: "Space",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Duration",
    page: "Mage the Awakening p178",
    description:
      "For the Duration of the spell the subjects cannot create new sympathetic connection. blood, hair, etc shed during the Duration of the spell do not link back to the subject. This also has an effect on any Space spells you leave behind. Any attempt to scrutinize your spells with Mage Sight has the spell's Potency added to the Opacity.",
  },
  {
    name: "Pocket Dimension",
    primaryArcana: {
      arcana: "Space",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p178",
    description:
      "Create a space. By default this space is devoid of the other arcana: No Death or Spirit means no Twilight, No Time means things inside are held in stasis (unaging but also never growing/improving). Unless a portal connects the space to a point in the world the only way to get there is to teleport. Spells cast within never cause Paradox unless they sympathetic range is used to affect something outside of the space. The mage herself is considered a material sympathetic yantra for her own Pocket Dimension. If the space is ever destroyed or the spell expires objects within return to the exact location from which they entered the space.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Create an Iris to the Pocket Dimension in the physical world. For an additional Reach you may specify a Key for this Iris.",
      },
      {
        requirement: {
          arcana: "Time",
          value: 2,
        },
        effect:
          "Time flows normally within the space mirroring time passed in the physical world. Without oxygen inside the space however this means anything inside can asphyxiate.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "The space now contains a Twilight attuned to Death.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "The space now contains a Twilight attuned to Mind.",
      },
      {
        requirement: {
          arcana: "Spirit",
          value: 2,
        },
        effect: "The space now contains a Twilight attuned to Spirit.",
      },
    ],
  },
  {
    name: "Quarantine",
    primaryArcana: {
      arcana: "Space",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Duration",
    page: "Mage the Awakening p179",
    description:
      "Remove a subject from space altogether. The world adjusts for the missing space. A Quarantined house doesn't leave behind an empty space, instead the neighboring house would now find themselves adjacent. Meanwhile those within the Quarentined space will find they cannot leave. Similar to a Pocket Dimension except it still has it's own Time, Twilight, Matter and so forth.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Specify a Key that allows access to and from the removed area.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 4,
        },
        effect:
          "For the Duration of the spell no one remembers the area used to exist. Those within do still remember.",
      },
      {
        requirement: {
          arcana: "Time",
          value: 5,
        },
        effect:
          "For the duration of the spell the area and those within retroactively never existed. History rewrites itself, but returns to normal when the spell expires.",
      },
    ],
  },
  {
    name: "Unnaming",
    primaryArcana: {
      arcana: "Space",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Duration",
    withstand: "Composure",
    page: "Signs of Sorcery p94",
    description:
      "The Mage Erases a subject's sympathetic name from existance, the exicised name is immediately replaced with one that matches whatever most sleepers would use to refer to her as. Any Sympathetic connections to the old name cease to exist as well. Any mage attempting to cast sympathetically using the mage faces a penalty until learning the new one.",
    effects: [
      {
        requirement: {
          arcana: "Prime",
          value: 5,
        },
        effect:
          "The Spell can be used on an Awakened Subject's Shadow Name and Nimbus instead. The Shadow name isn't replaced immediately and the subject needs to build their Supernal identity from scratch.",
      },
    ],
  },
  {
    name: "Coaxing the Spirits",
    primaryArcana: {
      arcana: "Spirit",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    withstand: "Composure or Rank",
    page: "Mage the Awakening p180",
    description:
      "Compel a Spirit or it's physical representation to take a single instant action that is in accordance to it's nature.",
  },
  {
    name: "Exorcist's Eye",
    primaryArcana: {
      arcana: "Spirit",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p180",
    description:
      "See and speak with any Spirit, be they in Twilight, slumbering in an object or possessing somebody. Can also see the conduit of any Spirit with the Reaching Manifestation.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can see across the Gauntlet, Withstood by Gauntlet Strength.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 1,
        },
        effect: "These benefits extend to ghost.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 1,
        },
        effect: "These benefits extend to Goetia.",
      },
    ],
  },
  {
    name: "Gremlins",
    primaryArcana: {
      arcana: "Spirit",
      level: 1,
    },
    practice: "Compelling",
    factor: "Potency",
    page: "Mage the Awakening p180",
    description:
      "Cause Spirit of object to hinder it's user. Each level of Potency causes one failure with the item to become a dramatic failure. A player's character can earn a Beat from this as per normal.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "As long as the object is within sensory range, can decide what failure become dramatic failures.",
      },
    ],
  },
  {
    name: "Invoke Bane",
    primaryArcana: {
      arcana: "Spirit",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p180",
    description:
      "Force a Spirit to avoid it's Bane even more then normal. Spirit needs to spend a Willpower to come within the area(this is the Area factor of the spell) of it's bane and cannot touch it. Spirits above Rank 5 are unaffected by this spell.",
  },
  {
    name: "Know Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p180",
    description:
      "Learn a number of facts about the Spirit equal to Potency: Spirit's name, Rank, Manifestations, Numina, Influences and roughly how strong these are, Ban, Bane.",
  },
  {
    name: "Cap the Well",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p180",
    description:
      "Any attempt to feed from a source of Essence affected by this spell provokes a Clash of Wills.",
  },
  {
    name: "Channel Essence",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    page: "Mage the Awakening p180",
    description:
      "Move Essence equal to Potency but no higher than the Gnosis-derived Mana per turn, from a Resonant Condition or suitable receptacle to a Spirit. You can store Essence into your own Pattern which stays even after the spell has expired. You can hold an amount of Mana and Essence equal to Gnosis-derived maximum Mana.",
    effects: [
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "Spell may be cast on ghosts.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "Spell may be cast on Goetia.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can siphon Essence directly from a Spirit, subject may resist with Rank.",
      },
    ],
  },
  {
    name: "Command Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p181",
    description:
      "Force a Spirit to undertake a number of actions equal to Potency. Spirit may/will abandon uncomplete task if the spell Duration expires. No effect on Spirits above Rank 5.",
  },
  {
    name: "Ephemeral Shield",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p181",
    description:
      "Any Spirit Numina, Influences and Manifestations, Spirit Spells and werewolf Gifts aimed at subject provoke a Clash of Wills.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "A Spirits physical attacks are likewise affected.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "Shield affects ghosts.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "Shield affects Goetia.",
      },
    ],
  },
  {
    name: "Gossamer Touch",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p181",
    description: "Can interact physically with Spirits in Twilight.",
    effects: [
      {
        requirement: {
          arcana: "Death",
          value: 2,
        },
        effect: "Affects ghosts.",
      },
      {
        requirement: {
          arcana: "Mind",
          value: 2,
        },
        effect: "Affects Goetia.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Object you carry are likewise physical to Spirits.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Unarmed attacks against Spirits deal Potency extra damage.",
      },
    ],
  },
  {
    name: "Opener of the Way",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p181",
    description: "Shift Resonant Condition to Open Condition or vice versa.",
  },
  {
    name: "Shadow Walk",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p181",
    description:
      "Subject becomes shrouded from Spirit and Spirit magics notice. Supernatural effects to detect provoke a Clash of Wills.",
  },
  {
    name: "Slumber",
    primaryArcana: {
      arcana: "Spirit",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p181",
    description:
      "Reduce the rate at which a hibernating Spirit regains Essence. Instead of one Essence per day the Spirit only regains one Essence per Potency days.",
  },
  {
    name: "Bolster Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p181",
    description:
      "Heal a Spirit. Each level of Potency heals two bashing damage.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Instead of healing, each level of Potency can increase one of the Spirit's Attributes by one for the duration of the spell.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Increase the Spirit's Rank by one.",
      },
    ],
  },
  {
    name: "Erode Resonance",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Fraying",
    factor: "Duration",
    page: "Mage the Awakening p181",
    description:
      "Remove a subject's Open or Resonant condition. This effect is Lasting.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Any future attempts to create the Conditions suffers a penalty equal to Potency.",
      },
    ],
  },
  {
    name: "Howl From Beyond",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p182",
    description: "Attack spell deal bashing damage equal to Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "the subject gains the Open Condition.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can target beings on the other side of the Gauntlet, but is Withstood by Gauntlet Strength.",
      },
    ],
  },
  {
    name: "Place of Power",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    withstand: "Gauntlet Strength",
    page: "Mage the Awakening p182",
    description: "Raise or lower Gauntlet Strength in spell Area by Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Alter Gauntlet independently on either side. For example making it easier to enter the Shadow but harder to leave or vice versa.",
      },
    ],
  },
  {
    name: "Reaching",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Weaving",
    factor: "Duration",
    withstand: "Gauntlet Strength",
    page: "Mage the Awakening p182",
    description:
      "Interact physically and magically with things on the other side of the Gauntlet.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Open an Iris between the physical world and the Shadow, which anybody can pass through. For another Reach may specify a Key.",
      },
    ],
  },
  {
    name: "Rouse Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p182",
    description:
      "Awaken a Spirit early Potency required is equal to the difference between the Spirit's current Essence and total Corpus.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "For each additional Reach, the Spirit wakes with an additional Corpus box cleared.",
      },
    ],
  },
  {
    name: "Spirit Summons",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p182",
    description: "Call a Spirit in the local area to you.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Spell also creates the Open Condition.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can give the Spirit a single word command to follow.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can call a Spirit form the Shadow instead. Spell it Withstood by the greater of Rank and Gauntlet Strength.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect: "Can give Spirit a complex command to follow.",
      },
    ],
  },
  {
    name: "Spiritual Tool",
    primaryArcana: {
      arcana: "Spirit",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Duration",
    page: "Signs of Sorcery p66",
    description:
      "Enhance an item to be more in-tune with the Shadow and Spirits in general. The object becomes both an item of the material world and the shadow and is able to interact with spirits both within Twilight and the Shadow. If the item is carried into either other realm it retains its material form when it returns to the material world.",
  },
  {
    name: "Banishment",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p182",
    description:
      "Strip a number of Manifestation Conditions equal to Potency. Effect is Lasting, but Conditions may be reasteablished as normal. No effect on Spirits above Rank 5.",
    effects: [
      {
        requirement: {
          arcana: "Mind",
          value: 4,
        },
        effect: "affect Goetia.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 4,
        },
        effect: "affect Ghosts.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Conditions cannot be reestablished until spell duration has expired.",
      },
    ],
  },
  {
    name: "Bind Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p183",
    description:
      "Grant a number of Manifestation Conditions equal to Potency. No effect on Spirits above Rank 5.",
    effects: [
      {
        requirement: {
          arcana: "Mind",
          value: 4,
        },
        effect: "affect Goetia.",
      },
      {
        requirement: {
          arcana: "Death",
          value: 4,
        },
        effect: "affect Ghosts.",
      },
    ],
  },
  {
    name: "Craft Fetish",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    withstand: "Rank",
    page: "Mage the Awakening p183",
    description:
      "Create a Fetish an item that contains a Spirit. And can be used to call upon a number of one of the Spirit's Influence dots and Numina equal to Potency. These abilities cost Essence and the item has the Spirit's Essence pool. Triggering the bound Spirit's Ban or Bane destroys the fetish. A fetish without a Spirit may also be created and can hold 10+Potency Essence.",
  },
  {
    name: "Familiar",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p183",
    description:
      "Gain the Familiar Merit for the duration of the spell. Both parties must be willing. Cannot effect Spirits above Rank 2. Can also bind a Ghost or Geotia as familiar, to do so select respective alternate spell listing.",
  },
  {
    name: "Familiar (Ghost)",
    primaryArcana: {
      arcana: "Death",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p183",
    description:
      "Gain the Familiar Merit for the duration of the spell. Both parties must be willing. Cannot effect Spirits above Rank 2.",
  },
  {
    name: "Familiar (Goetia)",
    primaryArcana: {
      arcana: "Mind",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p183",
    description:
      "Gain the Familiar Merit for the duration of the spell. Both parties must be willing. Cannot effect Spirits above Rank 2.",
  },
  {
    name: "Haunted Grimoire",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Arcanum Dots + Rank",
    page: "Signs of Sorcery p86",
    extraMana: 1,
    description:
      "The Mage binds a spirit to a grimoire, writing its essence into the vessel's pattern. This doesn't host the Spirits numina or influences nor does it have an essence pool. The Grimoire gains the Open and Resonant Conditions. When cast the spell is increased by the Spirits Rank for Primary Factor however the Spirit has a chance to escape with a Clash of Wills to the caster. When someone memorizes a Rote the Spirit has a chance to possess them using a CLash of Wills. This spell is a Wisdom Sin against Understanding.",
  },
  {
    name: "Scribe Daimonomikon",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 1,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Attainment Rank + 10 - Gnosis",
    page: "Signs of Sorcery p87",
    extraMana: 1,
    description:
      "Scribe a Daimonomikon for the Mage's Legacy. A Mage must be of Gnosis 2 or above to cast this. Anyone initiated into a Legacy via a Daimonomikon must spend 1 Arcane Experience and if used to learn more Legacy Attainments must use the Experience cost listed for learning without a tutor. These serve as a sympathetic Yantra worth +2 Dice for members of the inscribed Legacy.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "The spell's Duration is Lasting.",
      },
    ],
  },
  {
    name: "Shadow Scream",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p183",
    description:
      "Deal Lethal damage equal to Potency. Can hit targets in Twilight.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Damage is aggravated.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Can destroy Essence divide Potency between regular and Essence damage.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Target gains Open Condition.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Can hit target on the other side of the Gauntlet.",
      },
    ],
  },
  {
    name: "Shape Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p184",
    description:
      "Change a Spirit with a number of effects equal to Potency: Change nature, Redistribute Attribute dots, Heal one Lethal corpus, Redefine and redistribute Influences, Add/remove/replace one Manifestation, Add/remove/replace one Numen, Rewrite Ban or Bane. In addition can also change the Spirit's size, shape and appearance but no bigger than the spell's Scale factor. Traits must stay within Rank-derived maximums. Change revert at the end of spell duration.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Heal aggravated damage.",
      },
    ],
  },
  {
    name: "Twilit Body",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Patterning",
    factor: "Duration",
    page: "Mage the Awakening p184",
    description:
      "Turn yourself(and whatever you're wearing) into Spirit-attuned ephemera, and thus in Twilight.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "can become immaterial even in realms where Twilight doesn't normally exist.",
      },
    ],
  },
  {
    name: "World Walker",
    primaryArcana: {
      arcana: "Spirit",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Gauntlet Strength",
    page: "Mage the Awakening p184",
    description: "Bring subject across the Gauntlet, no portal necessary.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Give conjured Spirit Materialized Condition.",
      },
    ],
  },
  {
    name: "Annihilate Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    withstand: "Rank",
    page: "Mage the Awakening p184",
    description:
      "Utterly destroy a Spirit. The Spirit may spend an Essence to roll Power + Finesse in a Clash of Wills to prevent this. But if the spell succeeds the Spirit is destroyed even if it still has Essence it won't go into hibernation the Spirit is simply gone. Cannot affect Spirits above Rank 5.",
  },
  {
    name: "Birth Spirit",
    primaryArcana: {
      arcana: "Spirit",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p184",
    description: "Create a Rank 1 Spirit.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "Create a Rank 2 Spirit.",
      },
    ],
  },
  {
    name: "Create Locus",
    primaryArcana: {
      arcana: "Spirit",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    withstand: "Gauntlet Strength",
    page: "Mage the Awakening p184",
    description: "Create a Locus at a location with the Resonant Condition.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The Locus generates Essence equal to Potency per day.",
      },
    ],
  },
  {
    name: "Essence Fountain",
    primaryArcana: {
      arcana: "Spirit",
      level: 5,
    },
    practice: "Making",
    factor: "Potency",
    page: "Mage the Awakening p185",
    description:
      "Create Essence equal to Potency. The Essence has a Resonance of your choosing, as long as you have encountered it before.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Flavor the Essence with multiple Resonances.",
      },
    ],
  },
  {
    name: "Spirit Manse",
    primaryArcana: {
      arcana: "Spirit",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p185",
    description:
      "Create a place in the Shadow for yourself and gain the Safe Place Merit with rating equal to Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "You may create an Iris between this place and the material world and may give it a key. But the spell becomes Withstood by Gauntlet Strength.",
      },
    ],
  },
  {
    name: "Divination",
    primaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p186",
    description:
      "Ask a general question regarding the future with an answer of 'Yes', 'No' or 'Irrelevant'.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "The questions asked can be more specific and the answer gives more information.",
      },
    ],
  },
  {
    name: "Postcognition",
    primaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Potency",
    page: "Mage the Awakening p187",
    description:
      "The mage can see into the subject's past, viewing it all from a moment declared in 'real time'",
    effects: [
      {
        cost: [{ type: "Reach", value: 1 }],
        effect:
          "The mage can rewind, speed up, slow down and pause the vision at any given time.",
      },
      {
        cost: [{ type: "Reach", value: 1 }],
        effect: "The mage does not lose Defense when watching the vision.",
      },
    ],
  },
  {
    name: "Green Light/Red Light",
    primaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Compelling",
    factor: "Duration",
    page: "Mage the Awakening p187",
    description:
      "Cast Positively: Anything that can help the subject achieve their objective faster will happen at the exact moment to do so. Cast Negatively: Anything that can delay the target will happen at the exact moment to do so.",
  },
  {
    name: "Momentary Flux",
    primaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Mage the Awakening p187",
    description:
      "The Mage can determine if the subject will prove beneficial or baneful in the future. When acting on the information gained, the Mage can add the spell's potency to their Initiative.",
  },
  {
    name: "Read History",
    primaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Knowing",
    factor: "Potency",
    page: "Tome of the Pentacle p19",
    description:
      "Reveals the exact age of the subject or time elapsed since a specific event at which the subject was present, in which case the spell becomes Withstood by the subject's temporal sympathy to that event.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "Learn time elapsed since the subject's last lacuna.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Learn time elapsed since the subject's temporal sympathy was a specified strength.",
      },
    ],
  },
  {
    name: "Perfect Timing",
    primaryArcana: {
      arcana: "Time",
      level: 1,
    },
    practice: "Unveiling",
    factor: "Duration",
    page: "Mage the Awakening p187",
    description:
      "The subject can spend a turn during the spell's duration on planning, and, in doing so, can add the spell's Potency to their next instant action.",
  },
  {
    name: "Choose the Thread",
    primaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p187",
    description:
      "You may roll twice for your next mundane dice roll. Then choose which takes effect.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "May affect rolls for spellcasting and other supernatural powers.",
      },
    ],
  },
  {
    name: "Constant Presence",
    primaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p187",
    description:
      "Preserve yourself against alterations to the timeline. Any alterations that would change you provoke a Clash of Wills. If you win the world will still be altered but you will not be.",
  },
  {
    name: "Hung Spell",
    primaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Ruling",
    factor: "Duration",
    page: "Mage the Awakening p188",
    description:
      "The subject of this spell must be a mage. The subject may then spend a Mana to 'hang' his spell. Hung Spell may hold up to a Potency in number of spells these spells still counts against the caster's spell control. Any hanged spells will not have their Durations expire but won't take effect yet either. When Hung Spell ceases all the hanged spells immediately take effect according to their own Durations and effects.",
  },
  {
    name: "Shield of Chronos",
    primaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Veiling",
    factor: "Duration",
    page: "Mage the Awakening p188",
    description:
      "Anybody trying to view the subject through time, either by looking at the presently shielded subject's future or into a past when the subject was shielded. Provokes a Clash of Wills.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Instead of simply preventing Time magic from seeing the subject. You may show a false series of events that the magic 'discovers'. If powers would seek to pierce the illusion anyway this provokes a Clash of Wills.",
      },
    ],
  },
  {
    name: "Tipping the Hourglass",
    primaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Ruling",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p188",
    description:
      "Add or subtract Potency from a subjects Initiative. Subjects who have already taken an action this turn need to wait until the next turn to take advantage of their new Initiative.",
  },
  {
    name: "Veil of Moments",
    primaryArcana: {
      arcana: "Time",
      level: 2,
    },
    practice: "Shielding",
    factor: "Duration",
    page: "Mage the Awakening p188",
    description:
      "Protect a subject from Time's effects. The subject will not bleed out form wounds, poison, toxins and the progression of disease are stalled. New Conditions and Tilts cannot be imposed on the subject. Supernatural powers that would anyway provoke a Clash of Wills. Downsides of the spell: you no longer heal naturally while under the spell's effect. Healing through Pattern Restoration and Life magic will still work. Willpower and Mana cannot be restored and Experiences cannot be spend. The subjects ceases aging.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "may ignore Persistent Conditions. Time spend under this spell does not count toward any time necessary for Conditions to lapse.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "may heal naturally.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "may regain Willpower.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "may regain Mana.",
      },
    ],
  },
  {
    name: "Acceleration",
    primaryArcana: {
      arcana: "Time",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p189",
    description:
      "Speed up a subjects movements. Multiply speed by Potency, apply Defense against firearms and take the first action in a turn (unless you choose to delay it). You also apply Potency to Defense buy only when dodging.",
  },
  {
    name: "Chronos' Curse",
    primaryArcana: {
      arcana: "Time",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    withstand: "Stamina",
    page: "Mage the Awakening p190",
    description:
      "Slow a subject down. This reduces their Defense by Potency and divides their Speed by Potency, rounding down. Subject go last in a turn.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect: "The subject loses all Defense against attacks.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Multiply the time per roll of extended actions by Potency. This does not effect the ritaul casting times of mages.",
      },
    ],
  },
  {
    name: "Shifting Sands",
    primaryArcana: {
      arcana: "Time",
      level: 3,
    },
    practice: "Fraying",
    factor: "Potency",
    page: "Mage the Awakening p190",
    description:
      "The subject goes back in time a number of turns equal to Potency. Any injuries and Conditions obtained or Mana and Willpower spend in the reversed turns do not change back and stay as they are. Any spells cast in the reversed time are canceled. Once the subject catches up to the present, any changes made become Lasting.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
            multiple: true,
          },
        ],
        effect: "Travel back a full scene per Reach added.",
      },
    ],
  },
  {
    name: "Temporal Summoning",
    primaryArcana: {
      arcana: "Time",
      level: 3,
    },
    practice: "Weaving",
    factor: "Potency",
    page: "Mage the Awakening p190",
    description:
      "Return the subject to an younger version of itself. Buildings can be restored and injuries healed. Once the spell ends any changed made revert back to normal. Any injuries and Conditions obtained while this spell was active carry over to the subjects present self. Limits of Spell includes not being able to bring the dead back and a vampire returned to 'Childhood' becomes a vampiric child.",
  },
  {
    name: "Time Limit",
    primaryArcana: {
      arcana: "Time",
      level: 3,
    },
    secondaryArcana: {
      arcana: "Prime",
      level: 2,
    },
    practice: "Weaving",
    factor: "Duration",
    page: "Signs of Sorcery p71",
    description:
      "The Caster instills a time limit on the effects of an imbued spell as she relinquishes it for one week per dot of Potency. This applies to one person each use so a new user can make the item work again but only for the time limit.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect: "The spell's time limit is increased to one month per Potency.",
      },
    ],
  },
  {
    name: "Weight of Years",
    primaryArcana: {
      arcana: "Time",
      level: 3,
    },
    practice: "Perfecting",
    factor: "Potency",
    page: "Mage the Awakening p191",
    description:
      "An attack spell. Deal Bashing damage equal to Potency. If used on objects or structures. Apply Potency directly as damage to Structure and reduce Durability by 1 for every 2 points of Structure lost.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "For living subjects the spell also reduces Athletics by Potency.",
      },
    ],
  },
  {
    name: "Present as Past",
    primaryArcana: {
      arcana: "Time",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p191",
    description:
      "The subject gains the following benefits. In combat you can require that all affected characters declare their action for that turn. You do not need to declare your own and can act anywhere in the Initiative order that you want. This trumps all supernatural powers except those from the Time Arcanum, these cause a Clash of Wills. In social situations this spell removes a number of Doors equal to Potency from the subject or adds Doors to yourself when the subject performs Social maneuvering against you.",
  },
  {
    name: "Prophecy",
    primaryArcana: {
      arcana: "Time",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    page: "Mage the Awakening p191",
    description:
      "This spell works like 'Divination' except that you can now ask 'what if?' questions. You can ask a number of question equal to Potency.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "By applying this spell to Social interaction you may reduce a number of Doors equal to Potency.",
      },
    ],
  },
  {
    name: "Rend Lifespan",
    primaryArcana: {
      arcana: "Time",
      level: 4,
    },
    practice: "Unraveling",
    factor: "Potency",
    page: "Mage the Awakening p191",
    description: "An attack spell. Deal Lethal damage equal to Potency.",
  },
  {
    name: "Rewrite History",
    primaryArcana: {
      arcana: "Time",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Resolve",
    page: "Mage the Awakening p191",
    description:
      "Change the subject's timeline as though different choices were made. Without Temporal Sympathy only recent decisions can be rewritten. Once the spell ends the person instantly reverts to the original timeline. Memories of the time under this spell will seem hazy, distant and dreamlike but the subject will remember the time at least to some extent. Supernatural creatures are not normally affected by this spell.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Reassign a number of the subject's Skill or Merit dot equal to Potency. These can not exceed the subject's maximum.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 1,
          },
        ],
        effect:
          "Reassign a number of the subject's Attributes equal to Potency. These may no exceed the subject's natural maximum or below the character creation priorities of Primary, Secondary and Tertiary.",
      },
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
        ],
        effect:
          "This spell can affect supernatural creatures. And may revert them back to before they acquired their supernatural template.",
      },
    ],
  },
  {
    name: "Temporal Stutter",
    primaryArcana: {
      arcana: "Time",
      level: 4,
    },
    practice: "Patterning",
    factor: "Potency",
    withstand: "Stamina",
    page: "Mage the Awakening p192",
    description:
      "Throw a subject forward in time. The subject vanishes from the world and won't reappear until the spell expires. If, while reappearing, something new now occupies the space the subject used to inhabit apply the Knocked Down Tilt to whichever of the two has the least Size.",
  },
  {
    name: "Blink of an Eye",
    primaryArcana: {
      arcana: "Time",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    page: "Mage the Awakening p192",
    description:
      "This spell turns the next extended action into a instant action. A number of rolls for the extended action may be made in this turn equal to Potency. This spell does not affect ritual casting time for mages.",
    effects: [
      {
        cost: [
          {
            type: "Reach",
            value: 2,
          },
          {
            type: "Mana",
            value: 1,
          },
        ],
        effect:
          "This spell can affect spellcasting times. Increase the effective Gnosis of a mage equal to Potency for calculating ritual casting times only. For every point over Gnosis 10 reduce the interval by one turn.",
      },
    ],
  },
  {
    name: "Corridors of Time",
    primaryArcana: {
      arcana: "Time",
      level: 5,
    },
    practice: "Unmaking",
    factor: "Potency",
    page: "Mage the Awakening p192",
    description:
      "The Subject inhabits their own Past self and is able to Change History. Subject arrives at the Location they were in at the time chosen and is free to make different decisions. Can be viewed under active Time mage sight. Once the mage has 'Caught up' to the present or the spells duration factor is up the changes made to History become Lasting.",
  },
  {
    name: "Temporal Pocket",
    primaryArcana: {
      arcana: "Time",
      level: 5,
    },
    practice: "Making",
    factor: "Duration",
    page: "Mage the Awakening p192",
    description:
      "Grant the subject extra time. The entire world around the subject freezes. The subject may do move and touch things freely. But physically moving, consuming or injuring anything ends the spell at the completion of such an action.",
  },
];
