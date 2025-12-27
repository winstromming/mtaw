<template>
  <n-input class="dots-input" size="small" :disabled="props.isEditable === false" :readonly="props.isEditable === false" type="text" :value="props.label" :on-update:value="updateLabel" :placeholder="props.placeholder ?? ''" :color="props.checked ?? props.color">
    <template #prefix v-if="props.name || props.checked !== undefined">
      <n-text v-if="props.name" strong :style="{ cursor: props.checked !== undefined && !checkedDisabled ? 'pointer' : 'default' }" @click="props.checked !== undefined && props.checkedDisabled !== true ?updateChecked(!props.checked) : null">{{ props.name }}</n-text>
    </template>
    <template #suffix v-if="props.dots !== undefined">
      <n-rate class="dots-rate" size="small" clearable :count="props.max" v-model:value="props.dots" :on-update:value="updateDots">
        <n-icon :size="14">
          <Circle />
        </n-icon>
      </n-rate>
    </template>
  </n-input>
</template>

<script setup lang="ts">
import { Circle } from 'lucide-vue-next';


const props = defineProps({
  name: {
    type: String,
    default: undefined,
  },
  dots: {
    type: Number,
    default: undefined,
  },
  color: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: undefined,
  },
  isEditable: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: undefined,
  },
  checkedDisabled: {
    type: Boolean,
    default: false,
  },
  max: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits<{
  (event: "updateDots", dots: number): void;
  (event: "updateLabel", label: string): void;
  (event: "updateChecked", check: boolean): void;
}>();

const updateDots = (dots: number) => emit("updateDots", dots);
const updateLabel = (label: string) => emit("updateLabel", label);
const updateChecked = (checked: boolean) => emit("updateChecked", checked);
</script>

<style>
.dots-input {
  flex: 1 !important;
  background-color: transparent !important;
  --n-height: 17px !important;
  line-height: 17px !important;
}
.dots-input.n-input--disabled .n-input-wrapper { cursor: default !important}
.dots-input.n-input--disabled .n-input__input-el { cursor: default !important}

.dots-input .n-input-wrapper {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.dots-input .n-input__border,
.dots-input .n-input__state-border {
  display: none !important;
}
.dots-input[color="false"] .n-input__input-el {
  color: var(--n-color-text) !important;
}
.choose-text[color="true"] .n-input__input-el {
  color: var(--n-color-target) !important;
}
.choose-text[color="true"] .n-input__textarea-el {
  color: var(--n-color-target) !important;
}
.choose-text[color="true"] .n-base-selection-input__content {
  color: var(--n-color-target) !important;
}

.dots-input .n-input__input-el,
.dots-input .n-input__input-el:not([disabled=""]) {
  color: var(--n-color-target) !important;
}

.dots-check {
  margin-right: 6px !important
}

.dots-input .n-input__prefix {
  margin-right: 6px !important
}

.dots-input .n-input__suffix {
  flex-shrink: 0 !important;
  flex-grow: 0 !important;
}

.dots-rate.n-rate {
  vertical-align: middle !important
}

.dots-rate.n-rate .n-rate__item {
  margin-left: 1px !important
}

.dots-rate.n-rate .n-rate__item svg circle {
  stroke: var(--n-text-color)  !important
}
.n-input[color="true"] .n-text--strong {
  color: var(--n-color-target) !important
}
.n-input[color="true"] .dots-rate.n-rate .n-rate__item svg circle {
  stroke: var(--n-color-target) !important
}

.dots-rate.n-rate .n-rate__item--active svg circle {
  fill: var(--n-text-color) !important;
  stroke: var(--n-text-color) !important;
}
.n-input[color="true"] .dots-rate .n-rate__item--active svg circle {
  fill: var(--n-color-target) !important;
  stroke: var(--n-color-target) !important;
}
</style>
