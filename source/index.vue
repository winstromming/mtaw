<template>
  <n-message-provider placement="top-right">
    <n-modal-provider>
      <n-dialog-provider>
        <n-config-provider :theme-overrides="overrides">
          <div class="sheet">
            <n-grid y-gap="6" x-gap="6" cols="12" item-responsive responsive="screen">
              <n-gi span="12 s:6 m:8">
                <n-space vertical :size="6">
                  <Person />
                  <Card>
                    <template #content>
                      <Attributes />
                    </template>
                    <template #footer>
                      <Skills />
                    </template>
                  </Card>
                  <n-grid y-gap="6" x-gap="6" :cols="2" item-responsive responsive="screen">
                    <n-gi span="2 m:1">
                      <n-space vertical :size="6">
                        <Card>
                          <template #content>
                            <Arcana />
                          </template>
                        </Card>
                        <Card>
                          <template #content>
                            <Spells />
                          </template>
                          <template #footer>
                            <Tools />
                          </template>
                        </Card>
                        <Card>
                          <template #content>
                            <Nimbus />
                          </template>
                          <template #footer>
                            <Attainments />
                          </template>
                        </Card>
                      </n-space>
                    </n-gi>
                    <n-gi span="2 m:1">
                      <n-space vertical :size="6">
                        <Card>
                          <template #content>
                            <Merits />
                          </template>
                        </Card>
                        <Card>
                          <template #content>
                            <n-space vertical :size="16">
                              <n-space vertical :size="6">
                                <n-text strong>People</n-text>
                                <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Contacts, Retainers, Familiars, etc." v-model:value="caster.extras.people" />
                              </n-space>
                              <n-space vertical :size="6">
                                <n-text strong>Places</n-text>
                                <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Sanctums, Demesnes, Safe Places, etc." v-model:value="caster.extras.places" />
                              </n-space>
                              <n-space vertical :size="6">
                                <n-text strong>Items</n-text>
                                <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Artifacts, Weapons, Equipment, etc." v-model:value="caster.extras.things" />
                              </n-space>
                            </n-space>
                          </template>
                        </Card>
                        <Card>
                          <template #content>
                            <n-space vertical :size="16">
                              <n-space vertical :size="6">
                                <n-text strong>Appearance</n-text>
                                <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="What they typically look like" v-model:value="caster.extras.appearance" />
                              </n-space>
                              <n-space vertical :size="6">
                                <n-text strong>Backstory</n-text>
                                <n-input class="choose-text" type="textarea" :autosize="{ minRows: 1 }" placeholder="Who they were before this" v-model:value="caster.extras.backstory" />
                              </n-space>
                            </n-space>
                          </template>
                        </Card>
                      </n-space>
                    </n-gi>
                  </n-grid>
                </n-space>
              </n-gi>
              <!-- Right -->
              <n-gi span="12 s:6 m:4">
                <n-space vertical :size="6">
                  <Status />
                  <Active />
                </n-space>
              </n-gi>
            </n-grid>
          </div>
          <n-drawer v-model:show="showList" :width="600" placement="left">
            <n-drawer-content>
              <template #header>
                <n-space align="center" justify="space-between">
                  <n-text>Manage Spells</n-text>
                  <n-input v-model:value="showListFilter" placeholder="Search" />
                </n-space>
              </template>
              <n-space vertical :size="6">
                <SpellList :filter="showListFilter" />
              </n-space>
            </n-drawer-content>
          </n-drawer>
          <n-drawer v-model:show="showCast" :width="500" placement="right">
            <n-drawer-content>
              <template #header>
                <Actions />
              </template>
              <n-space vertical :size="6">
                <SpellChoice />
                <Card>
                  <template #content>
                    <SpellFactors />
                  </template>
                  <template #footer>
                    <SpellYantras />
                  </template>
                </Card>
                <!-- <SpellParadox /> -->
              </n-space>
            </n-drawer-content>
          </n-drawer>
        </n-config-provider>
      </n-dialog-provider>
    </n-modal-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { assign, cloneDeep } from "lodash";
