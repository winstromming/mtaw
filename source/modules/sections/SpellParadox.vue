<template>
  <n-space vertical :size="6">
    <n-space vertical :size="6">
      <n-input-group>
      <n-input-number v-model:value="scene.paradox" placeholder="0">
        <template #prefix>
          <n-text strong>Paradox rolls this scene?</n-text>
        </template>
      </n-input-number>
      </n-input-group>
    </n-space>
    <n-input-group>
      <n-input-number style="width: 100%" v-model:value="scene.negation">
        <template #prefix>
        <n-text strong>Mana spent to reduce it?</n-text>
        </template>
      </n-input-number>
    </n-input-group>
  </n-space>
</template>

<script setup lang="ts">
import { scene } from "../../store/scene";

</script>
