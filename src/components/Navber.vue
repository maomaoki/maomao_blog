<template>
  <div :class="isScolly?'gweb_nav show':'gweb_nav'">
   
    <div class="gweb_nav_content">

        <div class="gweb_nav_log">

            <p class="p1">猫猫谈心</p>
            <p class="p2">MaoMaoLove</p>
            
        </div>
        
        <div class="gweb_nav_left">
            <div class="nav_list">

                <router-link :to="{name:item.link}" v-for="item in link_list" :key="item.id" custom v-slot="{navigate,isActive}">
                   <span @click="navigate">{{ item.name }}</span>
                </router-link>

            </div>
           
            <div class="nav_seach">
                <div class="search_btn">
                    <input type="text" :class="isseach">
                    <button :class="isseach" @click="changeSearch"><i class="fa fa-search isseach"></i></button>
                </div>
            </div>
        </div>

        <div class="gweb_nav_right">

            <button class="sun" @click="chagneColor">
                <!-- <i class="fa fa-sun-o"></i> -->
                <i :class="global_color"></i>
            </button>
           
            <menu-down 
            :list="list_down"
            title="猫猫"
            class="menu_info"
            :spanColor="spanColor"
            :line="line"
            :bgColor="bgColor"
            :hoverColor="hoverColor">  
            </menu-down>
            
        </div>
        
    </div>

  </div>
</template>
    
<script lang='ts' setup>
// 引入组件(下拉菜单)
import MenuDown from '../tools/MenuDown.vue'


// 引入 vue 一些需要的方法
import { reactive, toRefs , ref, onMounted ,onBeforeUnmount } from 'vue'

import {router_link} from '../types/global'

// 设置 navigate 这个类型 (ts)
let navigate:router_link

// 渲染 标签跳转
let link_list=reactive(
    [
    {
        "id":0,
        "link":"home",
        "name":"首页"
    },
    {
        "id":1,
        "link":"news",
        "name":"新闻"
    },
    {
        "id":2,
        "link":"search",
        "name":"搜索"
    },
    {
        "id":3,
        "link":"chat",
        "name":"聊天室"
    },
    {
        "id":4,
        "link":"mood",
        "name":"心情"
    }
]
)

// 传入 下拉列表的属性
let list_down = reactive(
    [
    {
        "id":0,
        "link":"/",
        "name":"个人信息"
        
    },
    {
        "id":1,
        "link":"/",
        "name":"我的收藏"
    },
    {
        "id":2,
        "link":"/",
        "name":"我的消息"
    },
    {
        "id":3,
        "link":"/",
        "name":"注销推出"
    }

]
)


// 搜索框样式
let isseach = ref("")

// 主题样式(太阳-月亮)
let global_color = ref("fa fa-sun-o")
// 不想写太长class类名 加个boolean
let isglobal_color = true



// 搜索框缩放
const changeSearch = ()=>{
    isseach.value=isseach.value?"":"isseach"   
}

// 主体切换
const chagneColor = ()=>{
    isglobal_color = !isglobal_color
    global_color.value = isglobal_color?"fa fa-sun-o":"fa fa-moon-o"
}


// 滚动条事件
let spanColor = ref('#fff')
let bgColor =  ref('#fff')
let line = ref("#fff")
let hoverColor = ref("aqua")

let isScolly = ref(false)


// 滚动条触发事件
function changeScolly (){

isScolly.value = true  
spanColor.value = '#333'
bgColor.value =  '#fff'
line.value = "#333"
hoverColor.value = "#333"

}


onMounted(()=>{
    window.addEventListener("scroll",()=>{
        let s = document.documentElement.scrollTop || document.body.scrollTop
        if(s>200){    
            isScolly.value = true  
            spanColor.value = '#333'
            bgColor.value =  '#fff'
            line.value = "#333"
            hoverColor.value = "#333"
        }else{
            isScolly.value = false  
            spanColor.value = '#fff'
            bgColor.value =  '#fff'
            line.value = "aqua"
            hoverColor.value = "#fff"
        }
         
    })
})


onBeforeUnmount(()=>{
    window.removeEventListener("scroll",()=>{})
})



