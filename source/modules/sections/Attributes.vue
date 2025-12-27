<template>
  <n-grid y-gap="13" x-gap="12" :cols="3" item-responsive responsive="screen">
    <n-gi span="3 s:3 m:1">
      <n-space vertical :size="6">
        <Dots v-for="(attribute, name) in caster.attributes.mental" :name="name" :dots="attribute.dots" @update-dots="attribute.dots = $event"></Dots>
      </n-space>
    </n-gi>
    <n-gi span="3 s:3 m:1">
      <n-space vertical :size="6">
        <Dots v-for="(attribute, name) in caster.attributes.physical" :name="name" :dots="attribute.dots" @update-dots="attribute.dots = $event"></Dots>
      </n-space>
    </n-gi>
    <n-gi span="3 s:3 m:1">
      <n-space vertical :size="6">
        <Dots v-for="(attribute, name) in caster.attributes.social" :name="name" :dots="attribute.dots" @update-dots="attribute.dots = $event"></Dots>
      </n-space>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { caster } from '../../store/caster';
import Card from '../common/Card.vue';
import Dots from '../common/Dots.vue';
</script>

<style scoped></style>
