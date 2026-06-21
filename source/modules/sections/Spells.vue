<template>
  <n-space vertical :size="16">
    <!-- Praxes -->
    <n-space vertical :size="6">
      <n-text strong>Praxes</n-text>
      <n-flex style="width: 100%; line-height: 20px; gap: 5px; height: 20px;" :wrap="false" justify="start" v-for="(spell, index) in caster.praxes">
        <n-button text size="tiny" title="Cast" type="success" @click="() => { casting.reset(); casting.insert(spell, 'Praxis') }">
          <template #icon>
            <n-icon>
              <WandSparkles />
            </n-icon>
          </template>
        </n-button>
        <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
          <template #trigger>
            <n-text style="line-height: 20px;">{{ spell.name }}</n-text>
          </template>
          <n-space vertical :size="6">
            <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
            <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
            <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ spell.practice }} • {{ spell.factor }} • {{ spell.page }}</n-text>
          </n-space>
        </n-tooltip>
        <n-button style="margin-left: auto" text size="tiny" title="Edit" type="info" @click="() => edit(spell)">
          <template #icon>
            <n-icon>
              <Pencil />
            </n-icon>
          </template>
        </n-button>
        <n-button text size="tiny" title="Remove" type="error" @click="() => caster.praxes.splice(index, 1)">
          <template #icon>
            <n-icon>
              <Trash />
            </n-icon>
          </template>
        </n-button>
      </n-flex>
      <Choose text label="Choose praxis to add" @choose="(o) => caster.praxes.push(o)" />
    </n-space>
    <!-- Rotes -->
    <n-space vertical :size="6">
      <n-text strong>Rotes</n-text>
      <n-flex style="width: 100%; line-height: 20px; gap: 5px; height: 20px;" :wrap="false" justify="start" v-for="(spell, index) in caster.rotes">
        <n-button text size="tiny" title="Cast" type="success" @click="() => { casting.reset(); casting.insert(spell, 'Rote') }">
          <template #icon>
            <n-icon>
              <WandSparkles />
            </n-icon>
          </template>
        </n-button>
        <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
          <template #trigger>
            <n-text style="line-height: 20px;">{{ spell.name }}</n-text>
          </template>
          <n-space vertical :size="6">
            <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
            <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
            <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ spell.practice }} • {{ spell.factor }} • {{ spell.page }}</n-text>
          </n-space>
        </n-tooltip>
        <n-flex style="margin-left: auto; gap: 5px" :wrap="false">
          <n-select class="choose-text" :color="spell.skill && caster.details.order?.skills.includes(spell.skill) ? true : false" style="opacity: 0.6; min-width: 50px" :consistent-menu-width="false" v-model:value="spell.skill" placeholder="Skill" :options="skills" />
          <n-button style="margin-left: auto" text size="tiny" title="Edit" type="info" @click="() => edit(spell)">
            <template #icon>
              <n-icon>
                <Pencil />
              </n-icon>
            </template>
          </n-button>
          <n-button text size="tiny" title="Remove" type="error" @click="() => caster.rotes.splice(index, 1)">
            <template #icon>
              <n-icon>
                <Trash />
              </n-icon>
            </template>
          </n-button>
        </n-flex>
      </n-flex>
      <Choose text label="Choose rote to add" @choose="(o) => caster.rotes.push(o)" />
    </n-space>
    <!-- Grimoires -->
    <n-space vertical :size="6">
      <n-text strong>Grimoires</n-text>
      <n-flex style="width: 100%; line-height: 20px; gap: 5px; height: 20px;" :wrap="false" justify="start" v-for="(spell, index) in caster.grimoires">
        <n-button text size="tiny" title="Cast" type="success" @click="() => { casting.reset(); casting.insert(spell, 'Grimoire') }">
          <template #icon>
            <n-icon>
              <WandSparkles />
            </n-icon>
          </template>
        </n-button>
        <n-tooltip placement="bottom-start" :style="{ maxWidth: '300px', borderRadius: '5px' }">
          <template #trigger>
            <n-text style="line-height: 20px;">{{ spell.name }}</n-text>
          </template>
          <n-space vertical :size="6">
            <n-text style="color: white" strong> {{ spell.name }} ({{ spell.primaryArcana.arcana }} {{ dots(spell.primaryArcana.level)}}) </n-text>
            <n-text style="color: white; opacity: 0.75">{{ ensureTrailingPeriod(spell.description) }}</n-text>
            <n-text style="color: white; opacity: 0.5; font-weight: 500; font-size: 10px; text-transform: uppercase">{{ spell.practice }} • {{ spell.factor }} • {{ spell.page }}</n-text>
          </n-space>
        </n-tooltip>
        <n-button style="margin-left: auto" text size="tiny" title="Edit" type="info" @click="() => edit(spell)">
          <template #icon>
            <n-icon>
              <Pencil />
            </n-icon>
          </template>
        </n-button>
        <n-button text size="tiny" title="Remove" type="error" @click="() => caster.grimoires.splice(index, 1)">
          <template #icon>
            <n-icon>
              <Trash />
            </n-icon>
          </template>
        </n-button>
      </n-flex>
      <Choose text label="Choose grimoire to add" @choose="(o) => caster.grimoires.push(o)" />
    </n-space>
  </n-space>

  <n-modal v-model:show="editing" style="width: 650px; border-width: 0;" size="huge">
    <Card title=" ">
      <template #header v-if="editing">
        <n-button secondary strong type="primary" size="tiny" @click="addEffect(editing)">
          <template #icon>
            <n-icon>
              <PackagePlus />
            </n-icon>
          </template>
          Add Effect
        </n-button>
      </template>
      <template #icon v-if="editing">
        <n-icon>
          <Pencil />
        </n-icon>
        <n-input class="name-input" placeholder="Spell Name" v-model:value="editing.name" />
      </template>
      <template #content v-if="editing">
        <n-space vertical :size="6">
          <n-input-group>
            <n-select v-model:value="editing.primaryArcana.arcana" placeholder="Arcanum" :options="arcanaNames.map(n => ({ label: n, value: n, key: n }))" />
            <n-select
              v-model:value="editing.practice"
              placeholder="Practice"
              :options="practices.map(n => ({ label: `${dots(n.level)} ${n.name}`, value: n.name, key: n.name }))"
              @update:value="(v: Practice) => {
                  let p = practices.find(p => p.name === v)
                  if (p && editing) editing.primaryArcana.level = p.level;
                }"
            />
            <n-select v-model:value="editing.factor" placeholder="Factor" :options="['Potency', 'Duration'].map(n => ({ label: n, value: n, key: n }))" />
            <n-input v-model:value="editing.withstand" placeholder="Withstand" />
          </n-input-group>
          <n-input type="textarea" :autosize="{ minRows: 2 }" v-model:value="editing.description" placeholder="Description" />
        </n-space>
      </template>
      <template #footer v-if="editing">
        <n-space vertical :size="6" v-if="editing?.effects?.length">
          <n-input-group class="input-group-effect" v-for="(effect, index) in editing?.effects">
            <n-input style="width: 100%" v-model:value="effect.effect" placeholder="Effect">
              <template #prefix>
                <n-select
                  class="select-no-border"
                  :consistent-menu-width="false"
                  @update:value="(v: any) => {
                    console.log('v', v)
                    if (!v) return;
                    effect.cost = effect.cost ?? [];
                    if (v.arcana) {
                      if (v.value === undefined) {
                        delete effect.requirement;
                      } else {
                        effect.requirement = { arcana: v.arcana, value: v.value };
                      }
                    } else {
                      const existing = effect.cost?.find((c) => c.type === v.type);
                      if (v.value === undefined) {
                        if (existing) {
                          effect.cost = effect.cost?.filter((c) => c.type !== v.type);
                        }
                      } else {
                        if (existing) {
                          existing.value = v.value;
                        } else {
                          effect.cost?.push({ type: v.type, value: v.value });
                        }
                      }
                    }
                  }"
                  value=""
                  :options="[
                    {
                      label: 'Reach', key: 'reach', type: 'group', children: [
                        { label: `None`, value: { type: 'Reach', value: undefined } },
                        { label: `1 Reach`, value: { type: 'Reach', value: 1 } },
                        { label: `2 Reach`, value: { type: 'Reach', value: 2 } },
                        { label: `3 Reach`, value: { type: 'Reach', value: 3 } },
                        { label: `4 Reach`, value: { type: 'Reach', value: 4 } },
                        { label: `5 Reach`, value: { type: 'Reach', value: 5 } },
                      ]
                    },
                    {
                      label: 'Mana', key: 'mana', type: 'group', children: [
                        { label: `None`, value: { type: 'Mana', value: undefined } },
                        { label: `1 Mana`, value: { type: 'Mana', value: 1 } },
                        { label: `2 Mana`, value: { type: 'Mana', value: 2 } },
                        { label: `3 Mana`, value: { type: 'Mana', value: 3 } },
                        { label: `4 Mana`, value: { type: 'Mana', value: 4 } },
                        { label: `5 Mana`, value: { type: 'Mana', value: 5 } },
                      ]
                    },
                    {
                      label: 'Arcana', key: 'arcana', type: 'group', children: requirementOptions
                    },
                  ]"
                >
                  <template #arrow>
                    <PencilRuler />
                  </template>
                </n-select>
                <n-text strong v-for="cost in effect.cost">{{ cost.value }} {{ cost.type }}.&nbsp;</n-text>
                <n-text strong v-if="effect.requirement">{{ effect.requirement.arcana }} {{ dots(effect.requirement.value) }}&nbsp;</n-text>
              </template>
              <template #suffix>
                <n-button style="margin-right: -5px" secondary title="Remove" size="tiny" type="primary" @click="removeEffect(editing, index)">
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
      </template>
    </Card>
  </n-modal>
