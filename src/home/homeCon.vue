<template>
  <div class="">
  <div class="slide-box">
      <div class="swiper-container" id="slide-box">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/img/adimg/ad-img1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/adimg/ad-img2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="../assets/img/adimg/ad-img3.jpg" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
    </div>
    </div>
    <!--健康头条-->
  <div class="bg-f4f layout">
    <div class="container">
      <h3 class="h-tit1">
        健康头条
        <a href="##" class="more">更多</a>
      </h3>
      <ul class="h-headlines">
        <li class="fl">
          <a href="javascript:void(0)">
            <div class="pic"><img src="../assets/img/adimg/ad-index01.jpg" alt=""></div>
            <div class="des">
              <h4>全民口腔打造移动口腔医疗2.0时代 </h4>
              <p>移动互联网高速发展的今天，移动医疗应用广受各大医疗健康及服务领服务于各种人群和平台的多元化模式的医疗APP正不断更新着传统的医疗健康行业，移动医疗市场的竞争已愈演愈烈。</p>
              <label>2017/01/19</label>
            </div>
          </a>
        </li>
        <li class="fl">
          <a href="javascript:void(0)">
            <div class="pic"><img src="../assets/img/adimg/ad-index02.jpg" alt=""></div>
            <div class="des">
              <h4>小儿营养不良的危害是什么？ </h4>
              <p>营养不良初期，身高并无影响，但随着病情加重，骨骼生长减慢，身高</p>
              <label>2017/01/19</label>
            </div>
          </a>
        </li>
        <li class="fl">
          <a href="javascript:void(0)">
            <div class="pic"><img src="../assets/img/adimg/ad-index03.jpg" alt=""></div>
            <div class="des">
              <h4>关键问题：吃什么可以防癌？</h4>
              <p>研究表明，四氯化碳对肝功能有很强的损伤作用，而紫薯中的花色苷对于</p>
              <label>2017/01/19</label>
            </div>
          </a>
        </li>
        <li class="fl">
          <a href="javascript:void(0)">
            <div class="pic"><img src="../assets/img/adimg/ad-index04.jpg" alt=""></div>
            <div class="des">
              <h4>初春这样做，可防癌</h4>
              <p>“阳光是个宝，晒晒身体好”。这句话大家耳熟能详，但晒太阳究竟好在服务于各种人群和平台的多元化模式的医疗APP正不断更新着传统的医疗健康行业，移动医疗市场的竞争已愈演愈烈。</p>
              <label>2017/01/19</label>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div> <!--健康头条 end-->

  <!--健康论坛-->
   <div class="layout">
    <div class="container m_mt30 m_mb50">
      <div class="left-73 fl">
        <nav class="nav-tabs">
          <ul class="tab-style1 flex">
              <li v-for="(item,index) in tabs" :class="{active:index == num}"  @mouseenter="tab(index)">{{item}}</li>
          </ul>
        </nav>
        <div class="forum-box">
          <div class="">
            <ul v-for='(itemCon,index) in tabContents'
v-show=" index == num" :key="index" class="box_ul">
              <li>
                <a class="flex">
                  <div class="pic">
                      <img :src="itemCon.image" alt="">
                  </div>
                  <div class="des">
                      <h4>{{itemCon.title}}</h4>
                      <p class="line1">{{itemCon.broadcast}}</p>
                      <p>{{itemCon.con}}</p>
                      <p class="money">{{itemCon.price}}</p>
                      <div class="flex flex_jus_between">
                        <span class="time">{{itemCon.time}}</span>
                        <span><em class="read">{{itemCon.size}}</em><em class="comment">{{itemCon.size1}}</em></span>
                      </div>
                  </div>
                </a>
              </li>
</ul>
          </div>

        <div class="ad-box">
          <div><a href="##"><img src="../assets/img/adimg/ad_box1.jpg" alt=""></a></div>
        </div>
        </div>

      </div>

    </div>
  </div>
  <!--健康论坛 end-->
  </div>
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'

