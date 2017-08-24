<template>
  <div class="hotnewsitemWrap">
    <div class="hotnewsitem_left">
      <h3 class="title">{{titletxt}}</h3>
      <p class="desc">{{desctxt}}</p>
      <p class="fen">—</p>
      <p class="author"><span>作者&nbsp;:&nbsp;&nbsp;</span>{{authortxt}}</p>
    </div>
    <img :src="coverpic" class="hotnewsitem_right">
  </div>
</template>
<style>
  .hotnewsitemWrap{padding: 15px;border-bottom: 1px solid #e4e4e4;height: 150px}
  .hotnewsitemWrap img{width: 100px}
  .hotnewsitem_left{float: left;width: 65%}
  .hotnewsitem_right{float: right}
  .hotnewsitemWrap .title{font-size: 16px;color: #4e4e4e;max-height: 65px;overflow: hidden;margin-bottom: 5px}
  .hotnewsitemWrap .desc{color: #9b9b9b;font-size: 12px;max-height: 52px;overflow: hidden;}
  .hotnewsitemWrap .fen{color:#c5c5c5}
  .hotnewsitemWrap .author{color:#c5c5c5;font-size: 12px}


</style>
<script>
  export default {
    props:["titletxt","desctxt","authortxt","coverpic"],
  }
</script>
