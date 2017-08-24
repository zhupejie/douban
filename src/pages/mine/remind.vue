<template>
  <div class="remindWrap">
    <div class="warn">
      <img src="../../assets/images/ic_mine_notification.png" class="wleftImg"/>
      <span>提醒</span>
      <img src="../../assets/images/ic_arrow_gray_small.png"  class="wrightImg"/>
    </div>
    <slot name="remindMsg"></slot>
  </div>
</template>
<style>
  .remindWrap{width: 100%;height: 100px;background: #fff;text-align: center;margin-bottom: 10px}
  .remindWrap .warn{height: 60px;margin-left: 5%;border-bottom: 1px solid #e4e4e4;line-height: 60px;position: relative;text-align: left}
  .remindWrap .warn img{width: 25px;position: absolute}
  .remindWrap .warn .wleftImg{top:20px;left: 0}
  .remindWrap .warn .wrightImg{top:20px;right: 5%}
  .remindWrap .warn span{margin-left: 35px;color: #494949;font-weight: bold}

  .remindWrap p{color: #ccc;height: 40px;line-height: 40px;font-size: 13px}
</style>

