<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>  
  </div>
</template>
  
<script lang='ts' setup>
import { reactive, toRefs , ref } from 'vue'
import navbar from './components/Navber.vue'  
</script>
<style lang='less'>

</style>