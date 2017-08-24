<template>
  <div class="mineWrap">
    <div class="minetop">
      <MyHeader txt="我的">
        <img src="../../assets/images/ic_settings.png" class="rightImg" slot="rightImg">
      </MyHeader>
    </div>
    <MyLogin logintxt="登录 / 注册">
      <img src="../../assets/images/ic_user_male.png" class="loginImg" slot="loginImg">
    </MyLogin>
    <MyRemind>
      <p slot="remindMsg">{{message}}</p>
    </MyRemind>
    <MyCon></MyCon>
    <div class="minebot">&nbsp;</div>
  </div>
</template>
<script>
  import MyHeader from "../../components/header"
  import MyLogin from "./login"
  import MyRemind from "./remind"
  import MyCon from "./mycon"
  export default {
    components:{
      MyHeader,
      MyLogin,
      MyRemind,
      MyCon
    },
    data:function(){
      return{
        message:"暂无新提醒"
      }
    }
  }
</script>
<style>
  .mineWrap{background: #F2F1EE;}
  .minetop{height: 48px;}
  .minebot{height: 70px;}
</style>
