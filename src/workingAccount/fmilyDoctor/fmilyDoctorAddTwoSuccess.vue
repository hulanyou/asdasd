<template lang="html">
  <div class="">
    <section class="h_testtit">
      <div class="scuccess-img">
          <img src="../../assets/img/bindingSuccess.png" alt="">
      </div>
      <div class="content">
        <span>恭喜您！添加二级科室成功！</span>
      </div>
      <div class="foot">
        <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/addTwoDepartment" tag="a" class="jixuban">继续添加</router-link>
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
  // },
}
</script>

<style lang="css" scoped>
.h_testtit {
  padding-bottom: 68px;
}

.h_testtit .scuccess-img{
  width: 100%;
  margin-top: 84px;
}
.h_testtit .scuccess-img img{
  padding-left: 40%;
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
