<template>
  <div class="broadcastWrap">
    <div class="broadcasttop">
      <MyHeader txt="广播">
        <img src="../../assets/images/ic_status_search_user.png" class="leftImg" slot="leftImg">
        <img src="../../assets/images/ic_chat_green.png" class="rightImg" slot="rightImg">
      </MyHeader>
    </div>
    <div class="broadcasttitle">
      <div class="broadcasttitleleft">
        <img src="../../assets/images/ic_status_anonymous_header.png">
      </div>
      <div class="broadcasttitleright">
        <h3>发现有趣的人</h3>
        <p>关注他们，发现更大的世界</p>
      </div>
    </div>
    <BroadcastItem :pname="item.name" :pnum="item.num" :pcon="item.con" :zan="item.zan" :liuyan="item.liuyan" :key="item.id" v-for="(item,index) in broadcastarr">
      <span class="close" slot="b_close" @click="close(index)">X</span>
      <img :src="item.pic" slot="broadcastpic" @error="imgError(index)">
    </BroadcastItem>
    <ChoiceBtn choicebtntxt="选好了，进入广播"></ChoiceBtn>
  </div>
</template>
<script>
  import MyHeader from "../../components/header"
  import ChoiceBtn from "../../components/choicebtn"
  import BroadcastItem from "./broadcastitem"
  export default {
    components:{
      MyHeader,
      ChoiceBtn,
      BroadcastItem
    },
    data:function(){
      return{
        broadcastarr:[
          {"name":"陈苍苍","num":"53228","con":"我们没小孩的也很不容易啊！在加被别人的小孩吵，三天两头躲出去不就是为了图个清静吗！出门在外接着被各种熊孩子打扰，做个飞机小孩喊一路坐个高铁小孩也嚎一路，很不容易！help！哭哭，我化妆我健身我努力维持体面，为什么这么多小孩不肯放过我","zan":50,"liuyan":20,"id":1,"pic":"https://img3.doubanio.com/icon/g497421-2.jpg"},
          {"name":"苏美","num":"35219","con":"拿出皮尺，量了每一个花盆的口径，底径，高度，想算装土量，隐约记得初中还是高中时肯定会算。公式是什么呢","zan":8,"liuyan":34,"id":2,"pic":"https://img3.doubanio.com/icon/g19002-2.jpg"},
          {"name":"北岛","num":"53228","con":"一句我不相信的呐喊，震醒了茫茫黑夜酣睡的人们 从那从蝇眼中分裂的世界 里窥见人的价值的全面崩溃、人性的扭曲和异化。","zan":72,"liuyan":30,"id":3,"pic":"https://img3.doubanio.com/icon/g10526-3.jpg"},
          {"name":"娜斯塔霞的爱情","num":"53228","con":"娜斯塔霞的爱情是我所知的所有爱情中最令人痛苦的个案，多年来一直让我无法释怀。她对梅什金爱得坚定、彻底、绝对，梅什金是她破碎人生中全部的价值和意义所在，因为他是唯一一个给予她理解、尊重、肯定和宽容的人。当他在那个混乱的聚会上当众向她求婚时，她对他的爱就已经确定，并且终身不渝。这是一种知己之爱，是她痛苦的人生中一直渴念的灵魂慰藉。","zan":67,"liuyan":34,"id":4,"pic":"https://img3.doubanio.com/icon/u134658425-2.jpg"}
        ]
      }
    },
    methods:{
      imgError(i){
        this.broadcastarr[i].pic=require("../../assets/images/ic_user_male.png")
      },
      close(i){
        this.broadcastarr.splice(i,1)
      }
    }
  }
</script>
<style>
  .broadcastWrap{background: #f7f7f7}
  .broadcasttop{height: 48px;}
  .broadcasttitle{height: 130px;}
  .broadcasttitleleft{float: left;width: 40%;height: 130px}
  .broadcasttitleleft img{width: 100px;margin-left: 20%;margin-top: 20px}
  .broadcasttitleright{float: right;width: 60%;padding-top: 35px}
  .broadcasttitleright p{font-size: 13px;color: #8e8e8e;padding-top: 5px}
</style>
