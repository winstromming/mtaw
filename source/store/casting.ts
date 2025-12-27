import { reactive } from "vue";
import type {
  Factor,
  Form,
  Scale,
  Skill,
  Source,
  Yantra
} from "../config/types";
import { practices, purviews } from "../config/values";

export type Casting = typeof casting;

export const casting = reactive({
  id: 0,
  name: undefined as string | undefined,
  form: undefined as Form | undefined,
  skill: undefined as Skill | undefined,
  spells: [] as Source[],
  factors: {
    castingTime: "s1",
    potency: "s1",
    range: "s1",
    duration: "s1",
    scale: "s1-subjects",
  } as Record<Factor, string>,
  scaling: undefined as Scale | undefined,
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
    this.form = undefined;
    this.skill = undefined;
    this.spells = [];
    this.factors = {
      castingTime: "s1",
      potency: "s1",
      range: "s1",
      duration: "s1",
      scale: "s1-subjects",
    };
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
  insert(item?: Source, form?: Form) {
    if (item) this.spells.push({ ...item, effects: [] });
    if (item === undefined) {
      this.spells.push({
        name: practices[0]?.verb!,
        practice: practices[0]?.name!,
        primaryArcana: { arcana: "Prime", level: practices[0]?.level! },
        factor: "Potency",
        description: practices[0]?.desc.replace("phenomena", purviews["Prime"])!,
        page: "Creative",
      })
    }
    if (form) this.form = form;
    if (form === "Rote") this.skill = item?.skill
  },
});
