<template lang="html">
  <div class="">
    <table class="tabler y_mb20" width="100%">
		<thead>
			<tr>
				<th>产品名称</th>
				<th>产品描述</th>
				<th>价格</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>测试</td>
				<td></td>
				<td><p class="fs20 f_color3">￥<span class="fs30">0.0</span></p></td>
			</tr>
		</tbody>
	</table>
  <form  method="post" id="stockForm">
  <section class="h_testtit" id="add">
  <div class="clearfix">
  <span class="col-sm-2"><b>商品库存</b></span>
  <span class="fr" @click="selShow=!selShow">+增加商品仓库</span>
  </div>
  </section>
  <section class="h_testtit_new">
  <div class="clearfix">
  <input type="hidden" name="backstageStockId" value="F0000000222">
  <span class="col-sm-2 left">仓库</span>
  <span class="col-sm-6 cen"> 全国范围 </span>
  </div>
  <div class="clearfix y_mb14">
  <span class="col-sm-2 left">库存</span>
  <span class="col-sm-6 cen"><input type="text" name="stockNum" value="10000">
  </span>
  </div>

  <div class="h_test" v-show="selShow">
  <div class="clearfix">
  <span class="col-sm-2 left">仓库</span>
  <span class="col-sm-6 cen">
  	<span>
  		<select id="showBank">
  		<option value="F0000000291">姐姐</option><option value="F0000000302">是发</option><option value="F0000000301">dfgdfg</option><option value="F0000000222">全国范围</option></select>
  	</span>
  	</span>
  </div>
  <div class="clearfix y_mb14">
  <span class="col-sm-2 left">库存</span>
  <span class="col-sm-6 cen"><input type="text" name="stockNum" placeholder="请输入库存量"></span>
  </div>
  </div>
  <div class="bot">
    <div class="baocunbtn">
  	<button class="btn btn-primary">保存</button>
  	<button class="btn">返回</button>
  </div>

  </div>
  </section>
  </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selShow:false
    }
  }
}
</script>

<style lang="css" scoped>
form{
  margin-top: 10px;
}
.h_testtit_new .clearfix{
  background: #fff;
}
.left{
  margin-left: 20px;
}
.cen{
  margin-left: 150px;
}
.col-sm-2 b{
  font-weight: 700;
}
input{
    height: 19px;
    border: 1px solid #e3e3e3;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    width: 40%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
select{
  height: 32px;
  border: 1px solid #e3e3e3;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  width: 43%;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.bot{
  background: #fff;
  padding: 10px 15px;
}
.baocunbtn{
  padding-left: 200px;
}
</style>
