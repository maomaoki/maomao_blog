<template>
  <div class="gweb_footer">
    <div class="left">
        <p class="thank">Thank you</p>
        <p class="info">
            <img src="http://blog.fengfengzhidao.com/static/footer/tencent.png" alt="">
            <span>腾讯云</span>
            <img src="http://blog.fengfengzhidao.com/static/footer/tencent.png" alt="">
            <span>腾讯云ssh</span>
            <img src="http://blog.fengfengzhidao.com/static/footer/qiniu.png" alt="">
            <span>七牛云存储</span>
        </p>
        <p class="version">
            <span>version</span>
            <span>1.0.0</span>
        </p>
        <p>建站日期:2022-12-28</p>
        <p class="beian_info">
           <img src="http://blog.fengfengzhidao.com/static/footer/badges.png" alt="">
           <a href="https://beian.miit.gov.cn/" target="_blank">粤xxxxxxx</a>

        </p>
    </div>
    <div class="right">
       <div class="myInfo">
         <div class="qq" title="猫猫的QQ">
             <img class="show_img" src="../assets/images/qq.jpg" alt="">
             <img class="img" src="../assets/images/qq_icon.svg" alt="">
         </div>

         <div class="wx" title="猫猫的wx">
             <img class="show_img" src="../assets/images/wx.png" alt="">
             <img class="img" src="../assets/images/wexin_icon.svg" alt="">
         </div>

         <div class="bili" title="猫猫的bili">
             <a href="https://space.bilibili.com/3493133721537070" target="_blank">
             <img class="img" src="http://blog.fengfengzhidao.com/static/footer/bilibili_icon.svg" alt="">
            </a>
         </div>

         <div class="gitee" title="猫猫的gitee">
            <a href="https://gitee.com/scruan" target="_blank">
             <img class="img" src="http://blog.fengfengzhidao.com/static/footer/gitee_icon.svg" alt="">
            </a>
         </div>


         <div class="github" title="猫猫的github">
            <a href="https://github.com/maomaoki" target="_blank">
             <img class="img" src="http://blog.fengfengzhidao.com/static/footer/github_icon.svg" alt="">
            </a>
         </div>

         

       </div>
    </div>
  </div>
</template>
    
<script lang='ts' setup>
import { reactive, toRefs , ref } from 'vue'
    
</script>
<style lang='less'>
    
    .gweb_footer{
        display: flex;
        padding: 25px 0;
        width: 100%;
        background-color: var(--main_bg);

        .left{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;
            p{
                margin-bottom: 10px;
                font-size: 14px;
            }

            .thank{
                color: #26c6da;
                font-size: 20px;
            }
            .info{
                display: flex;
                img{
                    width: 20px;
                    margin-right: 5px;
                }
                span{
                    margin-right: 10px;
                }
            }
            .version{
                color: #fff;
                display: flex;

                span{
                    padding: 5px 10px;

                    &:nth-child(1){
                        background-color: #ff9800;
                        border-bottom-left-radius: 5px;
                        border-top-left-radius: 5px;
                    }
                    &:nth-child(2){
                        background-color: #26c6da;
                        border-bottom-right-radius: 5px;
                        border-top-right-radius: 5px;
                    }
                }
            }
            .beian_info{
                display: flex;
                img{
                    width: 20px;
                    margin-right: 5px;
                }
                a{
                    color: var(--text);
                }
            }


        }

        .right{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50%;

            .myInfo{
                display: flex;
                margin-bottom: 10px;
                
                div{
                    margin-right: 20px;
                    cursor: pointer;
                    position: relative;
                    &:hover .show_img{
                        opacity: 1;
                        top: -69px;
                    }
                }

                .show_img{
                    opacity: 0;
                    position: absolute;
                    border: 1px #f0eeee solid;
                    width: 63px;
                    left: -14px;
                    top: -10px;
                    transition: all .6s;
                }
                .img{
                    width: 30px;
                }
                
            }
        }
    }
</style>





