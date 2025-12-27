<template>
  <Card title=" ">
    <template #icon>
      <n-icon>
        <IdCardLanyard />
      </n-icon>
      <n-input class="name-input" placeholder="Shadow Name" v-model:value="caster.details.name" />
    </template>
    <template #header>
      <Menu />
    </template>
    <template #content>
      <Character />
    </template>
    <template #footer>
      <Derived />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { IdCardLanyard } from 'lucide-vue-next';
import Character from './Character.vue';
import Derived from './Derived.vue';
import Card from '../common/Card.vue';
import Menu from "./Menu.vue";
import { caster } from '../../store/caster';
</script>
