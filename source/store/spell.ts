import { reactive } from "vue";
import type {
  Arcana,
  Effect,
  Factor,
  Level,
  Practice,
  Skill,
  Yantra,
} from "../config/types";

export type Spell = typeof spell;

export const spell = reactive({
  id: 0,
  name: undefined as string | undefined,
  isRote: false,
  isPraxis: false,
  isGrimoire: false,
  practice: undefined as Practice | undefined,
  factor: undefined as "Duration" | "Potency" | undefined,
  primaryArcana: undefined as { arcana: Arcana; level: Level } | undefined,
  secondaryArcana: undefined as { arcana: Arcana; level: Level } | undefined,
  description: undefined as string | undefined,
  effects: [] as Effect[],
  page: "",
  factors: {
    castingTime: "s1",
    potency: "s1",
    range: "s1",
    duration: "s1",
    scale: "s1",
  } as Record<Factor, string>,
  roteSkill: undefined as Skill | undefined,
  extraReach: 0,
  extraMana: 0,
  yantras: [] as Yantra[],
  attainments: {
    conditionalDuration: false,
    everywhere: false,
    permanence: false,
    sympatheticRange: false,
    temporalSympathy: false,
    timeInABottle: false,
  },
  reset() {
    this.id = 0;
    this.name = undefined;
    this.isRote = false;
    this.isPraxis = false;
    this.isGrimoire = false;
    this.practice = undefined;
    this.factor = undefined;
    this.primaryArcana = undefined;
    this.secondaryArcana = undefined;
    this.description = undefined;
    this.effects = [];
    this.page = "";
    this.factors = {
      castingTime: "s1",
      potency: "s1",
      range: "s1",
      duration: "s1",
      scale: "s1",
    };
    this.roteSkill = undefined;
    this.extraReach = 0;
    this.extraMana = 0;
    this.yantras = [];
    this.attainments = {
      conditionalDuration: false,
      everywhere: false,
      permanence: false,
      sympatheticRange: false,
      temporalSympathy: false,
      timeInABottle: false,
    };
  },
});
