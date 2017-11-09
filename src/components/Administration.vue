<template>
<div class="">
  <router-link to="/preven_management" tag="a" class="btn">孕婴管理</router-link>
  <router-link to="/management_index" tag="a" class="btn">试管婴儿</router-link>
  <router-link to="/management_index" tag="a" class="btn">免疫管理</router-link>
  <router-link to="/management_index" tag="a" class="btn">饮食管理</router-link>
  <router-link to="/my_wallet" tag="a" class="btn">健康钱包</router-link>
  <router-link to="/management_index" tag="a" class="btn">慢病管理</router-link>
  <router-link to="/management_index" tag="a" class="btn">口腔管理</router-link>
  <router-link to="/management_index" tag="a" class="btn">运动管理</router-link>
</div>
</template>

<script>
export default {

}
</script>
<style scoped>
.btn {
  font-size: 14px;
  color: #10acff;
  line-height: 20px;
  padding: 0;
  display: inline-block;
  margin-left: 5%;
  margin-bottom: 5px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  text-decoration: underline;
  color: #0b84e2;
}
</style>
