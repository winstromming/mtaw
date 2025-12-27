import { clone, filter, range, some, upperFirst } from "lodash";
import { spells } from "../config/spells";
import type { Skill, Source, Yantra } from "../config/types";
import {
  baseCastingTimes,
  durations,
  orders,
  purviews,
  scales,
  yantrasBaseData,
} from "../config/values";
import type { Caster } from "../store/caster";
import type { Casting } from "../store/casting";

export const dots = (num: number) =>
  Array.from({ length: num }, () => "•").join("");

export const ensureTrailingPeriod = (s: string | undefined = ""): string =>
  s.endsWith(".") ? s : `${s}.`;

export const getCastingPractices = (casting: Casting) => {
  return casting.spells.map((s) => s.practice).join(", ");
};
export const getCastingArcana = (casting: Casting) => {
  return casting.spells.map((s) => s.primaryArcana.arcana).join(", ");
};
export const getCastingSpells = (casting: Casting) => {
  if (casting.spells.length === 1 && casting.spells[0])
    return `${casting.spells[0].primaryArcana.arcana} ${dots(casting.spells[0].primaryArcana.level)}`;
  return [...new Set(casting.spells.map((s) => s.primaryArcana.arcana))].join(
    ", ",
  );
};
export const getCastingDescription = (casting: Casting) => {
  if (casting.spells.length === 1 && casting.spells[0])
    return `${casting.spells[0].description}`;
  return casting.spells.map((s) => `${s.name}: ${s.description}`).join(" ");
};
export const getCastingName = (casting: Casting) => {
  if (casting.spells.length === 1 && casting.spells[0])
    return casting.spells[0].name;
  return casting.spells.map((s) => s.name).join(", ");
};

export const getYantras = (caster: Caster, casting: Casting) => {
  const expandedYantras = new Map();
  const isRote = casting.form === "Rote";
  for (const [key, yantraBaseData] of yantrasBaseData) {
    // bonus can contain a single number or a range. Arrayify.
    let bonuses;
    if (Array.isArray(yantraBaseData.bonus)) {
      bonuses = range(
        yantraBaseData.bonus[0] ?? 0,
        (yantraBaseData.bonus[1] ?? 0) + 1,
      );
    } else {
      bonuses = [yantraBaseData.bonus];
    }
    bonuses.forEach((bonus) => {
      const expandedYantra: any = clone(yantraBaseData);
      // rote skill mudra: bonus = skill dots
      if (key === "a1" && isRote && casting.skill) {
        bonus = getDotsInSkill(caster, casting.skill);
        // add one additional bonus if spell rote skill is one of caster's order's skills
        if (
          casting.skill &&
          orders
            .find((o) => o.name === caster.details.order?.name)
            ?.skills.includes(casting.skill)
        )
          bonus += 1;
      }
      // sympathetic yantras don't give a bonus to sympathetic or temporal spells
      if (
        ["y1", "y2", "y3"].includes(key) &&
        (casting.attainments.sympatheticRange ||
          casting.attainments.temporalSympathy)
      ) {
        bonus = 0;
      }
      expandedYantra.yantraKey = Array.isArray(yantraBaseData.bonus)
        ? `${key}_${bonus}`
        : key; // key is a reserved property in Vue so we use "yantraKey"
      expandedYantra.bonus = bonus;
      expandedYantra.value = expandedYantra.yantraKey;
      expandedYantra.label = `${yantraBaseData.name} (+${bonus} ${bonus === 1 ? "die" : "dice"})`;
      expandedYantra.isDedicatedTool = false;
      const yantra: Yantra = expandedYantra;
      expandedYantras.set(yantra.yantraKey, yantra);
    });
  }

  return expandedYantras;
};

export const getDotsInSkill = (caster: Caster, skill: Skill) => {
  let result = 0;
  Object.entries(caster.skills).find(([_k, v]) => {
    const s = Object.entries(v).find(([kk, _vv]) => kk === skill);
    if (s) result = s[1].dots;
  });
  return result;
};

