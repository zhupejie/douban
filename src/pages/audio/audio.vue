<template>
  <div class="audioWrap">
    <div class="audiotop">
      <MyHeader txt="书影音">
        <img src="../../assets/images/ic_group_search.png" class="leftImg" slot="leftImg">
        <img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="rightImg">
      </MyHeader>
    </div>

    <ul>
      <li :class="{ac:nowIndex==1}" @click="nowIndex=1">
        <router-link to="/audio/movie">电影</router-link>
      </li>
      <li :class="{ac:nowIndex==2}" @click="nowIndex=2">
        <router-link to="/audio/read">读书</router-link>
      </li>
      <li :class="{ac:nowIndex==3}" @click="nowIndex=3">
        <router-link to="/audio/tv">电视</router-link>
      </li>
      <li :class="{ac:nowIndex==4}" @click="nowIndex=4">
        <router-link to="/audio/city">同城</router-link>
      </li>
      <li :class="{ac:nowIndex==5}" @click="nowIndex=5">
        <router-link to="/audio/music">音乐</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import MyHeader from "../../components/header"
  export default {
    data:function(){
      return{
          nowIndex:1
      }
    },
//    beforeCreate:function(){
//      this.$router.push("/audio/movie")
//    },
    components:{
      MyHeader
    }
  }
</script>
<style>
  .audioWrap{background:#F5F5F5 }
  .audiotop{height: 48px;}
  .audioWrap ul{height: 35px;line-height: 35px;border-bottom: 1px solid #eee;padding-bottom: 2px;margin-bottom: 10px;background: #fff}
  .audioWrap li{float: left;width: 20%;text-align: center}
  .audioWrap li a{font-size: 14px;color: #999;}
  .audioWrap .ac{color: #42C055;border-bottom: 2px solid #42C055}
  .audioWrap .ac a{color: #42C055}
</style>
