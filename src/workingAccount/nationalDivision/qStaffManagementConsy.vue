<template lang="html">
  <div class="">
    <section class="h_testtit">
      <div class="flex flex-ali_i_center">
        <span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span>
        <span>全选</span>
      </div>
      <ul>
        <li class="flex flex_jus_between" v-for="i in lists">
          <span>{{i.title}}</span>
          <a>
            <span class="cbox" onclick="this.className=/checked/ig.test(this.className)?this.className.replace('checked',''):(this.className+' checked')"></span>
          </a>
        </li>
      </ul>
        <router-link to="/workingAccount/nationalDivision/pdwholhMechanism/qStaffManagementConsp" tag="a" class="btn-primary btnbd">绑定助销机构</router-link>
          <!-- <input type="button" name="" value="绑定" class="btn-primary btnbd"> -->

    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {title:'人寿健康保险事业部'},
        {title:'保健品事业部'},
        {title:'人寿健康保险事业部'},
        {title:'人寿健康保险事业部'},
        {title:'保健品事业部'},
        {title:'人寿健康保险事业部'},
        {title:'人寿健康保险事业部'},
        {title:'保健品事业部'},
        {title:'人寿健康保险事业部'},
        {title:'人寿健康保险事业部'},
        {title:'保健品事业部'},
        {title:'人寿健康保险事业部'}
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
  position: relative;
}
/*.btndiv{
  position: fixed;
  top: 400px;
  left: 400px;
  z-index: 1050;
}*/
li{
  padding: 14px;
  border: 1px solid #e3e3e3;
}
.flex{
  margin-bottom: 14px;
}
.btnbd{
  display: block;
  text-align: center;
  padding: 12px 0;
  font-size: 16px;
  margin: 36px 0 0 352px;
}
</style>
