<template lang="html">
<div class="">
  <div class="user_tab_con clearfix">
   <ul class="user_tab clearfix flex" role="tablist">
       <router-link to="/workingAccount/supplier" tag="li" active-class="active">供应商</router-link>
       <router-link to="/workingAccount/regionalBusinessUnit" tag="li"  active-class="active">区域事业部</router-link>
       <router-link to="/workingAccount/nationalDivision" tag="li"  active-class="active">全国事业部</router-link>
   </ul>
 </div>
   <router-view></router-view>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.user_tab_con {
    height: 40px;
    border-bottom: 2px solid #10adff;
    margin-top: 14px;
}
.user_tab {

    height: 100%;
    line-height: 40px;
    text-align: center;
}
.user_tab li {
  width: 160px;
  text-align: ccenter;
  position: relative;
}
.user_tab li:hover{
  background: #25a3f7;
  color: #fff;
}
/*.user_tab li a:hover{
  color: #fff;
}*/
.user_tab li:after{
  content: 'I';
  position: absolute;
  right: 0px;
  color: #ccc;
}
.active{
  background: #25a3f7;
  color: #fff;
  text-align: center;
}

</style>
