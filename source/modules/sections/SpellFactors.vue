<template>
  <n-space vertical :size="6">
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Potency</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.potency" :options="potencyOptions" />
      </n-input-group>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Duration</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.duration" :options="durationOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Matter.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.permanence" size="small" :disabled="caster.arcana.Matter.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px">
              <n-text strong>Attainment: Permanence (Matter {{ dots(2) }})</n-text>
              <n-text>Advanced Scale costs 1 Mana instead of 1 Reach.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
      <Card v-if="caster.arcana.Fate.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.conditionalDuration" size="small" :disabled="caster.arcana.Fate.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px">
              <n-text strong>Attainment: Conditional Duration (Fate {{ dots(2) }})</n-text>
              <n-text>Spend 1 Mana to end the spell when a condition is met, adding 1-3 levels of Duration based on the nature of the condition.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Casting</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.castingTime" :options="castingTimeOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Time.dots < 4 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.timeInABottle" size="small" :disabled="caster.arcana.Time.dots < 4" />
            <n-space vertical size="small" style="line-height: 20px">
              <n-text strong>Attainment: Time in a Bottle (Time {{ dots(4) }})</n-text>
              <n-text>Advanced Casting Time costs 1 Mana instead of 1 Reach.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Range</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.range" :options="rangeOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Space.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.sympatheticRange" size="small" :disabled="caster.arcana.Space.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px">
              <n-text strong>Attainment: Sympathetic Range (Space {{ dots(2) }})</n-text>
              <n-text>Subject can be beyond sensory range. Requires Advanced Range, a sympathy Yantra and costs 1 Mana.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
      <Card v-if="caster.arcana.Time.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.temporalSympathy" size="small" :disabled="caster.arcana.Time.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px">
              <n-text strong>Attainment: Temporal Sympathy (Time {{ dots(2) }})</n-text>
              <n-text>Cast a spell at subject's past self. Requires Advanced Range, a sympathy Yantra and costs +1 Mana. Can only be used with Time spells that allow it or spells combined with them.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Scale</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.scale" :options="scaleOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Space.dots < 4 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.everywhere" size="small" :disabled="caster.arcana.Space.dots < 4" />
            <n-space vertical size="small" style="line-height: 20px">
              <n-text strong>Attainment: Everywhere (Space {{ dots(4) }})</n-text>
              <n-text>Advanced Scale costs 1 Mana instead of 1 Reach.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
  </n-space>
  <!-- <n-space vertical :size="6">
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Potency</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.potency" :options="potencyOptions" />
      </n-input-group>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Duration</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.duration" :options="durationOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Matter.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.permanence" size="small" :disabled="caster.arcana.Matter.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px>
              <n-text strong>Attainment: Permanence (Matter {{ dots(2) }})</n-text>
              <n-text>Advanced Scale costs 1 Mana instead of 1 Reach.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
      <Card v-if="caster.arcana.Fate.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.conditionalDuration" size="small" :disabled="caster.arcana.Fate.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px>
              <n-text strong>Attainment: Conditional Duration (Fate {{ dots(2) }})</n-text>
              <n-text>Spend 1 Mana to end the spell when a condition is met, adding 1-3 levels of Duration based on the nature of the condition.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Casting</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.castingTime" :options="castingTimeOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Time.dots < 4 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.timeInABottle" size="small" :disabled="caster.arcana.Time.dots < 4" />
            <n-space vertical size="small" style="line-height: 20px>
              <n-text strong>Attainment: Time in a Bottle (Time {{ dots(4) }})</n-text>
              <n-text>Advanced Casting Time costs 1 Mana instead of 1 Reach.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Range</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.range" :options="rangeOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Space.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.sympatheticRange" size="small" :disabled="caster.arcana.Space.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px>
              <n-text strong>Attainment: Sympathetic Range (Space {{ dots(2) }})</n-text>
              <n-text>Subject can be beyond sensory range. Requires Advanced Range, a sympathy Yantra and costs 1 Mana.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
      <Card v-if="caster.arcana.Time.dots < 2 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.temporalSympathy" size="small" :disabled="caster.arcana.Time.dots < 2" />
            <n-space vertical size="small" style="line-height: 20px>
              <n-text strong>Attainment: Temporal Sympathy (Time {{ dots(2) }})</n-text>
              <n-text>Cast a spell at subject's past self. Requires Advanced Range, a sympathy Yantra and costs +1 Mana. Can only be used with Time spells that allow it or spells combined with them.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
    <n-space vertical :size="6">
      <n-input-group>
        <n-input-group-label style="width: 5.8em">
          <n-text strong>Scale</n-text>
        </n-input-group-label>
        <n-select v-model:value="casting.factors.scale" :options="scaleOptions" />
      </n-input-group>
      <Card v-if="caster.arcana.Space.dots < 4 === false">
        <template #content>
          <n-space :wrap="false">
            <n-switch v-model:value="casting.attainments.everywhere" size="small" :disabled="caster.arcana.Space.dots < 4" />
            <n-space vertical size="small" style="line-height: 20px>
              <n-text strong>Attainment: Everywhere (Space {{ dots(4) }})</n-text>
              <n-text>Advanced Scale costs 1 Mana instead of 1 Reach.</n-text>
            </n-space>
          </n-space>
        </template>
      </Card>
    </n-space>
  </n-space> -->
  <!-- <Card title="Factors">
    <template #header> Summary </template>
    <template #footer>
      <n-space vertical :size="6">
        <n-space vertical :size="6">
          <n-input-group>
            <n-input-group-label style="width: 5.8em">
              <n-text strong>Potency</n-text>
            </n-input-group-label>
            <n-select v-model:value="casting.factors.potency" :options="potencyOptions" />
          </n-input-group>
        </n-space>
        <n-space vertical :size="6">
          <n-input-group>
            <n-input-group-label style="width: 5.8em">
              <n-text strong>Duration</n-text>
            </n-input-group-label>
            <n-select v-model:value="casting.factors.duration" :options="durationOptions" />
          </n-input-group>
          <Card v-if="caster.arcana.Matter.dots < 2 === false">
            <template #content>
              <n-space :wrap="false">
                <n-switch v-model:value="casting.attainments.permanence" size="small" :disabled="caster.arcana.Matter.dots < 2" />
                <n-space vertical size="small" style="line-height: 20px>
                  <n-text strong>Attainment: Permanence (Matter {{ dots(2) }})</n-text>
                  <n-text>Advanced Scale costs 1 Mana instead of 1 Reach.</n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
          <Card v-if="caster.arcana.Fate.dots < 2 === false">
            <template #content>
              <n-space :wrap="false">
                <n-switch v-model:value="casting.attainments.conditionalDuration" size="small" :disabled="caster.arcana.Fate.dots < 2" />
                <n-space vertical size="small" style="line-height: 20px>
                  <n-text strong>Attainment: Conditional Duration (Fate {{ dots(2) }})</n-text>
                  <n-text>Spend 1 Mana to end the spell when a condition is met, adding 1-3 levels of Duration based on the nature of the condition.</n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
        </n-space>
        <n-space vertical :size="6">
          <n-input-group>
            <n-input-group-label style="width: 5.8em">
              <n-text strong>Casting</n-text>
            </n-input-group-label>
            <n-select v-model:value="casting.factors.castingTime" :options="castingTimeOptions" />
          </n-input-group>
          <Card v-if="caster.arcana.Time.dots < 4 === false">
            <template #content>
              <n-space :wrap="false">
                <n-switch v-model:value="casting.attainments.timeInABottle" size="small" :disabled="caster.arcana.Time.dots < 4" />
                <n-space vertical size="small" style="line-height: 20px>
                  <n-text strong>Attainment: Time in a Bottle (Time {{ dots(4) }})</n-text>
                  <n-text>Advanced Casting Time costs 1 Mana instead of 1 Reach.</n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
        </n-space>
        <n-space vertical :size="6">
          <n-input-group>
            <n-input-group-label style="width: 5.8em">
              <n-text strong>Range</n-text>
            </n-input-group-label>
            <n-select v-model:value="casting.factors.range" :options="rangeOptions" />
          </n-input-group>
          <Card v-if="caster.arcana.Space.dots < 2 === false">
            <template #content>
              <n-space :wrap="false">
                <n-switch v-model:value="casting.attainments.sympatheticRange" size="small" :disabled="caster.arcana.Space.dots < 2" />
                <n-space vertical size="small" style="line-height: 20px>
                  <n-text strong>Attainment: Sympathetic Range (Space {{ dots(2) }})</n-text>
                  <n-text>Subject can be beyond sensory range. Requires Advanced Range, a sympathy Yantra and costs 1 Mana.</n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
          <Card v-if="caster.arcana.Time.dots < 2 === false">
            <template #content>
              <n-space :wrap="false">
                <n-switch v-model:value="casting.attainments.temporalSympathy" size="small" :disabled="caster.arcana.Time.dots < 2" />
                <n-space vertical size="small" style="line-height: 20px>
                  <n-text strong>Attainment: Temporal Sympathy (Time {{ dots(2) }})</n-text>
                  <n-text>Cast a spell at subject's past self. Requires Advanced Range, a sympathy Yantra and costs +1 Mana. Can only be used with Time spells that allow it or spells combined with them.</n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
        </n-space>
        <n-space vertical :size="6">
          <n-input-group>
            <n-input-group-label style="width: 5.8em">
              <n-text strong>Scale</n-text>
            </n-input-group-label>
            <n-select v-model:value="casting.factors.scale" :options="scaleOptions" />
          </n-input-group>
          <Card v-if="caster.arcana.Space.dots < 4 === false">
            <template #content>
              <n-space :wrap="false">
                <n-switch v-model:value="casting.attainments.everywhere" size="small" :disabled="caster.arcana.Space.dots < 4" />
                <n-space vertical size="small" style="line-height: 20px>
                  <n-text strong>Attainment: Everywhere (Space {{ dots(4) }})</n-text>
                  <n-text>Advanced Scale costs 1 Mana instead of 1 Reach.</n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
        </n-space>
      </n-space>
    </template>
  </Card> -->
