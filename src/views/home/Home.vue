<script lang='ts' setup>

import { reactive, toRefs , ref ,inject, onMounted , watch } from 'vue'


import banner from '../../components/Banner.vue'
import card from '../../tools/Card.vue'
import pager from '../../tools/Pager.vue'
import Navber from '../../components/Navber.vue'
import Footer from '../../components/Footer.vue'

// 轮播图照片数据
import { banner_img_list } from '../../request/banner_img'

//文章卡片数据
import { active_card } from '../../request/active_card'


</script>



<template>
 

 <Navber></Navber>


  <banner
    :list =banner_img_list 
    name = "img_link" 
    id="id"
    width="100vw"
    height="800px"
    time="3000"
    >
  </banner>

  <!-- 主页内容区域 -->

    <div class="gweb_main">

      <div class="left">

        <!-- 热搜卡片 -->
        <card class="hotsearch" title="今日热搜" :main="true">
          <span class="index">1</span>
          <a href="#" class="link">离职一个月了还要教新人</a>
          <span class="num">153.9万</span>
        </card>

        <!-- 文章列表卡片 -->
        <card title="博客文章" class="active_card">
          <ul> 
            <li v-for="(item,index) in active_card" :key="item.id && item.title">
              <a :href="item.activeLink" class="">
              <div class="left">
                <div>
                  <img :src="item.imgLink" alt="">
                </div>
              </div>

              <div class="right">
              
                <h2>{{ item.title}}</h2>
                <p>{{ item.active }}</p>
                <div class="article_info">
                  <span class="active_type">{{ item.activeInfo.type==='0' ?'前端':'后端' }}</span>
                  <span><i class="fa fa-clock-o"></i>{{ item.activeInfo.time }}</span>
                  <span><i class="fa fa-thumbs-up"></i>{{ item.activeInfo.thumbs }}</span>
                  <span><i class="fa fa-eye"></i>{{ item.activeInfo.look }}</span>
                  <span><i class="fa fa-comments"></i>{{ item.activeInfo.comment }}</span>
                  <span><i class="fa fa-star-o"></i>{{ item.activeInfo.star }}</span>
                </div>
              </div>
                </a>
            </li>
          </ul>
        </card>

        <!-- 分页器 -->
        <pager class="list_pager"></pager>

      </div>
      <div class="right">
          
        <!-- 个人名片 -->
        <div class="mycard">

          <div class="title">
            <h3>个人名片</h3>
            <h4>MY</h4>
            <h4>PROFILE</h4>
            <img src="src/assets/images/400x400.png" alt="我的微信">
          </div>
          <div class="jieqi">
            <img src="http://blog.fengfengzhidao.com/static/24_hourse/4.png" alt="">
          </div>
          <div class="info">
            <p><span>Name</span> 猫猫mao</p>
            <p><span>JOB</span> 前端小菜鸡</p>
            <p><span>ADDR</span> 喵星光之国</p>
          </div>
        </div>


        <!-- 标签云 -->
        <card title="标签云" class="gweb_label">
            <ul>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
              <li>
                <span>前端</span>
                <i>24</i>
              </li>
            </ul>
        </card>

        <!-- 建站信息 -->
        <card title="建站信息" class="gweb_info">

            <div>
              <b>建站时间:</b>
              <span>2022-12-28</span>
            </div>
            <div>
              <b>网站程序:</b>
              <span>Vue3+Go</span>
            </div>
            <div>
              <b>运行时间:</b>
              <span>58天10时22分14秒</span>
            </div>
            <div>
              <b>总访问量:</b>
              <span>66666</span>
            </div>
            <div>
              <b>博客文章:</b>
              <span>12</span>
            </div>
            <div>
              <b>联系我:</b>
              <div class="my_info_img">
                <div class="qq">
                  <img src="src/assets/images/400x400.png" alt="">
                  <span>我的QQ</span>
                </div>
                <div class="wx">
                  <img src="src/assets/images/400x400.png" alt="">
                  <span>我的WX</span>
                </div>
              </div>
            </div>

        </card>

      </div>

    </div>

  
  <Footer></Footer>  
   
</template>
    

<style lang='less'>
.gweb_banner{
  margin-bottom: 30px;
}

