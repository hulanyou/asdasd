<template lang="html">
<div class="">
  <div class="slide-box">
      <div class="swiper-container" id="slide-box">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/adimg/ad-img2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/adimg/ad-img2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/adimg/ad-img2.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
    </div>
    </div>
</div>
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'
export default {
  mounted() {
     var mySwiper = new Swiper ('#slide-box', {
        //可选选项，自动滑动
        autoplay: 3000,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
         // 如果需要分页器
        pagination : '.swiper-pagination',
        // 圆点
        paginationClickable :true
   })
}
}
</script>

<style lang="css" scoped>
</style>