</template>

<script setup lang="ts">
import { clone, upperFirst } from "lodash";
import { computed } from "vue";
import { durations, scales } from "../../config/values";
import { dots, getBaseCastingTime } from "../../functions/methods";
import { caster } from "../../store/caster";
import { casting } from "../../store/casting";
import Card from "../common/Card.vue";
import SpellAttainments from "./SpellAttainments.vue";

const baseCastingTime = computed(() => getBaseCastingTime(caster));

const standardCastingTimeOptions = computed(() => {
  let options = [],
    i = 0;

  while (i++ <= 5) {
    const increment = baseCastingTime.value.increment * i,
      unit = baseCastingTime.value.unit + (increment !== 1 ? "s" : ""),
      bonus = i - 1;

    options.push({
      value: `s${i}`,
      label: `${increment} ${unit} (+${bonus} dice)`,
    });
  }

  return options;
});
const castingTimeOptions = computed(() => {
  const options = [];
  options.push({
    type: "group",
    label: "Standard (Ritual Casting)",
    key: "standard",
    children: standardCastingTimeOptions.value,
  });
  options.push({
    type: "group",
    label: "Advanced (Quick Casting)",
    key: "advanced",
    children: [{ value: "a1", label: "Instant" }],
  });
  return options;
});
const standardPotencyOptions = computed(() => {
  let options = [],
    i = 0;

  while (i++ < 11) {
    let penalty = (i - 1) * 2;

    if (casting.spells.every((s) => s.factor === "Potency")) {
      let arcanas = casting.spells.map((s) => s.primaryArcana.arcana)
      if (arcanas.length) {
        let lowest = arcanas[0]!
        for (let arcana of arcanas) {
          if (caster.arcana[arcana].dots < caster.arcana[lowest].dots) {
            lowest = arcana
          }
        }
        penalty -= (caster.arcana[lowest].dots - 1) * 2
      }
    }

    if (penalty < 0) {
      penalty = 0;
    }

    options.push({
      value: `s${i}`,
      label: `${i} (-${penalty} dice)`,
    });
  }

  return options;
});
const advancedPotencyOptions = computed(() => {
  const options = [];
  let i = 0;
  while (i++ < 12) {
    let penalty = (i - 1) * 2;

    if (casting.spells.every((s) => s.factor === "Potency")) {
      let arcanas = casting.spells.map((s) => s.primaryArcana.arcana)
      if (arcanas.length) {
        let lowest = arcanas[0]!
        for (let arcana of arcanas) {
          if (caster.arcana[arcana].dots < caster.arcana[lowest].dots) {
            lowest = arcana
          }
        }
        penalty -= (caster.arcana[lowest].dots - 1) * 2
      }
    }

    if (penalty < 0) {
      penalty = 0;
    }

    options.push({
      value: `a${i}`,
      label: `${i} (-${penalty} dice and -2 Withstand)`,
    });
  }

  return options;
});
const potencyOptions = computed(() => {
  const options = [];
  options.push({
    type: "group",
    label: "Standard",
    key: "standard",
    children: standardPotencyOptions.value,
  });
  options.push({
    type: "group",
    label: "Advanced",
    key: "advanced",
    children: advancedPotencyOptions.value,
  });
  return options;
});
const rangeOptions = computed(() => {
  const options = [];
  options.push({
    type: "group",
    label: "Standard",
    key: "standard",
    children: [{ value: "s1", label: "Touch" }],
  });
  options.push({
    type: "group",
    label: "Advanced",
    key: "advanced",
    children: [
      { value: "a1", label: "Sensory" },
      { value: "a2", label: "Remote (+1 Reach)" },
    ],
  });
  return options;
});
const standardDurationOptions = computed(() => {
  const options = [];

  for (const [key, duration] of durations) {
    if (key[0] === "s") {
      let penalty = duration.penalty;

      if (casting.spells.every((s) => s.factor === "Duration")) {
        let arcanas = casting.spells.map((s) => s.primaryArcana.arcana)
        if (arcanas.length) {
          let lowest = arcanas[0]!
          for (let arcana of arcanas) {
            if (caster.arcana[arcana].dots < caster.arcana[lowest].dots) {
              lowest = arcana
            }
          }
          penalty -= (caster.arcana[lowest].dots - 1) * 2
        }
      }

      if (penalty < 0) {
        penalty = 0;
      }

      options.push({
        value: key,
        successes: key[1],
        time: duration.time,
        label: `${duration.time} (-${penalty} dice)`,
      });
    }
  }

  return options;
});
const advancedDurationOptions = computed(() => {
  const options = [];

  for (const [key, duration] of durations) {
    if (key[0] === "a") {
      let penalty = duration.penalty;

      if (casting.spells.every((s) => s.factor === "Duration")) {
        let arcanas = casting.spells.map((s) => s.primaryArcana.arcana)
        if (arcanas.length) {
          let lowest = arcanas[0]!
          for (let arcana of arcanas) {
            if (caster.arcana[arcana].dots < caster.arcana[lowest].dots) {
              lowest = arcana
            }
          }
          penalty -= (caster.arcana[lowest].dots - 1) * 2
        }
      }

      if (penalty < 0) {
        penalty = 0;
      }

      options.push({
        value: key,
        successes: key[1],
        time: duration.time,
        label: `${duration.time} (-${penalty} dice)`,
      });
    }
  }

  return options;
});
const durationOptions = computed(() => {
  const options = [];
  options.push({
    type: "group",
    label: "Standard",
    key: "standard",
    children: standardDurationOptions.value,
  });
  options.push({
    type: "group",
    label: "Advanced",
    key: "advanced",
    children: advancedDurationOptions.value,
  });
  return options;
});
const standardScaleOptions = computed(() => {
  const options = [];

  for (const [key, scale] of scales) {
    if (key[0] === "s") {
      const s = clone(scale);
      options.push({ ...s, penalty: -scale.penalty, value: key });
    }
  }

  return options;
});
const advancedScaleOptions = computed(() => {
  const options = [];

  for (const [key, scale] of scales) {
    if (key[0] === "a") {
      const s = clone(scale);
      options.push({ ...s, penalty: -scale.penalty, value: key });
    }
  }

  return options;
});

