<template>
  <n-space vertical :size="16">
    <n-space vertical :size="6">
      <n-text strong>Tools</n-text>
      <n-flex style="width: 100%; line-height: 20px; height: 20px; gap: 5px" :wrap="false" justify="space-between" v-for="(item, index) in caster.tools">
        <n-button text size="tiny" type="warning" title="Dedicate" @click="item.dedicated = !item.dedicated">
          <template #icon>
            <n-icon v-if="item.dedicated === true">
              <Star />
            </n-icon>
            <n-icon v-if="item.dedicated === false">
              <StarOff />
            </n-icon>
          </template>
        </n-button>

        <n-input class="choose-text" v-model:value="item.description" placeholder="Description" />
        <n-flex style="margin-left: auto; gap: 5px" :wrap="false">
          <n-ellipsis :line-clamp="1" style="white-space: nowrap; opacity: 0.5; line-height: 20px;">
            {{ item.dedicated ? `Dedicated ${item.type}` : item.type }}
          </n-ellipsis>
          <n-button text size="tiny" type="error" @click="() => caster.tools.splice(index, 1)">
            <template #icon>
              <n-icon>
                <Trash />
              </n-icon>
            </template>
          </n-button>
        </n-flex>
      </n-flex>
      <n-select class="choose-text" ref="chooseToolDropdown" filterable :value="value" placeholder="Choose yantra to add" @update:value="choose" :options="options" />
    </n-space>
    <n-space vertical :size="6" v-if="(needsProfligate && !hasProfligate) || (needsBroad && !hasBroad)">
      <n-alert type="warning" size="small" v-if="needsProfligate && !hasProfligate"><strong style="font-weight: 600">Profligate Dedication</strong> merit required to dedicate more than two tools or soul stones.</n-alert>
      <n-alert type="warning" size="small" v-if="needsBroad && !hasBroad"><strong style="font-weight: 600">Broad Dedication</strong> merit required to dedicate yantras which aren't tools or soul stones.</n-alert>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Tool } from "../../config/types";
import { yantrasBaseData } from "../../config/values";
import { caster } from "../../store/caster";
import Card from "../common/Card.vue";
import { Circle, CircleStar, Settings, Star, StarOff, Trash } from "lucide-vue-next";

const value = ref(null);

const options = computed(() => {
  return [
    {
      type: "group",
      label: "Objects",
      key: "tools",
      children: getYantraOptions("t"),
    },
    {
      type: "group",
      label: "Stones",
      key: "soulstones",
      children: getYantraOptions("s"),
    },
    {
      type: "group",
      label: "Actions",
      key: "actions",
      children: getYantraOptions("a"),
    },
    {
      type: "group",
      label: "Locations",
      key: "locations",
      children: getYantraOptions("l"),
    },
    {
      type: "group",
      label: "Persona",
      key: "personas",
      children: getYantraOptions("p"),
    },
  ];
});

const needsProfligate = computed(() => {
  return caster.tools.filter((t) => t.dedicated).length > 2 &&
    Object.values(caster.merits).some((m) =>
      m.name.toLowerCase().includes("profligate dedication"),
    ) === false
    ? "Profligate Dedication merit required!"
    : null;
});
const hasProfligate = computed(() => {
  return (
    Object.values(caster.merits).some((m) =>
      m.name.toLowerCase().includes("profligate dedication"),
    ) === true
  );
});
const needsBroad = computed(() => {
  return caster.tools.some(
    (t) => t.dedicated && t.key[0] !== "t" && t.key[0] !== "s",
  );
});
const hasBroad = computed(() => {
  return (
    Object.values(caster.merits).some((m) =>
      m.name.toLowerCase().includes("broad dedication"),
    ) === true
  );
});

const getYantraOptions = (prefix: string) => {
  const options = [];
  for (const [key, yantraBaseData] of yantrasBaseData) {
    if (key[0] === prefix) {
      const labelkey = `${yantraBaseData.name} (+${yantraBaseData.bonus} ${yantraBaseData.bonus === 1 ? "die" : "dice"})`;
      options.push({ label: labelkey, value: { ...yantraBaseData, key } });
    }
  }
  return options;
};

const choose = (_key: string, option: { label: string; value: { name: string; bonus: number;  key: string } }) => {
  const tool: Tool = {
    name: "",
    type: `${option.value.name} (+${option.value.bonus})`,
    dedicated: false,
    description: "",
    key: option.value.key,
    id: Date.now(),
  };
  caster.tools.push(tool);
};

const remove = (option: Tool) => {
  const index = caster.tools.findIndex((s) => s.id === option.id);
  if (index !== -1) caster.tools.splice(index, 1);
};
</script>
