<template>
  <n-card size="small" class="card" style="--n-border-color: #ddd">
    <template #header>
      <n-flex style="flex-wrap: nowrap" align="center" :size="4" v-if="title">
        <slot name="icon" />
        <n-ellipsis :tooltip="false" style="padding-right: 5px;">
          <n-text>{{ title }}</n-text>
        </n-ellipsis>
      </n-flex>
    </template>
    <template #header-extra>
      <slot name="header" />
    </template>
    <template #default>
      <slot name="content" />
    </template>
    <template #action>
      <slot name="footer" />
    </template>
  </n-card>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  editable?: boolean
}>();
</script>

<style>
.card {
  --n-border-radius: 7px !important;
  --n-border-color: #ddd !important;
  box-shadow: 0 5px 25px rgba(0,0,0,0.05);
  --n-line-height: 16px !important;
  --n-padding-top: 16px !important;
  --n-padding-left: 16px !important;
  --n-padding-right: 16px !important;
  --n-padding-bottom: 16px !important;
  --n-title-font-size: 16px !important;
}
.card .n-card__action {
  border-top: 1px solid #ddd !important;
}
.n-card-header__main { height: 24px !important; min-width: 0 !important; white-space: nowrap; }
.n-card-header__extra { height: 24px !important; }
.n-card-header__main .n-text { line-height: 24px !important; }
.card .card { --n-title-font-size: 14px !important; }
</style>