</template>

<script lang="ts" setup>
import { PackagePlus, Pencil, PencilRuler, Trash, WandSparkles, X } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import type { Practice, Skill, Source } from '../../config/types';
import { arcanaNames, practices } from '../../config/values';
import { dots, ensureTrailingPeriod } from '../../functions/methods';
import { caster } from '../../store/caster';
import { casting } from '../../store/casting';
import Card from '../common/Card.vue';
import Choose from '../common/Choose.vue';

const skills = computed(() => {
  const options = [];
  for (const [k, v] of Object.entries({
    ...caster.skills.physical,
    ...caster.skills.mental,
    ...caster.skills.social,
  })) {
    if (caster.details.order?.skills.includes(k as Skill)) {
      options.push({ label: `${k} (+${(v.dots ?? 0) + 1})`, value: k });
    } else {
      options.push({ label: `${k} (+${v.dots ?? 0})`, value: k });
    }
  }
  return options;
});


const editing = ref<Source | null>(null);

const requirementOptions = computed(() => {
  const options: any = [];
  options.push({ label: `None`, value: { arcana: 'None', value: undefined } });
  for (const arcana of arcanaNames) {
    options.push({ label: `${arcana} 1`, value: { arcana: arcana, value: 1 } });
    options.push({ label: `${arcana} 2`, value: { arcana: arcana, value: 2 } });
    options.push({ label: `${arcana} 3`, value: { arcana: arcana, value: 3 } });
    options.push({ label: `${arcana} 4`, value: { arcana: arcana, value: 4 } });
    options.push({ label: `${arcana} 5`, value: { arcana: arcana, value: 5 } });
  }
  return options;
});

function edit(spell: Source) {
  editing.value = spell;
}

function addEffect(spell: Source) {
  spell.effects = spell.effects ?? [];
  spell.effects?.push({
    cost: [],
    requirement: undefined,
    effect: "",
  });
}

function removeEffect(spell: Source, index: number) {
  spell.effects?.splice(index, 1);
}

</script>


<style>
.input-group-effect {
  .n-input-wrapper {
    padding-left: 0;
  }
}
.select-no-border {
  .n-base-selection__border {
    display: none;
  }
  .n-base-selection__state-border {
    display: none;
  }
  &:hover, &:focus {
    --n-icon-color: #333;
  }
}
</style>
