<template>
  <n-grid y-gap="13" x-gap="12" :cols="3" item-responsive responsive="screen">
    <n-gi span="3 s:3 m:1">
      <n-space vertical :size="6">
        <Dots v-for="(skill, name) in caster.skills.mental" :checked="caster.details.order?.skills.includes(name)" :checked-disabled="true" is-editable :name="name" :dots="skill.dots" @update-dots="skill.dots = $event" :label="skill.label" @update-label="skill.label = $event"> </Dots>
      </n-space>
    </n-gi>
    <n-gi span="3 s:3 m:1">
      <n-space vertical :size="6">
        <Dots v-for="(skill, name) in caster.skills.physical" :checked="caster.details.order?.skills.includes(name)" :checked-disabled="true" is-editable :name="name" :dots="skill.dots" @update-dots="skill.dots = $event" :label="skill.label" @update-label="skill.label = $event"> </Dots>
      </n-space>
    </n-gi>
    <n-gi span="3 s:3 m:1">
      <n-space vertical :size="6">
        <Dots v-for="(skill, name) in caster.skills.social" :checked="caster.details.order?.skills.includes(name)" :checked-disabled="true" is-editable :name="name" :dots="skill.dots" @update-dots="skill.dots = $event" :label="skill.label" @update-label="skill.label = $event"> </Dots>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { caster } from '../../store/caster';
import Card from '../common/Card.vue';
import Dots from '../common/Dots.vue';
</script>
