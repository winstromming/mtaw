<template>
  <n-space vertical :size="16">
    <n-space vertical :size="6">
      <n-text strong>Aspirations</n-text>
      <n-space vertical :size="3">
        <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Aspiration" v-model:value="caster.traits.Aspirations['1']">
          <template #prefix>
            <n-text strong>•</n-text>
          </template>
        </n-input>
        <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Aspiration" v-model:value="caster.traits.Aspirations['2']">
          <template #prefix>
            <n-text strong>•</n-text>
          </template>
        </n-input>
        <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Aspiration" v-model:value="caster.traits.Aspirations['3']">
          <template #prefix>
            <n-text strong>•</n-text>
          </template>
        </n-input>
      </n-space>
    </n-space>
    <n-space vertical :size="6">
      <n-text strong>Obsessions</n-text>
      <n-space vertical :size="3">
        <n-input v-if="caster.traits.Gnosis > 0" class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Obsession" v-model:value="caster.traits.Obsessions['1']">
          <template #prefix>
            <n-text strong>•</n-text>
          </template>
        </n-input>
        <n-input v-if="caster.traits.Gnosis > 2" class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Obsession" v-model:value="caster.traits.Obsessions['2']">
          <template #prefix>
            <n-text strong>•</n-text>
          </template>
        </n-input>
        <n-input v-if="caster.traits.Gnosis > 5" class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Obsession" v-model:value="caster.traits.Obsessions['3']">
          <template #prefix>
            <n-text strong>•</n-text>
          </template>
        </n-input>
      </n-space>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { caster } from "../../store/caster";
</script>
