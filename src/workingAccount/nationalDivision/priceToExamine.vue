<template lang="html">
  <div class="">
    <div class="y_orderserch">
    	<form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
        <div class="form-group flex">
      		<label class="control-label">供应商名称：</label>
      		<div class="y_seript">
      			<input class="form-control" type="text" value="">
      		</div>
      	</div>
        <div class="form-group col-sm-5">
    <button class="btn btn-primary search" title="" rel="tooltip" data-original-title="查询">查询</button>
    <button class="btn" id="clearFastForm" type="button" title="" rel="tooltip" data-original-title="清空">清空</button>
  </div>
      </form>
      </div>
      <section class="h_testtit">
        <table width="100%" class="orderlist tabler">
          <thead>
            <tr>
              <th width="25%">商品sku</th>
              <th width="25%">商品名称</th>
              <th width="16.66%">状态</th>
              <th width="16.66%">价格</th>
              <th width="16.66%">操作</th>
            </tr>
          </thead>
        </table>
        <table width="100%" class="orderlist tabler">
        	<tbody>
        	<tr v-for="s in lists">
            <td width="25%" class="ttitle">{{s.id}}</td>
            <td width="25%" class="price">{{s.name}}</td>
            <td width="16.66%" class="crowd">{{s.ztai}}</td>
            <td width="16.66%" class="effect">{{s.price}}</td>
            <td width="16.66%" class="col_11"><button class="btn btn-look"> 查看</button></td>
        	</tr>
        	</tbody>
        </table>
      </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {
          id:"ctordinary0000000682",
          name:"测试123",
          ztai:"生效",
          price:"0.0"
      },
      {
        id:"uctservice0000000874",
        name:"测试123",
        ztai:"生效",
        price:"0.0"
      },
      {
      id:"ctordinary0000000641",
      name:"测试123",
      ztai:"生效",
      price:"0.0"
      },
      {
        id:"ctordinary0000000725",
        name:"测试123",
        ztai:"生效",
        price:"0.0"
      }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.control-label{
	font-size: 14px;
	width: 86px;
	text-align: right;
}
.form-control{
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    width: 260px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.btn-primary{
  width: 120px;
}
.h_testtit{
  margin-top: 14px;
}
</style>
