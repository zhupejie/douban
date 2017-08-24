<template>
  <div class="groupbannerWrap">
    <div class="bannermain">
      <h3><span>{{groupnum}}</span>个小组等你来玩</h3>
      <p>立即选择加入吧</p>
      <p class="bannermainTxt">根据你的兴趣推荐</p>
    </div>
    <div class="bannerbot">
      <slot name="commendImg"></slot>
      <p class="bannerbotTxt">精选推荐</p>
    </div>
  </div>
</template>
<style>
  .groupbannerWrap{width: 100%}
  .bannermain{min-height: 150px;background: url("../../assets/images/ic_group_banner.png") no-repeat;background-size:cover;text-align: center;position: relative;padding: 10px}
  .bannermain h3{margin-top:50px }
  .bannermain p{color: #adadad}
  .bannermain .bannermainTxt{position: absolute;left: 10px;bottom: 10px;font-size: 12px;color: #a1a1a1}
  .bannerbot{margin: 20px 10px;position: relative}
  .bannerbot img{width: 100%}
  .bannerbotTxt{position: absolute;bottom:15%;left: 10px;color: #fff}
</style>
<script>
  export default {
    props:["groupnum"]
  }
</script>
