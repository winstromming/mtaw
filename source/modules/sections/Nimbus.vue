<template>
  <n-space vertical :size="6">
    <n-text strong>Nimbus</n-text>
    <n-input class="choose-text" type="textarea" :autosize="{ minRows: 2 }" placeholder="Experiences {long-term} effect. Causes {immediate} effect. Leaves {signature} effect behind." v-model:value="caster.nimbus" />
  </n-space>
</template>

<script setup lang="ts">
import { caster } from '../../store/caster';
</script>
