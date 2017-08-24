<template>
  <div>
    <div class="searchWrap">
      <MyHeader bol="true">
        <img src="../../assets/images/ic_chat_white.png" class="rightImg" slot="rightImg">
        <input :placeholder="msg" slot="searchInput">
      </MyHeader>
      <img src="../../assets/images/ic_search_gray.png" class="search" @click="fn()">
      <img src="../../assets/images/ic_scan_gray.png" class="scan">
    </div>
    <MyLoop swipeid="swipe01" :autoplay="1000">
      <div class="swiper-slide" slot="swiper-con">
        <img src="../../assets/images/banner/01.jpg">
      </div>
      <div class="swiper-slide" slot="swiper-con">
        <img src="../../assets/images/banner/02.jpg">
      </div>
      <div class="swiper-slide" slot="swiper-con">
        <img src="../../assets/images/banner/03.jpg">
      </div>
    </MyLoop>
    <HotNews>

    </HotNews>
  </div>

</template>
<script>
  import MyHeader from "../../components/header"
  import MyLoop from "./loop"
  import HotNews from "./hotnews"
  export default {
    components:{
      MyHeader,
      MyLoop,
      HotNews
    },
    data:function(){
      return{
        msg:"影视 图书 唱片 小组等",
      }
    },
    methods:{
      fn:function(){

       this.msg="找不到"

      }
    }
  }
</script>
<style>
  .searchWrap{width: 100%;height: 48px;background: #42C055;text-align: center;color: #fff;font-size: 14px;line-height: 48px}
  .searchWrap input{outline:none;border-radius: 5px;height: 30px;width: 86%;position: absolute;top:11px;left: 8px;text-indent: 10%;font-size: 15px;}
  /*webkit内核的浏览器*/
  .searchWrap input::-webkit-input-placeholder{
    color:#D6D6D6;
  }
  /*firefox 19+*/
  .searchWrap input::-moz-placeholder{
    color:#D6D6D6;
  }
  /*firefox 4-18*/
  .searchWrap input:-ms-input-placeholder{
    color:#D6D6D6;
  }
  /*ie*/
  .searchWrap input:-moz-placeholder{
    color:#D6D6D6;
  }
  .search{top:18px;left: 4%;width: 17px;position: fixed;z-index: 10}
  .scan{width: 15px;top:20px;right: 15%;position: fixed;z-index: 10}
  .searchWrap .rightImg{width: 24px;top:17px;right:3%;}
  .searchWrap .headerWrap{border-bottom: none}
</style>
