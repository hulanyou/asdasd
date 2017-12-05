<template lang="html">
  <div class="">
    <form action="" method="">
      <div class="y_orderserch flex">
        <div class="form-group col-sm-7">
          <label class="control-label" for="listipt4">姓名/用户ID/身份证号：</label>
            <input class="form-control" type="text" name="id" value="" id="">
        </div>
        <div class="form-group flex">
          <a class="btn btn-primary search">查询</a>
          <button class="btn" type="button" >清空</button>
        </div>
      </div>
    </form>
    <section class="user_list">
    <table width="100%" class="tabler">
      <thead>
      <tr>
        <th width="35%">姓名</th>
        <th width="10%">年龄</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in userlists">
        <td>
          {{i.name}}
        </td>
        <td>
          {{i.age}}
        </td>
        <td>
          <router-link to="/workingAccount/expertDoctor/exper_userListCon/exper_healthreport" tag="a" class="btn btn-look">健康报告</router-link>
          <!--<a class="btn btn-look">健康报告</a>-->
          <a class="btn btn-primary btn-sm">健康信息</a>
        </td>
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
        userlists:[
          {
            name:"赵佰会",
            age:27
          },
          {
            name:"赵佰会",
            age:27
          },
          {
            name:"赵佰会",
            age:27
          },
          {
            name:"赵佰会",
            age:27
          },
          {
            name:"赵佰会",
            age:27
          },
          {
            name:"赵佰会",
            age:27
          }
        ]
      }
    }
  }
</script>
<style lang="css" scoped>
  .form-control{
    display: inline;
    width: 400px;
    height:19px;
  }
  .btn-primary{
    width: 100px;
  }
  .user_list{
    margin-top: 14px;
    background: #fff;
    max-height:415px;
    overflow: auto;
  }
</style>
