<template>
  <n-grid y-gap="6" x-gap="6" :cols="6" item-responsive responsive="screen">
    <n-gi span="6 s:2">
      <n-grid y-gap="6" x-gap="6" cols="2" item-responsive responsive="screen">
        <n-gi span="1 s:2">
          <n-input placeholder="Concept" v-model:value="caster.details.concept" />
        </n-gi>
        <n-gi span="1 s:2">
          <n-input-group>
            <n-input placeholder="Virtue" v-model:value="caster.details.virtue" />
            <n-input placeholder="Vice" v-model:value="caster.details.vice" />
          </n-input-group>
        </n-gi>
      </n-grid>
    </n-gi>
    <n-gi span="6 s:2">
      <n-grid y-gap="6" x-gap="6" cols="2" item-responsive responsive="screen">
        <n-gi span="1 s:2">
          <n-select filterable :value="caster.details.path?.name" placeholder="Path" @update:value="caster.details.path = $event" :options="pathOptions" />
        </n-gi>
        <n-gi span="1 s:2">
          <n-select filterable :value="caster.details.order?.name" placeholder="Order" @update:value="caster.details.order = $event" :options="orderOptions" />
        </n-gi>
      </n-grid>
    </n-gi>
    <n-gi span="6 s:2">
      <n-grid y-gap="6" x-gap="6" cols="2" item-responsive responsive="screen">
        <n-gi span="1 s:2">
          <n-input placeholder="Legacy" v-model:value="caster.details.legacy" />
        </n-gi>
        <n-gi span="1 s:2">
          <n-input placeholder="Cabal" v-model:value="caster.details.cabal" />
        </n-gi>
      </n-grid>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { orders, paths } from "../../config/values";
import { caster } from "../../store/caster";
import Card from "../common/Card.vue";
import { User } from "lucide-vue-next";

const orderOptions = computed(() => {
  return orders.map((order) => {
    return {
      label: order.name,
      value: order,
    };
  });
});

const pathOptions = computed(() => {
  return paths.map((path) => {
    return {
      label: path.name,
      value: path,
    };
  });
});
</script>