export const getFreeReach = (caster: Caster, spell: Source) => {
  if (spell === undefined) return 0;
  const arcana = caster.arcana[spell.primaryArcana.arcana].dots;
  return arcana - spell.primaryArcana.level + 1;
};

export const getCastingReachUsed = (caster: Caster, casting: Casting) => {
  let reach = 0;
  if (casting.spells.length === 0) return 0;
  if (caster.active.length >= caster.traits.Gnosis) {
    reach += caster.active.length - caster.traits.Gnosis + 1;
  }
  // check factors (advanced factor keys begin with "a")
  for (const factor in casting.factors) {
    if (casting.factors[factor as keyof Casting["factors"]][0] === "a") reach++;
  }
  // check effects
  for (const spell of casting.spells) {
    console.log('check reach effects', spell.factor, spells.find((s) => s.name === spell.name)?.factor)
    if (spell.page !== "Creative" && spell.factor !== spells.find((s) => s.name === spell.name)?.factor) {
      reach += 1
    }
    for (const effect of spell.effects ?? []) {
      if (effect.cost) {
        for (const cost of effect.cost) {
          if (cost.type === "Reach") reach += cost.value;
        }
      }
    }
  }
  // check for common effects
  // if (spell.name && spell.factor !== spells.find((s) => s.name === spell.name)?.factor) reach += 1
  // if (spell.commonEffects && spell.commonEffects.changefactor) reach += 1
  // remote viewing range costs 1 additional reach
  if (casting.factors.range === "a2") reach += 1;
  // indefinite duration costs 1 additional reach
  if (casting.factors.duration === "a6") reach += 1;
  // spell-specific extra reach
  // reach += casting.extraReach
  // arcana attainments
  if (casting.attainments?.permanence && casting.factors.duration.startsWith("a")) reach--;
  if (casting.attainments?.everywhere && casting.factors.scale.startsWith("a")) reach--;
  if (casting.attainments?.timeInABottle && casting.factors.castingTime.startsWith("a")) reach--;
  if (reach < 0) reach = 0;
  return reach;
};

export const getCastingReachLimit = (caster: Caster, casting: Casting) => {
  if (
    casting.spells.length === 0 &&
    casting.spells[0] &&
    (casting.form === "Rote" || casting.form === "Grimoire")
  ) {
    return 5 - casting.spells[0].primaryArcana.level;
  }
  const reaches: number[] = [];
  for (const spell of casting.spells) {
    reaches.push(getFreeReach(caster, spell));
  }
  return Math.min(...reaches);
};

export const getCastingManaCost = (caster: Caster, casting: Casting) => {
  if (casting.spells.length === 0) return 0;
  let mana = 0;
  // for each spell
  for (const spell of casting.spells) {
    // Check for ruling arcana
    if (
      caster.arcana[spell.primaryArcana.arcana].ruling === false &&
      casting.form === "Improvised"
    )
      mana++;
    // Check the effect costs
    for (const effect of spell.effects ?? []) {
      if (effect.cost) {
        for (const cost of effect.cost) {
          if (cost.type === "Mana") mana += cost.value;
        }
      }
    }
    if (spell.extraMana) mana += spell.extraMana;
  }
  // if (scene.negation) mana += scene.negation
  if (casting.factors.duration === "a6") mana++;
  if (casting.attainments.permanence) mana++;
  if (casting.attainments.conditionalDuration) mana++;
  if (casting.attainments.timeInABottle) mana++;
  if (casting.attainments.sympatheticRange) mana++;
  if (casting.attainments.temporalSympathy) mana++;
  if (casting.attainments.everywhere) mana++;
  return mana;
};

export const getBaseCastingTime = (caster: Caster) => {
  for (const [key, value] of baseCastingTimes) {
    if (caster.traits.Gnosis >= key) {
      return value;
    }
  }
  return {
    increment: 3,
    unit: "hour",
  };
};

