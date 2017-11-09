<template>
<div class="">
  <router-link to="/report_myself" tag="a">我自己的</router-link>
  <router-link to="/report_love" tag="a">我配偶的</router-link>
  <router-link to="/report_child" tag="a">我孩子的</router-link>
  <router-link to="/report_child" tag="a">我亲属的</router-link>
  <router-link to="/##" tag="a">我朋友的</router-link>
  <router-link to="/##" tag="a">我同事的</router-link>
  <router-link to="/portrait_compare" tag="a">健康比较</router-link>
</div>
</template>

<script>
export default {

}
</script>
<style scoped>

a {
  color: #333333;
  margin-right: 10px;
}
a:hover {
  color: #0b84e2;
}
</style>
