<template lang="html">
  <div class="">
    <h3 class="cart_bt">确认收货地址</h3>
    <div class="cart_addr">
			<ul>
				<li class="cur"><div class="fr"><span>默认地址</span>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层  138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
			</ul>
			<ul class="y_otheraddress" v-show="listsshow">
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
				<li><div class="fr"><a href="#">设置为默认收货地址</a>|<a href="#">修改本地址</a></div><label><input type="radio" name="area" value="">云朵 北京海淀区三环以内皂君庙东里14号院1号楼鑫三元写字楼三层   138000138000</label></li>
			</ul>
			<button class="btn y_newaddressbtn" v-show="btnshow"  @click="isshow=!isshow">使用新地址</button>
			<button class="btn btn-link y_otheraddressbtn" v-show="bthsshow" @click="lists()">使用其他地址</button>

		</div>
    <h3 class="cart_bt">确认订单信息</h3>
    <table class="cart-table-tit">
		<thead>
			<tr>
				<th width="42%" colspan="2">商品信息</th>
				<th width="12%">单价（元）</th>
				<th width="12%">数量</th>
				<th width="12%">金额</th>
				<th>操作（元）</th>
			</tr>
		</thead>
	</table>
  <table class="cart-table y_checktable">
			<tbody>
			<tr class="first">
				<td width="37%" class="y_firsttd">
					<div class="pic">
						<a href="#"><img src="../assets/img/adimg/stonic-x001.jpg" alt=""></a>
					</div>
					<div class="name">
						<a href="#">新康泰克氨麻美敏 片(II)感冒药</a>
						<span class="sx">头痛流涕鼻塞咳嗽感冒灵冲剂药</span>
					</div>
				</td>
				<td width="15%">
					规格:20粒/瓶
				</td>
				<td width="12%" class="price">
					<span class="f-color3">49</span><br>
				</td>
				<td width="12%">
					10/瓶
				</td>
				<td width="12%"><span class="f-color3">¥49</span></td>
				<td class="y_lasttd">
					<a href="#" class="add-cart">加入收藏夹</a><br>
					<a href="#sure_modal" class="del" data-toggle="modal">删除</a>
				</td>
			</tr>
				<tr>
					<td colspan="2" rowspan="1" class="text_l td_line">
						<dl class="y_message">
							<dt class="padd-top">给卖家留言：</dt>
							<dd>
								<input type="text" name="" value="" class="form-control" placeholder="选填：对本次交易的说明">
							</dd>
						</dl>
						<div class="y_invoibox dropdown clearfix">
							<span class="btn y_invobtn" data-toggle="dropdown"><i class="caret" @click="fpshow=!fpshow"></i> 索要发票</span>
							<span class="y_invoresult">抬头：云朵益生(北京)信息技术有限公司<br> 内容：办公用品</span>
							<div class="dropdown-menu drop_notclose" v-show="fpshow">
								<dl class="y_invoicedl">
									<dt>发票抬头：</dt>
									<dd>
										<label class="y_iptlabel y_simpinvo"><input type="radio" name="invoice1" value="个人" checked="">个人</label>
										<label class="y_iptlabel"><input type="radio" name="invoice1" value="单位">单位</label>
										<div class="y_invoname">
											<input type="text" class="form-control" placeholder="单位名称">
											<p class="f-color3">您填写的所有内容都将被系统自动打印到发票上，所以请千万别填写和发票抬头无关的信息。</p>
										</div>
									</dd>
								</dl>
								<dl class="y_invoicedl">
									<dt>发票内容：</dt>
									<dd>
										<select class="form-control">
											<option>办公用品</option>
											<option>明细</option>
											<option>电脑配件</option>
											<option>耗材</option>
										</select>
									</dd>
								</dl>
								<div class="y_invoicebtn"><button class="btn">保存发票信息</button></div>
							</div>
						</div>
					</td>
					<td colspan="4" align="left">
						<div class="quan">
							<a class="fr" href="#modal-djq" data-toggle="modal">您还可以去绑定其他代金券</a>
							<span class="fl">代金券：</span>
							<div class="fl">
								<input type="text" class="form-control fl" placeholder="最多输入200元">
								<button class="btn btn-custom4 fl">确定</button>
							</div>
						</div>

						<div class="y_dpcoupon">
							<b class="fr">-5.00 </b>
							医保卡：
						</div>
						<div class="y_dpcoupon">
							<b class="fr">-5.00</b>
							保险卡：
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="6" align="right">
						合计(含运费)：<b class="item-price-special">¥39.00</b>
					</td>
				</tr>
			</tbody>
	  	</table>
      <div class="y_cartsetment">
	  		<div class="cart2_price">
	  			<p>实付款：<strong>¥39.00</strong></p>
			  </div>
	  	</div>
      <div class="cart_btn">
        <router-link to="/purchase/add_family" tag="a">返回购物车修改</router-link>
	  		<!-- <a href="cart.html" class="btn btn-link">返回购物车修改</a> -->
        <router-link to="/purchase/order_success" tag="a"  class="btn btn-custom5">提交订单</router-link>
	  		<!-- <a href="cart3.html" class="btn btn-custom5">提交订单</a> -->
	  	</div>
    <!-- 弹出框 -->
