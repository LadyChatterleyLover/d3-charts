<template>
  <div>
    <div id="BarChartId"></div>
    <BarChart
      selector="#BarChartId"
      :data="data"
    ></BarChart>
  </div>
</template>

<script lang="ts" setup>
import BarChart from '@/components/barChart/BarChart.vue'

const data = [
  { name: '外包', value: 3000 },
  { name: '金融', value: 4754 },
  { name: '制造', value: 1120 },
  { name: '咨询', value: 4032 },
]
</script>

<style lang="scss" scoped>
#BarChartId {
  width: 600px;
  height: 300px;
  border: 1px solid #eee;
}
</style>
