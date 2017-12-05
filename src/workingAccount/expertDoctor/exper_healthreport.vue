<template lang="html">
    <div class="">
      <section class="h_testtit">
        <ul>
          <router-link to="" tag="li" v-for="(i,index) in baogaolist" :key="index" class="flex">
            <img
              :src="i.images"
              alt="">
            <div class="report">
              <a>{{i.con}}</a>
              <br>
              <a>{{i.con1}}</a>
            </div>
          </router-link>
        </ul>
      </section>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        baogaolist:[
          {
            images:"../../../static/images/userlists.jpg",
            con:"健康检查报告",
            con1:"个人终生检查报告"
          },
          {
            images:"../../../static/images/userlists.jpg",
            con:"健康检查报告",
            con1:"个人终生检查报告"
          },
          {
            images:"../../../static/images/userlists.jpg",
            con:"健康检查报告",
            con1:"个人终生检查报告"
          },
          {
            images:"../../../static/images/userlists.jpg",
            con:"健康检查报告",
            con1:"个人终生检查报告"
          },
          {
            images:"../../../static/images/userlists.jpg",
            con:"健康检查报告",
            con1:"个人终生检查报告"
          }
        ]
      }
    }
  }
</script>
<style lang="css" scoped>
  .h_testtit{
    max-height: 464px;
    overflow: auto;
    padding: 1px 0 10px 0;
  }
  .h_testtit ul{
    width: 90%;
    margin: auto;
  }
  .h_testtit li{
    border-top:none;
  }
  .h_testtit li:first-child{
    border-top:1px solid #e3e3e3;
  }
  .report{
    margin-left: 180px;
  }
</style>
