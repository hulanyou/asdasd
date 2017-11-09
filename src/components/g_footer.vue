<template lang="html">
<div class="">
  <!--底部信息栏-->
  <div class="inner-footer layout">
    <div class="container border_b over">
      <div class="logo fl">
        <img src="../assets/img/logo2.jpg" alt="">
      </div>
      <div class="y_fotcont fl">
        <dl class="fl">
          <dt>关于云朵</dt>
          <dd>
            <a href="#" class="fl">关于我们</a>
            <a href="#" class="fl">关于我们</a>
            <a href="#" class="fl">加入云朵</a>
            <a href="#" class="fl">加入云朵</a>
            <a href="#" class="fl">联系我们</a>
            <a href="#" class="fl">联系我们</a>
          </dd>
        </dl>
        <dl class="fl">
          <dt>合作伙伴</dt>
          <dd>
            <a href="#" class="fl">关于我们</a>
            <a href="#" class="fl">关于我们</a>
            <a href="#" class="fl">加入云朵</a>
            <a href="#" class="fl">加入云朵</a>
            <a href="#" class="fl">联系我们</a>
            <a href="#" class="fl">联系我们</a>
          </dd>
        </dl>
        <dl class="fl">
          <dt>友情链接</dt>
           <dd>
            <a href="#" class="fl">关于我们</a>
            <a href="#" class="fl">关于我们</a>
            <a href="#" class="fl">加入云朵</a>
            <a href="#" class="fl">加入云朵</a>
            <a href="#" class="fl">联系我们</a>
            <a href="#" class="fl">联系我们</a>
          </dd>
        </dl>
      </div>
      <div class="tel fr">
        <img src="../assets/img/tel.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="footer-bottom layout">
    <div class="container">
      <p>北京市公安局海淀分局备案编号：0101101081513经营许可证编号：京ICP证080257号京ICP备10047209号-1</p>
      <p>京卫计网审【2015】第0237号互联网药品信息服务资格证书编号：(京)-经营性-2013-0006Copyright 2002-2017 All rights reserved</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.inner-footer {
    clear: both;
    border-top: 1px solid #e8e8e8;
    /* margin-top: 70px; */
}
.over {
    overflow: hidden;
}
.inner-footer .container {
    border-bottom: 1px solid #e8e8e8;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    width: 1200px;
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
}
</style>
