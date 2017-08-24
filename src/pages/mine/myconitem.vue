<template>
  <li class="myconitemWrap">
    <span><slot name="myconitemImg"></slot></span>
    <span>{{myitemtxt}}</span>
  </li>
</template>
<script>
  export default{
    props:["myitemtxt"]
  }
</script>
<style>
  .myconitemWrap{text-align: center;width: 25%;float: left;padding: 20px 0;border-bottom: 1px solid #e4e4e4;}
  .myconitemWrap img{width: 35px}
  .myconitemWrap span{display: block;color: #909090;font-size: 14px;padding: 5px 0}
</style>
