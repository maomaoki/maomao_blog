<template>

<Navber></Navber>

  <Banner :list="banner_img_list2" name="img_link"></Banner>

  <div class="gweb_news_content">

    <div class="left">
        <ul>
          <li v-for="item in new_label_list" 
          :key="item.name" 
          @click="changeActive(item.name)"
          :class="active===item.name?'active':''"
          >
            <img :src="item.img" alt="">
            {{ item.name }}
          </li>
        </ul>
    </div>
    <div class="right">
        <div class="title">
           <img src="http://blog.fengfengzhidao.com/static/news/weibo.png" alt="">
           <h2 class="news_title">微博 · 热搜榜</h2>
        </div>
        <div class="body">
           <ul>
             <li>
                <span class="index">1</span>
                <a href="#" target="_blank">女生因为吃面崩溃</a>
                <span class="num">199.2万</span>
             </li>
             <li>
                <span class="index">2</span>
                <a href="#" target="_blank">女生因为吃面崩溃</a>
                <span class="num">199.2万</span>
             </li>
             <li>
                <span class="index">3</span>
                <a href="#" target="_blank">女生因为吃面崩溃</a>
                <span class="num">199.2万</span>
             </li>
             <li>
                <span class="index">3</span>
                <a href="#" target="_blank">女生因为吃面崩溃</a>
                <span class="num">199.2万</span>
             </li>
           </ul>
        </div>
    </div>
  </div>
  
  <Footer></Footer>
</template>
    
<script lang='ts' setup>
import { reactive, toRefs , ref } from 'vue'
import Banner from '../../components/Banner.vue'
import Navber from '../../components/Navber.vue';
import Footer from '../../components/Footer.vue';

import { banner_img_list2 } from '../../request/banner_img';   
import {new_label_list} from '../../request/news_label'

let active = ref("微博")

const changeActive = (name:string)=>{
  active.value = name
}


</script>
<style lang='less'>
    .gweb_news_content{
      width: 1200px;
      margin: 30px auto;
      display: flex;
      min-height: 800px;
      background-color: var(--news_bg);
      border-radius: 5px;

      .left{
        width: 20%;
        border-right: 1px solid var(--bg_darken);

        ul{
          margin-top: 20px;

          li{
            color: var(--news_text);
            height: 40px;
            display: flex;
            align-items: center;
            padding-left: 30%;
            transition: all .1s;
            font-size: 14px;
            img{
              height: 25px;
              border-radius: 5px;
              margin-right: 10px;
            }

            &:not(&.active){
              cursor: pointer;
            }
            &:hover{
              color: var(--hover_color);
            }
          }
          li.active{
            background-color: var(--active);
            color: #fff;
          }
        }
      }

      .right{
        width: 80%;
        padding: 20px;
        
        .title{
          display: flex;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--bg_darken);

          img{
            width: 35px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .news_title{
            font-size: 20px;
            color: var(--news_line_color);
          }
        }
        .body{
          margin-top: 10px;

          ul{
            li{
              display: flex;
              font-size: 14px;
              margin-bottom: 10px;
              align-items: start;

              .index{
                width: 20px;
                height: 20px;
                border-radius: 5px;
                color: var(--text);
                background-color: var(--bg_darken);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 20px;
              }
              a{
                width: 77%;
                transition: all .2s;

                &:hover{
                  color: aqua;
                }
              }
              .num{
                color: var(--news_line_color);
                width: 20%;
                display: flex;
                justify-content: right;
              }

              &:nth-child(1) .index{
                background-color: #fe2d46;
                color: #fff;
              }
              &:nth-child(2) .index{
                background-color: #f60;
                color: #fff;
              }
              &:nth-child(3) .index{
                background-color: #faa90e;
                color: #fff;
              }
            }
          }
        }

      }
    }

</style>