</script>
<style lang='less'>
    
    .gweb_nav{
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        
        background-color: inherit;

        .gweb_nav_content{
            width: 1280px;
            height: 100%;
            margin: 0 auto;


            display: flex;
            justify-content: space-between;
            align-items: center;

            // log
            .gweb_nav_log{
                width: 10%;
                transform: scale(.7) translate(-22px);
                padding-left: 24px;

                .p1{
                    font-size: 24px;
                    letter-spacing: 2px;
                   
                }
                .p2{
                    font-size:12px;
                    letter-spacing: 2px;
                    
                    
                }
            }

            // 页面按钮
            .gweb_nav_left{
                width: 70%;
                display: flex;
                align-items: center;
                
                .nav_list{
                    span{
                        margin: 0 10px;
                        padding: 0 10px;
                        cursor: pointer;
                        transition: all 0.3s;
                        font-size: 16px;
                        font-weight: 500;
                        letter-spacing:3px;
                          
                    }  
                }

                // 搜索框
                .nav_seach{
                    .search_btn{

                    display: flex;
                    align-items: center;


                    button{ 
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 35px;
                        // color: #fff;
                        
                        background-color: transparent;
                        cursor: pointer;
                        transition: all 0.5s ease;
                        box-sizing: border-box;
                        font-size: 16px;
                        }

                    input{
                            width: 0px;
                            height: 35px;
                            overflow: hidden;
                            outline: none;
                            padding: 0;
                            transition: all 0.6s ease;
                            opacity: 0;

                            background-color: inherit;
                           
                        }

                    button.isseach{
                        border-radius: 0 5px 5px 0;
                        }
                    input.isseach{
                            width: 260px;
                            opacity: 1;
                            padding: 0 10px;
                            border-right: none;
                            margin-left: 30px;
                            border-radius: 5px 0 0 5px;
                        }
                    }
                }

              
            }

            // 图标 个人信息
            .gweb_nav_right{
                width: 20%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: right;

                // 主题切换
                button{
                    position: relative;
                    height: 35px;
                    cursor: pointer;
                    border: none;
                    background-color: initial;
                    margin-right: 50px;
                    
                    i{
                        position: absolute;
                        top: 0px;
                        left: 0;
                        font-size: 22px;
                        text-align: center;
                        line-height: 35px;
                    }

                   
                   
                }


                
            }


        }



        // 颜色提出写
        //log
        .gweb_nav_log{
            .p1{
            color: var(--logo_color);
        }

        .p2{
            color: var(--font_color);
         }
        }
        
       

        // 按钮列表
        .gweb_nav_left{
              span{
                color: var(--font_color);
                &:hover{
                   color: var(--hove_color);
                }
            
                }

                button{
                    color: var(--search_color);
                    border: none;
                    }

                input{
                    color:var(--font_color) ;
                    border: none;
                }

                button.isseach{
                    border: 1px solid #c1c1c1;
                }

                input.isseach{
                    border: 1px solid #c1c1c1;
                }

        }


        // 个人信息
        .gweb_nav_right{
            button{
                i.fa-sun-o{ 
                        color: var(--sun_color);
                        &:hover{
                         color: var(--moon_color);
                        }
                    }
                    i.fa-moon-o{
                        color: var(--moon_color);
                        &:hover{
                            color: var(--sun_color);
                        }
                    }
            } 
        }   

    }



    // 滚动效果
    .gweb_nav.show{
        background-color: #fff;

        .gweb_nav_log{
            .p1{
            color: var(--show_logo_color);
        }

        .p2{
            color: var(--show_font_color);
         }
        }
        
       

        // 按钮列表
        .gweb_nav_left{
            .nav_list span{
            color: var(--show_font_color) 
                }

                button{
                    color: var(--show_search_color);
                    border: none;
                    }

                input{
                    color:var(--show_font_color) ;
                    border: none;
                }

                button.isseach{
                    border: 1px solid #c1c1c1;
                }

                input.isseach{
                    border: 1px solid #c1c1c1;
                }

        }


        // 个人信息
        .gweb_nav_right{
            button{
                i.fa-sun-o{ 
                        color: var(--show_sun_color);
                        &:hover{
                         color: var(--show_moon_color);
                        }
                    }
                    i.fa-moon-o{
                        color: var(--show_moon_color);
                        &:hover{
                            color: var(--show_sun_color);
                        }
                    }
            } 
        }  

    }   

    
</style>