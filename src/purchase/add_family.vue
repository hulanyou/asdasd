<template lang="html">
  <div class="">
    <table class="cart-table-tit">
  		<thead>
  			<tr>
  				<th width="10%">
  					<label class="y_iptlabel"> <input type="checkbox" value="option1">全选 </label>
  				</th>
  				<th width="42%" colspan="2">商品信息</th>
  				<th width="12%">单价（元）</th>
  				<th width="12%">数量</th>
  				<th width="12%">金额</th>
  				<th>操作（元）</th>
  			</tr>
  		</thead>
  	</table>
    <table class="cart-table">
		<thead>
			<tr>
				<th class="table-title nopadding" colspan="7">
                  	<div class="fl"><input type="checkbox" value="option1">商品信息 </div>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr class="first">
				<td colspan="2" width="37%" class="y_firsttd">
					<div class="fl">
						<input type="checkbox" value="option1">
					</div>
					<div class="pic">
						<a href="#"><img src="../assets/img/adimg/stonic-x001.jpg" alt=""></a>
					</div>
					<div class="name">
						<a href="#">新康泰克氨麻美敏 片(II)感冒药</a>
						<span class="sx">头痛流涕鼻塞咳嗽感冒灵冲剂药</span>
					</div>
				</td>
				<td width="15%" class="cart_reviseBoxtd" :class="{active:num==1}" @mouseenter="onover(1)" @mouseleave="oout(2)">
					<div class="cart_reviseBox">
						<div class="cart_revise_ts"><a @click="sshow(1)" :class="{act:nums==1}">修改</a></div>
						<div class="revise_main" v-show="ishide">
							<div class="arrow"></div>
							<div class="xx">
								<dl>
									<dt>规格</dt>
									<dd>
										<span class="cur">20粒/瓶</span>
										<span>30粒/瓶</span>
										<span>50粒/瓶</span>
									</dd>
								</dl>
								<dl>
									<dt>&nbsp;</dt>
									<dd>
										<button type="button" class="btn btn-custom2 btn-sm">确定</button>
										<a href="#" class="btn btn-link btn-sm">取消</a>
									</dd>
								</dl>
							</div>
						</div>
						规格:20粒/瓶
					</div>
				</td>
				<td width="12%" class="price">
					<span class="f-color3">49</span><br>
				</td>
				<td width="12%">
					<span class="y_saleleng"><a href="#">-</a><input type="text" value="10"><a href="#">+</a></span>
					<span class="y_label">库存紧张</span>
				</td>
				<td width="12%"><span class="f-color3">¥49</span></td>
				<td class="y_lasttd">
					<a href="#" class="add-cart">加入收藏夹</a><br>
					<a class="del" data-toggle="modal">删除</a>
				</td>
			</tr>
		</tbody>
	</table>
  <ul class="cart_control clearfix">
  		<li class="fl">
  			<label class="y_iptlabel"> <input type="checkbox" value="option1">全选 </label>
  			<a href="#">删除选中的商品</a>
  			<a href="#">继续购物</a>
  		</li>
  		<li class="fr">
  			已选商品 <span>0</span> 件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  			合计(不含运费)：<span>¥<b>49.00</b></span>
  			<a href="checkout_shiwu.html" class="btn btn-custom5">去结算</a>
  		</li>
  	</ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      ishide:false,
      num:0,
      nums:0
    }
  },
  methods:{
    sshow(){
      this.ishide=true;
    },
    onover(index){
      this.num=index;
      this.nums=index;
    },
    oout(index){
      this.num=index;
      this.nums=index;
    }
  }
}
</script>

