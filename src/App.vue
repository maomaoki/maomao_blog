<template>
    <router-view></router-view>  
</template>
  
<script lang='ts' setup>
import { reactive, toRefs , ref, nextTick, provide,watch } from 'vue'
import { useRouter,onBeforeRouteUpdate } from 'vue-router';



//-------- 监听路由 刷新 页面 和滚动到顶部


const reload = ()=>{
  document.documentElement.scrollTop = 0
}




let router = useRouter()

watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  
  
  reload()  
},{ immediate: true })
//--------


</script>
<style lang='less'>

</style>