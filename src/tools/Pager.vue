<template>
  <ul class="gweb_pager">
     <li class="pager_num">
        <span>共12篇</span>
     </li>
     <li class="pager_btn active_pager">
        <button :disabled="currentPage == 1" :class="currentPage == 1?'active':''" @click="currentPage--">
            <i class="fa fa-chevron-left"></i>
        </button>
     </li>


     <li class="active_pager" v-for="item in props" :class="item ===currentPage?'active':''">
        <button @click="currentPage=Number(item)" :disabled="item == '...'">
            <a>{{ item }}</a> 
        </button>
     </li>
    

      
     <li class="pager_btn active_pager">
        <button :disabled="currentPage == totalPages" @click="currentPage++" :class="currentPage == totalPages?'active':''">
            <i class="fa fa-chevron-right"></i>
        </button>
     </li>
  </ul>
</template>
    
<script lang='ts' setup>
import { reactive, toRefs , ref, watch, computed } from 'vue'
    



// 分多少页
let totalPages = ref(50)
// 当前页数
let currentPage = ref(1)

// 计算属性 计算 currentPage 不同情况
const props = computed(()=>{
    if(currentPage.value<=4){
        return [1,2,3,4,5,"...",totalPages.value]

    }else if (currentPage.value >= totalPages.value - 3) {
        return [1,"...",
        totalPages.value - 4,
        totalPages.value - 3,
        totalPages.value - 2,
        totalPages.value - 1,
        totalPages.value
    ]
      }else  {
        return [
        1, 
        '...', 
        currentPage.value-2,
        currentPage.value-1,
        currentPage.value,
        currentPage.value+1,
        currentPage.value+2,
        '...', 
        totalPages.value
    ]  
      }
})


</script>
<style lang='less'>
    
  .gweb_pager{
    li{
        margin-right: 10px;
    }

    .pager_num{
        display: inline-block;
        height: 32px;
        margin-right: 8px;
        line-height: 30px;
        vertical-align: middle;
    }

    .active_pager{
        display: inline-block;
        min-width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        vertical-align: middle;
        list-style: none;
        border-radius: 2px;
        transition: all .3s;
        outline: 0;
        button{
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            text-align: center;
            background-color: var(--pg_bg);
            border: 1px solid;
            border-color: var(--pg_boder);
            border-radius: 2px;
            outline: none;
            transition: all .3s; 
            line-height: 32px;
            color: var(--pg_color);
            cursor: pointer;
            a{
                display: block;
                width: 100%;
                height: 100%;
                color: inherit;
            }

            &:hover{
              border-color: var(--pg_hove);
              color: var(--pg_hove);
            }

            i{
                font-size: 12px;
                color: inherit;
                font-weight: 200;
            }
        }

        // 左右按钮 到边界
        button.active{
            cursor:not-allowed;
            border-color:var(--pg_boder);
            color: var(--active_btn);
            &:hover{
            border: 1px solid;
            border-color:var(--pg_boder);
            color: var(--active_btn);
            }
        }

        
    }

    // 选中 框
    .active_pager.active{
        button{
        border-color: var(--pg_hove);
        color: var(--pg_hove);
        }
    }

    }

  


</style>