<style lang="css" scoped>
.cart-table-tit {
    width: 100%;
    margin-bottom: 8px;
}
.cart-table-tit th {
    font-weight: lighter;
    border-bottom: 2px solid #eee;
    padding: 8px 20px 8px;
    text-align: center;
    font-size: 14px;
}
.cart-table-tit th label {
    float: left;
}
.cart-table {
    width: 100%;
    margin-bottom: 10px;
    border-collapse: separate;
    border-bottom: 1px solid #ddd;
    text-align: center;
}
.cart-table th {
    padding: 10px 20px;
    font-size: 12px;
    font-weight: lighter;
}
.cart-table th .fl {
    font-size: 15px;
    font-weight: bold;
}
.cart-table th .fl input {
    vertical-align: middle;
}
.cart-table tbody {
    background: #fff;
    border: 1px solid #e8e8e8;
}
.cart-table tr:first-child td {
    border-top: 1px solid #e8e8e8;
}
.cart-table td.y_firsttd {
    border-left: 1px solid #e8e8e8;
}
.cart-table td {
    padding: 15px 20px;
    border-top: 1px dotted #e8e8e8;
    vertical-align: middle;
}
.cart-table .pic {
    width: 80px;
    height: 80px;
    float: left;
    margin: 0 15px 0 0;
    overflow: hidden;
}
.cart-table .pic img {
    width: 80px;
    height: 80px;
}
.cart-table .name {
    text-align: left;
    color: #999;
    line-height: 18px;
    margin-left: 126px;
    overflow: hidden;
}
.cart-table .name a {
    display: block;
    height: 36px;
    overflow: hidden;
    color: #333;
}
.cart-table .name span.sx {
    display: block;
    height: 18px;
    margin: 3px 0;
    overflow: hidden;
}
.cart-table .cart_reviseBoxtd {
    padding: 0;
}
 .active{
   border: 1px dashed red;
   background: #fff;
 }
 .act{
  background-color: red;
 }
.cart_reviseBox {
    position: relative;
    z-index: 98;
    color: #999;
    padding: 28px 15px;
    border: 1px dotted #fff;
    min-height: 53px;
    text-align: left;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.revise_main {
    position: absolute;
    border: 1px solid #ddd;
    left: 0;
    top: 95px;
    background: #fff;
    padding: 0px 10px;
    /*visibility: hidden;
    opacity: 0;*/
    -webkit-transform: translatey(-10px);
    transform: translatey(-10px);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.cart_pop .arrow, .revise_main .arrow {
    width: 11px;
    height: 6px;
    overflow: hidden;
    /*background: url(../assets/img/yhq.png) no-repeat -53px -26px;*/
    position: absolute;
    top: 6px;
}
.revise_main .xx {
    float: left;
    min-height: 80px;
    padding: 15px 0 5px;
    width: 228px;
    overflow: hidden;
}
.revise_main .xx dl {
    width: 100%;
    overflow: hidden;
    margin-bottom: 5px;
}
.revise_main .xx dt {
    float: left;
    width: 68px;
    margin-top: 5px;
}
.revise_main .xx dd {
    float: left;
    width: 160px;
    text-align: left;
}
.revise_main .xx dd span.cur {
    border: 2px solid #eb5e58;
    padding: 3px 6px;
}
.revise_main .xx dd span {
    display: inline-block;
    border: 1px solid #e0e0e0;
    padding: 4px 7px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;
}
.revise_main .xx dd .btn {
    padding: 3px 10px;
}
.cart_revise_ts {
    width: 50px;
    height: 22px;
    line-height: 22px;
    background: #ccc;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.cart_revise_ts a{
    width: 50px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.cart_revise_ts span, .cart_revise_ts a {
    color: #fff;
}
.y_saleleng {
    display: block;
    margin-bottom: 2px;
    width: 110px;
}
.y_saleleng a {
    width: 24px;
    font-weight: bold;
}
.y_saleleng input {
    width: 50px;
    border-width: 1px 0;
    height: 24px;
    line-height: 24px;
}
.y_saleleng a, .y_saleleng input {
    float: left;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ddd;
    color: #5e5e5e;
}
.y_label {
    margin-right: 5px;
    background: #eb5e58;
    color: #fff;
    display: inline;
    font: 12px/17px "microsoft YaHei";
    font-weight: normal;
    padding: 0 0.3em;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
}
.cart-table td.y_lasttd {
    border-right: 1px solid #e8e8e8;
}
.y_firsttd fl{
  padding-left: 10px;
}
.cart_control {
    width: 100%;
    background: #f7f7f7;
    padding: 10px 0;
    margin-bottom: 30px;
}
.cart_control li.fl {
    padding-top: 7px;
}
.cart_control li {
    padding: 4px 10px 0;
}
.cart_control li .y_iptlabel input {
    vertical-align: middle;
    margin: -2px 3px 0 0;
}
.cart_control li a {
    margin-left: 10px;
    color: #999;
}
.cart_control li span {
    color: #d00;
}
.cart_control li .btn {
    margin-top: -5px;
    color: #fff;
    padding: 6px 20px;
}
</style>
