<template>
  <div class="choiceitem">
   <div class="choiceitemleft">
     <div class="choiceitemPic">
        <slot name="choiceitemPic"></slot>
     </div>
     <div class="choiceitemText">
       <h3>{{choiceitemtitle}}</h3>
       <p>{{choiceitemcon}}</p>
     </div>
   </div>
    <div class="choiceitemright">
      <div class="choicebtn"  @click="sel()">
        <div  v-show="flag"><slot name="choicenormal"></slot></div>
        <div  v-show="!flag"><slot name="choiceactive"></slot></div>
      </div>
      <p class="choicenum">{{choicenum}}<span>人</span></p>
    </div>
  </div>
</template>
<style>
  .choiceitem{width: 100%;height: 60px;margin-bottom: 20px}
  .choiceitemleft{float: left;height: 60px;max-width: 70%;overflow: hidden;}
  .choiceitemPic{float: left;height: 60px;margin-right: 10px}
  .choiceitemPic img{height: 100%}
  .choiceitemText{float: left;height: 60px;overflow: hidden;max-width: 70%}
  .choiceitemText>h3{height: 25px;}
  .choiceitemText>p{color: #959595;font-size: 14px;}
  .choiceitemright{float: right;height: 60px;max-width: 30%;line-height: 60px;}
  .choiceitemright img{width: 25px;vertical-align: middle}
  .choicenum{float: right;font-size: 12px;color: #b5b5b5;margin-right: 10px}
  .choiceitemright .choicebtn{float: right;height: 60px;}
</style>
<script>
  export default {
    props:["choiceitemtitle","choiceitemcon","choicenum","light_mark","light_xuan"],
    data:function(){
      return{
        flag:true


      }
    },
    methods:{
      sel:function () {

        if(this.flag){

          this.flag=!this.flag

        }else {

          this.flag=!this.flag

        }


//        this.flag=!this.flag;
        this.$emit("light",this.light_mark);
        console.log(this.flag);
        console.log("点击"+this.light_mark)
      }
    }
  }
</script>
