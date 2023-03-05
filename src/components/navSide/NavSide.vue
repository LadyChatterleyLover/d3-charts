<template>
  <el-menu
    :default-active="$route.path"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="item in menus"
      :key="item.path"
      :index="item.path"
    >
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

interface MenuItem {
  title: string
  path: string
}

const router = useRouter()

const menus: MenuItem[] = [
  {
    path: '/bar',
    title: '柱状图',
  },
  {
    path: '/line',
    title: '折线图',
  },
]

const handleSelect = (index: string) => {
  router.push(index)
}
</script>

<style lang="scss" scoped></style>
