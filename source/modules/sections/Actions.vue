<template>
  <n-space :size="10" justify="space-between">
    <n-space :size="2" v-if="canCastSpell">
      <n-tag size="small" :bordered="false" round strong :type="usedReach > freeReach ? 'warning' : 'success'"> {{usedReach}}/{{ freeReach }} Reach</n-tag>
      <n-tag size="small" :bordered="false" round strong :type="isDicePoolTooLow ? 'warning' : 'success'"> {{ dicePool }} Dice</n-tag>
      <n-tag size="small" :bordered="false" round strong type="success">{{ totalMana }} Mana</n-tag>
      <n-tag v-if="hasParadox" size="small" :bordered="false" round strong type="error">{{ paradoxDice }} Paradox</n-tag>
    </n-space>
    <n-space :size="2" v-if="canCastSpell === false">
      <n-tag size="small" disabled :bordered="false" round strong>0/0 Reach</n-tag>
      <n-tag size="small" disabled :bordered="false" round strong>0 Dice</n-tag>
      <n-tag size="small" disabled :bordered="false" round strong>0 Mana</n-tag>
    </n-space>
    <n-space :size="2">
      <n-button secondary size="tiny" title="Reset" type="error" @click="reset">
        <template #icon>
          <n-icon>
            <Undo2 />
          </n-icon>
        </template>
      </n-button>
      <n-popselect size="medium" scrollable trigger="click" :value="null" @update:value="choose" :options="chooseSpellOptions">
        <n-button secondary size="tiny" title="Combine" :disabled="isAddingDisabled" type="success">
          <template #icon>
            <n-icon>
              <Plus />
            </n-icon>
          </template>
        </n-button>
      </n-popselect>
      <n-button secondary size="tiny" title="Cast" :disabled="canCastSpell === false" type="warning" @click="cast">
        <template #icon>
          <n-icon>
            <Zap />
          </n-icon>
        </template>
      </n-button>
      <n-button secondary size="tiny" title="Copy for Roll20" :disabled="canCastSpell === false" type="info" @click="copy">
        <template #icon>
          <n-icon>
            <Copy />
          </n-icon>
        </template>
      </n-button>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { cloneDeep } from "lodash";
import { useMessage } from "naive-ui";
import { computed } from "vue";
import {
    dots,
    ensureTrailingPeriod,
    getCastingCopyText,
    getCastingDescriptionSummary,
    getCastingDicePool,
    getCastingEffectsSummary,
    getCastingFactorsSummary,
    getCastingManaCost,
    getCastingName,
    getCastingNameSummary,
    getCastingParadoxAmount,
    getCastingReachLimit,
    getCastingReachUsed,
    getCastingTimeSummary,
    getDicePoolSummary,
    getParadoxSummary,
    getYantrasSummary,
} from "../../functions/methods";
import { caster } from "../../store/caster";
import { casting } from "../../store/casting";
import { scene } from "../../store/scene";
import { Copy, Plus, Undo2, Zap } from "lucide-vue-next";
import type { Arcana, Practice, Source } from "../../config/types";
import { spells } from "../../config/spells";
import { combinedLimit, practices, purviews } from "../../config/values";

const message = useMessage();

const isCasterConfigured = computed(
  () =>
    caster.traits.Gnosis > 0 &&
    Object.values(caster.arcana).filter((a) => a.dots > 0).length > 0,
);

/**
 * Returns true if the caster does NOT meet the arcana dot requirements
 * for ANY spell included in the current casting (primary OR secondary arcana).
 * I.e. "too high" means at least one required level exceeds the caster's dots.
 */
const isSpellArcanaTooHigh = computed(() => {
  if (!casting.spells || casting.spells.length === 0) return false;

  return casting.spells.some((sp) => {
    if (!sp) return false;
    // Check primary arcana requirement
    const primaryFail =
      sp.primaryArcana?.arcana &&
      sp.primaryArcana?.level &&
      (caster.arcana[sp.primaryArcana.arcana]?.dots ?? 0) <
        sp.primaryArcana.level;

    // Check secondary arcana requirement (if present)
    const secondaryFail =
      sp.secondaryArcana?.arcana &&
      sp.secondaryArcana?.level &&
      (caster.arcana[sp.secondaryArcana.arcana]?.dots ?? 0) <
        sp.secondaryArcana.level;

    return primaryFail || secondaryFail;
  });
});

