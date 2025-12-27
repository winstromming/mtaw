<template>
  <n-select filterable :class="text ? 'choose-text' : ''" :consistent-menu-width="false" placement="bottom-end" :value="null" :placeholder="label ? label : 'Choose spell to add'" @update:value="choose" :options="options">
    <template #header v-if="props.creative">
      <n-button block secondary type="primary" @click="newCreative">Creative</n-button>
    </template>
    <template #action v-if="props.custom">
      <n-button block secondary type="primary" @click="create">Create Custom</n-button>
    </template>
  </n-select>
  <n-modal v-model:show="is_creating" title="Create Spell" class="card" style="width: 600px; border-width: 0;" preset="card" size="huge">
    <template #header-extra> </template>
    <template #default v-if="creating">
      <n-space vertical :size="6">
        <n-input v-model:value="creating.name" placeholder="Name" />
        <n-input-group>
          <n-select v-model:value="creating.primaryArcana.arcana" placeholder="Arcanum" :options="arcanaNames.map(n => ({ label: n, value: n, key: n }))" />
          <n-select
            v-model:value="creating.practice"
            placeholder="Practice"
            :options="practices.map(n => ({ label: n.name, value: n.name, key: n.name }))"
            @update:value="(v: Practice) => {
                let p = practices.find(p => p.name === v)
                if (p && creating) creating.primaryArcana.level = p.level;
              }"
          />
          <n-select v-model:value="creating.factor" placeholder="Factor" :options="['Potency', 'Duration'].map(n => ({ label: n, value: n, key: n }))" />
          <n-input v-model:value="creating.withstand" placeholder="Withstand" />
        </n-input-group>
        <n-input type="textarea" :autosize="{ minRows: 1 }" v-model:value="creating.description" placeholder="Description" />
        <n-space vertical :size="1" v-if="creating?.effects?.length">
          <n-input-group v-for="(effect, index) in creating?.effects">
            <n-select
              v-for="cost in effect.cost"
              v-model:value="cost.value"
              style="width: 19%"
              :options="[
              { label: `0 ${cost.type}`, value: 0 },
              { label: `1 ${cost.type}`, value: 1 },
              { label: `2 ${cost.type}`, value: 2 },
              { label: `3 ${cost.type}`, value: 3 },
            ]"
            />
            <n-select :value="effect.requirement ? `${effect.requirement.arcana} ${effect.requirement.value}` : undefined" placeholder="Arcanum" :options="requirementOptions" @update:value="effect.requirement = { arcana: $event.split(' ')[0], value: parseInt($event.split(' ')[1]) }" />
            <n-input style="width: 62%" v-model:value="effect.effect" placeholder="Effect">
              <template #suffix>
                <n-button style="margin-right: -5px" secondary title="Remove" size="tiny" type="primary" @click="removeEffect(index)">
                  <template #icon>
                    <n-icon>
                      <X />
                    </n-icon>
                  </template>
                </n-button>
              </template>
            </n-input>
          </n-input-group>
        </n-space>
      </n-space>
    </template>
    <template #action v-if="creating">
      <n-flex justify="space-between">
        <n-button secondary strong type="primary" size="small" @click="addEffect">
          <template #icon>
            <n-icon>
              <PencilLine />
            </n-icon>
          </template>
          Add Effect
        </n-button>
        <n-button :disabled="disabled" strong secondary type="success" size="small" @click="save" title="Save">
          Save
          <template #icon>
            <n-icon>
              <Save />
            </n-icon>
          </template>
        </n-button>
      </n-flex>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { spells } from "../../config/spells";
import type { Arcana, Practice, Source } from "../../config/types";
import { arcanaNames, practices, } from "../../config/values";
import { caster } from "../../store/caster";
import { PencilLine, Save, X } from "lucide-vue-next";

const newCustom = ref(false);
const creating = ref<Source>();
const is_creating = ref(false);

