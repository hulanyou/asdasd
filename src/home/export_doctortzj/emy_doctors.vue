<template lang="html">
<div class="">
  <div class="docboxs tab-pane">
   <p class="tip-b">您好，您还没有签约家庭医生， 签约家庭医生能为您提供专属的居家医疗，居家养老等家庭健康保障服务,请您选择您喜欢的家庭医生。</p>
   <h3 class="tit-b border-b">待签约的家庭医生</h3>
   <ul class="list-box list-box-four">
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
      <router-link to="/my_doctors" tag="li" class="list-li">
        <a href="my_doctors.html" class="list">
          <div class="pic">
            <img src="../../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
            <span class="name">高进 <label>执业医师</label></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="experience">健康管理</p>
            <p class="experience">挂号</p>
            <div class="money"><span>¥</span>0-300</div>
          </div>
          <button type="button" class="btn btn-custom">签约家庭医生</button>
        </a>
      </router-link>
   </ul>
 </div>
</div>
</template>

<script>
export default {
  methods:{
    isxianshi(){
      let listli=document.querySelectorAll('.list-li');
      let bths=document.querySelectorAll('.btn-custom');
      for (let i = 0; i < listli.length; i++) {
        listli[i].onmouseenter=function(){
        bths[i].classList.add("fadeInUp");
        }
      }
    },
    isyins(){
      let listli=document.querySelectorAll('.list-li');
      let bths=document.querySelectorAll('.btn-custom');
      for (let i = 0; i < listli.length; i++) {
        listli[i].onmouseleave=function(){
        bths[i].classList.remove("fadeInUp");
        }
      }
    }
  },
  mounted(){
    this.isxianshi();
    this.isyins();
  }
}
</script>

<style lang="css" scoped>
.list-box li:hover{
  border: 1px solid #10acff;
}
.docboxs {
    margin: 0 20px 0 160px;
}
.tip-b {
    background: #fff4e6;
    border: 1px solid #ff970a;
    font-size: 20px;
    padding: 30px 40px;
    line-height: 30px;
    color: #666666;
}
.tit-b {
    font-size: 18px;
    line-height: 50px;
}
.list-box {
    overflow: hidden;
    display: flex;
    -webkit-display: flex;
    -moz-display: flex;
    -o-display: flex;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
    -moz-justify-content: flex-start;
    -o-justify-content: flex-start;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -o-flex-wrap: wrap;
}
.list-box-four li {
    width: 22%;
    margin-right: 2%;
}
.list-box .list .money {
    font-size: 20px;
    color: #f71231;
    margin-top: 5px;
}
.list-box li {
    position: relative;
    text-align: center;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 10px;
}
.list-box .list {
    overflow: hidden;
    border: 1px solid #e8e8e8;
    display: block;
    padding: 30px 0 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.list-box .list .pic {
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin: 0 auto 5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.list-box .list .pic img {
    width: 100%;
    height: 100%;
}
.list-box .list .mes {
    font-size: 12px;
    color: #333333;
    margin: 0 10px;
}
.list-box .list .btn-custom {
    font-size: 16px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    z-index: 2;
    -webkit-transform: rotate(0) scale(1) skew(0) translateX(0) translateY(100%);
    -moz-transform: rotate(0) scale(1) skew(0) translateX(0) translateY(100%);
    -o-transform: rotate(0) scale(1) skew(0) translateX(0) translateY(100%);
    -ms-transform: rotate(0) scale(1) skew(0) translateX(0) translateY(100%);
    transform: rotate(0) scale(1) skew(0) translateX(0) translateY(100%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
</style>
