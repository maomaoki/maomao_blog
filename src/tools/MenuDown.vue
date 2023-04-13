<template>
  <div class="top_list">
        <div class="top_list_btn">
            <span>猫猫</span>
            <i class="fa fa-angle-down"></i>
        </div>
        <ul class="top_list_box">
          <router-link v-for="item in list" :to="item.link" custom v-slot="{navigate,isActive}">
            <li @click="navigate">{{ item.name }}</li>
          </router-link>
        </ul>
    </div>
</template>
    
<script lang='ts' setup>
import { reactive, toRefs , ref } from 'vue';

import {router_link} from '../types/global'

// 设置 navigate 这个类型 (ts)
let navigate:router_link

defineProps({
    list:{
        type:Object, 
    }
})


</script>
<style lang='less' scoped >
    // 个人信息下拉列表
    .top_list{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            cursor: pointer;
            position: relative;
            width: 100px;

            .top_list_btn{
                width: 100%;
                text-align: center;
                padding: 10px 0;
                color:var(--font_color);
                &:hover{
                    color: var(--hove_color);
                }
                span{
                 margin-right: 5px;
                }
            }
                    

            .top_list_box{
                position: absolute;
                top: 40px;
                left: 0;
                width: 100%;
                max-height: 0;
                transition: all 0.7s ease;
                overflow: hidden;
                    li{
                    // display: none;
                    text-align: center;
                    list-style: none;
                    cursor: pointer;
                    padding: 6px;  
                    border-bottom: 1px dashed #c1c1c1; 
                    color: var(--font_color);
                    transition: all 0.3s;

                    &:hover{
                        background-color: rgba(255, 255, 255, 0.3);
                        color: var(--hove_color);
                    }
                }
             }
            .top_list_btn:hover ~ .top_list_box{
                max-height: 1000px;
            }

            .top_list_box:hover{
                max-height: 1000px;
            }
        }   
        

</style>