.gweb_main{

  margin: 0 auto;
  width: 1200px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;


  .left{

    width: calc(100% - 396px - 20px);
    color: var(--span_color);

    // 热搜卡片
    .hotsearch{
      margin-bottom: 25px;

      .body{
        padding: 10px 20px 20px; 
        background-color: var(--card_bg);
        .index{
                width: 5%;
            }
            .link{
                width: 75%;;
                color: var(--a_link);
            }
            .num{
                width: 20%;
                text-align: right;
                color: var(--span_color);
            }
      }
    }

    // 博客文章
    .active_card{

      ul{
        li{
          transition: all .3s;
          &:nth-child(1) a{
              border-radius: 0 0 5px 5px;
            }
            &:not(:nth-child(1)):hover{
              transform: translateY(-10px);
            }


          a{
            display: flex;
            background-color: var(--card_bg);
            border-radius: 5px;
            margin-bottom: 20px;
           

          .left{
            width: 30%;
            padding: 20px 10px 20px 20px;
            div{
              width: 100%;
              border-radius: 5px;
              overflow: hidden;
              cursor: pointer;
              
              img{
                width: 100%;
                transition: all .3s;
                display: block;
                &:hover{
                transform: scale(1.05);
              }
              }
            }
          }

          .right{
            width: 70%;
            padding: 20px 20px 20px 10px;
            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: space-between;

            h2{
              font-size: 23px;
              font-weight: 600;
              color: var(--h2);
            }

            p{
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
              color: var(--span_color);
              font-size: 14px;
              margin: 12px 0;
            }
            span{
              margin-right: 15px;
              display: inline-flex;
              align-items: center;
              color: var(--span_color);

              i{
                margin-right: 5px;
                font-size: 17px;  
              }
            }

            span.active_type{
              padding: 2px 15px;
              border-radius: 5px;
              color: #fff;
              background: aqua;
              font-size: 14px;
              margin-right: 20px;
            }

          }

        }
      }
      }

      
    }

    // 分页器
    .list_pager{
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  .right{
    width:396px ;

    // 个人名片

    .mycard{
      padding: 20px;
      width: 100%;
      background-color: var(--card_bg);
      border-radius: 5px;
      margin-bottom: 20px;

      .title{
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        h3{
          color: aqua;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: .3em;
          margin-bottom: 10px;
        }
        h4{
          color: #e0bb53;
          text-transform: uppercase;
          font-style: italic;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: .2em;
        }
        img{
          position: absolute;
          right: 0;
          top: 0;
          height: 90px;
          width: 90px;
        }

      }

      .jieqi{

        width: 100%;
        height: 215px;
        border-radius: 5px;
        margin: 10px 0;
        overflow: hidden;
        transition: all .3s;
        cursor: pointer;
        &:hover{
          transform: scale(1.03);
        }

        img{
          width: 100%;
          transform: translate(0px, -279px);
        }
      }

      .info{
       p{
        margin-bottom: 5px;
        font-size: 14px;
        color: var(--mycard_text);
        span{
          color: var(--mycard_color);
        }
       }
      }

    }


    // 标签云
    .gweb_label{
      margin-bottom: 20px;

      .body{
        padding: 20px;
        border-radius: 0 0 5px 5px;
        background-color: var(--card_bg);
        margin-top: 1px;
        position: relative;

        @keyframes move_box {
            0% {
                left: 0;
                top: 0
            }

            25% {
                left: calc(100% - 20px);
                top: 0
            }

            50% {
                top: calc(100% - 20px);
                left: calc(100% - 20px)
            }

            75% {
                left: 0;
                top: calc(100% - 20px)
            }

            to {
                left: 0;
                top: 0
            }
        }

        // 小球
        &::before{
          display: block;
          position: absolute;
          content: "";
          width: 20px;
          height: 20px;
          background-color: var(--ball);
          -webkit-animation-name: move_box;
          animation-name: move_box;
          -webkit-animation-duration: 5s;
          animation-duration: 5s;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite
        }


        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 33.33%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--label_text);
            cursor: pointer;
            span{font-size: 16px;}
            i{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20px;
                height: 20px;
                font-size: 10px;
                color: var(--label_body_text);
                background-color: var(--label_body);
                border-radius: 50%;
                margin-left: 5px;
              }

              &:nth-child(3n+1),&:nth-child(3n+2){
                border-right: 1px solid var(--bg_darken);
              };

               &:nth-child(6n+1),
               &:nth-child(6n+2), 
               &:nth-child(6n+3){
                background-color: var(--bg_label_color);
               }
              
          }
        } 
      }

    }


    // 建站信息

    .body{
      display: block;
      border-radius: 0 0 5px 5px;
      background-color: var(--card_bg);
      margin-top: 1px;
      padding: 10px 20px 20px;

      div{
        font-size: 16px;
        margin-bottom: 8px;
        color: var(--info_color);
        b{
          margin-right: 5px;
        }
        span{
          font-size: 16px;
          margin-left: 10px;
        }

        .my_info_img{
          display: flex;
          margin-top: 10px;
          justify-content: space-around;
          div{
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
              width: 100px;
              height: 100px;
            }
          }


        }
      }

      }


  }

}
</style>