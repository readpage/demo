<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
import { } from 'vue'


</script>

<style lang="scss" scoped>

</style>