export const getPotencyPenalty = (caster: Caster, casting: Casting) => {
  if (casting.spells.length === 0) return 0;
  let penalty = (parseInt(casting.factors.potency.substring(1), 10) - 1) * 2;
  // does every spell being cast have potency as primary factor
  if (casting.spells.every((s) => s.factor === "Potency")) {
    let arcana = casting.spells.sort((a, b) => a.primaryArcana.level - b.primaryArcana.level)[0]?.primaryArcana.arcana!
    penalty -= (caster.arcana[arcana].dots - 1) * 2
  }
  if (penalty <= 0) penalty = 0;
  return penalty;
};

export const getDurationPenalty = (caster: Caster, casting: Casting) => {
  if (casting.spells.length === 0) return 0;
  let penalty = durations.get(casting.factors.duration)?.penalty ?? 0;
  // does every spell being cast have duration as primary factor
  if (casting.spells.every((s) => s.factor === "Duration")) {
    let arcana = casting.spells.sort((a, b) => a.primaryArcana.level - b.primaryArcana.level)[0]?.primaryArcana.arcana!
    penalty -= (caster.arcana[arcana].dots - 1) * 2
  }
  if (penalty <= 0) penalty = 0;
  return penalty;
};

export const getCastingTimePenalty = (_caster: Caster, casting: Casting) => {
  let penalty = 0;
  if (casting.factors.castingTime.charAt(0) !== "a") {
    penalty -= parseInt(casting.factors.castingTime.charAt(1), 10) - 1;
  }
  return penalty;
};

export const getCastingDicePool = (caster: Caster, casting: Casting) => {
  if (casting.spells.length === 0) return 0;

  // Base pool of gnosis plus lowest arcana of any spell being cast
  let pool =
    caster.traits.Gnosis +
    caster.arcana[
      casting.spells.reduce((a, b) =>
        a.primaryArcana.level < b.primaryArcana.level ? a : b,
      ).primaryArcana.arcana
    ].dots;
  let penalties = 0;
  let bonuses = 0;
  if (casting.spells.length > 1) penalties += (casting.spells.length - 1) * 2;
  // casting
  penalties += getCastingTimePenalty(caster, casting);
  // potency
  penalties += getPotencyPenalty(caster, casting);
  // duration
  penalties += getDurationPenalty(caster, casting);
  // scale
  let suff = casting.factors.scale.split("-")
  let lim = suff[0] ?? casting.factors.scale
  penalties += scales.get(lim)?.penalty ?? 0;
  // yantras
  casting.yantras.forEach((yantra: Yantra) => {
    bonuses += yantra.bonus;
  });
  // maximum yantra bonus after penalties is 5
  bonuses = bonuses - penalties;
  if (bonuses > 5) bonuses = 5;
  pool += bonuses;
  return pool;
};

export const getCastingParadoxAmount = (caster: Caster, casting: Casting) => {
  let pool = 0,
    mustRoll = false,
    usedReach = getCastingReachUsed(caster, casting),
    freeReach = getCastingReachLimit(caster, casting);

  if (usedReach > freeReach) {
    pool += (freeReach - usedReach) * -1;
    mustRoll = true;
  }

  pool *= Math.ceil(caster.traits.Gnosis / 2);

  // dedicated tools
  const dedicated = filter(casting.yantras, ["isDedicatedTool", true]);
  if (dedicated.length === 1) {
    if (dedicated[0]?.yantraKey[0] === "s") pool -= 3;
    if (dedicated[0]?.yantraKey[0] !== "s") pool -= 2;
  }
  if (dedicated.length > 1) {
    pool -= 3;
    mustRoll = false;
  }
  if (pool <= 0 && mustRoll) return "Chance";
  if (pool < 0) return 0;
  return pool;
};

export const getDescriptionSummary = (source: Source) => {
  let output = `${source.practice}. ${source.description}`;
  if (source.page.startsWith("Creative"))
    output = output.replace(
      "phenomena",
      `phenomena related to ${purviews[source.primaryArcana.arcana]}`,
    );
  if (source.withstand) output += ` Withstood by ${source.withstand}.`;
  return output;
};

