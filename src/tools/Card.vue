<template>
  <div class="gweb_card">
    <div class="title">
        <h2>{{ props.title }}</h2>
        <a href="#" v-if="props.main">查看更多</a>
    </div>
    <div class="body">
        <slot></slot>
    </div>



  </div>
</template>
    
<script lang='ts' setup>
import { reactive, toRefs , ref ,defineProps} from 'vue'
 const props = defineProps({

    title:{
        type:String,
        default:""
    },
    main:{
        type:Boolean,
        default:false
    }
 })    


</script>
<style lang='less'>
    .gweb_card{
        .title{
            padding: 20px 20px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px 5px 0 0;
            background-color: var(--card_bg);
            a{
                color: var(--span_color);
            }
            h2{
                font-size: 20px;
                font-weight: 600;
                color: var(--h2);
            }
        }
        .body{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 0 0 5px 5px;
           
            margin-top: 1px;
        }


    }
</style>