<div class="modal-open fadeIn" v-show="isshow">
<div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
         <button type="button" class="close" @click="isshow=!isshow"><span aria-hidden="true">×</span></button>
         <h4 class="modal-title">编辑信息</h4>
     </div>
     <div class="modal-body">
       <dl class="flex">
        <dt>收货人姓名：</dt>
        <dd> <input type="text" class="form-control"></dd>
      </dl>
      <dl class="flex">
	       <dt>选择所在地：</dt>
	         <dd class="flex">
	           <select class="form-contro2">
	              <option>北京</option>
	              <option>北京</option>
	            </select>
	            <select class="form-contro2">
	              <option>海淀区</option>
	            </select>
	            <select class="form-contro2">
	              <option>请选择</option>
	            </select>
	          </dd>
	      </dl>
        <dl class="flex">
	         <dt>街道地址：</dt>
	         <dd> <textarea class="form-control"></textarea> </dd>
	      </dl>
        <dl class="flex">
	          <dt>邮政编码：</dt>
	          <dd> <input type="text" class="form-control"> </dd>
	      </dl>
        <dl class="flex">
             <dt>手机：</dt>
              <dd class="flex">
               <input type="text" class="form-control">
                    <span>手机和电话请至少填写一个</span>
              </dd>
        </dl>
        <dl class="flex">
	           <dt>电话：</dt>
	            <dd class="flex">
	             <input type="text" class="form-control">
	                  <span>电话的格式：区号-电话号码-分机</span>
	            </dd>
	      </dl>
     </div>
     <div class="modal-footer">
         <router-link to="/my_doctors/my_doctorst" tag="a" class="btn btn-custom" @click="isshow=!isshow">保存</router-link>
         <!-- <button class="btn btn-custom" @click="isshow=!isshow"></button> -->
         <button type="button" class="btn btn-custom4" @click="isshow=!isshow">关闭</button>
     </div>
   </div>
</div>
</div>
<!-- End 弹出框 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      listsshow:false,
      btnshow:false,
      bthsshow:true,
      isshow:false,
      fpshow:false
    }
  },
  methods:{
    lists(){
      this.listsshow=true;
      this.btnshow=true;
      this.bthsshow=false;
    }
  }
}
</script>