export const getPotencySummary = (_caster: Caster, casting: Casting) => {
  let output = casting.factors.potency.substring(1);
  output += " potency";
  if (casting.factors.potency[0] === "a") output += " (-2 Withstand)";
  return output;
};

export const getDurationSummary = (_caster: Caster, casting: Casting) => {
  let output = durations.get(casting.factors.duration)?.time ?? "1 turn";
  const attainments = [];
  if (casting.attainments.permanence) attainments.push("Permanence");
  if (casting.attainments.conditionalDuration) attainments.push("Conditional");
  // output += " duration"
  if (attainments.length) output += ` (${attainments.join(", ")})`;
  return output;
};

export const getCastingNameSummary = (_caster: Caster, casting: Casting) => {
  return casting.spells
    .map(
      (s) =>
        `**${s.page === "Creative" ? s.practice : s.name}** (${s.primaryArcana.arcana})`,
    )
    .join(", ");
};

export const getCastingDescriptionSummary = (
  _caster: Caster,
  casting: Casting,
) => {
  let output = "";
  if (casting.form) output += `(**${casting.form}**) `;
  output += casting.spells.map((s) => s.description).join(" ");
  return output;
};

export const getCastingTimeSummary = (caster: Caster, casting: Casting) => {
  const time = getBaseCastingTime(caster);
  // standard
  if (casting.factors.castingTime[0] === "s") {
    let increment =
      time.increment * parseInt(casting.factors.castingTime.charAt(1), 10);
    if (casting.form === "Grimoire") increment = increment + increment;
    const unit = time.unit + (increment !== 1 ? "s" : "");
    let output = `${increment} ${unit}`;
    output += " casting";
    if (casting.attainments.timeInABottle) output += " (Time in a Bottle)";
    return output;
  }
  // advanced
  else {
    let turns = casting.yantras.length <= 1 ? 1 : casting.yantras.length;
    if (some(casting.yantras, ["yantraKey", "a3"]))
      turns = turns === 1 ? 2 : turns;
    let output = `${turns} turn${turns !== 1 ? "s" : ""}`;
    output += " casting";
    if (casting.attainments.timeInABottle) output += " (Time in a Bottle)";
    return output;
  }
};

export const getRangeSummary = (_caster: Caster, casting: Casting) => {
  let output = "";
  if (casting.factors.range === "s1") {
    output = "Touch";
  } else if (
    casting.attainments.sympatheticRange ||
    casting.attainments.temporalSympathy
  ) {
    const range = [];
    if (casting.attainments.sympatheticRange) {
      range.push("Sympathetic");
    }
    if (casting.attainments.temporalSympathy) {
      range.push("Temporal Sympathetic");
    }
    output = range.join(" and ");
  } else {
    if (casting.factors.range === "a1") output = "Sensory";
    if (casting.factors.range === "a2") output = "Remote";
  }
  // output += " range"
  return output;
};

export const getScaleSummary = (_caster: Caster, casting: Casting) => {
  let suff = casting.factors.scale.split("-")
  let lim = suff[0] ?? casting.factors.scale
  let typ = suff[1] ?? undefined
  const scale = scales.get(lim);
  let output = ""
  if (typ === "subjects") output = `${scale?.number} subject${scale?.number === 1 ? "" : "s"}`
  if (typ === "area") output = `${upperFirst(scale?.area)}`
  if (casting.attainments.everywhere) output += " (Everywhere)";
  return output;
};

export const getYantrasSummary = (caster: Caster, casting: Casting) => {
  const yantrasNames = [];
  const yantras = getYantras(caster, casting);
  for (const yantra of casting.yantras) {
    let name = yantras.get(yantra.yantraKey).name;
    if (yantra.isDedicatedTool) name = `Dedicated ${name}`;
    if (yantra.id && yantra.name !== "") name = `${yantra.name} (${name})`;
    if (yantra.id && yantra.name === "") name = `${name}`;
    yantrasNames.push(name);
  }
  if (yantrasNames.length === 0) return "No yantras";
  return yantrasNames.join(", ");
};

