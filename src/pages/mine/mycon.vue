<template>
  <div class="myconWrap">
    <ul>
      <MyconItem myitemtxt="喜欢">
        <img src="../../assets/images/ic_my_likes.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="日记">
        <img src="../../assets/images/ic_my_note.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="相册">
        <img src="../../assets/images/ic_my_album.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="我的广播">
        <img src="../../assets/images/ic_my_status.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="电影·电视">
        <img src="../../assets/images/ic_my_movies_tvs.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="读书">
        <img src="../../assets/images/ic_my_books.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="音乐">
        <img src="../../assets/images/ic_my_music.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="同城活动">
        <img src="../../assets/images/ic_my_events.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="豆瓣时间">
        <img src="../../assets/images/ic_tv_clock.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="豆列">
        <img src="../../assets/images/ic_my_doulist.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="订单">
        <img src="../../assets/images/ic_my_orders.png" slot="myconitemImg">
      </MyconItem>
      <MyconItem myitemtxt="钱包">
        <img src="../../assets/images/ic_my_wallet.png" slot="myconitemImg">
      </MyconItem>
    </ul>
  </div>
</template>
<style>
  .myconWrap{width: 100%;background: #fff;height: 345px}
</style>
<script>
  import MyconItem from "./myconitem"
  export default {
    components:{
      MyconItem
    }
  }
</script>
