<script lang='ts' setup>
import { reactive, Ref,toRefs , ref, computed, onMounted, onBeforeUnmount } from 'vue'
 




// 设置接受 使用者 传值

const props = defineProps({

  // 含有img链接列表  链接key   idkey

  list:{
    type:Object
  },
  name:{
    type:String,
    default:"link"
  },
  id:{
    type:String,
    default:"id"
  }

})

let id = props.id
let link = props.name




const getlistDom:Ref<any> = ref()


let index = ref(1)

const changeIndex = (id:number)=>{
  index.value = id
  getlistDom.value.style.transform=`translate(-${index.value-1}00%)`
}

const auto_img = ()=>{

 return setInterval(()=>{
    if(index.value === 5){
      index.value =0
    }
    getlistDom.value.style.transform=`translate(-${index.value}00%)`
    index.value++
  },3000)
  
}  

const mouseOver = ()=>{
  clearInterval(times)
}

const mouseLeave = ()=>{
  times = auto_img()
}

let times:number
onMounted(()=>{
  times = auto_img()
})

onBeforeUnmount(()=>{
  clearInterval(times)
})


</script>

<template>

  <!-- 轮播图主体 -->
  <div class="gweb_banner" @mouseover="mouseOver" @mouseleave="mouseLeave">

    <!-- 走马灯 框 -->
    <div class="img_box" ref="getlistDom">

      <!-- 轮播图盒子 -->
      <div v-for="item in props.list" :key="item[id]" >
        <img :src="item[link]">
      </div>
    </div>

    <!-- 下面按钮列表 -->
    <div class="index_box">
        <div v-for="item in props.list" 
          :key="item[id]" 
          :class="item[id]===index?'active':''" 
          @click="changeIndex(item[id])">
        </div>
    </div>

    
  </div>
</template>



<style lang='less'>
    
   .gweb_banner{
    
    width: 100vw;
    height: 800px;
    overflow: hidden;
    position: relative;
    

    .img_box{

      width: 100%;
      height: 100%;
      display: flex;
      transition: all 0.6s ease;
      div {

        img{
          width: 100vw;
          height: 800px;
          object-fit: cover;
        }
      }

    }

    .index_box{

      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;

      div{
         width: 16px;
         height: 3px;
         border-radius: 5px;
         background: #fff;
         margin: 0 3px;
         color: transparent;
         opacity: .3;
         cursor: pointer;
         transition: all .3s;

         &:hover{
          opacity: .8;
         }
      }
      div.active{
        width: 24px;
        opacity: 1;
      }
    }

   
   }

</style>