const disabled = computed(() => {
  return (
    creating.value === undefined ||
    creating.value?.name === "" ||
    creating.value?.description === ""
  );
});

function create() {
  is_creating.value = true
  creating.value = {
    name: "",
    withstand: "",
    practice: undefined as unknown as Source["practice"],
    primaryArcana: { arcana: undefined as unknown as Arcana, level: 0 },
    factor: undefined as unknown as Source["factor"],
    description: "",
    effects: [],
    page: `Custom ${Date.now()}`,
  };
}

function save() {
  if (creating.value) caster.spells.push(creating.value);
  reset();
}

function addEffect() {
  creating.value?.effects?.push({
    cost: [
      { type: "Reach", value: 0 },
      { type: "Mana", value: 0 },
    ],
    requirement: undefined,
    effect: "",
  });
}

function removeEffect(index: number) {
  creating.value?.effects?.splice(index, 1);
}

function reset() {
  creating.value = undefined;
  is_creating.value = false
}

const props = defineProps<{ label?: string; custom?: boolean; creative?: boolean; text?: boolean }>();
const emit = defineEmits<(e: "choose", option: Source) => void>();

const sources = computed(() => [...spells, ...caster.spells]);

const dots = (num: number) => Array.from({ length: num }, () => "•").join("");

const options = computed(() => {
  const options = [];
  for (const arcana in caster.arcana) {
    const name = arcana as Arcana;
    if (caster.arcana[name].dots > 0) {
      options.push({
        type: "group",
        label: name,
        key: name,
        children: sources.value
          .filter(
            (s) =>
              s.primaryArcana.arcana === name &&
              s.primaryArcana.level <= caster.arcana[name].dots,
          )
          .sort((a, b) => a.primaryArcana.level - b.primaryArcana.level)
          .map((s) => {
            return {
              label: `${dots(s.primaryArcana.level)} ${s.name}`,
              style: {
                fontStyle: s.page.startsWith("Custom") ? "italic" : "none",
              },
              key: s.name,
              value: s.name,
            };
          }),
      });
    }
  }
  return options;
});

const requirementOptions = computed(() => {
  const options: any = [];
  for (const arcana of arcanaNames) {
    options.push({ label: `${arcana} 1`, value: `${arcana} 1` });
    options.push({ label: `${arcana} 2`, value: `${arcana} 2` });
    options.push({ label: `${arcana} 3`, value: `${arcana} 3` });
    options.push({ label: `${arcana} 4`, value: `${arcana} 4` });
    options.push({ label: `${arcana} 5`, value: `${arcana} 5` });
  }
  return options;
});

function newCreative() {}

const choose = (name: string) => {
  const source = sources.value.find((s) => s.name === name);
  if (source) emit("choose", source);
};
</script>

<style>
.choose-text .n-base-selection,
.choose-text .n-input {
  --n-padding-single: 0 !important;
  line-height: 20px !important;
  --n-height: 20px !important;
}
.choose-text.n-input.n-input--textarea {
  --n-padding-vertical: 0 !important;
  --n-line-height-textarea: 20px !important;
  --n-height: 20px !important;
  height: auto !important
}
.choose-text .n-base-selection-label {
  background: transparent !important;
}
.choose-text .n-base-selection-placeholder {
  justify-content: end;
}
.choose-text.n-input {
  background: transparent !important;
  height: 20px;
  line-height: 20px;
}
.choose-text.n-input .n-input__input-el {
  background: transparent !important;
  height: 20px;
  line-height: 20px;
}
.choose-text .n-input-wrapper {
  --n-padding-right: 0 !important;
  --n-padding-left: 0 !important;
}
.choose-text .n-base-selection__border,
.choose-text .n-input__border{
  display: none;
}
.choose-text .n-base-selection__state-border,
.choose-text .n-input__state-border{
  display: none;
}
.choose-text .n-base-selection .n-base-suffix {
  display: none;
}
</style>