<style lang="css" scoped>
.cart_bt {
    font-size: 16px;
    width: 100%;
    padding-bottom: 8px;
    font-weight: bold;
    color: #333;
    clear: both;
}
.cart_addr {
    border-top: 2px solid #f0f0f0;
    padding: 15px 0px;
    margin-bottom: 20px;
}
.cart_addr li:hover, .cart_addr li.cur {
    background: url(../assets//img/addr.png) #f7f7f7 no-repeat 10px center;
}
.cart_addr li {
    height: 32px;
    line-height: 32px;
    padding: 0 10px 0 80px;
    margin-bottom: 2px;
    overflow: hidden;
}
.cart_addr li:hover div.fr, .cart_addr li.cur div.fr {
    display: inline-block;
}
.cart_addr li div.fr {
    display: none;
}
.cart_addr li {
    height: 32px;
    line-height: 32px;
    padding: 0 10px 0 80px;
    margin-bottom: 2px;
    overflow: hidden;
}
.cart_addr ul li a:hover{
  text-decoration: underline;
}
.cart_addr button {
    margin: 10px 0 0 95px;
}
.modal-body dl {
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
}
.modal-body dt {
    float: left;
    text-align: right;
    width: 20%;
    font-weight: lighter;
    padding-top: 7px;
}
.modal-body dd input {
    float: left;
    margin-right: 10px;
    width: auto;
}
.form-control {
    box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    /*border: 1px solid #e8e8e8;*/
    display: block;
    width: 100%;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
.form-contro2 {
    box-shadow: none;
    border-radius: 0;
    height: 38px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    display: block;
    width: 100%;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    height: 33px;
    width: 100px;
    margin-left: 3%;
}
.form-contro2:nth-of-type(1){
  margin-left: 0;
}
.modal-body dd span {
    padding: 7px 0 0 0;
    display: inline-block;
    color: #999;
}
.cart_bt {
    font-size: 16px;
    width: 100%;
    padding-bottom: 8px;
    font-weight: bold;
    color: #333;
    clear: both;
}
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
.cart-table {
    width: 100%;
    margin-bottom: 10px;
    border-collapse: separate;
    border-bottom: 1px solid #ddd;
    text-align: center;
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
.y_checktable .name {
    margin-left: 90px;
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
.cart-table tr td.text_l {
    text-align: left;
    vertical-align: top;
}
.cart-table tr td.text_l .y_message {
    width: 100%;
    overflow: hidden;
    padding-top: 10px;
    margin-bottom: 10px;
}
.cart-table tr td.text_l .y_message dt {
    width: 100px;
    text-align: right;
    float: left;
    font-weight: lighter;
}
.cart-table tr td.text_l .padd-top {
    padding-top: 5px;
}
.cart-table tr td.text_l .y_message dd {
    width: 50%;
    float: left;
}
.dropdown {
    position: relative;
}
.cart-table tr td.text_l span, .cart2_cz span {
    margin-right: 10px;
}
.y_invoibox .y_invobtn {
    float: left;
    color: #179aff;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
.cart-table tr td.text_l span, .cart2_cz span {
    margin-right: 10px;
}
.y_invoibox .y_invoresult {
    float: left;
    color: #666;
    padding: 7px 7px 7px;
}
.y_invoibox .dropdown-menu {
    width: 300px;
    padding: 10px;
    min-width: 300px;
    border: 1px solid #e8e8e8;
    top: 30px;
    left: 8px;
}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.y_invoicedl {
    overflow: hidden;
}
.y_invoicedl dt {
    float: left;
    width: 75px;
    font-weight: normal;
    line-height: 35px;
}
.y_invoicedl dd {
    margin-left: 75px;
    overflow: hidden;
    line-height: 35px;
}
.y_invoicedl dd .y_simpinvo {
    margin-right: 20px;
}
.cart-table td input[type="radio"] {
    vertical-align: middle;
    margin-top: -3px;
}
.y_invoicedl dd .y_invoname {
    margin-bottom: 15px;
    padding-top: 3px;
}
.y_invoicedl dd .y_invoname .form-control {
    width: 200px;
    margin-right: 10px;
}
.cart-table tr td.text_l p {
    margin: 10px 0 0;
    line-height: 20px;
    font-size: 12px;
}
.y_invoicedl dd select.form-control {
    width: auto;
    margin-top: 2px;
}
.cart-table td select {
    height: 30px;
    padding-left: 10px;
    vertical-align: middle;
    outline: none;
    color: #666;
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.y_invoicebtn {
    padding: 10px 0 0 75px;
}
.cart-table td b {
    font: 700 16px/20px "Gudea", Arial, sans-serif;
    color: #f71231;
}
.cart-table .quan {
    overflow: hidden;
    line-height: 35px;
}
.cart-table td .fl input {
    margin-right: 15px;
}
.cart-table .quan input {
    width: 100px;
}
.cart-table .quan .btn {
    padding: 0 9px;
    font-size: 12px;
}
.y_dpcoupon {
    clear: both;
    padding-top: 10px;
    border-top: 1px dotted #ddd;
    margin-top: 10px;
}
.y_cartsetment {
    width: 96%;
    overflow: hidden;
    padding: 40px 2% 20px;
}
.cart2_price {
    text-align: right;
    float: right;
    padding-left: 70px;
    color: #999;
}
.cart2_price p {
    margin-bottom: 5px;
}
.cart2_price strong {
    font-size: 25px;
    color: #f71231;
    letter-spacing: 1px;
}
.cart_btn {
    width: 96%;
    text-align: right;
    margin: 0 auto 40px;
    border-top: 1px dotted #e0e0e0;
    padding-top: 20px;
}
</style>
