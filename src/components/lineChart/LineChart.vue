<template></template>

<script lang="ts" setup>
import * as d3 from 'd3'
import { onMounted, nextTick, computed } from 'vue'

interface Data {
  name: string
  value: string | number
}

const props = withDefaults(
  defineProps<{
    selector: string
    data: Data[]
    area?: boolean
    title?: string
    width?: string | number
    height?: string | number
    marginLeft?: string | number
    marginRight?: string | number
    marginTop?: string | number
    marginBottom?: string | number
    color?: string
  }>(),
  {
    title: '',
    area: true,
    width: 600,
    height: 300,
    marginLeft: 60,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 40,
    color: '#879EDB',
  }
)

const containerWidth = computed(() => {
  return Number(props.width) - Number(props.marginLeft) - Number(props.marginRight)
})
const containerHeight = computed(() => {
  return Number(props.height) - Number(props.marginTop) - Number(props.marginBottom)
})

const init = () => {
  const xValue = (d: Data) => d.name
  const yValue = (d: Data) => Number(d.value)
  const container = d3
    .select(props.selector)
    .append('svg')
    .attr('width', props.width)
    .attr('height', props.height)
  const xScale = d3
    .scaleBand()
    .domain(props.data.map(d => xValue(d)))
    .range([0, containerWidth.value])
    .padding(0.2)
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(props.data, d => yValue(d)) as number])
    .range([containerHeight.value, 0])
    .nice()
  const xAxis = d3.axisBottom(xScale)
  const yAxis = d3.axisLeft(yScale).ticks(5).tickSize(-containerWidth.value)
  const chartG = container
    .append('g')
    .style('transform', `translate(${props.marginLeft}px, ${props.marginTop}px)`)

  chartG.append('g').call(xAxis).attr('transform', `translate(0, ${containerHeight.value})`)
  chartG.append('g').call(yAxis)
  const line = d3
    .line()
    .x(d => xScale(xValue(d as any)) as any)
    .y(d => yScale(yValue(d as any)))
  const area = d3
    .area()
    .x(d => xScale(xValue(d as any)) as any)
    .y1(d => yScale(yValue(d as any)))
    .y0(yScale(0))

  if (props.area) {
    chartG
      .append('g')
      .append('path')
      .style('fill', 'none')
      .style('fill', props.color)
      .style('stroke', props.color)
      .style('stroke-width', 1)
      .datum(props.data)
      .attr('d', area as any)
  } else {
    chartG
      .append('g')
      .append('path')
      .style('fill', 'none')
      .style('stroke', props.color)
      .style('stroke-width', 1)
      .datum(props.data)
      .attr('d', line as any)
  }
}

onMounted(() => {
  nextTick(() => {
    init()
  })
})
</script>

<style lang="scss" scoped></style>
