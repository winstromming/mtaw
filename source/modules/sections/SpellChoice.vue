<template>
  <Spell v-for="(item, index) in casting.spells" :spell="item" effects @remove="casting.spells.splice(index, 1)" />
  <Card v-if="casting.spells.length === 0">
    <template #content>
      <n-select filterable class="choose-text" placement="bottom-end" :value="null" placeholder="Choose improvised spell to cast" @update:value="choose" :options="chooseSpellOptions" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { spells } from "../../config/spells";
import type { Arcana, Source } from "../../config/types";
import { combinedLimit, practices, purviews } from "../../config/values";
import { dots, ensureTrailingPeriod } from "../../functions/methods";
import { caster } from "../../store/caster";
import { casting } from "../../store/casting";
import Spell from "../common/Spell.vue";
import Card from "../common/Card.vue";
import Choose from "../common/Choose.vue";

watch(casting.spells, () => {
  if (casting.spells.length === 0) {
    casting.form = undefined;
  }
});

const isDisabled = computed(() => {
  if (casting.form === "Grimoire") return true;
  if (casting.form === "Praxis") return true;
  if (casting.form === "Rote") return true;
  return casting.spells.length === combinedLimit[caster.traits.Gnosis];
});

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
