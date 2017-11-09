<template lang="html">
  <div class="">
    <!--健康比较-->
   <div class="layout">
    <div class="container m_mt30">
       <div class="container h-crumb">
          <ul>
            <span class="fl">您现在的位置：</span>
            <li class="fl"><a href="index.html">首页</a></li>
            <li class="fl active">健康比较</li>
          </ul>
        </div>
      <div class="h-compare right-height flex" id="setH">
        <div class="slide-nav2">
          <ul>
            <router-link to=""  tag="li" class="nav_li active">我与标准比较</router-link>
            <router-link to=""  tag="li" class="nav_li">我与历史比较</router-link>
            <router-link to=""  tag="li" class="nav_li">家庭成员比较</router-link>
            <router-link to=""  tag="li" class="nav_li">癌症筛查</router-link>
            <router-link to=""  tag="li" class="nav_li">朋友之间比较</router-link>
          </ul>
        </div>
        <div class="y-comprepottab">
    			<div class="serch">
    				<div class="dl-box flex">
    				<dl class="flex">
    					<dt>全部项目</dt>
    					<dd>
    						<select name="" id="">
    							<option value="">1</option>
    						</select>
    					</dd>
    				</dl>
    				<dl class="flex">
    					<dt>全部项目</dt>
    					<dd>
    						<select name="" id="">
    							<option value="">1</option>
    						</select>
    					</dd>
    				</dl>
    				<dl class="select-t flex">
    					<dt>按时间段</dt>
    					<dd>
    						<select name="" id="">
    							<option value="">1</option>
    						</select>
    						-
    						<select name="" id="">
    							<option value="">1</option>
    						</select>
    					</dd>
    				</dl>
    				<dl class="select-t flex">
    					<dt>按年龄段</dt>
    					<dd>
    						<select name="" id="">
    							<option value="">1</option>
    						</select>
    						-
    						<select name="" id="">
    							<option value="">1</option>
    						</select>
    					</dd>
    				</dl>
    				</div>
    				<div class="btn-box">
    					<a href="##" class="btn btn-custom str fr">开始比较</a>
    					<div class="fr">
    						<span class="btn btn-custom4">表格比较</span>
    						<span class="btn btn-custom4">图形比较</span>
    					</div>
    				</div>
    			</div>
    			<div class="y-comprepot-content">

            <div class="g_inoculate tc m_mt100">
              <div class="z_pic"><img src="../assets/img/null05.png" width="" /></div>
              <p>暂无比较数据哦~</p>
            </div>
    			</div>
        </div>
      </div>
    </div>
  </div>
  <!--健康比较 end-->

  </div>
</template>

<script>
export default {
  methods:{
    isshow () {
      var lis = document.querySelectorAll('.nav_li');
            for(var i=0;i<lis.length;i++){
                lis[i].onclick = function(){
                    for(var i=0;i<lis.length;i++) {
                        if (this == lis[i]) {
                            lis[i].className = "active";
                        }
                        else {
                            lis[i].className = "";
                        }
                    }
                }
            }
    }
  },
  mounted(){
    this.isshow();
  }
}
</script>

<style lang="css" scoped>
.active {
    color: #179aff;
    padding-left:18px;
    background: #fff;
}
.slide-nav2 li{
  text-align: center;
}
.slide-nav2 li:hover{
    color: #179aff;
    padding-left:18px;
    background: #fff;
}
.h-compare {
    border: 1px solid #e8e8e8;
    overflow: hidden;
}
.right-height {
    margin-bottom: 50px;
}
.slide-nav2 {
    width: 150px;
    background: #f9f9f9;
    float: left;
    margin-right: 15px;
}
.slide-nav2 ul{
  height: 100%;
}
.slide-nav2 li + li {
    border-top: 1px solid #e8e8e8;
}
.slide-nav2 li {
    line-height: 45px;
    cursor: pointer;
    /*padding-left: 30px;*/
    border-left: 2px solid transparent;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.y-comprepottab{
  margin-top: 16px;
  background: #fafafc;
}
.y-comprepottab .serch{
  padding-top:10px;
}

.y-comprepottab .serch dl.select-t select {
    width: 70px;
}
.y-comprepottab .serch dl select {
    width: 150px;
    height: 38px;
}

.y-comprepottab .dl-box {
    height: 40px;
    overflow: hidden;
    line-height: 40px;
}
.y-comprepottab .serch dl{
  padding-left: 26px;
}
.y-comprepottab .serch dl:last-child{
  padding-right:20px;
}
.y-comprepottab .serch dl dd {
    padding-left: 10px;
}

.y-comprepottab .serch .btn-box {
    margin: 20px 20px 0 66px;
    overflow: hidden;
}
.y-comprepottab .serch .btn-box .str {
    display: block;
}
.y-comprepottab .serch .btn-box .btn-custom4 {
    padding: 8px 20px;
    margin-right: 10px;
}

.g_inoculate {
    padding: 50px 0 100px;
}
.g_inoculate .z_pic {
    width: 200px;
    height: 200px;
    margin: 30px auto 0;
}
.g_inoculate p {
    font-size: 18px;
}
</style>
