<script lang='ts' setup>
import banner from '../../components/Banner.vue'
import card from '../../tools/Card.vue'
import { reactive, toRefs , ref } from 'vue'


// 到时请求数据
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


<template>
 


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
          <li>
            
            <div class="left">
              <div>
                <img src="http://blog.fengfengzhidao.com/uploads/file/105747KJAJa.jpg" alt="">
              </div>
            </div>

            <div class="right">

            </div>
          </li>
        </ul>

      </card>

    </div>
    <div class="right">
        
    </div>
  </div>
   
</template>
    

<style lang='less'>
.gweb_banner{
  margin-bottom: 30px;
}

.gweb_main{

  margin: 0 auto;
  width: 1200px;


  .left{

    width: calc(100% - 396px - 20px);

    // 热搜卡片
    .hotsearch{
      margin-bottom: 25px;

      .body{
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
            }
      }
    }

    // 博客文章
    .active_card{

      ul{
        li{
          .left{
            width: 30%;
            padding: 20px 10px 20px 20px;
            div{
              width: 100%;
              border-radius: 5px;
              overflow: hidden;
              img{
                width: 100%;
                transition: all .3s;
                display: block;
              }
            }
          }
        }
      }
      
    }

  }

  .right{
    width:396px ;
  }

}
</style>