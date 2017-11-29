<template lang="html">
  <div class="">
    <section class="h_testtit">
      <ul>
        <router-link to="/workingAccount/nationalDivision/pdwholhMechanism/qStaffManagementConsy" tag="li" class="flex flex_jus_between" v-for="(i,index) in lists" :key="index">
          <span>{{i.id}}</span>
          <a>
            {{i.regionalProducts}}
          </a>
        </router-link>
      </ul>
    </section>
    <!-- <div class="block">
     <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page.sync="currentPage3"
       :page-size="100"
       layout="prev, pager, next, jumper"
       :total="1000">
     </el-pagination>
   </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage3: 2,
      lists:[
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },{
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        },
        {
          id:"北京医院分公司(15126425686)",
          regionalProducts:"区域产品事业部"
        }
      ]
    }
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
li{
  padding: 14px;
  border: 1px solid #e3e3e3;
  background: url(../../assets/img/qg_mdri.png) no-repeat 98.5%;
}
li a{
  padding-right: 20px;
}
.block{
  margin-left: 170px;
  margin-top: 36px;
}
</style>
