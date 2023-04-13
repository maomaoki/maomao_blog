<template>
  <div>
    
  <banner 
    :list =banner_img_list 
    name = "img_link" 
    id="id"
    width="100vw"
    height="800px"
    time="3000"
    >
  </banner>

  </div>
</template>
    
<script lang='ts' setup>
import banner from '../../components/Banner.vue'
import { reactive, toRefs , ref } from 'vue'

let banner_img_list = reactive([
{
  id:1,
  img_link:"src/assets/images/1.jpg"
},
{
  id:2,
  img_link:"src/assets/images/2.jpg"
},
{
  id:3,
  img_link:"src/assets/images/3.jpg"
},
{
  id:4,
  img_link:"src/assets/images/4.jpg"
},
{
  id:5,
  img_link:"src/assets/images/5.jpg"
},

])

</script>
<style lang='less' scoped >
    
</style>