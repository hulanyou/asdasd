<template lang="html">
  <div class="">
    <div class="layout  m_mt30  m_mb50">
    <div class="container ">
      <div class="container h-crumb">
        <ul>
          <span class="fl">您现在的位置：</span>
          <li class="fl"><a href="index.html">首页</a></li>
          <li class="fl active">保险理赔</li>
        </ul>
        </div>
        <div class="h-wallet2">
          <div class="claim">
            <nav class="nav-tabs">
              <ul class="tab-style1">
                <li class="active">为本人申请</li>
                <li>为他人申请</li>
             </ul>
            </nav>
            <div class="cart_step cart_step_1">
              <div></div>
              <ul>
                <li>1.填写出险信息</li>
                <li>2.上传资料</li>
                <li>3.信息确认</li>
                <li>3.完成</li>
              </ul>
            </div>
            <router-view></router-view>
          </div>
        </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.h-wallet2 {
    border: 1px solid #e8e8e8;
}
.tab-style1 {
    width: 530px;
    margin: 0;
}
.tab-style1 {
    font-size: 20px;
}
.nav-tabs {
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}
.tab-style1 li.active {
    border-bottom-color: #10acff;
}
.tab-style1 li {
    width: 120px;
    font-size: 16px;
}
.tab-style1 li {
    float: left;
    text-align: center;
    position: relative;
    border: 1px solid transparent;
    border-bottom-width: 2px;
    width: 30%;
    margin-right: 2%;
    z-index: 2;
    display: block;
    font-size: 20px;
    cursor: pointer;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
.cart_step div {
    width: 100%;
    height: 23px;
    background: url(../assets/img/cart_bg2.jpg) no-repeat;
}
</style>
