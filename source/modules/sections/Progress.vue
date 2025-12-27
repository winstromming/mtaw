<template>
  <Card>
    <template #content>
      <Experience />
    </template>
    <template #footer>
      <Aspirations />
    </template>
  </Card>
</template>

<script lang="ts" setup>
import Card from '../common/Card.vue';

import { watch } from "vue";
import { caster } from "../../store/caster";
import Aspirations from './Aspirations.vue';
import { Plus } from 'lucide-vue-next';
import Experience from './Experience.vue';

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
