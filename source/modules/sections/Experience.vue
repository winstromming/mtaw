<template>
  <n-space vertical :size="6">
    <n-input-number :show-button="false" v-model:value="caster.progress.NormalExperience" placeholder="0" min="0">
      <template #prefix>
        <n-text strong>Normal Experience:</n-text>
      </template>
      <template #suffix>
        <n-flex justify="space-between">
          <n-text>{{ caster.progress.NormalBeats }}/5 Beats &nbsp;</n-text>
        </n-flex>
        <n-button size="tiny" text strong type="info" @click="onNormal" title="+1 Normal Beat">
          <template #icon>
            <n-icon>
              <Plus />
            </n-icon>
          </template>
        </n-button>
      </template>
    </n-input-number>
    <n-input-number :show-button="false" v-model:value="caster.progress.ArcaneExperience" placeholder="0" min="0">
      <template #prefix>
        <n-text strong>Arcane Experience:</n-text>
      </template>
      <template #suffix>
        <n-text>{{ caster.progress.ArcaneBeats }}/5 Beats &nbsp;</n-text>
        <n-button size="tiny" text strong type="info" @click="onArcane" title="+1 Arcane Beat">
          <template #icon>
            <n-icon>
              <Plus />
            </n-icon>
          </template>
        </n-button>
      </template>
    </n-input-number>
  </n-space>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { caster } from "../../store/caster";
import { Plus } from "lucide-vue-next";

const onNormal = () => {
  caster.progress.NormalBeats += 1
  if (caster.progress.NormalBeats === 5) {
    caster.progress.NormalBeats = 0;
    caster.progress.NormalExperience += 1;
  }
}

const onArcane = () => {
  caster.progress.ArcaneBeats += 1
  if (caster.progress.ArcaneBeats === 5) {
    caster.progress.ArcaneBeats = 0;
    caster.progress.ArcaneExperience += 1;
  }
}
</script>
