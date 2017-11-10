<template>
  <div class="">
    <router-link to="/" tag="a" active-class="active">首页</router-link>
    <router-link to="/my_doctors" tag="a" active-class="active">呼叫家庭医生</router-link>
    <router-link to="/my_doctors_expert2" tag="a" active-class="active">呼叫专家医生</router-link>
    <router-link to="/doctors" tag="a" active-class="active">我的医生</router-link>
    <router-link to="/health_check" tag="a" active-class="active">健康检查</router-link>
    <router-link to="/evaluation_diagnosis" tag="a" active-class="active">评估诊断</router-link>
    <router-link to="/re_treatment" tag="a" active-class="active">治疗康复</router-link>
    <router-link to="/Preven_care" tag="a" active-class="active">预防保健</router-link>
    <router-link to="/healthy_diet" tag="a" active-class="active">健康饮食</router-link>
    <router-link to="/mall_index" tag="a" active-class="active">健康商城</router-link>
    <router-link to="/hospital_index" tag="a" active-class="active">医院医生</router-link>
  </div>

</template>

<script>
export default {

}
</script>
<style scoped>
.active{
  color: #179aff;
}
a{
  display: block;
    font-size: 18px;
    float: left;
    color: #333333;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
</style>
