<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <div :class="{'swiper-pagination':pagination}" :style="{'text-align':paginationDirection}"></div>
  </div>
</template>
<script>

  import "../../assets/libs/swiper/js/swiper.js"
  export default {
    props:{
      swipeid:{//轮播的编号
        type:String,
        default:""
      },
      effect:{//借鉴swiperAPI手册的参数
        type:String,
        default:"slide"
      },
      loop:{//借鉴swiperAPI手册的参数
        type:Boolean,
        default:true
      },
      direction:{//借鉴swiperAPI手册的参数
        type:String,
        default:"horizontal"
      },
      autoplay:{//借鉴swiperAPI手册的参数
        type:Number,
        default:3000
      },
      paginationType:{//借鉴swiperAPI手册的参数
        type:String,
        default:"bullets"
      },
      pagination:{//用来是否启用分页器，自造
        type:Boolean,
        default:true
      },
      paginationDirection:{//用来调分页器位置，自造
        type:String,
        default:"right"
      },
      slidesPerView:{
        type:Number,
        default:1
      },
      spaceBetween:{
        type:Number,
        default:0
      }
    },
    mounted:function(){//this vm 实例
      var That = this;//避免在new里面用this变成swiper而改一个名字
      new Swiper("."+That.swipeid,{//外层容器的选择器
        loop:That.loop,
        pagination:".swiper-pagination",
        paginationType:That.paginationType,
        autoplay:That.autoplay,
        direction:That.direction,
        effect:That.effect,
        autoplayDisableOnInteraction:false,//触碰是否静止轮播
        slidesPerView:That.slidesPerView,
        spaceBetween:That.spaceBetween
      })
    }
  }
  window.onresize=function(){//解决切换屏幕大小时轮播不动。重新加载
    new Swiper('.swiper-container',{
      loop: true,
      autoplay: 1000,
      pagination : '.swiper-pagination',
      slidesPerView:3,
      spaceBetween:10
    });
  }
</script>
<style>
  /*引入的最后分号一定要加*/
  @import "../../assets/libs/swiper/css/swiper.min.css";
  .swiper-container{margin-bottom: 10px}
  .swiper-container img{width: 100%}
</style>