const canCastSpell = computed(() => {
  // Retains original gating logic; arcana check now spans all casting.spells.
  // if (spell.practice === undefined) return false
  // if (spell.factor === undefined) return false
  if (casting.spells.length === 0) return false;
  if (isSpellArcanaTooHigh.value) return false;
  if (isCasterConfigured.value === false) return false;
  return true;
});

const usedReach = computed(() => {
  return getCastingReachUsed(caster, casting);
});

const freeReach = computed(() => {
  return getCastingReachLimit(caster, casting);
});

const dicePool = computed(() => {
  return getCastingDicePool(caster, casting);
});

const isDicePoolTooLow = computed(() => {
  return dicePool.value < 1;
});

const isAddingDisabled = computed(() => {
  if (casting.form === "Grimoire") return true;
  if (casting.form === "Praxis") return true;
  if (casting.form === "Rote") return true;
  return casting.spells.length === combinedLimit[caster.traits.Gnosis];
});

const hasParadox = computed(() => {
  return (
    usedReach.value > freeReach.value ||
    scene.paradox > 0 ||
    scene.witnesses > 0
  );
});

const totalMana = computed(() => {
  return getCastingManaCost(caster, casting);
});

const paradoxDice = computed(() => {
  return getCastingParadoxAmount(caster, casting);
});
const reset = () => {
  casting.reset();
};

const copy = () => {
  const text = getCastingCopyText(caster, casting)
  navigator.clipboard.writeText(text).then(() => {
    message.info(`${casting.spells.map((s) => s.name).join(" + ")} was copied`);
  });
};
const cast = () => {
  const cloned = cloneDeep(casting);
  cloned.id = Date.now();
  cloned.name = getCastingName(casting);
  casting.reset();
  caster.active.push(cloned);
  message.warning(`${cloned.name} was cast`);
};
// const saveSpell = (choice: Spell) => {
//   const cloned = cloneDeep(choice)
//   cloned.id = cloned.id || new Date().getTime()
//   caster.saved.push(cloned)
//   message.success(`${cloned.name} was saved`)
// }

const chooseSpellOptions = computed(() => {
  const options: any[] = [];

  for (const [name, arcana] of Object.entries(caster.arcana)) {
    if (arcana.dots > 0) {
      const option = {
        type: "group",
        label: name,
        key: name,
        children: [] as {
          label: string;
          style?: Record<string, any>;
          disabled?: boolean;
          value: Source;
        }[],
      };
      option.children = [];
      for (const practice of practices) {
        if (practice.level <= arcana.dots) {
          option.children.push({
            label: `${dots(practice.level)} ${practice.name}`,
            style: {
              fontWeight: "600",
            },
            disabled: false,
            value: {
              name: `${practice.verb}`,
              practice: practice.name,
              primaryArcana: { arcana: name as Arcana, level: practice.level },
              factor: "Potency",
              description: ensureTrailingPeriod(practice.desc.replace("phenomena", purviews[name as Arcana])),
              page: "Creative",
            },
          });
          option.children.push(
            ...[...spells, ...caster.spells]
              .filter(
                (s) =>
                  s.primaryArcana.arcana === name &&
                  s.practice === practice.name,
              )
              // .sort((a, b) => a.primaryArcana.level - b.primaryArcana.level)
              .map((s) => {
                return {
                  label: `${dots(s.primaryArcana.level)} ${s.name}`,
                  disabled: casting.spells.some((c) => c.name === s.name),
                  value: s,
                };
              }),
          );
        }
      }
      options.push(option);
    }
  }

  return options;
});

const choose = (choice: Source) => {
  casting.insert(choice);
};
</script>

<style></style>
