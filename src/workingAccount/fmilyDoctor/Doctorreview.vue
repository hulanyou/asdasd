<template lang="html">
  <div class="">
    <section class="h_testtit">
      <table width="100%" class="orderlist tabler">
      	<thead>
      		<tr>
      			<th width="20%">医生名字</th>
      			<th width="20%">所属医院</th>
      			<th width="20%">所属科室</th>
      			<th width="20%">医生职称</th>
            <th width="20%">操作</th>
      		</tr>
      	</thead>
      </table>
      <table width="100%" class="orderlist tabler">
      	<tbody>
      	<tr v-for="i in doctorReviewlist">
          <td width="20%">{{i.name}}</td>
          <td width="20%">{{i.hospital}}</td>
          <td width="20%">{{i.department}}</td>
          <td width="20%">{{i.doctorName}}</td>
          <td width="20%" class="col_11">{{i.operation}}</td>
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
      doctorReviewlist:[
        {
          name:"边明徐",
          hospital:"中国人民解放军总医院",
          department:"妇产科",
          doctorName:"主任医师",
          operation:"待审核"
        },
        {
          name:"潘声明",
          hospital:"北京协和医院",
          department:"内科",
          doctorName:"住院医师",
          operation:"待审核"
        },
        {
          name:"刘思明",
          hospital:"四川大学华西医院",
          department:"外科",
          doctorName:"副主任医师",
          operation:"待审核"
        },
        {
          name:"姚橙清",
          hospital:"复旦大学附属中山医院",
          department:"儿科",
          doctorName:"主治医师",
          operation:"已审核"
        },
        {
            name:"刘昌明",
            hospital:"北京大学第一医院",
            department:"妇产科",
            doctorName:"主任医师",
            operation:"已审核"
        },
        {
            name:"方中生",
            hospital:"北京大学人民医院",
            department:"妇产科",
            doctorName:"主任医师",
            operation:"已审核"
        },
        {
            name:"王思化",
            hospital:"浙江大学附属第一医院",
            department:"妇产科",
            doctorName:"主任医师",
            operation:"已审核"
        },
        {
            name:"刘成陆",
            hospital:"浙江大学附属第一医院",
            department:"妇产科",
            doctorName:"主任医师",
            operation:"已审核"
        }
      ]
    }
  },
  methods:{
    colrClass(){
      let colhtml=document.querySelectorAll('.col_11');
      for (let i = 0; i < colhtml.length; i++) {
        if (colhtml[i].innerHTML =='已审核') {
          colhtml[i].style.color='#10adff';
        }
        colhtml[i].onclick=()=>{
          if (colhtml[i].innerHTML =='已审核') {
            this.$router.push({path: '/workingAccount/fmilyDoctorCon/DoctorreviewCon/doctorDetails'});
          }
        }
      }
    }
  },
  mounted(){
    this.colrClass();
  }
}
</script>

<style lang="css" scoped>
.tabler tr th{
  background-color: #f4f4f4;
}
thead{
  border-color: #e3e3e3;
}
.tabler tr td{
border-color: #e3e3e3;
font-size: 14px;
}
.col_11{
  color: #ff7b58;
}
</style>
