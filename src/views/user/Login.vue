<template>
  <div class="gweb_login">
    <div class="login-box">
    <h2>IT_login</h2>
    <router-link to="/home" class="Esc_">Esc</router-link>
    <router-link to="/sign" class="no_">Sign</router-link>
    <form>
        <div class="login-field">
            <input type="text"  />
            <!--规定了必须填的文本-->
            <label>Username</label>
        </div>

        <div class="login-field">
            <input type="password"  />
            <label>Password</label>
        </div>

        <div class="verify">
            <input type="text" />
            <label>Verify</label>
            <img src="#" @click="get_random_Code">
        </div>

        <div class="buttom">
            <button type="button" @click="login" @keyup.enter="keyDown">Submit</button>
            <button type="reset" class="reset">Reset</button>
        </div>

    </form>
    </div>
</div>
   
  </template>
      
  <script lang='ts' setup>
  import { reactive, toRefs , ref } from 'vue'
      
  let login_form = reactive({
      name: "",
      pwd: "",
      code: "",
  })


  const get_random_Code = ()=>{

  }


  const login = ()=>{

  }


  const keyDown=()=>{

  }
  </script>
<style lang='less'>

.gweb_login{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;


  font-family: sans-serif;     //字体：无衬线字体，无特殊修饰的字体

  //背景图
  background: url("src/assets/images/login.jpg") no-repeat center 0;
  //0 center 的意思就是 水平位置0 垂直位置居中    no-repeat：不重复

  //background-size属性指定背景图片大小。
  background-size: cover;
  //cover：此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的 最小 大小。

  
  background-position: center 0;  //定位水平位置0 垂直位置居中
  background-repeat: no-repeat;   //属性设置是否及如何重复背景图像 不重复
  background-attachment: fixed;   //属性设置背景图像是否固定或者随着页面的其余部分滚动。 不移动
  -webkit-background-size: cover; //使浏览器背景图片铺满整个元素
  -o-background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;

}




//设置盒子宽高
.login-box{
  position: relative;
  width: 400px;
  padding:40px;

  background: rgba(0,0,0,.8);     //背景颜色

  box-sizing: border-box;       //规定盒子

  box-shadow: 0 15px  25px rgba(0,0,0,0.5);   //阴影部分

  border-radius: 10px;        //圆角
}
.login-box h2{
  margin: 0 0 30px;          //去除左右，给下面加边距
  padding: 0;
  text-align: center;
  color: #fff;
}
.no_{
  color: #fff;
  position: absolute;
  top: 10px;
  left: 350px;
  text-decoration:none;
}
.Esc_{
  color: #fff;
  top: 10px;
  left: 20px;
  position: absolute;
  text-decoration:none;
}


.login-box .login-field {
  position: relative;             //给父级添加一个定位
}

.verify{
  position: relative;
}

.login-box .login-field  input{
  width: 100%;                    //宽度100%
  padding: 10px 0;                //内边距，边框到边界之间的距离
  font-size: 16px;                 //字体
  color: #fff;
  margin-bottom: 30px;            //两个输入框距离
  border: none;
  border-bottom: 1px solid #fff;       //下边框线
  outline: none;
  background: transparent;       //输入框背景透明
}
.login-box .login-field  label{
  position: absolute;           //对于position: relative; 相对于定位
  top: 0;
  left: 0;

  letter-spacing: 1px;       //字母之间的距离
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;       //限制鼠标放上去的样式     直接放上去就是输入文本的鼠标样式
  transition: 0.5s;           //过渡
}

.verify input{
  width: 30%;                    //宽度100%
  padding: 10px 0;                //内边距，边框到边界之间的距离
  font-size: 16px;                 //字体
  color: #fff;
  margin-bottom: 10px;  //两个输入框距离
  border: none;
  border-bottom: 1px solid #fff;       //下边框线
  outline: none;
  background: transparent;       //输入框背景透明
}

.verify label{
  position: absolute;           //对于position: relative; 相对于定位
  top: 0;
  left: 0;

  letter-spacing: 1px;       //字母之间的距离
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;       //限制鼠标放上去的样式     直接放上去就是输入文本的鼠标样式
  transition: 0.5s;           //过渡
}

.verify img{
  height: 40px;
  width: 150px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #f0eeee;
  position: absolute;
  top: -3px;
  left: 172px;
}
//点击样式
.login-box .login-field input:focus ~ label {
   top: -23px;
   left: 0;
   color: aqua;
   font-size: 12px;
 }
 .login-box .verify input:focus ~ label{
   top: -23px;
   left: 0;
   color: aqua;
   font-size: 12px;
 }




.login-box button{
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;         //鼠标放上去的样式
  border-radius: 5px;

}
//两个边距
.buttom{
  display: flex;          //流性布局
  justify-content: space-between;    //按列排序
}

</style>