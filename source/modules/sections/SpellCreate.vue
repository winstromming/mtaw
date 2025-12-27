<template>
  <Card title="Create Spell">
    <template #header>
      <n-space>
        <n-button v-if="creating === null" secondary strong type="warning" @click="create" title="Create">
          <template #icon>
            <n-icon>
              <Plus />
            </n-icon>
          </template>
        </n-button>
        <n-button v-if="creating !== null" :disabled="disabled" secondary type="success" @click="save" title="Save">
          <template #icon>
            <n-icon>
              <Save />
            </n-icon>
          </template>
        </n-button>
        <n-button v-if="creating !== null" secondary type="error" @click="reset" title="Reset">
          <template #icon>
            <n-icon>
              <Trash />
            </n-icon>
          </template>
        </n-button>
      </n-space>
    </template>
    <template #content v-if="creating">
      <n-space vertical :size="6">
        <n-input v-model:value="creating.name" placeholder="Name" />
        <n-input type="textarea" :autosize="{ minRows: 1 }" v-model:value="creating.description" placeholder="Description" />
        <n-input-group>
          <n-select
            v-model:value="creating.practice"
            placeholder="Practice"
            :options="practices.map(n => ({ label: n.name, value: n.name, key: n.name }))"
            @update:value="(v: Practice) => {
                let p = practices.find(p => p.name === v)
                if (p && creating) creating.primaryArcana.level = p.level;
              }"
          />
          <n-select v-model:value="creating.primaryArcana.arcana" placeholder="Arcanum" :options="arcanaNames.map(n => ({ label: n, value: n, key: n }))" />
        </n-input-group>
        <n-input-group>
          <n-select v-model:value="creating.factor" placeholder="Factor" :options="['Potency', 'Duration'].map(n => ({ label: n, value: n, key: n }))" />
          <n-input v-model:value="creating.withstand" placeholder="Withstand (optional)" />
        </n-input-group>
      </n-space>
    </template>
    <template #footer v-if="creating">
      <n-space vertical :size="12">
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
            ]"
            />
            <!-- <n-select v-model:value="effect.requirement" placeholder="Arcanum" :options="requirementOptions" /> -->
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
        <n-button secondary block type="primary" @click="addEffect">Add Effect</n-button>
      </n-space>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Arcana, Practice, Source } from "../../config/types";
import { arcanaNames, practices } from "../../config/values";
import { caster } from "../../store/caster";
import Card from "../common/Card.vue";
import { Plus, Save, Trash } from "lucide-vue-next";

const creating = ref<Source | null>(null);

const disabled = computed(() => {
  return (
    creating.value === null ||
    creating.value?.name === "" ||
    creating.value?.description === ""
  );
});

function reset() {
  creating.value = null;
}

function create() {
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
    effect: "",
  });
}

function removeEffect(index: number) {
  creating.value?.effects?.splice(index, 1);
}
</script>
