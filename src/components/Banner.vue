<script lang='ts' setup>
import { reactive, Ref,toRefs , 
  ref, computed, onMounted, onBeforeUnmount,PropType } from 'vue'
 



// 设置接受 使用者 传值


const props = defineProps({

  // 含有img链接列表  链接(key)   id(key)

  list:{
    type: Object 
  },
  name:{
    type:String,
    default:"link"
  },
  id:{
    type:String,
    default:"id"
  },
  width:{
    type:String,
    default:"100vw"
  },
  height:{
    type:String,
    default:"800px"
  },
  time:{
    type:String,
    default:"3000"
  }

})


let id = props.id
let link = props.name
let banner_list = ref(props.list)
let banner_width = ref(props.width)
let banner_height = ref(props.height)
let banner_time = ref(props.time)
let banner_length = ref(banner_list.value?.length)



// 创建 一个ref 获取节点
const getlistDom:Ref<any> = ref()

// 创建循环索引
let myindex = ref(0)

// 点击 改变 index 
// 改变索引 改变走马灯移动距离
const changeIndex = (id:number)=>{
  myindex.value = id
  getlistDom.value.style.transform=`translate(-${myindex.value}00%)`
}

// 自动循环走马灯移动
const auto_img = ()=>{

 return setInterval(()=>{
    myindex.value++
    if(myindex.value === banner_length.value){
      myindex.value =0
    }
    
    getlistDom.value.style.transform=`translate(-${myindex.value}00%)`
    
  },Number(banner_time.value))
  
}  



// 将定时器暴露出来
let times:number

// 触摸触发
const mouseLeave = ()=>{
  times = auto_img()
}

// 离开触发
const mouseOver = ()=>{
  clearInterval(times)
}

// 数据挂载后 触发定时器
onMounted(()=>{
  times = auto_img()
})

// 组件销毁 清除定时器
onBeforeUnmount(()=>{
  clearInterval(times)
})


</script>

<template>

  <!-- 轮播图主体 -->
  <div class="gweb_banner">

    <!-- 走马灯 框 -->
    <div class="img_box" ref="getlistDom">

      <!-- 轮播图盒子 -->
      <!-- 防止没有传id 就key 就用 链接 -->
      <!-- 用索引不太好 虽然没有删除修改操作 -->
      <div v-for="item in banner_list" :key="item[id] && item[link]" >
        <img :src="item[link]">
      </div>
    </div>

    <!-- 下面按钮列表 -->
    <div class="index_box" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <div v-for="(item,index) in banner_list" 
          :key="item[id] && item[link]" 
          :class="Number(index) === myindex?'active':''" 
          @click="changeIndex(Number(index))">

        </div>
    </div>
  
  </div>
</template>



<style lang='less'>
    
   .gweb_banner{
    
    width: v-bind(banner_width);
    height: v-bind(banner_height);
    overflow: hidden;
    position: relative;
    

    .img_box{

      width: 100%;
      height: 100%;
      display: flex;
      transition: all 0.6s ease;
      div {

        img{
          width:v-bind(banner_width);
          height: v-bind(banner_height);
          object-fit: cover;
        }
      }

    }

    .index_box{

      position: absolute;
      bottom: 2%;
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