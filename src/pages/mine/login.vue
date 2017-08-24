<template>
  <div class="loginWrap">
    <slot name="loginImg"></slot>
    <button type="button">{{logintxt}}</button>
  </div>
</template>
<style>
  .loginWrap{width: 100%;height: 120px;line-height: 120px;background: url("../../assets/images/ic_my_default_bg.png") no-repeat;background-size:cover;position: relative;margin-bottom: 10px}
  .loginWrap button {background: none;border: 2px solid rgba(255,255,255,.5); border-radius: 5px;color: #fff;padding: 10px 40px;font-size: 14px;position: absolute;right:10%;top:30%;}
  .loginImg{width: 60px;border: 2px solid #fff;border-radius: 50%;position: absolute;top:25%;left:5%}
</style>
<script>
  export default {
    props:["logintxt"]
  }
</script>
