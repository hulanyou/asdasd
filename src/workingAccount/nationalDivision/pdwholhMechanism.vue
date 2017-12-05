<template lang="html">
  <div class="">
    <div class="y_orderserch">
  	<form class="formCon-inline2" method="post">
      <div class="bd-formCon">
        <div class="formcon">
          <a>
            <input type="text" name="" value="" placeholder="请输入地区名称">
            <span class="btn btn-primary">地区搜索</span>
          </a>
          <a class="conbox">
            <input type="text" name="" value="" placeholder="请输入事业部名称">
            <span class="btn btn-primary">事业部搜索</span>
          </a>
        </div>
        <div class="formcon-t">
          <a>
            <input type="text" name="" value="" placeholder="请输入商品名称">
            <span class="btn btn-primary">商品搜索</span>
          </a>
        </div>
      </div>
  	</form>
  </div>
  <router-view></router-view>
 </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.btn-primary {
    background: #10adff;
    width: 10%;
    margin-top: 1px;
    color: #fff;
    margin-left: -5px;
    padding-top: 5px;
}
</style>