import { BookMarked, IdCardLanyard, WandSparkles } from "lucide-vue-next";
import type { GlobalThemeOverrides } from "naive-ui";
import { onBeforeMount, onMounted, ref, toRaw, watch } from "vue";
import Actions from "./modules/sections/Actions.vue";
import Active from "./modules/sections/Active.vue";
import Arcana from "./modules/sections/Arcana.vue";
import Attributes from "./modules/sections/Attributes.vue";
import Merits from "./modules/sections/Merits.vue";
import SpellChoice from "./modules/sections/SpellChoice.vue";
import SpellFactors from "./modules/sections/SpellFactors.vue";
import SpellList from "./modules/sections/SpellList.vue";
import SpellYantras from "./modules/sections/SpellYantras.vue";
import Status from "./modules/sections/Status.vue";
import Attainments from "./modules/sections/Attainments.vue";
import { caster } from "./store/caster";
import { casting } from "./store/casting";
import Card from "./modules/common/Card.vue";
import Skills from "./modules/sections/Skills.vue";
import Person from "./modules/sections/Person.vue";
import Nimbus from "./modules/sections/Nimbus.vue";
import Spells from "./modules/sections/Spells.vue";
import Tools from "./modules/sections/Tools.vue";
import SpellAttainments from "./modules/sections/SpellAttainments.vue";

const overrides: GlobalThemeOverrides = {
  common: {
    fontWeightStrong: "600",
    primaryColor: "#50a9bf",
    primaryColorHover: "#6ac3d9",
  },
  Card: {
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    borderRadius: "10px",
    paddingMedium: "12px",
  }
};

const showCast = ref(false)
const showList = ref(false);

const showListFilter = ref("");

watch(casting, () => {
  if (casting.spells.length > 0 || casting.form !== undefined) showCast.value = true
})

onBeforeMount(() => {
  const hasCharacter = JSON.parse(localStorage.getItem("mtaw") ?? "null");
  if (hasCharacter) assign(caster, hasCharacter);
});

onMounted(() => {
  if (window.location.pathname === "/json") {
    const file = JSON.stringify(toRaw(caster), null, 2);
    const blob = new Blob([file], { type: "application/json" });
    const anchor = document.createElement("a") as HTMLAnchorElement;
    document.body.appendChild(anchor);
    anchor.style.display = "none";
    anchor.download = `${caster.details.name || "character"}.json`;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.dataset.downloadUrl = [
      "application/json",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
    window.URL.revokeObjectURL(anchor.href);
    document.body.removeChild(anchor);
  }
});

watch(caster, () => {
  const raw = cloneDeep(toRaw(caster));
  localStorage.setItem("mtaw", JSON.stringify(raw));
});
</script>

<style>
html {
  min-height: 100%;
}

body {
  min-height: 100%;
  /*overflow: hidden;*/
  background-color: #f7f3ee;
  /* background-color: var(--n-color-bg-base); */
}

.bg {
  background-color: rgb(223, 223, 182);
  /* background-color: var(--n-color-bg-base); */
}

.n-layout { background-color: transparent; }
.n-layout-sider { background-color: transparent; }
.n-layout-sider__border { background-color: transparent !important }
.n-drawer-body-content-wrapper { background: #f6f6f6; }


.sheet {
  max-width: 1200px;
  min-width: 400px;
  margin: 0 auto;
  padding: 24px;
}

.name-input {
  --n-border: 0 !important;
  --n-height: auto !important;
  --n-padding-left: 0 !important;
  --n-padding-right: 0 !important;
}
.name-input .n-input__state-border {
  box-shadow: none !important;
  border: none !important;
}
.name-input .n-input__input-el,
.name-input .n-input__placeholder {
  font-size: 16px;
  font-weight: 600;
}

.n-input.n-input--textarea {
  --n-line-height-textarea: 21px !important;
}
.n-input.n-input--textarea .n-input__prefix {
  align-items: flex-start
}
.n-input.n-input--textarea .n-input__prefix span {
  line-height: 21px;
  padding-top: var(--n-padding-vertical);
  padding-bottom: var(--n-padding-vertical);
}
.n-input-number.text-right input.n-input__input-el,
.n-input-number.text-right .n-input__placeholder {
  text-align: right;
}

.n-select.n-select--disabled {
  opacity: 0.5;
}
.n-base-selection.n-base-selection--disabled {
  opacity: 0.5;
}
</style>
