<template>
  <el-button type="info">hello</el-button>
  <el-button type="primary" loading>Loading</el-button>
  <el-button color="#626aef" plain>{{store.name}}</el-button>
  <el-button color="#626aef" style="color: white" @click="store.showLoading">update</el-button>
  {{store.loadding}}
  <p class="underline text-purple-600">The quick brown fox ...</p>
  <lottie-player class="lottie-player" src="/static/food.json"  background="transparent"  speed="2.2"  style="width: 500px; height: 500px;" loop autoplay></lottie-player>
</template>

<script setup lang="ts">
import useStore from '@/store/useStore';
import { } from 'vue'


const store = useStore()


</script>

<style lang="scss" scoped>

</style>