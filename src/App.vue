<template>
     <navbar></navbar>
    <router-view v-if="isRouterAlive"></router-view>  
</template>
  
<script lang='ts' setup>
import { reactive, toRefs , ref, nextTick, provide,watch } from 'vue'
import navbar from './components/Navber.vue'  


//-------- 监听路由 刷新 页面 和滚动到顶部
const isRouterAlive = ref(true)

const reload = ()=>{
  isRouterAlive.value = false
  document.documentElement.scrollTop = 0
  nextTick(()=>{
    isRouterAlive.value = true  
  })
}


import { useRouter,onBeforeRouteUpdate } from 'vue-router';

let router = useRouter()

watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  reload()  
},{ immediate: true })
//--------


</script>
<style lang='less'>

</style>