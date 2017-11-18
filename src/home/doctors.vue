<template lang="html">
  <div class="">
    <!--健康比较213213-->
   <div class="layout m_mt30  m_mb50">
    <div class="container  ">
      <div class="left-73 fl border over right-height">
        <div class="slide-nav2 fl">
          <ul class="list_box">
            <li>
              <router-link to="/doctors/my_doctors" tag="a" active-class="active">我的家庭医生</router-link>
            </li>
            <li>
              <router-link to="/doctors/my_doctors_expert2" tag="a" active-class="active">我的专家医生</router-link>
            </li>
            <li>
              <router-link to="/doctors/expert_consultation" tag="a" active-class="active">我的专家会诊</router-link>
            </li>

          </ul>
        </div>
          <router-view></router-view>
      </div>
      <div class="ad-box fr">
        <familyboctortr></familyboctortr>
      </div>
    </div>
  </div><!--健康比较 end-->
  </div>
</template>

<script>
import familyboctortr from '@/home/family_boctortzj/family_boctortr'
export default {
  components:{
    familyboctortr
  }
}
</script>

<style lang="css" scoped>
a{
  color: #000;
}
.right-height{
  margin-bottom: 50px;
}
.slide-nav2 {
    height: 100%;
    width: 150px;
    float: left;
    background: #f9f9f9;
    margin-right: 15px;
}
.slide-nav2 li a:hover,.slide-nav2 li .active {
    color: #179aff;
    padding-left: 20px;
    background: #fff;
}
.slide-nav2 li a{
    display: block;
    line-height: 45px;
    cursor: pointer;
    text-align: center;
    border-left: 2px solid transparent;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

</style>