export default {
  data(){
    return{
      tabs: ["论坛", "培训","展会"],
      tabContents: [
        {
          image:require("../assets/img/adimg/ad-index05.jpg"),
          title:"糖尿病论坛",
          con:"朋友们好！ 最近几个月我自测血糖一直偏高。最近饮食已经是很注意了，但空腹血糖还是在5.6左右。餐后1 ～2小时 8点多、10点多的。有过两次餐后两小时12点多呢，最近体重有所下降",
          time:"11分前",
          size:"981",
          size1:"2312"
      },
      {
        image:require("../assets/img/adimg/ad-index06.jpg"),
        title:"手指教您看健康",
        con:"有没有疾病，先看手，看手了解您的身体状况，一个人的正常健康手指是怎么样的呢？应该皮肤血色红.看手了解您的身体状况",
        broadcast:"2016-12-07 8:00直播",
        price:"￥130"
      },
      {
        image:require("../assets/img/adimg/ad-index05.jpg"),
        title:"第三十一届西部国际医疗器械展览会邀请函",
        con:"朋友们好！ 最近几个月我自测血糖一直偏高。最近饮食已经是很注意了，但空腹血糖还是在5.6左右。餐后1 ～2小时 8点多、10点多的。有过两次餐后两小时12点多呢，最近体重有所下降",
        time:"11分前",
        size:"981",
        size1:"2312"
      }
    ],
      num: 0
    }
  },
  methods:{
    tab(index) {
           this.num = index;
       }
  },
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

<style scoped>
.active{
border-bottom:2px solid #179aff;
}
/*.slide-box{
  margin-top: 202px;
}*/
.layout {
    zoom: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    width: 100%;
    min-width: 1200px;
}
.bg-f4f {
    background: #f4f5f7;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    width: 1200px;
}
.h-tit1 {
    font-size: 20px;
    text-align: center;
    padding: 50px 0 30px;
}
.h-tit1 .more {
    display: block;
    font-size: 16px;
    position: relative;
    color: #999999;
    width: 50px;
    margin: 0 auto;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.h-headlines {
    padding-bottom: 30px;
    overflow: hidden;
}
.h-headlines li {
    width: 25%;
}
.h-headlines li a {
    display: block;
    background: #fff;
    overflow: hidden;
    color: #333333;
    margin-right: 10px;
    border-bottom: 2px solid transparent;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.h-headlines li .pic {
    width: 290px;
    height: 175px;
}
.h-headlines li .des {
    overflow: hidden;
    padding: 0 20px 15px 10px;
}
.h-headlines li .des:hover{
  background-color: #d3d5d6;
  border-bottom: 2px solid #179aff;
}
.h-headlines li .des h4 {
    font-size: 16px;
    line-height: 55px;
    margin-top: 5px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.h-headlines li .des p {
    color: #999999;
    height: 40px;
    margin-bottom: 5px;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.h-headlines li .des label {
    font-size: 12px;
    color: #ccc;
}
h3.h-tit1 .more:before {
    content: "";
    display: block;
    overflow: hidden;
    width: 45px;
    height: 1px;
    background: #179aff;
    position: absolute;
    left: -45px;
    top: 50%;
}
.h-tit1 .more:after {
    content: "";
    display: block;
    overflow: hidden;
    width: 45px;
    height: 1px;
    background: #179aff;
    position: absolute;
    right: -45px;
    top: 50%;
  }
  .layout {
      zoom: 1;
      margin-right: auto;
      margin-left: auto;
      padding: 0;
      width: 100%;
      min-width: 1200px;
  }
  .nav-tabs {
      height: 45px;
      line-height: 45px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e8e8e8;
  }
  .tab-style1 {
    width: 220px;
    margin: 0 auto;
    font-size: 20px;
}
.tab-style1 li {
    text-align: center;
    width: 30%;
    margin-right: 2%;
    z-index: 2;
    display: block;
    font-size: 20px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.forum-box{
  width: 1200px;
  display: flex;
}
.forum-box .box_ul{
    width: 892px;
}
.box_ul li{
  width: 100%;
  padding: 14px 0;
  border: 1px solid #e8e8e8;
}
.box_ul .pic {
    width: 200px;
    height: 120px;
    overflow: hidden;
}
.box_ul .des {
    overflow: hidden;
    padding: 0 30px 0 20px;
    height: 120px;
    color: #000000;
}
.box_ul li p {
    max-height: 42px;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
}
p.money {
    color: #f71231 !important;
    font-size: 20px;
}
.box_ul li h4 {
    font-size: 18px;
    line-height: 40px;

}
.time{
    color: #999999;
}
.box_ul li em {
    font-size: 12px;
    color: #999999;
    margin-left: 10px;
    padding-left: 20px;
    background: url(../assets/img/icons/bg_in.png) 0 3px no-repeat;
}
.ad-box {
    width: 25%;
    margin-top: -20px;
}
.ad-box img {
    width: 100%;
    margin-bottom: 20px;
    margin-left: 20px;
}
/*.inner-footer {
    clear: both;
    border-top: 1px solid #e8e8e8;
     margin-top: 70px;
}
.over {
    overflow: hidden;
}
.layout:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
.inner-footer .logo {
    width: 22.5%;
    margin: 30px 0 25px;
}
.inner-footer .logo img {
    width: 100%;
    height: 100%;
}
.inner-footer .y_fotcont {
    width: 53%;
}
.inner-footer dl {
    width: 28%;
    margin: 30px 0 0;
    border-left: 1px dashed #e0e0e0;
    padding-left: 4%;
    padding-top: 12px;
}
.inner-footer dl dt {
    font-size: 16px;
}
.inner-footer dl dd a {
    color: #999999;
    font-size: 12px;
    line-height: 24px;
    margin-right: 15%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.inner-footer .tel {
    width: 21.8%;
    margin-top: 50px;
}
.footer-bottom {
    clear: both;
    line-height: 25px;
    text-align: center;
    color: #999999;
    padding: 25px 0 50px !important;
}*/
</style>
