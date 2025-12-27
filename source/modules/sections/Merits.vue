<template>
  <n-space vertical :size="6">
    <Dots :color="true" v-for="(merit, index) of caster.merits" is-editable placeholder="Merit" :dots="merit.dots" @update-dots="merit.dots = $event" :label="merit.name" @update-label="merit.name = $event" />
  </n-space>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { caster } from "../../store/caster";
import Dots from "../common/Dots.vue";

// onMounted(() => {
//   caster.merits = caster.merits.filter((v) => v.name.length > 0 || v.dots > 0);
// });

// watch(caster, () => {
//   if (caster.merits.length === 0) caster.merits.push({ name: "", dots: 0 });
//   if (caster.merits[caster.merits.length - 1]?.name.length)
//     caster.merits.push({ name: "", dots: 0 });
// });
</script>
