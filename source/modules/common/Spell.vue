<template>
  <Card>
    <template #content v-if="spell.page === 'Creative'">
      <n-space vertical :size="6" style="line-height: 20px">
        <n-flex justify="space-between" :wrap="false">
          <n-flex>
            <n-text strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level) }}) </n-text>
          </n-flex>
          <n-button text title="Remove" size="tiny" type="error" @click="emits('remove', spell.name)">
            <template #icon>
              <n-icon>
                <Trash />
              </n-icon>
            </template>
          </n-button>
        </n-flex>
        <n-text style="opacity: 0.75">
          <n-text>{{ ensureTrailingPeriod(spell.description) }}</n-text>
          <n-text v-if="spell.withstand"> Withstand is {{ ensureTrailingPeriod(spell.withstand) }}</n-text>
        </n-text>
        <n-flex style="opacity: 0.6; font-size: 12px" :size="3" justify="flex-start" align="center" :wrap="false">
          <n-text :wrap="false">{{ casting.form ?? "Improvised" }}</n-text>
          <n-text>•</n-text>
          <n-text>{{ spell.practice }}</n-text>
          <n-text>•</n-text>
          <n-select size="tiny" class="choose-text" :color="true" style="--font-size: 10px; width: auto" :consistent-menu-width="false" placeholder="Factor" v-model:value="spell.factor" :options="[{ label: `Potency`, value: 'Potency' }, { label: `Duration`, value: 'Duration' }]" />
          <n-text>•</n-text>
          <n-text>{{ spell.page }} Thaumaturgy</n-text>
        </n-flex>
      </n-space>
    </template>
    <template #content v-if="spell.page !== 'Creative'">
      <n-space vertical :size="6" style="line-height: 20px">
        <n-flex justify="space-between" :wrap="false">
          <n-flex>
            <n-text strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level) }}) </n-text>
          </n-flex>
          <n-button text title="Remove" size="tiny" type="error" @click="emits('remove', spell.name)">
            <template #icon>
              <n-icon>
                <Trash />
              </n-icon>
            </template>
          </n-button>
        </n-flex>
        <n-text style="opacity: 0.75">
          <n-text>{{ ensureTrailingPeriod(spell.description) }}</n-text>
          <n-text v-if="spell.withstand"> Withstand is {{ ensureTrailingPeriod(spell.withstand) }}</n-text>
        </n-text>
        <n-flex style="opacity: 0.6; font-size: 12px" :size="3" justify="flex-start" align="center" :wrap="false">
          <n-text :wrap="false">{{ casting.form ?? "Improvised" }}</n-text>
          <n-text>•</n-text>
          <n-text>{{ spell.practice }}</n-text>
          <n-text>•</n-text>
          <n-select
            size="tiny"
            class="choose-text"
            :color="true"
            style="--font-size: 10px; width: auto"
            :consistent-menu-width="false"
            placeholder="Factor"
            v-model:value="spell.factor"
            :options="[{ label: `Potency${source?.factor === 'Potency' ? '' : ' (Reach)'}`, value: 'Potency' }, { label: `Duration${source?.factor === 'Duration' ? '' : ' (Reach)'}`, value: 'Duration' }]"
          />
          <n-text>•</n-text>
          <n-text>{{ spell.page }}</n-text>
        </n-flex>
      </n-space>
    </template>
    <template #footer v-if="hasSource(spell.name)?.effects">
      <n-space vertical :size="6">
        <n-flex align="flex-start" :size="6" :wrap="false" style="line-height: 20px" v-for="(effect, key) of hasSource(spell.name)?.effects" :key="key">
          <n-switch style="position: relative; height: 20px; top: 0px" size="small" :disabled="isEffectRestricted(spell, effect)" :checked="isEffectRestricted(spell, effect) ? false : isEffectAdded(spell, effect)" @update:value="toggleEffect(spell, effect)" />
          <n-text style="line-height: 20px">
            <n-text style="line-height: 20px" strong v-for="cost in effect.cost">{{cost.value}} {{cost.type}}. </n-text>
            <n-text style="line-height: 20px" strong v-if="effect.requirement">{{effect.requirement.arcana}} {{dots(effect.requirement.value)}}&nbsp;</n-text>
            <n-text style="line-height: 20px">{{ ensureTrailingPeriod(effect.effect) }}</n-text>
          </n-text>
        </n-flex>
        <!-- <n-flex align="centre" :size="6" :wrap="false" style="line-height: 18px" v-for="(effect, key) of hasSource(spell.name)?.effects" :key="key">
          <n-switch size="small" :disabled="isEffectRestricted(spell, effect)" :checked="isEffectRestricted(spell, effect) ? false : isEffectAdded(spell, effect)" @update:value="toggleEffect(spell, effect)" />
          <n-tag type="default" size="tiny" style="--n-height: 18px" :bordered="false" round strong v-for="cost in effect.cost">{{cost.value}} {{cost.type}}</n-tag>
          <n-tag type="default" size="tiny" style="--n-height: 18px" :bordered="false" round strong v-if="effect.requirement">{{effect.requirement.arcana}} {{dots(effect.requirement.value)}}</n-tag>
          <n-text>{{ ensureTrailingPeriod(effect.effect) }}</n-text>
        </n-flex> -->
      </n-space>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance } from "vue";
