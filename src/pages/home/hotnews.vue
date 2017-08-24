<template>
  <div class="hotnewsWrap">
    <div class="hot">热点</div>
    <HotnewsItem :titletxt="this.newsarr[0].title" :desctxt="this.newsarr[0].desc" :authortxt="this.newsarr[0].name" :coverpic="this.newsarr[0].cover_url"></HotnewsItem>
    <HotnewsItem :titletxt="this.newsarr[1].title" :desctxt="this.newsarr[1].desc" :authortxt="this.newsarr[1].name" :coverpic="this.newsarr[1].cover_url"></HotnewsItem>
    <HotnewsItem :titletxt="this.newsarr[2].title" :desctxt="this.newsarr[2].desc" :authortxt="this.newsarr[2].name" :coverpic="this.newsarr[2].cover_url"></HotnewsItem>
    <HotnewsItem :titletxt="this.newsarr[3].title" :desctxt="this.newsarr[3].desc" :authortxt="this.newsarr[3].name" :coverpic="this.newsarr[3].cover_url"></HotnewsItem>
  </div>
</template>
<style>
  .hotnewsWrap{width: 100%}
  .hotnewsWrap .hot{color: #fc8243;border-left: 4px solid #fc8243;text-indent:1em}
</style>
<script>
  import HotnewsItem from "./hotnewsitem"
  export default {
    components:{
      HotnewsItem
    },
    data:function(){
      return{
        newsarr:[
          {
            "name": "大象公会",
            "cover_url": "https://qnmob2.doubanio.com/img/files/file-1489047494.jpg ",
            "desc": "我们这一代人的成长年代，真正的诗歌课从来都是缺席的。",
            "title": "个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手",
          },
          {
            "name": "豆瓣",
            "cover_url": "https://qnmob2.doubanio.com/img/files/file-1488961780.JPG ",
            "desc": "真想看狼叔一直打下去，文末有小贱贱彩蛋！",
            "title": "《金刚狼3》剪掉的，这个混剪回忆杀全部还给你",
          },
          {
            "name": "豆瓣",
            "cover_url": "https://qnmob2.doubanio.com/img/files/file-1488958706.jpg ",
            "desc": "听一个朋友说，家里很重、很难打开的卧室门，常常被蹊跷地打开……",
            "title": "广播精选｜跨物种的精诚合作真是好感人",
          },
          {
            "name": "雾港",
            "cover_url": "https://qnmob2.doubanio.com/img/files/file-1488880359.jpg ",
            "desc": "若能与少年藤井树相遇于《情书》的书架前，你会选择穿什么香水？",
            "title": "爱美丽 | 这7支文艺系香水，犹如写给图书馆的七封情书",
          }
        ]
      }
    },
  }

</script>

