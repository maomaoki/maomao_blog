<template>
  
    
    <Banner :list="banner_img_list" name="img_link"></Banner>
  
</template>
    
<script lang='ts' setup>
import { reactive, toRefs , ref } from 'vue'
import Banner from '../../components/Banner.vue'

    
let banner_img_list = reactive([
{
  id:1,
  img_link:"src/assets/images/6.jpg"
},
{
  id:2,
  img_link:"src/assets/images/7.jpg"
},
{
  id:3,
  img_link:"src/assets/images/8.jpg"
},
{
  id:4,
  img_link:"src/assets/images/9.jpg"
},
{
  id:5,
  img_link:"src/assets/images/10.jpg"
},

])

</script>
<style lang='less' scoped >
    
</style>