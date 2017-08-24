<template>
  <div class="btnarea">
    <button type="button" :class="{ac:bol}" @click="fn()">{{choicebtntxt}}</button>
  </div>
</template>
<style>
  .btnarea{height: 60px;background: rgba(255,255,255,.9);position: fixed;z-index: 10;width: 100%;bottom: 60px;line-height: 60px;text-align: right}
  .btnarea button{border: none;border-radius: 5px;background: #e2e2e2;padding: 10px;color: #fff;outline: none;margin-right: 10px}
  .btnarea .ac{background:#42BD56}
</style>
<script>
  export  default {
    props:["choicebtntxt","light_bol"],
    computed:{
      bol:function(){
        if(this.light_bol==1){
          return false;
        }
        return true
      }
    },
    methods:{
      fn:function(){
        console.log("进入小组"+this.light_bol)
      }
    }
  }
</script>
