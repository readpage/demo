<template>
  <v-chart
    class="echarts"
    autoresize
    ref = "barRef"
    :loading="barLoading"
    :option="bar"
  ></v-chart>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

const barLoading = ref(true);
const barRef = ref()

const bar = {
  title: {
    text: "最近成交量",
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      saveAsImage: { show: true }
    }
  },
  color: ["#e01f54"],
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: [],
  },
  yAxis: {},
  series: {
    name: "销量",
    type: "line",
    data: [],
  },
}
// onMounted(() => {
//   barRef.value.setOption(bar)
// })


setTimeout(() => {
  barLoading.value = false
  barRef.value.setOption({
    xAxios: {
      data: [5, 12, 13, 22, 15]
    },
    series: [{
      data: [5, 12, 13, 22, 15]
    }]
  })
}, 3000)
</script>

<style lang="scss" scoped>
.echarts {
  height: 300px;
}
</style>
