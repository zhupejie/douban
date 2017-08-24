<template>
  <div class="movieWrap">
    <div class="movietop">
      <div class="movietitle">
        <h3>影院热映</h3>
        <a><img src="../../assets/images/ic_arrow_green_right.png"></a><span>更多</span>
      </div>
      <div class="movieloop">
        <MyLoop swipeid="swipe02" :autoplay="0" :pagination=false :slidesPerView="3" :spaceBetween="10">
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="战狼2">
              <img src="../../assets/images/movie1.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score7.5_03.jpg">
                <span>7.5</span>
              </div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="建军大业">
              <img src="../../assets/images/movie2.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">暂无评分</div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="大耳朵图图之美食狂想曲">
              <img src="../../assets/images/movie3.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">暂无评分</div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="绣春刀II：修罗战场">
              <img src="../../assets/images/movie4.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score7.5_03.jpg">
                <span>7.6</span>
              </div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="神偷奶爸3">
              <img src="../../assets/images/movie5.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score7_03.jpg">
                <span>7.0</span>
              </div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="豆福传">
              <img src="../../assets/images/movie6.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score6_03.jpg">
                <span>5.8</span>
              </div>
            </MoiveItem>
          </div>
        </MyLoop>
      </div>
    </div>

    <div class="moviemiddle">
      <img src="../../assets/images/guide_header.png">
      <h3>“康熙”合体，小S放飞自我，白眼怒怼恶评</h3>
    </div>

    <div class="movietop">
      <div class="movietitle">
        <h3>院线即将上映</h3>
        <a><img src="../../assets/images/ic_arrow_green_right.png"></a><span>更多</span>
      </div>
      <div class="movieloop">
        <MyLoop swipeid="swipe03" :autoplay="0" :pagination=false :slidesPerView="3" :spaceBetween="10">
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="战狼2">
              <img src="../../assets/images/movie1.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score7.5_03.jpg">
                <span>7.5</span>
              </div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="建军大业">
              <img src="../../assets/images/movie2.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">暂无评分</div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="大耳朵图图之美食狂想曲">
              <img src="../../assets/images/movie3.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">暂无评分</div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="绣春刀II：修罗战场">
              <img src="../../assets/images/movie4.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score7.5_03.jpg">
                <span>7.6</span>
              </div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="神偷奶爸3">
              <img src="../../assets/images/movie5.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score7_03.jpg">
                <span>7.0</span>
              </div>
            </MoiveItem>
          </div>
          <div class="swiper-slide" slot="swiper-con">
            <MoiveItem moviename="豆福传">
              <img src="../../assets/images/movie6.jpg" slot="moviepic">
              <div slot="moviescore" class="moviescore">
                <img src="../../assets/images/score6_03.jpg">
                <span>5.8</span>
              </div>
            </MoiveItem>
          </div>
        </MyLoop>
      </div>
    </div>
  </div>
</template>
<style>
  .movietop{padding: 20px 0 20px 20px;background: #fff}
  .movietitle{height: 30px;margin-bottom: 20px;line-height: 30px}
  .movietitle h3{float: left}
  .movietitle span{float: right;margin-right: 2%;color: #42C055;}
  .movietitle img{width: 10px}
  .movietitle a{display:block;float: right;vertical-align: middle;margin-right: 5%;}
  .moviescore{font-size: 14px;color: #ccc}
  .movieitem .moviescore img{width: 50%}
  .moviescore span{color: #a0a0a0}
  .moviemiddle{width: 100%;margin: 20px 0;background: #fff}
  .moviemiddle>img{width: 100%}
  .moviemiddle>h3{padding: 10px}
</style>
<script>
  import MyLoop from "../home/loop"
  import MoiveItem from "./movieitem"
  export default {
    components: {
      MyLoop,
      MoiveItem

    }
  }
</script>
