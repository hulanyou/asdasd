<template lang="html">
  <div class="">
    <section class="h_testtit">
      <table width="100%" class="orderlist tabler">
      	<thead>
      		<tr>
      			<th width="50%">订单信息</th>
      			<th width="16.666%">原价</th>
      			<th width="16.666%">现价</th>
      			<th width="16.666%">操作</th>
      		</tr>
      	</thead>
      </table>
      <div class="flex flex-ali_i_center">
        <span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span>
        <span>全选</span>
      </div>
      <table width="100%" class="orderlist tabler">
      	<tbody>
      	<tr v-for="s in lists">
          <td width="50%" class="title">{{s.title}}</td>
          <td width="16.666%" class="price">{{s.yprice}}</td>
          <td width="16.666%" class="col_11">{{s.xprice}}</td>
          <td width="16.666%" class="lasdtd">
            <a class="ccc"><span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span></a>

        </td>
      	</tr>
      	</tbody>
      </table>
      <router-link to="/workingAccount/nationalDivision/pdwholhMechanism/bindingSuccess" tag="a"  class="btn-primary btnbd">绑定</router-link>
      <!-- <input type="button" name="" value="绑定" class="btn-primary btnbd"> -->
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {
          title:'修正 左旋肉碱茶多酚片0.8g/片*60片/瓶 健康减肥',
          yprice:'¥130.00',
          xprice:'￥68.00'
        },
        {
          title:'修正 破壁灵芝孢子粉0.99g/袋*60袋*3盒套餐 增强免疫力',
          yprice:'¥130.00',
          xprice:'￥68.00'
        },
        {
          title:'修正 破壁灵芝孢子粉0.99g/袋*60袋*3盒套餐 增强免疫力',
          yprice:'¥130.00',
          xprice:'￥68.00'
        },
        {
          title:'修正 破壁灵芝孢子粉0.99g/袋*60袋*3盒套餐 增强免疫力',
          yprice:'¥130.00',
          xprice:'￥68.00'
        },
        {
          title:'修正 破壁灵芝孢子粉0.99g/袋*60袋*3盒套餐 增强免疫力',
          yprice:'¥130.00',
          xprice:'￥68.00'
        },
        {
          title:'修正 破壁灵芝孢子粉0.99g/袋*60袋*3盒套餐 增强免疫力',
          yprice:'¥130.00',
          xprice:'￥68.00'
        },
      ]
    }
  },
  methods:{
    tab() {
           let cbox=document.querySelectorAll('.ccc');
           let ttitle=document.querySelectorAll('.title');
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
.h_testtit{
  height: 300px;
  overflow: auto;
  margin-top: 14px;
  background: #fff;
  padding: 18px 14px;
}
.flex{
  margin: 14px 0;
}
.flex span:nth-of-type(2){
  margin-left: 14px;
}
td .cbox{
  margin-left: 46%;
}
thead{
  border-color: #e3e3e3;

}
.title{
  text-align: left;
  color: #000;
}
.col_12{
  color: #10adff;
}
.tabler tr th{
  background-color: #f4f4f4;
}
.tabler tr td{
border-color: #e3e3e3;
}
.tabler .price{
  text-decoration:line-through;
}
.col_11{
  color: #ff4a00;
}
.title{
  text-align: left;
}
.btnbd{
  display: block;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  margin: 36px 0 0 352px;
}
</style>
