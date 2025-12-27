<template>
  <n-space vertical :size="6">
    <n-text strong>Conditions</n-text>
    <n-dynamic-tags :input-props="{ placeholder: 'Condition', color: true }" input-class="choose-text choose-tag-text" tag-class="tag-text" style="flex-direction: column; gap: 6px" size="large" type="default" v-model:value="caster.conditions">
      <template #trigger="{ activate, disabled }">
        <n-button text style="line-height: 20px; width: 100%; justify-content: flex-start; cursor: text; color: rgb(194, 194, 194) !important" type="default" :disabled="disabled" @click="activate()"> <span style="color: black; margin-right: 4px">•</span>Condition </n-button>
      </template>
    </n-dynamic-tags>
  </n-space>
  <!-- <n-dynamic-tags
    input-style="width: 100%"
    tag-style="--n-border-radius: 5px;
    --n-border: 1px solid #ddd;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    --n-text-color: var(--n-color-target);
    justify-content: space-between;
    align-items: flex-start;
    white-space: normal;
    --n-height: auto;
    min-height: 34px !important;
    --n-padding: 10px 12px; --n-color: #fff; width: 100%;"
    style="flex-direction: column; gap: 6px"
    size="large"
    type="default"
    v-model:value="caster.conditions"
  >
    <template #trigger="{ activate, disabled }">
      <n-button text style="--n-width: 100%" dashed type="default" :disabled="disabled" @click="activate()"> Add Condition </n-button>
    </template>
  </n-dynamic-tags> -->
</template>

<script setup lang="ts">
import { caster } from "../../store/caster";
</script>

<style>
.choose-tag-text:before {
  content: "•";
  color: black;
  margin-right: 4px;
}
.choose-tag-text {
  width: 100%;
}
.tag-text:before {
  content: "•";
  color: black;
  margin-right: 4px;
}
.tag-text {
  --n-border-radius: 5px;
  --n-border: none !important;
  box-shadow: none;
  --n-text-color: var(--n-color-target);
  justify-content: flex-start;
  white-space: normal;
  --n-height: auto !important;
  line-height: 21px !important;
  min-height: 21px !important;
  --n-padding: 0 !important;
  --n-color: transparent;
  width: 100%;
  color: var(--n-color-target)
}
.tag-text span {
  margin-right: auto;
}
</style>
