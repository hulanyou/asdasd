<template lang="html">
  <div class="">
    <section class="h_testtit">
      <div class="scuccess-img">
          <img src="../../assets/img/fail.png" alt="">
      </div>
      <div class="content">
        <span>很抱歉！添加一级科室失败！</span>
      </div>
      <div class="foot">
        <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/addOneDepartment" tag="a" class="jixuban">重新绑定</router-link>
        <router-link to="/" tag="a">返回首页</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // mounted(){
  // let y_orderserch=document.querySelectorAll('.y_orderserch')[0];
  // y_orderserch.style.display='none';
  // let jxbd=document.querySelectorAll('.jixuban')[0];
  // jxbd.onclick=() => y_orderserch.style.display='block';
  //
  // },
}
</script>

<style lang="css" scoped>
.h_testtit {
  padding-bottom: 68px;
}

.content{
  margin-top: 24px;
  width: 100%;
  text-align: center;
}
.content span{
  font-size: 30px;
}
.foot{
  margin: 43px 0;
  width: 100%;
}
.foot a:nth-of-type(1){
  padding-left: 362px;
  padding-right: 58px;
}
</style>
