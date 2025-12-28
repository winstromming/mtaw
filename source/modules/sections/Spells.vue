<template>
  <n-space vertical :size="16">
    <!-- Praxes -->
    <n-space vertical :size="6">
      <n-text strong>Praxes</n-text>
      <n-flex style="width: 100%; line-height: 20px; gap: 5px; height: 20px;" :wrap="false" justify="start" v-for="(spell, index) in caster.praxes">
        <n-button text size="tiny" title="Cast" type="success" @click="() => { casting.reset(); casting.insert(spell, 'Praxis') }">
          <template #icon>
            <n-icon>
              <WandSparkles />
            </n-icon>
          </template>
        </n-button>
        <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
          <template #trigger>
            <n-text style="line-height: 20px;">{{ spell.name }}</n-text>
          </template>
          <n-space vertical :size="6">
            <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
            <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
            <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ spell.practice }} • {{ spell.factor }} • {{ spell.page }}</n-text>
          </n-space>
        </n-tooltip>
        <n-button style="margin-left: auto" text size="tiny" title="Remove" type="error" @click="() => caster.praxes.splice(index, 1)">
          <template #icon>
            <n-icon>
              <Trash />
            </n-icon>
          </template>
        </n-button>
      </n-flex>
      <Choose text label="Choose praxis to add" @choose="(o) => caster.praxes.push(o)" />
    </n-space>
    <!-- Rotes -->
    <n-space vertical :size="6">
      <n-text strong>Rotes</n-text>
      <n-flex style="width: 100%; line-height: 20px; gap: 5px; height: 20px;" :wrap="false" justify="start" v-for="(spell, index) in caster.rotes">
        <n-button text size="tiny" title="Cast" type="success" @click="() => { casting.reset(); casting.insert(spell, 'Rote') }">
          <template #icon>
            <n-icon>
              <WandSparkles />
            </n-icon>
          </template>
        </n-button>
        <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
          <template #trigger>
            <n-text style="line-height: 20px;">{{ spell.name }}</n-text>
          </template>
          <n-space vertical :size="6">
            <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
            <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
            <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ spell.practice }} • {{ spell.factor }} • {{ spell.page }}</n-text>
          </n-space>
        </n-tooltip>
        <n-flex style="margin-left: auto; gap: 5px" :wrap="false">
          <n-select class="choose-text" :color="caster.details.order?.skills.includes(spell.skill) ? true : false" style="opacity: 0.6; min-width: 50px" :consistent-menu-width="false" v-model:value="spell.skill" placeholder="Skill" :options="skills" />
          <n-button text size="tiny" title="Remove" type="error" @click="() => caster.rotes.splice(index, 1)">
            <template #icon>
              <n-icon>
                <Trash />
              </n-icon>
            </template>
          </n-button>
        </n-flex>
      </n-flex>
      <Choose text label="Choose rote to add" @choose="(o) => caster.rotes.push(o)" />
    </n-space>
    <!-- Grimoires -->
    <n-space vertical :size="6">
      <n-text strong>Grimoires</n-text>
      <n-flex style="width: 100%; line-height: 20px; gap: 5px; height: 20px;" :wrap="false" justify="start" v-for="(spell, index) in caster.grimoires">
        <n-button text size="tiny" title="Cast" type="success" @click="() => { casting.reset(); casting.insert(spell, 'Grimoire') }">
          <template #icon>
            <n-icon>
              <WandSparkles />
            </n-icon>
          </template>
        </n-button>
        <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
          <template #trigger>
            <n-text style="line-height: 20px;">{{ spell.name }}</n-text>
          </template>
          <n-space vertical :size="6">
            <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
            <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
            <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ spell.practice }} • {{ spell.factor }} • {{ spell.page }}</n-text>
          </n-space>
        </n-tooltip>
        <n-button style="margin-left: auto" text size="tiny" title="Remove" type="error" @click="() => caster.grimoires.splice(index, 1)">
          <template #icon>
            <n-icon>
              <Trash />
            </n-icon>
          </template>
        </n-button>
      </n-flex>
      <Choose text label="Choose grimoire to add" @choose="(o) => caster.grimoires.push(o)" />
    </n-space>
  </n-space>
</template>

<script lang="ts" setup>
import { Trash, WandSparkles } from 'lucide-vue-next';
import { caster } from '../../store/caster';
import Choose from '../common/Choose.vue';
import { dots, ensureTrailingPeriod } from '../../functions/methods';
import { casting } from '../../store/casting';
import { computed } from 'vue';
import type { Skill } from '../../config/types';

const skills = computed(() => {
  const options = [];
  for (const [k, v] of Object.entries({
    ...caster.skills.physical,
    ...caster.skills.mental,
    ...caster.skills.social,
  })) {
    if (caster.details.order?.skills.includes(k as Skill)) {
      options.push({ label: `${k} (+${(v.dots ?? 0) + 1})`, value: k });
    } else {
      options.push({ label: `${k} (+${v.dots ?? 0})`, value: k });
    }
  }
  return options;
});
</script>
