<template lang="html">
  <div class="">
    <section class="h_testtit">
      <div class="scuccess-img">
          <img src="../../assets/img/my_DrugStore.png" alt="">
      </div>
      <div class="content">
        <span>您还没有添加药品！</span>
      </div>
      <div class="foot">
        <router-link to="/workingAccount/expertDoctor/myDrugStoreCon/myDrugStoreList" tag="a" class="btn btn-primary goadd">去添加</router-link>
        <!-- <router-link to="/" tag="a">返回首页</router-link> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted(){
  let y_orderserch=document.querySelectorAll('.y_orderserch')[0];
  y_orderserch.style.display='none';
  let jxbd=document.querySelectorAll('.goadd')[0];
  jxbd.onclick=() => y_orderserch.style.display='block';
  },
}
</script>

<style lang="css" scoped>
.h_testtit{
  background: #fff;
  padding: 18px 14px;
}
.h_testtit .scuccess-img{
  width: 100%;
  margin-top: 48px;
}
.h_testtit .scuccess-img img{
  padding-left: 36%;
}
.content{
  margin-top: 48px;
  width: 100%;
  text-align: center;
}
.content span{
  font-size: 30px;
}
.foot{
  margin: 36px 0;
  width: 100%;
  padding-left: 36%;
}
.btn-primary{
  width: 26%;
}
</style>
