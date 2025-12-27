<template>
  <Card>
    <template #content>
      <n-space vertical :size="16">
        <n-flex align="center" justify="space-between" :size="6">
          <HealthBar />
          <n-button secondary strong size="tiny" type="success" @click="cast" title="Cast">
            <template #icon>
              <n-icon>
                <WandSparkles />
              </n-icon>
            </template>
          </n-button>
        </n-flex>
        <n-space vertical :size="6">
          <n-grid cols="2" y-gap="6" x-gap="6">
            <n-gi>
              <n-input-number :show-button="false" class="text-right" v-model:value="caster.traits.Mana" placeholder="0" min="0" :max="manaLimit[caster.traits.Gnosis]">
                <template #prefix>
                  <n-text strong>Mana</n-text>
                </template>
                <template #suffix>
                  <n-text>/ {{ manaLimit[caster.traits.Gnosis] }}</n-text>
                </template>
              </n-input-number>
            </n-gi>
            <n-gi>
              <n-input-number :show-button="false" class="text-right" v-model:value="caster.traits.Willpower" placeholder="0" min="0" :max="maxWillpower">
                <template #prefix>
                  <n-text strong>Willpower</n-text>
                </template>
                <template #suffix>
                  <n-text>/ {{ maxWillpower }}</n-text>
                </template>
              </n-input-number>
            </n-gi>
          </n-grid>
          <Experience />
        </n-space>
      </n-space>
    </template>
    <template #footer>
      <n-space vertical :size="16">
        <Aspirations />
        <Conditions />
      </n-space>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { manaLimit } from "../../config/values";
import { caster } from "../../store/caster";
import { BookMarked, HeartPlusIcon, WandSparkles } from "lucide-vue-next";
import HealthBar from "./HealthBar.vue";
import Card from "../common/Card.vue";
import Conditions from "./Conditions.vue";
import Experience from "./Experience.vue";
import { Plus } from 'lucide-vue-next';
import Aspirations from "./Aspirations.vue";
import { casting } from "../../store/casting";

const maxWillpower = computed(() => {
  return (
    caster.attributes.mental.Resolve.dots +
    caster.attributes.social.Composure.dots
  );
});

function cast() {
  casting.reset();
  casting.insert(undefined, "Improvised")
}
</script>
