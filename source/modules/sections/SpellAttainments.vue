<template>
  <Card v-if="caster.arcana.Matter.dots < 2 === false">
    <template #content>
      <n-space :wrap="false">
        <n-switch v-model:value="casting.attainments.permanence" size="small" :disabled="caster.arcana.Matter.dots < 2" />
        <n-space vertical size="small" style="line-height: 20px">
          <n-text strong>Attainment: Permanence (Matter {{ dots(2) }})</n-text>
          <n-text>Advanced Duration costs 1 Mana instead of 1 Reach.</n-text>
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
</template>

<script setup lang="ts">
import { dots } from '../../functions/methods';
import { caster } from '../../store/caster';
import { casting } from '../../store/casting';
import Card from '../common/Card.vue';
</script>
