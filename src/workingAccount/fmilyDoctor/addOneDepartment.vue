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
          <input type="text" name="" value="" placeholder="请输入您想要增加的一级科室名称">
          <span class="btn btn-custom5">添加</span>
        </a>
      </div>
    </div>
  </form>
</div>
<section class="h_testtit">
  <ul>
    <li class="flex flex_jus_between" v-for="i in lists">
      <span class="ttitle">{{i.title}}</span>
      <a class="cc">
        <span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span>
      </a>
    </li>
  </ul>
  <div class="foot flex-ali_i_center flex">
    <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/fmilyDoctorAddOneSuccess" tag="a" class="btn btn-primary addjs">添加结束</router-link>
    <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/addTwoDepartment" tag="a" class="btn btn-primary addjx">添加二级科室</router-link>
  </div>
</section>

  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {title:"内科"},
        {title:"外科"},
        {title:"儿科"},
        {title:"妇产科"},
        {title:"神经科"},
        {title:"皮肤科"},
        {title:"眼科"},
        {title:"口腔科"}
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
.btn-custom5{
  width: 10%;
  padding:4px 18px;
  padding-top: 5px;
  margin-left: -5px;
  background-color: #ff4a00;
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
</style>
