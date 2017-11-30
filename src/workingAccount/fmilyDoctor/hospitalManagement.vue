<template lang="html">
    <div class="">
      <div class="y_orderserch">
    	<form class="formCon-inline2" method="post">
        <div class="bd-formCon">
          <div class="formcon">
            <a>
              <input type="text" name="" value="" placeholder="请输入医院名称">
              <span class="btn btn-primary">名称搜索</span>
            </a>
            <a class="conbox">
              <input type="text" name="" value="" placeholder="请输入医院地址">
              <span class="btn btn-primary">地址搜索</span>
            </a>
          </div>
        </div>
    	</form>
    </div>
    <section class="h_testtit">
      <table width="100%" class="orderlist tabler">
        <tbody>
        <tr v-for="s in lists">
          <td width="40%" class="ttitle">{{s.title}}</td>
          <td width="12%" class="col_11">编辑资料</td>
          <td width="12%" class="col_11">
            <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/addOneDepartment" tag="a">添加科室</router-link>
          </td>
          <td width="12%" class="col_11">
            <router-link to="/workingAccount/fmilyDoctorCon/hospitalManagementCon/seeDepartment" tag="a">查看科室</router-link>
          </td>
          <!-- <td width="12%" class="col_11"><td> -->
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
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"},
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"},
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"},
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"},
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"},
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"},
        {title:"北京协和医院  北京市东城区被甩付胡同37号  吴成昂18201027890"}
      ]
    }
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
.h_testtit{
  height: 326px;
  overflow: auto;
  margin-top: 14px;
}
thead{
  border-color: #e3e3e3;
}
.tabler tr th{
  background-color: #f4f4f4;
}
.tabler tr td{
border-color: #e3e3e3;
font-size: 14px;
}
.ttitle{
  text-align: left;
}
.col_11{
  color: #10adff;
}
</style>
