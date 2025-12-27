<template>
  <n-grid y-gap="6" x-gap="12" :cols="2" item-responsive responsive="screen">
    <n-gi v-for="(arcana, name) in caster.arcana">
      <Dots :name="name" :dots="arcana.dots" @update-dots="arcana.dots = $event" :checked="arcana.ruling || caster.details.path?.arcana.includes(name)" :checked-disabled="caster.details.path?.arcana.includes(name)" @update-checked="arcana.ruling = $event" />
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { caster } from "../../store/caster";
import Dots from "../common/Dots.vue";
</script>
