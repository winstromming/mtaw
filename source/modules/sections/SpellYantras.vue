<template>
  <n-space vertical :size="6">
    <div v-for="yantra in casting.yantras" style="gap: 3px; height: 20px; align-items: center; justify-content: space-between; display: flex; flex-wrap: nowrap">
      <n-text style="width: 100%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
        <n-text strong>
          {{ yantra.label.split("(+")[0] }}
        </n-text>
        <n-text depth="3">
          <span v-if="yantra.description">{{ yantra.description }}</span>
        </n-text>
      </n-text>
      <n-text depth="3" style="white-space: nowrap">
        <n-text depth="3">&nbsp;(+{{ yantra.label.split("(+")[1] }}&nbsp;</n-text>
      </n-text>
      <n-button text size="tiny" type="error" @click="deleteYantra(yantra.yantraKey, yantra.id)">
        <template #icon>
          <n-icon>
            <Trash />
          </n-icon>
        </template>
      </n-button>
    </div>
    <n-select
      class="choose-text"
      ref="chooseYantraDropdown"
      :placeholder="`(${summary}) Choose yantra for casting`"
      :disabled="casting.yantras.length >= maxYantras"
      :options="yantraOptions"
      :value="chooseYantraValue"
      :render-label="renderYantraLabel"
      filterable
      @update:value="chooseYantraFromDropdown"
    />
    <n-alert type="error" v-if="hasConcentrationWrong"> <n-text strong>Concentration</n-text> requires a longer duration. </n-alert>
    <n-alert type="error" v-if="hasRunesWrong"> <n-text strong>Runes</n-text> requires a ritual casting time. </n-alert>
    <n-alert type="warning" v-if="hasDedicatedSoulStone"> <n-text strong>Dedicated Soul Stone</n-text> cannot contain Paradox.</n-alert>
    <n-alert type="success" v-if="hasDedicatedSoulStone"> <n-text strong>Dedicated Soul Stone</n-text> provides -3 Paradox.</n-alert>
    <n-alert type="success" v-if="hasDedicatedOneTool && !hasDedicatedSoulStone"><n-text strong>Dedicated Tool</n-text> provides -2 Paradox.</n-alert>
    <n-alert type="success" v-if="hasDedicatedBothTools && !hasDedicatedSoulStone"><n-text strong>Dedicated Tool (&times;2)</n-text> provides -3 Paradox and cancels Chance.</n-alert>
    <n-alert type="success" v-if="hasDedicatedBothTools && hasDedicatedSoulStone"><n-text strong>Dedicated Tool (&times;2)</n-text> cancels Chance for Paradox.</n-alert>
  </n-space>
  <!-- <Card title="Yantras">
    <template #header>
      {{summary}}
    </template>
    <template #footer>
      <n-space vertical :size="6">
        <n-alert type="warning" v-if="hasConcentrationWrong"> <n-text strong>Concentration</n-text> requires a longer duration. </n-alert>
        <n-alert type="warning" v-if="hasRunesWrong"> <n-text strong>Runes</n-text> requires a ritual casting time. </n-alert>
        <n-alert type="success" v-if="hasDedicatedSoulStone"> <n-text strong>Dedicated Soul Stone</n-text> provides -3 Paradox, but you cannot contain Paradox.</n-alert>
        <n-alert type="success" v-if="hasDedicatedOneTool"><n-text strong>Dedicated Tool</n-text> provides -2 Paradox.</n-alert>
        <n-alert type="success" v-if="hasDedicatedBothTools"><n-text strong>Dedicated Tool (x2)</n-text> provides -3 Paradox and Chance cancellation.</n-alert>
        <Card v-for="yantra in casting.yantras">
          <template #content>
            <div style="gap: 3px; align-items: center; justify-content: space-between; display: flex; flex-wrap: nowrap">
              <n-text style="width: 100%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
                <n-text strong>
                  {{ yantra.label.split("(+")[0] }}
                </n-text>
                <n-text depth="3">
                  <span v-if="yantra.name === 'Mudra'">{{ casting.skill }}</span>
                  <span v-if="yantra.description">{{ yantra.description }}</span>
                </n-text>
              </n-text>
              <n-text depth="3" style="white-space: nowrap">&nbsp;(+{{ yantra.label.split("(+")[1] }}&nbsp;</n-text>
              <n-button secondary size="tiny" type="error" @click="deleteYantra(yantra.yantraKey, yantra.id)">
                <template #icon>
                  <n-icon>
                    <Trash />
                  </n-icon>
                </template>
              </n-button>
            </div>
          </template>
        </Card>
        <n-select ref="chooseYantraDropdown" placeholder="Choose yantra to add" :disabled="casting.yantras.length >= maxYantras" :options="yantraOptions" :value="chooseYantraValue" :render-label="renderYantraLabel" filterable @update:value="chooseYantraFromDropdown" />
      </n-space>
    </template>
  </Card> -->
</template>
<script setup lang="ts">
import { clone, findIndex, some } from "lodash";
import type { SelectGroupOption, SelectInst } from "naive-ui";
import { computed, h, ref, watch } from "vue";
import type { Yantra } from "../../config/types";
import { getYantras } from "../../functions/methods";
import { caster } from "../../store/caster";
import { casting } from "../../store/casting";
import Card from "../common/Card.vue";
import { Trash } from "lucide-vue-next";

const summary = computed(() => {
  return `${casting.yantras.length}/${maxYantras.value}`;
});

const yantras = computed(() => getYantras(caster, casting));

const maxYantras = computed(() => Math.ceil(caster.traits.Gnosis / 2) + 1);

const hasYantra = (key: string) => some(casting.yantras, ["yantraKey", key]);
const isConcentrationMantraAllowed = () => casting.factors.duration !== "s1";

const hasDedicatedSoulStone = computed(() => {
  return some(
    casting.yantras,
    (y) => y.isDedicatedTool && y.yantraKey[0] === "s",
  );
});
const hasDedicatedOneTool = computed(() => {
  return casting.yantras.filter((y) => y.isDedicatedTool).length === 1;
});
const hasDedicatedBothTools = computed(() => {
  return casting.yantras.filter((y) => y.isDedicatedTool).length > 1;
});
const hasConcentrationWrong = computed(() => {
  return casting.factors.duration === "s1" && casting.yantras.filter(({ yantraKey }) => yantraKey === "a2").length > 0
})
const hasRunesWrong = computed(() => {
  return casting.factors.castingTime === "a1" && casting.yantras.filter(({ yantraKey }) => yantraKey === "a4").length > 0
})

const isUniqueYantraUsed = (key: string) => {
  const yantra = yantras.value.get(key);

  // ignore non-uniques
  if (!yantra.unique) {
    return false;
  }

  // this version is used?
  if (hasYantra(key)) {
    return true;
  }

  // there are multiple version of this yantra - check for others
  if (key.indexOf("_") !== -1) {
    const baseKey = key.split("_")[0];
    if (
      baseKey &&
      casting.yantras.some((yantra) => yantra.yantraKey.indexOf(baseKey) === 0)
    ) {
      return true;
    }
  }

  return false;
};

const getYantraOptions = (prefix: string) => {
  const options = [];

  for (const [key, yantra] of yantras.value) {
    if (key[0] === prefix) {
      // disabled?
      let disabledWarning: string | undefined = undefined;

      if (key === "a1" && casting.form !== "Rote") {
        disabledWarning = "Only available when casting Rotes.";
      }

      if (key === "a2" && !isConcentrationMantraAllowed) {
        disabledWarning =
          "Duration must be more than 1 turn to use concentration.";
      }

      if (isUniqueYantraUsed(key)) {
        disabledWarning = "Only one of this Yantra may be used.";
      }

      // if (key === "t1" && this.isDedicatedToolYantraUsed) {
      //   disabledWarning = "Dedicated Tool is already being used."
      // }

      yantra.disabledWarning = disabledWarning;
      yantra.disabled = !!disabledWarning;

      // add to options
      options.push(yantra);
    }
  }

  return options;
};

const savedYantraOptions = computed(() => {
  const options = [];
  for (const tool of caster.tools) {
    const source: Yantra = yantras.value.get(tool.key);
    const cloned: Yantra = clone(source);
    cloned.isDedicatedTool = tool.dedicated;
    cloned.name = tool.name;
    cloned.description = tool.description;
    cloned.id = tool.id;
    if (tool.dedicated) cloned.label = `Dedicated ${cloned.label}`;
    if (some(casting.yantras, ["key", cloned.id])) {
      options.push({
        ...cloned,
        key: cloned.id,
        value: cloned.id,
        disabled: true,
      });
    } else {
      options.push({ ...cloned, key: cloned.id, value: cloned.id });
    }
  }
  return options;
});
const locationYantraOptions = computed(() => {
  return getYantraOptions("l");
});
const actionYantraOptions = computed(() => {
  return getYantraOptions("a");
});
const toolYantraOptions = computed(() => {
  return getYantraOptions("t");
});
const soulstoneYantraOptions = computed(() => {
  return getYantraOptions("s");
});
const sympathyYantraOptions = computed(() => {
  return getYantraOptions("y");
});
const sacramentYantraOptions = computed(() => {
  return getYantraOptions("c");
});
const personaYantraOptions = computed(() => {
  return getYantraOptions("p");
});
const yantraOptions = computed(() => {
  return [
    {
      type: "group",
      label: "Yours",
      key: "saved",
      children: savedYantraOptions.value,
    },
    {
      type: "group",
      label: "Tools",
      key: "tools",
      children: toolYantraOptions.value,
    },
    {
      type: "group",
      label: "Actions",
      key: "actions",
      children: actionYantraOptions.value,
    },
    {
      type: "group",
      label: "Locations",
      key: "locations",
      children: locationYantraOptions.value,
    },
    {
      type: "group",
      label: "Soul Stones",
      key: "soulstones",
      children: soulstoneYantraOptions.value,
    },
    {
      type: "group",
      label: "Sacrament",
      key: "sacrament",
      children: sacramentYantraOptions.value,
    },
    {
      type: "group",
      label: "Sympathy",
      key: "sympathy",
      children: sympathyYantraOptions.value,
    },
    {
      type: "group",
      label: "Persona",
      key: "persona",
      children: personaYantraOptions.value,
    },
  ];
});

const chooseYantraValue = ref(null);
const chooseYantraDropdown = ref<SelectInst | null>(null);

const chooseYantraFromDropdown = (option: string, object: Yantra) => {
  if (chooseYantraDropdown.value) {
    chooseYantraDropdown.value.blur();
    chooseYantraValue.value = null;
  }
  if (object) casting.yantras.push(clone(object));
  else addYantra(option);
};
const addYantra = (key: string) => {
  const yantra = yantras.value.get(key);

  casting.yantras.push(clone(yantra));
};

const deleteYantra = (key: string, id?: number) => {
  if (id) {
    const index = findIndex(casting.yantras, (yantra) => yantra.id === id);
    casting.yantras.splice(index, 1);
  } else {
    const index = findIndex(
      casting.yantras,
      (yantra) => yantra.yantraKey === key && yantra.id === undefined,
    );
    casting.yantras.splice(index, 1);
  }
};

const renderYantraLabel = (option: SelectGroupOption) => {
  if (option.type === "group") return option.label;

  return h(
    "div",
    {
      style: { padding: "4px 0" },
    },
    [
      h("b", String(option.label)),
      h("br"),
      String(option.disabledWarning || option.description || option.desc),
    ],
  );
};
</script>
