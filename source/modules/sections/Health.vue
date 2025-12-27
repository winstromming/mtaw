<template>
  <n-space vertical size="small">
    <n-input value="" placeholder="">
      <template #prefix>
        <n-text strong>Health</n-text>
      </template>
      <template #suffix>
        <n-flex :size="0" style="justify-content: flex-start;">
          <n-tooltip trigger="hover" v-for="(amount, index) of caster.health.aggravated" :disabled="caster.health.lethal > 0 || index + 1 !== caster.health.aggravated">
            <template #trigger>
              <n-button :disabled="caster.health.lethal > 0 || index + 1 !== caster.health.aggravated" text @click="healDamage">
                <n-icon size="20"><SquareAsterisk stroke-width="1" /></n-icon>
              </n-button>
            </template>
            Heal (1 week)
          </n-tooltip>
          <n-tooltip trigger="hover" v-for="(amount, index) of caster.health.lethal" :disabled="caster.health.bashing > 0 || index + 1 !== caster.health.lethal">
            <template #trigger>
              <n-button :disabled="caster.health.bashing > 0 || index + 1 !== caster.health.lethal" text @click="healDamage">
                <n-icon size="20"><SquareX stroke-width="1" /></n-icon>
              </n-button>
            </template>
            Heal (2 days)
          </n-tooltip>
          <n-tooltip trigger="hover" v-for="(amount, index) of caster.health.bashing" :disabled="index + 1 !== caster.health.bashing">
            <template #trigger>
              <n-button :disabled="index + 1 !== caster.health.bashing" text @click="healDamage">
                <n-icon size="20"><SquareSlash stroke-width="1" /></n-icon>
              </n-button>
            </template>
            Heal (15 mins)
          </n-tooltip>
          <n-button v-for="amount in remaining" disabled text>
            <n-icon size="20"><Square stroke-width="1" /></n-icon>
          </n-button>
          <n-popover trigger="click" placement="top">
            <template #trigger>
              <n-button text type="default" style="margin-right: -3px">
                <n-icon size="18">
                  <Plus stroke-width="1.5" />
                </n-icon>
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
    </n-input>
    <n-alert type="warning" v-if="summary">
      <n-text v-html="summary" />
    </n-alert>
    <n-grid cols="2" x-gap="6">
      <n-gi>
        <n-input-number :show-button="false" class="text-right" v-model:value="caster.traits.Willpower" placeholder="0" min="0" :max="maxWillpower">
          <template #prefix>
            <n-text strong>Willpower</n-text>
          </template>
          <template #suffix>
            <n-text>/ {{ maxWillpower }}</n-text>
          </template>
        </n-input-number>
      </n-gi>
      <n-gi>
        <n-input-number :show-button="false" class="text-right" v-model:value="caster.traits.Mana" placeholder="0" min="0" :max="manaLimit[caster.traits.Gnosis]">
          <template #prefix>
            <n-text strong>Mana</n-text>
          </template>
          <template #suffix>
            <n-text>/ {{ manaLimit[caster.traits.Gnosis] }}</n-text>
          </template>
        </n-input-number>
      </n-gi>
    </n-grid>
  </n-space>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { manaLimit } from "../../config/values";
import { caster } from "../../store/caster";
import { Plus, SquareAsterisk, SquareSlash, SquareX } from "lucide-vue-next";

const size = computed(() => {
  let size = caster.traits.Size.base ?? 0;
  if (caster.traits.Size.modifier && caster.traits.Size.modifier > 0)
    size = caster.traits.Size.modifier;
  return size;
});

const maxWillpower = computed(() => {
  return (
    caster.attributes.mental.Resolve.dots +
    caster.attributes.social.Composure.dots
  );
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

<style>
.n-input-number.text-right .n-input .n-input__input {
  text-align: right;
}
.health {
  display: flex;
  min-width: 100%;
  background-color: var(--n-color);
}

.health>div {
  flex: 1
}

.health .n-button {
  flex-grow: 1;
  flex-shrink: 1;
  display: inline-flex;
  padding-left: 3px;
  padding-right: 3px;
  border-color: var(--n-border);
}

.health .n-button--disabled {
  opacity: 1;
  cursor: default;
}

.health .n-button--disabled .n-icon {
  opacity: 0.25;
}
.healthgrid > div {
  justify-self: center;
  /* align-items: center;
  justify-content: center;
  display: flex; */
}
</style>
