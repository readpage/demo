<template>
  <el-button type="info">hello</el-button>
  <el-button type="primary" loading>Loading</el-button>
  <el-button color="#626aef" plain>{{store.name}}</el-button>
  <el-button color="#626aef" style="color: white" @click="store.showLoading">update</el-button>
  {{store.loadding}}
  <p class="underline text-purple-600">The quick brown fox ...</p>
</template>

<script setup lang="ts">
import useStore from '@/store/useStore';
import { } from 'vue'

const store = useStore()


</script>

<style lang="scss" scoped>

</style>