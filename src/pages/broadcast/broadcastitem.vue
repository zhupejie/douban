<template>
  <div class="broadcastitem">
    <div class="broadcastpic">
      <slot name="broadcastpic"></slot>
    </div>
    <slot name="b_close"></slot>
    <div class="broadcastcon">
      <div class="broadcastcontop">
        <div class="broadcastcontopleft">
          <h3 class="pname">{{pname}}</h3>
          <p>{{pnum}}<span>人关注</span></p>
        </div>
        <button type="button">关注</button>
      </div>
      <p>{{pcon}}</p>
      <div class="broadcastconbot">
        <span class="zanpic"><i><img src="../../assets/images/ic_liked.png"></i>{{zan}}</span>
        <span  class="liuyanpic"><i><img src="../../assets/images/ic_feedback_comment.png"></i>{{liuyan}}</span>
      </div>

    </div>
  </div>
</template>
<style>
  .broadcastitem{margin: 10px;padding: 20px 10% 10px 20%;background: #fff;position: relative;border-radius: 5px;box-shadow: 0 0 10px #ccc}
  .broadcastpic{position:absolute;left: 2%;top:5%;border-radius: 50%;}
  .broadcastpic img{width: 60px}
  .close{position: absolute;right: 2%;top: 2%;color: #c9c9c9;font-size: 12px;}
  .broadcastcontop{height: 60px;}
  .broadcastcontopleft{float: left}
  .broadcastcontopleft>p{color: #878787;font-size: 12px;padding-top: 5px}
  .broadcastcontop button{float: right;border: none;border-radius: 5px;background: #42c055;color: #fff;padding: 10px 30px;outline: none}
  .broadcastconbot{margin-top: 10px}
  .zanpic,.liuyanpic{font-size: 12px;color: #ccc;}
  .zanpic img,.liuyanpic img{width: 20px}
</style>
<script>
  export default {
    props:["pname","pnum","pcon","zan","liuyan"]
  }
</script>
