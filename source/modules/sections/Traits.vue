<template>
  <Card>
    <template #content>
      <n-grid y-gap="6" x-gap="6" cols="2">
        <n-gi>
          <n-input-number v-model:value="caster.traits.Size.modifier" :placeholder="caster.traits.Size.base.toString()" :show-button="false">
            <template #prefix>
              <n-text strong>Size</n-text>
            </template>
          </n-input-number>
        </n-gi>
        <n-gi>
          <n-input-number v-model:value="caster.traits.Defense.modifier" :placeholder="caster.traits.Defense.base.toString()" :show-button="false">
            <template #prefix>
              <n-text strong>Defense</n-text>
            </template>
          </n-input-number>
        </n-gi>
        <n-gi>
          <n-input-number v-model:value="caster.traits.Speed.modifier" :placeholder="caster.traits.Speed.base.toString()" :show-button="false">
            <template #prefix>
              <n-text strong>Speed</n-text>
            </template>
          </n-input-number>
        </n-gi>
        <n-gi>
          <n-input-number v-model:value="caster.traits.Initiative.modifier" :placeholder="caster.traits.Initiative.base.toString()" :show-button="false">
            <template #prefix>
              <n-text strong>Initiative</n-text>
            </template>
          </n-input-number>
        </n-gi>
      </n-grid>
    </template>
    <template #footer>
      <n-grid y-gap="6" x-gap="6" cols="2">
        <n-gi>
          <n-input-number v-model:value="caster.traits.Gnosis" placeholder="0" :show-button="false">
            <template #prefix>
              <n-text strong>Gnosis</n-text>
            </template>
          </n-input-number>
        </n-gi>
        <n-gi>
          <n-input-number v-model:value="caster.traits.Wisdom" placeholder="0" :show-button="false">
            <template #prefix>
              <n-text strong>Wisdom</n-text>
            </template>
          </n-input-number>
        </n-gi>
      </n-grid>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { caster } from "../../store/caster";
import Card from "../common/Card.vue";

const size = computed(() => {
  let size = caster.traits.Size.base ?? 0;
  if (caster.traits.Size.modifier && caster.traits.Size.modifier > 0)
    size = caster.traits.Size.modifier;
  return size;
});

watch(caster, () => {
  caster.traits.Speed.base =
    size.value +
    caster.attributes.physical.Strength.dots +
    caster.attributes.physical.Dexterity.dots;
});
watch(caster, () => {
  caster.traits.Defense.base =
    Math.min(
      caster.attributes.physical.Dexterity.dots,
      caster.attributes.mental.Wits.dots,
    ) + caster.skills.physical.Athletics.dots;
});
watch(caster, () => {
  caster.traits.Initiative.base =
    caster.attributes.physical.Dexterity.dots +
    caster.attributes.social.Composure.dots;
});
</script>

<style scoped></style>
