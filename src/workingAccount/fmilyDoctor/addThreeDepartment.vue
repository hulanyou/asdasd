<template lang="html">
  <div class="">
    <div class="y_orderserch">
    <form class="formCon-inline2" method="post">
      <div class="bd-formCon">
        <div class="formcon">
          <a>
            <input type="text" name="" value="" placeholder="请输入一级科室名称">
            <span class="btn btn-primary">一级科室搜索</span>
          </a>
          <a class="conbox">
            <input type="text" name="" value="" placeholder="请输入二级科室名称">
            <span class="btn btn-primary">二级科室搜索</span>
          </a>
        </div>
        <div class="formcon">
          <a>
            <input type="text" name="" value="" placeholder="请输入三级科室名称">
            <span class="btn btn-primary">三级科室搜索</span>
          </a>
        </div>
      </div>
    </form>
  </div>
  <div class="y_orderserch">
  <form class="formCon-inline2" method="post">
    <div class="bd-formCon">
      <div class="formcon">
        <a>
        <input type="text" name="" value="" placeholder="内科" class="inpu">
        </a>
        <a class="conbox">
          <select class="" name="">
            <option value="">请选择二级级科室</option>
            <option value="">呼吸内科</option>
            <option value="">感染内科</option>
            <option value="">普通内科</option>
            <option value="">肾内科</option>
            <option value="">消化内科</option>
            <option value="">心内科</option>
          </select>
        </a>
      </div>
      <div class="formcon m_mt10">
        <a class="">
          <input type="text" name="" value="" placeholder="请输入您想要增加的一级科室名称">
          <span class="btn btn-custo">添加</span>
        </a>
      </div>
    </div>
  </form>
</div>
<section class="h_testtit">
  <div class="box flex">
    <p class="active">呼吸内科</p>
    <p>感染内科</p>
    <p>普通内科</p>
  </div>
  <ul>
    <li class="flex flex_jus_between" v-for="i in lists">
      <span class="ttitle">{{i.title}}</span>
      <a class="cc">
        <span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span>
      </a>
    </li>
  </ul>
  <div class="foot">
    <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/fmilyDoctorAddThreeSuccess" tag="a" class="btn btn-primary addjs">提交</router-link>
    <!-- <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/addTwoDepartment" tag="a" class="btn btn-primary addjx">添加三级科室</router-link> -->
  </div>
</section>

  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {title:"呼吸内科"},
        {title:"睡眠呼吸"},
        {title:"肺癌中心"},
        {title:"肺血管病"},
        {title:"哮喘门诊"},
        {title:"上呼吸道门诊"},
        {title:"神经门诊"},
        {title:"内分泌科"}
      ]
    }
  },
  methods:{
    tab() {
           let cbox=document.querySelectorAll('.cc');
           let ttitle=document.querySelectorAll('.ttitle');
           for (let i = 0; i < cbox.length; i++) {
              cbox[i].onclick=()=>{
                console.log(getComputedStyle(ttitle[i]).color);
                if (getComputedStyle(ttitle[i]).color=="rgb(0, 0, 0)") {
                 ttitle[i].style.color ='#10adff';
                 }else{
                   ttitle[i].style.color ='#000';
                 }
           }
           }
       }
  },
  mounted(){
    this.tab();
  }
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
.formcon:nth-of-type(2){
  padding-top: 10px;
}
.y_orderserch{
  /*margin-top: 8px;*/
  margin-bottom: 12px;
}
.btn-custo{
  background: #ff4a00;
  width: 10%;
  margin-top: 1px;
  color: #fff;
  margin-left: -5px;
  padding-top: 5px;
}
.h_testtit{
  height: 326px;
  overflow: auto;
  margin-top: 14px;
}
.ttitle{
  color: #000;
}
.foot{
  margin-top: 3px;
  width: 100%;
  text-align: center;
}
.foot .addjs{
    width: 20%;
}
select{
    width: 36%;
    height: 36px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    /*border-radius: 4px;*/
    background: url(../../assets/img/blue_xtnb.png) no-repeat 96%;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    padding-left: 10px;
}
.inpu{
  width: 34%;
}
.active{
  color: #10adff;
  border-bottom: 2px solid #0097ff;
}
.box p:hover{
  color: #10adff;
  border-bottom: 2px solid #0097ff;
}
.box p{
  padding: 6px 38px;
  position: relative;
}
.box p:after{
  content: 'l';
  position: absolute;
  right: 0;
  color: #ccc;
}
</style>
