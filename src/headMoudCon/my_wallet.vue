<template lang="html">
  <div class="">
    <!--健康比较-->
 <div class="layout">
  <div class="container m_mt30 over m_mb50">
     <div class="container h-crumb">
         <ul>
          <span class="fl">您现在的位置：</span>
          <li class="fl"><a href="index.html">首页</a></li>
          <li class="fl active">健康钱包</li>
        </ul>
      </div>
    <div class="left-73 fl border right-height">
      <div class="h-compare">
      <div class="slide-nav2 fl">
        <ul>
          <router-link to="/my_wallet" tag="li" active-class="active">代金券</router-link>
          <router-link to="/my_account" tag="li" active-class="active">我的账户</router-link>
          <router-link to="/insurance" tag="li" active-class="active">社会医疗保险</router-link>
          <router-link to="/relief_fund" tag="li" active-class="active">慈善救助基金</router-link>
          <router-link to="/my_insurance" tag="li" active-class="active">我的保险</router-link>
          <router-link to="/add_insurance" tag="li" active-class="active">添加保险</router-link>
        </ul>
      </div>
      <router-view></router-view>

    </div>
    </div>
    <div class="fr h-remind">
      <!--医嘱信息和健康头条  -->
      <report_r></report_r>
    </div>
  </div>
</div><!--健康比较 end-->
  </div>
</template>

<script>
// 右边医嘱信息和健康头条
import report_r from '@/healthRepor/report_r'
export default {
  components:{
    report_r
  }
}
</script>

<style lang="css" scoped>
/*健康钱包*/
.slide-nav2 {
    width: 150px;
    background: #f9f9f9;
    float: left;
    margin-right: 15px;
}
.slide-nav2 li + li {
    border-top: 1px solid #e8e8e8;
}
.slide-nav2 li {
    line-height: 45px;
    cursor: pointer;
    padding-left: 30px;
    border-left: 2px solid transparent;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.slide-nav2 li:hover,.slide-nav2 ul .active{
    color: #179aff;
    padding-left: 40px;
    background: #fff;
}
.h-wallet {
    margin-left: 160px;
}
.h_income {
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}
.h_income3 .item {
    display: block;
    width: 100%;
}
.h_income .item {
    display: block;
    width: 33%;
    float: left;
    margin: 15px 0;
}
.h_income p {
    font-size: 16px;
    margin: 5px 0 0 30px;
}
.h_income .first b {
    color: #ff640b;
}
.h_income b {
    font-size: 30px;
    font-weight: normal;
    margin: 5px 0 0 24px;
}
.nav-tabs {
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}
.tab-style1 {
    width: 530px;
    margin: 0 auto;
    font-size: 20px;
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
.income .bill {
    line-height: 40px;
    overflow: hidden;
    margin: 0 20px;
}
.income .bill + .bill {
    border-top: 1px solid #e8e8e8;
}
.income .bill .fr {
    color: #999999;
}
.h-evaluatio3 {
    margin: 0;
    border: none;
}
.h-evaluatio {
    padding: 40px 0 60px 0;
}
.h-evaluatio .form-group {
    margin-bottom: 25px;
    padding-left: 30px;
    overflow: hidden;
    width: auto;
    line-height: 40px;
    zoom: 1;
}
.h-evaluatio .form-group .control-label {
    float: left;
    width: 105px;
    text-align: right;
}
.h-evaluatio .form-group .form-control2 {
    width: 42%;
    float: left;
    line-height: 14px;
    padding: 10px;
    font-size: 14px;
    color: #333;
}
.form-control2 {
    box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    display: block;
    width: 90%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.h-evaluatio3 .btn.btn-custom {
    margin-left: 136px;
    margin: 20px 0 0 136px;
    width: 100px;
}
</style>