import { spells } from "../../config/spells";
import type {
    Effect,
    Grimoire,
    Practice,
    Praxis,
    Rote,
    Source,
} from "../../config/types";
import { arcanaNames, practices, purviews } from "../../config/values";
import { dots, ensureTrailingPeriod } from "../../functions/methods";
import { caster } from "../../store/caster";
import { Trash, WandSparkles } from "lucide-vue-next";
import Card from "./Card.vue";
import { casting } from "../../store/casting";

const sources = computed(() => [...spells, ...caster.spells]);
const source = computed(() => sources.value.find((s) => s.name === props.spell.name));

const props = defineProps<{
  spell: Source;
  small?: boolean;
  skill?: boolean;
  effects?: boolean;
}>();
const emits = defineEmits<{
  remove: [name: string];
  cast: [name: string];
}>();

const hasRemove = computed(() => !!getCurrentInstance()?.vnode.props?.onRemove);
const hasCast = computed(() => !!getCurrentInstance()?.vnode.props?.onCast);

const skills = computed(() => {
  const options = [];
  for (const [k, v] of Object.entries({
    ...caster.skills.physical,
    ...caster.skills.mental,
    ...caster.skills.social,
  })) {
    options.push({ label: `${k} (+${v.dots ?? 0})`, value: k });
  }
  return options;
});

const practice = computed(() => {
  return "practice" in props.spell
    ? props.spell.practice
    : source.value?.practice;
});

const factor = computed(() => {
  return "factor" in props.spell ? props.spell.factor : source.value?.factor;
});

const description = computed(() => {
  let text = "";
  text += `${practice.value} with ${factor.value}. `;
  text += ensureTrailingPeriod(props.spell.description);
  if ("page" in props.spell && props.spell.page.startsWith("Creative"))
    text = text.replace("phenomena", purviews[props.spell.primaryArcana.arcana]);
  if ("withstand" in props.spell && props.spell.withstand?.length)
    text += ` Withstood by ${props.spell.withstand}.`;
  return text;
});

const isEffectRestricted = (_spell: Source, item: Effect) => {
  let answer = false;
  if (
    item.requirement?.arcana &&
    caster.arcana[item.requirement.arcana].dots < item.requirement.value
  )
    answer = true;
  return answer;
};

const isEffectAdded = (spell: Source, item: Effect) => {
  const existing = spell.effects?.find((added) => added.effect === item.effect);
  return existing !== undefined;
};

const toggleEffect = (spell: Source, item: Effect) => {
  if (isEffectAdded(spell, item)) {
    if (spell.effects)
      spell.effects?.splice(
        spell.effects.findIndex((added) => added.effect === item.effect),
        1,
      );
  } else {
    spell.effects?.push(item);
  }
};

const hasSource = (name: string) => {
  return spells.find((item) => item.name === name);
};
</script>
