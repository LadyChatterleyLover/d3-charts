<template>
  <el-container>
    <el-aside width="200px">
      <NavSideVue></NavSideVue>
    </el-aside>
    <el-container>
      <el-header style="border-bottom: 1px solid #eee"><NavHeader></NavHeader></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavSideVue from '@/components/navSide/NavSide.vue'
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
</style>
