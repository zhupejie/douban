<template>
  <div>
    <div class="choiceWrap" v-for="(item,key,index) in grouparr">
      <h2>{{key}}</h2>
      <ChoiceItem :choiceitemtitle="val.groupitemtitle" :choiceitemcon="val.groupitemcon" :choicenum="val.groupitemnum" light_mark=1 @light="lightval" :light_xuan="selected" v-for="val in item" :key="val.id">
        <img :src="val.groupitempic" slot="choiceitemPic">
        <img src="../../assets/images/ic_group_check_anonymous.png" slot="choicenormal">
        <img src="../../assets/images/ic_check_circle_pressed.png" slot="choiceactive">
      </ChoiceItem>
    </div>
    <ChoiceBtn choicebtntxt="选好了，进入小组" :light_bol="selected">
    </ChoiceBtn>
  </div>

</template>
<style>
  .choiceWrap{margin: 10px 10px;border-top: 1px solid #d4d4d4;position: relative;padding: 30px 0;}
  .choiceWrap h2{padding:0 20px;position: absolute;top:-10px;background: #fff;font-size: 16px;left:40%}
</style>
<script>
  import ChoiceItem from "./choiceitem"
  import ChoiceBtn from "../../components/choicebtn"
  export default {
    components:{
      ChoiceItem,
      ChoiceBtn
    },
    data:function(){
      return{
        selected:1,
        grouparr:
          {
            "影视":[
              {"groupitemtitle":"侯孝贤","groupitemcon":"“世界并没有那么多阴暗跟颓废，在整个变动的大时代里，生离死别变得那么”","groupitemnum":6635,"id":1,"groupitempic":require("../../assets/images/choiceitem_03.jpg")},
              {"groupitemtitle":"英剧！英剧！","groupitemcon":"看电视来的，别扯别的","groupitemnum":110265,"id":2,"groupitempic":require("../../assets/images/choiceitem_06.jpg")},
              {"groupitemtitle":"哈利波特和柯南迷","groupitemcon":"喜欢哈利咩？喜欢柯南咩？啊哈！你找对地方了！~很惊讶居然这么多","groupitemnum":8943,"id":3,"groupitempic":require("../../assets/images/choiceitem_08.jpg")}
            ],
            "读书":[
              {"groupitemtitle":"短篇小说分享组","groupitemcon":"本小组定位：资源分享群。本小组管理员将尽力维护本小组的干净","groupitemnum":70310,"id":1,"groupitempic":require("../../assets/images/choiceitem_10.jpg")},
              {"groupitemtitle":"提前上床我们一起读书","groupitemcon":"“这位先生认为，看电视和上网给人一种热闹的假象，关掉机器后人”","groupitemnum":684979,"id":2,"groupitempic":require("../../assets/images/choiceitem_12.jpg")},
              {"groupitemtitle":"哈利波特和柯南迷","groupitemcon":"喜欢哈利咩？喜欢柯南咩？啊哈！你找对地方了！~很惊讶居然这么多","groupitemnum":118059,"id":3,"groupitempic":require("../../assets/images/choiceitem_14.jpg")}
            ]
          }
      }
    },
    methods:{
      lightval:function(val){
        this.selected=val;
        console.log("父"+this.selected)
      }
    }
  }
</script>
