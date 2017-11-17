<template lang="html">
  <div class="">
    <!-- 提交订单 star -->
<div class="layout bg-f4f4 over border-b">
<div class="container  ">
	<div class="y_resigetsuc y_resigetsucbox2">
		<div class="y_resigetsucbox">
			<h3 class="tit">恭喜您，您已提交订单成功！</h3>
      <h4>请问微信扫右侧二维码，进行支付~</h4>
			<div class="yip">
				如遇特殊情况无法按时参加检查,请在约定时间前一天联系商家改期，或申请退款。
				<p>
					<a href="##" class="btn-link">查看订单详情 </a>
          <!-- <a href="index.html" class="btn-link m_ml20">返回首页</a> -->
          <router-link to="/" tag="a" class="btn-link m_ml20">返回首页</router-link>
				</p>
			</div>
      <div class="erm">
        <img src="../assets/img/y_qrcode.jpg" alt="">
      </div>
		</div>
	</div>
</div>
</div>
<!-- 提交订单 end -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.y_resigetsuc {
    width: 980px;
    background: #fff;
    border: 1px solid #e8e8e8;
    border-top: 2px solid #10acff;
    padding: 40px 0 60px 0;
    box-shadow: 0 0 10px #ccc;
    overflow: hidden;
    margin: 60px auto 60px;
}
.y_resigetsucbox2 {
    position: relative;
}
.y_resigetsucbox2 .y_resigetsucbox {
    margin-left: 90px;
}
.y_resigetsucbox {
    margin: 20px 40px 0 260px;
    width: 600px;
    margin: 20px auto 0;
    text-align: center;
}
.y_resigetsuc h3 {
    font-size: 28px;
    margin-bottom: 20px;
    padding-left: 85px;
    line-height: 70px;
    text-align: left;
    background: url(../assets/img/icons/bg_in.png) no-repeat -99px -1px;
}
.y_resigetsuc .yip {
    padding-left: 90px;
    text-align: left;
}
.y_resigetsuc .yip p {
    margin-top: 30px;
    color: #999;
}
.y_resigetsucbox2 .erm {
    position: absolute;
    top: 60px;
    right: 30px;
    padding-left: 30px;
    border-left: 1px dotted #e8e8e8;
    padding: 20px 0 20px 30px;
}
.y_resigetsucbox2 img {
    width: 140px;
    height: 140px;
    padding: 10px;
    border: 1px solid #e8e8e8;
}
</style>
