<template lang="html">
  <div class="">
    <!-- 注册 star -->
<div class="layout border-b">
<div class="container ">
	<div class="y_resigetsuc">
		<div class="y_resigetsucbox">
			<h3 class="tit">您已成功注册云朵医生网账号</h3>
			<div class="yip">
				您可以使用身份证号：xxxxxxxxxxxxxxxxxx 或者用户昵称：xxx 进行登录。
				<span>（如果忘记密码或丢失账号，可以通过手机号码找回密码）</span>
				<p>系统将在{{time}}s或自动跳转到注册前页面，如果没有请
 <router-link to="/" tag="a" class="btn-link">点击手动跳转 >></router-link>
        </p>
			</div>
       <router-link to="/" tag="a" class="btn btn-link return_index">返回首页</router-link>
		</div>
	</div>
</div>
</div><!-- 注册 end -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      time: 5 // 倒计时
    }
  },
  methods: {
        send() {
          let me = this;
          let interval =setInterval(function() {
            if ((me.time--) <1) {
              me.time = 0;
               me.$router.push({path: '/'});
              clearInterval(interval);
            };
          }, 1000);

        }
      },
mounted(){
this.send();
}
}
</script>

<style lang="css" scoped>
.layout {
    zoom: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    width: 100%;
    min-width: 1200px;
    background: #fff;
    overflow: hidden;
}
.container {
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    width: 1200px;
}
.y_resigetsuc {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-top: 2px solid #10acff;
    padding: 40px 0 60px 0;
    box-shadow: 0 0 10px #ccc;
    overflow: hidden;
    margin: 60px auto 60px;
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
    padding-left: 85px;
    text-align: left;
}
.y_resigetsuc .yip span {
    color: #999;
    display: block;
}
.y_resigetsuc .yip p {
    margin-top: 30px;
    color: #999;
}
.return_index{
  margin-top: 46px;
}
</style>