export const getDicePoolSummary = (caster: Caster, casting: Casting) => {
  const dice = getCastingDicePool(caster, casting);
  if (dice < 1) {
    return "Chance";
  } else if (dice === 1) {
    return `${dice} die`;
  } else {
    return `${dice} dice`;
  }
};

export const getParadoxSummary = (caster: Caster, casting: Casting) => {
  let summary;
  const dice = getCastingParadoxAmount(caster, casting);
  if (dice === "Chance") {
    summary = "Chance";
  } else if (dice === 1) {
    summary = `${dice} die`;
  } else {
    summary = `${dice} dice`;
  }
  // if (scene.witnesses > 0) {
  //   if (scene.witnesses === 2) {
  //     summary += " (9-again)"
  //   } else if (scene.witnesses === 3) {
  //     summary += " (8-again)"
  //   } else if (scene.witnesses === 4) {
  //     summary += " (as rote)"
  //   }
  // }
  return summary;
};

export const getFactorSummary = (_caster: Caster, casting: Casting) => {
  let standard = 0;
  let advanced = 0;
  for (const factor in casting.factors) {
    if (casting.factors[factor as keyof Casting["factors"]][0] === "s")
      standard++;
    if (casting.factors[factor as keyof Casting["factors"]][0] === "a")
      advanced++;
  }
  return `${standard} Standard, ${advanced} Advanced`;
};

export const getCastingFactorsSummary = (caster: Caster, casting: Casting) => {
  const summary = [];
  summary.push(`${getPotencySummary(caster, casting).toLowerCase()}`);
  summary.push(`${getDurationSummary(caster, casting).toLowerCase()}`);
  summary.push(`${getCastingTimeSummary(caster, casting).toLowerCase()}`);
  summary.push(`${getRangeSummary(caster, casting).toLowerCase()}`);
  summary.push(`${getScaleSummary(caster, casting).toLowerCase()}`);
  return summary.join(", ");
};

export const getCastingEffectsSummary = (caster: Caster, casting: Casting) => {
  const summary = casting.spells.map((s) =>
    s.effects?.map((e) => e.effect).join(" "),
  );
  // if (spell.extraMana) summary.push(`${spell.extraMana} Mana.`)
  // if (spell.extraReach) summary.push(`+${spell.extraReach} Reach.`)
  // if (spell.spendWillpower) summary.unshift("Willpower spent.")
  for (let sp of casting.spells) {
    if (sp.page !== 'Creative') {
      let src =  spells.find((n) => n.name === sp.name)
      if (src?.factor && src.factor !== sp.factor) summary.push("Change primary factor.")
    }
  }
  if (caster.active.length >= caster.traits.Gnosis) summary.push("Casting above active limit.")
  if (summary.length === 0) summary.push("No additional effects.");
  return summary.join(" ");
};

export const getCastingCopyText = (caster: Caster, casting: Casting) => {
  const out = [];
  out.push("&{template:default}");
  out.push(`{{name=${getCastingNameSummary(caster, casting)}`);
  out.push(`{{summary=${getCastingDescriptionSummary(caster, casting)}}}`);
  out.push(`{{extras=${getCastingEffectsSummary(caster, casting) || "None"}}}`);
  out.push(`{{factors=${getCastingFactorsSummary(caster, casting)}}}`);
  out.push(`{{yantras=${getYantrasSummary(caster, casting) || "None"}}}`);
  out.push(`{{paradox=${getParadoxSummary(caster, casting) || "None"}}}`);
  out.push(
    `{{=[Roll ${getDicePoolSummary(caster, casting)} to cast](!&#13;&#91;[&#63;{Number of dice|${getCastingDicePool(caster, casting)}}d10>8!>&#63;{Explodes on|10}]&#93; Successes)}}`,
  );
  return out.join(" ");
}