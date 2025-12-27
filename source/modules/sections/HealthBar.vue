<template>
  <n-flex :size="0" align="center" justify="space-between" style="flex-grow: 1">
    <n-flex :size="0">
      <n-tooltip trigger="hover" v-for="(amount, index) of caster.health.aggravated" :disabled="caster.health.lethal > 0 || index + 1 !== caster.health.aggravated">
        <template #trigger>
          <n-button :disabled="caster.health.lethal > 0 || index + 1 !== caster.health.aggravated" text @click="healDamage">
            <n-icon size="24"><SquareAsterisk stroke-width="1" /></n-icon>
          </n-button>
        </template>
        Heal (1 week)
      </n-tooltip>
      <n-tooltip trigger="hover" v-for="(amount, index) of caster.health.lethal" :disabled="caster.health.bashing > 0 || index + 1 !== caster.health.lethal">
        <template #trigger>
          <n-button :disabled="caster.health.bashing > 0 || index + 1 !== caster.health.lethal" text @click="healDamage">
            <n-icon size="24"><SquareX stroke-width="1" /></n-icon>
          </n-button>
        </template>
        Heal (2 days)
      </n-tooltip>
      <n-tooltip trigger="hover" v-for="(amount, index) of caster.health.bashing" :disabled="index + 1 !== caster.health.bashing">
        <template #trigger>
          <n-button :disabled="index + 1 !== caster.health.bashing" text @click="healDamage">
            <n-icon size="24"><SquareSlash stroke-width="1" /></n-icon>
          </n-button>
        </template>
        Heal (15 mins)
      </n-tooltip>
      <n-button v-for="amount in remaining" disabled text>
        <n-icon size="24"><Square stroke-width="1" /></n-icon>
      </n-button>
    </n-flex>
    <n-popover trigger="click" placement="top">
      <template #trigger>
        <n-button secondary strong size="tiny" type="error" title="Damage">
          <template #icon>
            <n-icon>
              <Flame />
            </n-icon>
          </template>
        </n-button>
      </template>
      <n-button-group vertical>
        <n-button quaternary title="Aggravated" type="error" @click="sufferAggravated"> Aggravated </n-button>
        <n-button quaternary title="Lethal" type="error" @click="sufferLethal"> Lethal </n-button>
        <n-button quaternary title="Bashing" type="error" @click="sufferBashing"> Bashing </n-button>
      </n-button-group>
    </n-popover>
  </n-flex>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { caster } from "../../store/caster";
import { Flame, Square, SquareArrowRight, SquareAsterisk, SquareSlash, SquareX } from "lucide-vue-next";

const size = computed(() => {
  let size = caster.traits.Size.base ?? 0;
  if (caster.traits.Size.modifier && caster.traits.Size.modifier > 0)
    size = caster.traits.Size.modifier;
  return size;
});

watch(caster, () => {
  caster.health.maximum.base =
    size.value + caster.attributes.physical.Stamina.dots;
});

onMounted(() => {
  caster.health.maximum.base =
    size.value + caster.attributes.physical.Stamina.dots;
});

const currentHealth = computed(() => {
  return `${caster.health.aggravated}A ${caster.health.lethal}L ${caster.health.bashing}B`;
});

const remaining = computed(() => {
  const num =
    caster.health.maximum.base -
    caster.health.bashing -
    caster.health.lethal -
    caster.health.aggravated;
  return num < 0 ? 0 : num;
});

const healText = computed(() => {
  if (caster.health.bashing > 0) {
    return "Heal (15 mins)";
  } else if (caster.health.lethal > 0) {
    return "Heal (2 days)";
  } else if (caster.health.aggravated > 0) {
    return "Heal (1 week)";
  }
});

const healDamage = () => {
  if (caster.health.bashing > 0) {
    caster.health.bashing -= 1;
  } else if (caster.health.lethal > 0) {
    caster.health.lethal -= 1;
  } else if (caster.health.aggravated > 0) {
    caster.health.aggravated -= 1;
  }
};

const sufferBashing = () => {
  if (remaining.value === 0) {
    if (caster.health.bashing > 0) {
      caster.health.bashing -= 1;
      caster.health.lethal += 1;
    } else if (caster.health.lethal > 0) {
      caster.health.lethal -= 1;
      caster.health.aggravated += 1;
    }
  } else {
    caster.health.bashing += 1;
  }
};
const sufferLethal = () => {
  if (remaining.value === 0) {
    if (caster.health.bashing > 0) {
      caster.health.bashing -= 1;
      caster.health.lethal += 1;
    } else if (caster.health.lethal > 0) {
      caster.health.lethal -= 1;
      caster.health.aggravated += 1;
    }
  } else {
    caster.health.lethal += 1;
  }
};
const sufferAggravated = () => {
  if (remaining.value === 0) {
    if (caster.health.bashing > 0) {
      caster.health.bashing -= 1;
      caster.health.aggravated += 1;
    } else if (caster.health.lethal > 0) {
      caster.health.lethal -= 1;
      caster.health.aggravated += 1;
    }
  } else {
    caster.health.aggravated += 1;
  }
};

const summary = computed(() => {
  const remaining =
    caster.health.maximum.base -
    caster.health.bashing -
    caster.health.lethal -
    caster.health.aggravated;
  if (caster.health.aggravated >= caster.health.maximum.base)
    return "You are dead.";
  if (remaining > 2) return null;
  const string = [];
  if (
    remaining === 0 &&
    caster.health.bashing === 0 &&
    caster.health.lethal > 0
  )
    string.push("You receive one point damage each turn and");
  if (remaining === 0 && caster.health.bashing > 0)
    string.push("You must make roll to stay conscious each turn and");
  if (remaining === 0) string.push("suffer -3 penalty on every action.");
  if (remaining === 1) string.push("You suffer -2 penalty on every action.");
  if (remaining === 2) string.push("You suffer -1 penalty on every action.");
  if (string.length === 0) return null;
  return string.join(" ");
});
</script>

<style></style>
