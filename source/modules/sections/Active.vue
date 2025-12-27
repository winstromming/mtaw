<template>
  <n-space vertical :size="6">
    <Card>
      <template #content>
        <n-space vertical :size="6">
          <n-flex justify="space-between">
            <n-text strong>Active</n-text>
            <n-text>{{ caster.active.length }}/{{ caster.traits.Gnosis }}</n-text>
          </n-flex>
          <n-space vertical :size="0" v-for="active in caster.active">
            <n-flex align="start" justify="space-between" :size="6" :wrap="false">
              <n-button style="height: 20px" text size="tiny" title="Copy for Roll20" type="info" @click="copy(active)">
                <template #icon>
                  <n-icon>
                    <Copy />
                  </n-icon>
                </template>
              </n-button>
              <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
                <template #trigger>
                  <n-text style="line-height: 20px; margin-right: auto;">
                    <n-text block v-if="active.spells.length !== 1">{{ active.name }}</n-text>
                    <n-text block v-if="active.spells.length === 1 && active.spells[0]?.page === 'Creative'">{{ active.spells[0].practice }} {{ active.spells[0].primaryArcana.arcana }}</n-text>
                    <n-text block v-if="active.spells.length === 1 && active.spells[0]?.page !== 'Creative'">{{ active.name }}</n-text>
                  </n-text>
                </template>
                <n-space vertical :size="6">
                  <n-text v-for="spell in active.spells" style="color: white">
                    <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
                    <br />
                    <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
                  </n-text>
                  <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ getPotencySummary(caster, active) }} • {{ getDurationSummary(caster, active) }} • {{ getRangeSummary(caster, active) }} • {{ getScaleSummary(caster, active) }}</n-text>
                </n-space>
              </n-tooltip>
              <n-button style="height: 20px" text title="Stop" size="tiny" type="error" @click="remove(active.id)">
                <template #icon>
                  <n-icon>
                    <Ban />
                  </n-icon>
                </template>
              </n-button>
            </n-flex>
          </n-space>
        </n-space>
      </template>
    </Card>
  </n-space>
</template>

<script setup lang="ts">
import { Ban, Clock, Copy, OctagonMinus, Pause, Trash, Zap } from "lucide-vue-next";
import { dots, ensureTrailingPeriod, getCastingCopyText, getCastingFactorsSummary, getCastingName, getDurationSummary, getPotencySummary, getRangeSummary, getScaleSummary } from "../../functions/methods";
import { caster } from "../../store/caster";
import Card from "../common/Card.vue";
import { practices } from "../../config/values";
import type { Practice } from "../../config/types";
import { upperFirst } from "lodash";
import { casting, type Casting } from "../../store/casting";
import { useMessage } from "naive-ui";
const message = useMessage();

const remove = (id: number) => {
  const index = caster.active.findIndex((s) => s.id === id);
  if (index !== -1) caster.active.splice(index, 1);
};
const copy = (item: Casting) => {
  const text = getCastingCopyText(caster, item)
  navigator.clipboard.writeText(text).then(() => {
    message.info(`${item.spells.map((s) => s.name).join(" + ")} was copied`);
  });
};
</script>
