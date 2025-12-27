<template>
  <n-space vertical :size="6">
    <n-text strong>Attainments</n-text>
    <div v-for="attainment in caster.arcana_attainments" style="height: 20px; line-height: 20px;">
      <n-ellipsis :line-clamp="1">
        {{ attainment }}
      </n-ellipsis>
    </div>
    <n-input v-if="caster.details.legacy" v-for="(key, index) of ['First', 'Second', 'Third', 'Fourth', 'Fifth']" class="choose-text" :color="true" v-model:value="caster.legacy_attainments[index]" :placeholder="`${key} Attainment`">
      <template #prefix> {{caster.details.legacy}}: </template>
    </n-input>
  </n-space>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { caster } from '../../store/caster';
import Dots from '../common/Dots.vue';

watch(caster.arcana, () => {

  const list: string[] = []
  let counterspell_items: string[] = []
  let magesight_items: string[] = []
  let magearmor_items: string[] = []
  let summoning_items: string[] = []
  let createrote_items: string[] = []
  let other: string[] = []
  Object.entries(caster.arcana).forEach(([name, arcana]) => {
    if (arcana.dots > 0) {
      counterspell_items.push(name)
      magesight_items.push(name)
    }
    if (arcana.dots > 1) {
      magearmor_items.push(name)
      if (name === "Death") other.push("Death: Eyes of the Dead")
      if (name === "Fate") other.push("Fate: Conditional Duration")
      if (name === "Forces") other.push("Forces: Precise Force")
      if (name === "Life") other.push("Life: Improved Pattern Restoration")
      if (name === "Matter") other.push("Matter: Permanance")
      if (name === "Mind") other.push("Mind: Mind's Eye")
      if (name === "Prime") other.push("Prime: Universal Counterspell")
      if (name === "Space") other.push("Space: Sympathetic Range")
      if (name === "Spirit") other.push("Spirit: Spirit Eyes")
      if (name === "Time") other.push("Time: Temporal Sympathy")
    }
    if (arcana.dots > 2) {
      summoning_items.push(name)
    }
    if (arcana.dots > 3) {
      if (name === "Death") other.push("Death: Inviolate Soul")
      if (name === "Fate") other.push("Fate: Unbound Fate")
      if (name === "Forces") other.push("Forces: Environmental Immunity")
      if (name === "Life") other.push("Life: Body Autonomy")
      if (name === "Matter") other.push("Matter: Durability Control")
      if (name === "Mind") other.push("Mind: Intuitive Leap")
      if (name === "Prime") other.push("Prime: Imbue Item")
      if (name === "Space") other.push("Space: Everywhere")
      if (name === "Spirit") other.push("Spirit: Honorary Rank")
      if (name === "Time") other.push("Time: Time in a Bottle")
    }
    if (arcana.dots > 4) {
      createrote_items.push(name)
    }
  })
  if (counterspell_items.length) list.push(`Counterspell (${counterspell_items.join(", ")})`)
  if (magesight_items.length) list.push(`Mage Sight (${magesight_items.join(", ")})`)
  if (magearmor_items.length) list.push(`Mage Armor (${magearmor_items.join(", ")})`)
  if (summoning_items.length) list.push(`Summoning (${summoning_items.join(", ")})`)
  if (createrote_items.length) list.push(`Create Rote (${createrote_items.join(", ")})`)
  if (other.length) list.push(...other)
  caster.arcana_attainments = list
})

const attainments = computed(() => {
  const list: string[] = []
  let counterspell_items: string[] = []
  let magesight_items: string[] = []
  let magearmor_items: string[] = []
  let summoning_items: string[] = []
  let createrote_items: string[] = []
  let other: string[] = []
  Object.entries(caster.arcana).forEach(([name, arcana]) => {
    if (arcana.dots > 0) {
      counterspell_items.push(name)
      magesight_items.push(name)
    }
    if (arcana.dots > 1) {
      magearmor_items.push(name)
      if (name === "Death") other.push("Death: Eyes of the Dead")
      if (name === "Fate") other.push("Fate: Conditional Duration")
      if (name === "Forces") other.push("Forces: Precise Force")
      if (name === "Life") other.push("Life: Improved Pattern Restoration")
      if (name === "Matter") other.push("Matter: Permanance")
      if (name === "Mind") other.push("Mind: Mind's Eye")
      if (name === "Prime") other.push("Prime: Universal Counterspell")
      if (name === "Space") other.push("Space: Sympathetic Range")
      if (name === "Spirit") other.push("Spirit: Spirit Eyes")
      if (name === "Time") other.push("Time: Temporal Sympathy")
    }
    if (arcana.dots > 2) {
      summoning_items.push(name)
    }
    if (arcana.dots > 3) {
      if (name === "Death") other.push("Death: Inviolate Soul")
      if (name === "Fate") other.push("Fate: Unbound Fate")
      if (name === "Forces") other.push("Forces: Environmental Immunity")
      if (name === "Life") other.push("Life: Body Autonomy")
      if (name === "Matter") other.push("Matter: Durability Control")
      if (name === "Mind") other.push("Mind: Intuitive Leap")
      if (name === "Prime") other.push("Prime: Imbue Item")
      if (name === "Space") other.push("Space: Everywhere")
      if (name === "Spirit") other.push("Spirit: Honorary Rank")
      if (name === "Time") other.push("Time: Time in a Bottle")
    }
    if (arcana.dots > 4) {
      createrote_items.push(name)
    }
  })
  if (counterspell_items.length) list.push(`Counterspell (${counterspell_items.join(", ")})`)
  if (magesight_items.length) list.push(`Mage Sight (${magesight_items.join(", ")})`)
  if (magearmor_items.length) list.push(`Mage Armor (${magearmor_items.join(", ")})`)
  if (summoning_items.length) list.push(`Summoning (${summoning_items.join(", ")})`)
  if (createrote_items.length) list.push(`Create Rote (${createrote_items.join(", ")})`)
  if (other.length) list.push(...other)
  return list
})
</script>
