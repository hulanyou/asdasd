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
          <select class="" name="" value="">
            <option value="">请选择一级科室</option>
            <option value="">内科</option>
            <option value="">外科</option>
            <option value="">儿科</option>
          </select>
          <!-- <input type="text" name="" value="" placeholder="请选择一级科室" class="selec"> -->
        </a>
        <a class="conbox">
          <input type="text" name="" value="" placeholder="请输入您想要增加的一级科室名称">
          <span class="btn btn-custo">添加</span>
        </a>
      </div>
    </div>
  </form>
</div>
<section class="h_testtit">
  <div class="box flex">
    <p class="active">内科</p>
    <p>外科</p>
    <p>儿科</p>
  </div>
  <ul>
    <li class="flex flex_jus_between" v-for="i in lists">
      <span class="ttitle">{{i.title}}</span>
      <a class="cc">
        <span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span>
      </a>
    </li>
  </ul>
  <div class="foot flex-ali_i_center flex">
    <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/fmilyDoctorAddTwoFail" tag="a" class="btn btn-primary addjs">添加结束</router-link>
    <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/addThreeDepartment" tag="a" class="btn btn-primary addjx">添加三级科室</router-link>
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
        {title:"感染科"},
        {title:"普通内科"},
        {title:"肾内科"},
        {title:"消化内科"},
        {title:"心内科"},
        {title:"神经内科"},
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
  margin-top: 40px;
}
.foot .addjs{
  margin-left: 156px;
    width: 20%;
}
.foot .addjx{
  margin-left: 134px;
    width: 20%;
}
select{
    width: 36%;
    height: 32px;
    /*padding: 6px 12px;*/
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
    color: #a1a0a0;
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
