<template>
  <li class="itemWrap" @click="sel()">
      <span v-show="bol"><slot name="normalimg"></slot></span>
      <span v-show="!bol"><slot name="acimg"></slot></span>
      <span :class="{ac:!bol}">{{bottxt}}</span>
  </li>
</template>
<script>
  export default{
      props:["bottxt","mark","xuan"],

      methods: {
        sel: function () {
          this.$emit("change",this.mark);
          this.$router.push('/'+this.mark);
        }
      },
    computed:{
      bol:function(){
        if(this.mark==this.xuan){
          return false;
        }
        return true
      }
    }
  }
</script>
<style>
  .itemWrap{text-align: center;width: 20%;float: left;padding-top: 5px}
  .itemWrap img{width: 35px}
  .itemWrap span{display: block;color: #a9a9a9;font-size: 12px}
  .itemWrap .ac{color:#42BD56 }
</style>
