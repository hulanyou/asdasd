<template lang="html">
  <div class="">
    <div class="tab-pane h-wallet">
          <div class=" h_income h_income2">
            <div class="item first">
              <p>总金额</p>
              <b>￥30000</b>
            </div>
            <div class="item two">
              <p>可提现金额</p>
              <b class="f_color3">￥5000</b>
            </div>
          </div>
          <nav class="nav-tabs">
            <ul class="tab-style1">
               <router-link  to="/my_account/mingxi" tag="li" active-class="active">资产明细</router-link>
                <router-link to="/my_account/recharge" tag="li" active-class="active">账户充值</router-link>
               <router-link to="/my_account/withdrawals" tag="li" active-class="active">余额提现</router-link>
           </ul>
          </nav>
            <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
  methods:{
    isshow () {
      var lis = document.querySelectorAll('.nav-li')
            for(var i=0;i<lis.length;i++){
                lis[i].onclick = function(){
                    for(var i=0;i<lis.length;i++) {
                        if (this == lis[i]) {
                            lis[i].className = "active";
                        }
                        else {
                            lis[i].className = "";
                        }
                    }
                }
            }
    }
  },
  mounted(){
    this.isshow();
  },
}
</script>

<style lang="css" scoped>
.h-wallet {
    margin-left: 160px;
}
.h_income {
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
}
.h_income2 .item {
    width: 49%;
}
.h_income .item {
    display: block;
    width: 33%;
    float: left;
    margin: 15px 0;
}
.h_income p {
    font-size: 16px;
    margin: 5px 0 0 30px;
}
.h_income .first b {
    color: #ff640b;
}
.h_income b {
    font-size: 30px;
    font-weight: normal;
    margin: 5px 0 0 24px;
}
.h_income .item + .item {
    border-left: 1px solid #e8e8e8;
}
.h_income2 .item {
    width: 49%;
}
.h_income .item {
    display: block;
    width: 33%;
    float: left;
    margin: 15px 0;
}
.h_income p {
    font-size: 16px;
    margin: 5px 0 0 30px;
}
.h_income .two b {
    color: #33dc68;
}
.h_income b {
    font-size: 30px;
    font-weight: normal;
    margin: 5px 0 0 24px;
}
.nav-tabs {
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}

.tab-style1 {
    width: 530px;
    margin: 0;
    display: flex;
}
.tab-style1 li a{
  color: #000;
}
.tab-style1 {
    font-size: 20px;
}
.tab-style1 li.active {
    border-bottom-color: #10acff;
}

.tab-style1 li {
    width: 120px;
    font-size: 16px;
}
.tab-style1 li {
    float: left;
    text-align: center;
    position: relative;
    border: 1px solid transparent;
    border-bottom-width: 2px;
    margin-right: 2%;
    z-index: 2;
    display: block;
    cursor: pointer;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
.income .bill {
    line-height: 40px;
    overflow: hidden;
    margin: 0 20px;
}
.income .bill + .bill {
    border-top: 1px solid #e8e8e8;
}
.income .bill .fr {
    color: #999999;
}
</style>
