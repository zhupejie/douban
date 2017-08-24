<template>
  <div  class="headerWrap" :class="{green:bol}">
    <span>{{txt}}</span>
    <slot name="leftImg"></slot>
    <slot name="rightImg"></slot>
    <slot name="searchInput"></slot>
  </div>
</template>
<style>
  .headerWrap{width: 100%;height: 48px;background: #F8F8F8;text-align: center;line-height: 48px;border-bottom: 1px solid #E1E1E1;font-weight: bold;color: #545454;font-size: 16px;letter-spacing: 1px;position: fixed;box-shadow:0 0 3px #DCD6D6;top:0;z-index: 10}
  .headerWrap img{width: 25px;position: fixed}
  .leftImg{top:15px;right: 20%;}
  .rightImg{top:13px;right:4%;}
  .green{background: #42C055;}
</style>
<script>
  export default {
    props:["txt","bol"]
  }
</script>
