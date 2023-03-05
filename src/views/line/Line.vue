<template>
  <div>
    <div id="LineChartId"></div>
    <LineChart
      selector="#LineChartId"
      :data="data"
    ></LineChart>
  </div>
</template>

<script lang="ts" setup>
import LineChart from '@/components/lineChart/LineChart.vue'

const data = [
  { name: '周一', value: 820 },
  { name: '周二', value: 932 },
  { name: '周三', value: 901 },
  { name: '周四', value: 1290 },
  { name: '周五', value: 934 },
  { name: '周六', value: 1330 },
  { name: '周日', value: 1320 },
]
</script>

<style lang="scss" scoped>
#LineChartId {
  width: 600px;
  height: 300px;
  border: 1px solid #eee;
}
</style>
