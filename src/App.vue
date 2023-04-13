<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>  
  </div>
</template>
  
<script lang='ts' setup>
import navbar from './components/Navber.vue'
import { reactive, toRefs , ref } from 'vue'
  
</script>
<style lang='less' scoped >
  
</style>