const scaleOptions = computed(() => {
  const options = [];
  options.push({
    type: "group",
    label: "Standard (subjects)",
    key: "standard-subjects",
    children: standardScaleOptions.value.map(
      ({ value, number, size, area, penalty }) => {
        return {
          value: value + "-subjects",
          label: `${number} subject${number === 1 ? "" : "s"} (${penalty} dice)`,
        };
      },
    ),
  });
  options.push({
    type: "group",
    label: "Standard (area)",
    key: "standard-area",
    children: standardScaleOptions.value.map(
      ({ value, number, size, area, penalty }) => {
        return {
          value: value + "-area",
          label: `${upperFirst(area)} (${penalty} dice)`,
        };
      },
    ),
  });
  options.push({
    type: "group",
    label: "Advanced (subjects)",
    key: "advanced-subjects",
    children: advancedScaleOptions.value.map(
      ({ value, number, size, area, penalty }) => {
        return {
          value: value + "-subjects",
          label: `${number} subject${number === 1 ? "" : "s"} (${penalty} dice)`,
        };
      },
    ),
  });
  options.push({
    type: "group",
    label: "Advanced (area)",
    key: "advanced-area",
    children: advancedScaleOptions.value.map(
      ({ value, number, size, area, penalty }) => {
        return {
          value: value + "-area",
          label: `${upperFirst(area)} (${penalty} dice)`,
        };
      },
    ),
  });
  return options;
});
</script>
