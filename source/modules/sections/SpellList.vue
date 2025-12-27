<template>
  <n-space vertical :size="6">
    <Card title="Custom Spells">
      <template #footer>
        <n-space vertical :size="6">
          <Card :title="`${spell.name} (${spell.primaryArcana.arcana} ${dots(spell.primaryArcana.level)})`" v-for="(spell, index) in caster.spells.filter((s) => s.name.toLowerCase().includes(props.filter?.toLowerCase() ?? ''))">
            <template #header>
              <n-space :size="6">
                <n-button secondary title="Remove" size="tiny" type="error" @click="remove(index)">
                  <template #icon>
                    <n-icon>
                      <Trash />
                    </n-icon>
                  </template>
                </n-button>
              </n-space>
            </template>
            <template #content>
              <n-space vertical :size="6">
                <n-text depth="3" italic>{{ ensureTrailingPeriod(spell.description) }} {{ spell.practice }}, {{ spell.factor}}. {{ spell.withstand ? `Withstood by ${spell.withstand}.` : "" }}</n-text>
                <n-space v-if="spell.effects?.length" vertical :size="0">
                  <n-text v-for="effect in spell.effects">
                    <n-text strong v-if="effect.cost">{{ effect.cost?.filter(c => c.value > 0).map(c => `+${c.value} ${c.type}`).join(", ") }}. </n-text>
                    <n-text strong v-if="effect.requirement">{{ effect.requirement.arcana }} {{ dots(effect.requirement.value) }} </n-text>
                    {{ ensureTrailingPeriod(effect.effect) }}
                  </n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
        </n-space>
      </template>
    </Card>
    <Card title="Default Spells">
      <template #footer>
        <n-space vertical :size="6">
          <Card v-for="spell in spells.filter((s) => s.name.toLowerCase().includes(props.filter?.toLowerCase() ?? ''))" :key="spell.name" :title="`${spell.name} (${spell.primaryArcana.arcana} ${dots(spell.primaryArcana.level)})`">
            <template #header>
              <n-text depth="3">{{ spell.page }}</n-text>
            </template>
            <template #content>
              <n-space vertical :size="6">
                <n-text depth="3" italic>{{ ensureTrailingPeriod(spell.description) }} {{ spell.practice }}, {{ spell.factor}}. {{ spell.withstand ? `Withstood by ${spell.withstand}.` : "" }}</n-text>
                <n-space v-if="spell.effects?.length" vertical :size="0">
                  <n-text v-for="effect in spell.effects">
                    <n-text strong v-if="effect.cost">{{ effect.cost?.filter(c => c.value > 0).map(c => `+${c.value} ${c.type}`).join(", ") }}. </n-text>
                    <n-text strong v-if="effect.requirement">{{ effect.requirement.arcana }} {{ dots(effect.requirement.value) }} </n-text>
                    {{ ensureTrailingPeriod(effect.effect) }}
                  </n-text>
                </n-space>
              </n-space>
            </template>
          </Card>
        </n-space>
      </template>
    </Card>
  </n-space>
</template>

<script setup lang="ts">
import { Trash } from "lucide-vue-next";
import { spells } from "../../config/spells";
import { dots, ensureTrailingPeriod } from "../../functions/methods";
import { caster } from "../../store/caster";
import Card from "../common/Card.vue";

const props = defineProps<{ filter?: string }>();

function remove(index: number) {
  caster.spells.splice(index, 1);
}
</script>
