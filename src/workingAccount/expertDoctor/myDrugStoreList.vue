<template lang="html">
  <div class="">
    <section class="h_testtit">
      <table width="100%" class="orderlist tabler">
      	<thead>
      		<tr>
      			<th width="40%">订单信息</th>
      			<th width="12%">适用科室</th>
      			<th width="12%">药品功效</th>
      			<th width="12%">适用人群</th>
            <th width="12%">价格</th>
            <th width="12%">操作</th>
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
          <td width="40%" class="ttitle">{{s.title}}</td>
          <td width="12%" class="price">{{s.department}}</td>
          <td width="12%" class="crowd">{{s.crowd}}</td>
          <td width="12%" class="effect">{{s.effect}}</td>
          <td width="12%" class="col_11">{{s.price}}</td>
          <td width="12%" class="lasdtd">
            <a class="cc"><span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span></a>
        </td>
      	</tr>
      	</tbody>
      </table>
      <router-link to="/workingAccount/expertDoctor/myDrugStoreCon/addSuccess" tag="a"  class="btn-primary btnbd">添加</router-link>
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
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        },
        {
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        },
        {
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        },
        {
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        },
        {
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        },
        {
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        },{
          title:"修正 左旋肉碱茶多酚片0.8g/片*60片/瓶",
          department:"内科-心内科",
          effect:"健康减肥",
          crowd:"成人",
          price:"￥68.00"
        }
      ]
    }
  },
  methods:{
    tab() {
           let cbox=document.querySelectorAll('.cc');
           let ttitle=document.querySelectorAll('.ttitle');
           let price=document.querySelectorAll('.price');
           let crowd=document.querySelectorAll('.crowd');
           let effect=document.querySelectorAll('.effect');
           for (let i = 0; i < cbox.length; i++) {
              cbox[i].onclick=()=>{
                console.log(getComputedStyle(ttitle[i]).color);
                if (getComputedStyle(ttitle[i]).color=="rgb(0, 0, 0)") {
                 ttitle[i].style.color ='#10adff';
                 price[i].style.color='#10adff';
                 crowd[i].style.color='#10adff';
                 effect[i].style.color='#10adff';
                 }else{
                   ttitle[i].style.color ='#000';
                   price[i].style.color='#000';
                   crowd[i].style.color='#000';
                   effect[i].style.color='#000';
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
  height: 326px;
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
.col_12{
  color: #10adff;
}
.tabler tr th{
  background-color: #f4f4f4;
}
.tabler tr td{
border-color: #e3e3e3;
font-size: 14px;
}
.col_11{
  color: #ff4a00;
}
.ttitle{
  text-align: left;
  color: #000;
}
.btnbd{
  display: block;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  margin: 36px 0 0 352px;
}
</style>
