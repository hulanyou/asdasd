<template lang="html">
  <div class="">
    <div class="tab-pane h-wallet">
          <nav class="nav-tabs">
            <ul class="tab-style1 fl">
              <li class="active">我的保险</li>
            </ul>
            <a href="##" class="fr m_mr20">购买保险</a>
          </nav>
            <div class="tran-list tran-list-three m-left" >
              <ul>
                <li class="m_mb20">
                  <div class="border over">
                    <div class="pic">
                      <img src="../../../assets/img/adimg/y_insupic02.jpg" alt="">
                    </div>
                    <div class="mes">
                      <span class="name"> e康-世纪泰康个人住院医疗保险卡</span>
                      <p class="level">可用额度：100万元</p>
                      <p class="level">有效期至：2017-03-01 (可续保)</p>
                    </div>

                  <div class="xb">
                    <a href="##" class="btn btn-custom">续保</a>
                    <router-link to="/insurance_claim" tag="a" class="btn btn-custom">申请理赔</router-link>
                    <!-- <a href="insurance_claim.html" ></a> -->
                  </div>
                  </div>
                </li>
                <li class="m_mb20">
                  <div class="border over">
                    <div class="pic">
                      <img src="../../../assets/img/adimg/y_insupic02.jpg" alt="">
                    </div>
                    <div class="mes">
                      <span class="name"> e康-世纪泰康个人住院医疗保险卡</span>
                      <p class="level">可用额度：100万元</p>
                      <p class="level">有效期至：2017-03-01 (可续保)</p>
                    </div>

                  <div class="xb">
                    <a href="##" class="btn btn-custom">续保</a>
                    <router-link to="/insurance_claim" tag="a" class="btn btn-custom">申请理赔</router-link>
                  </div>
                  </div>
                </li>
                <li class="m_mb20">
                  <div class="border over">
                    <div class="pic">
                      <img src="../../../assets/img/adimg/y_insupic02.jpg" alt="">
                    </div>
                    <div class="mes">
                      <span class="name"> e康-世纪泰康个人住院医疗保险卡</span>
                      <p class="level">可用额度：100万元</p>
                      <p class="level">有效期至：2017-03-01 (可续保)</p>
                    </div>

                  <div class="xb">
                    <a href="##" class="btn btn-custom">续保</a>
                    <router-link to="/insurance_claim" tag="a" class="btn btn-custom">申请理赔</router-link>
                  </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.h-wallet {
    margin-left: 160px;
}
.nav-tabs {
    height: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}
.tab-style1 {
    width: 530px;
    margin: 0 auto;
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
    width: 30%;
    margin-right: 2%;
    z-index: 2;
    display: block;
    font-size: 20px;
    cursor: pointer;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
.tran-list.m-left {
    clear: none;
}
.tran-list {
    overflow: hidden;
    clear: both;
}
.tran-list ul li {
    float: left;
    width: 32%;
    margin-right: 2%;
    margin-right: 1.25%\9;
    position: relative;
}
.tran-list ul li {
    float: left;
    width: 31%;
    margin-right: 2%;
    margin-right: 1.25%\9;
    position: relative;
}
.h-wallet .tran-list ul li .pic {
    height: 160px;
}
.tran-list ul li .pic {
    width: 100%;
    overflow: hidden;
}
.tran-list ul li .pic {
    width: 100%;
    overflow: hidden;
}
.tran-list ul li .pic img {
    width: 100%;
    height: 100%;
}
.tran-list ul li .mes {
    padding: 10px;
}
.tran-list ul li .mes {
    padding: 10px;
}
.tran-list ul li .mes .name {
    display: block;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 22px;
}
.tran-list ul li .mes .name {
    display: block;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    height: 22px;
}
.tran-list ul li .mes .level {
    font-size: 12px;
    color: #666666;
    height: 20px;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: normal;
}
.tran-list ul li .mes .level {
    font-size: 12px;
    color: #666666;
    height: 20px;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: normal;
}
.tran-list ul li .mes p {
    color: #999999;
}
.tran-list ul li .mes p {
    color: #999999;
}
.h-wallet .xb {
    border-top: 1px solid #e8e8e8;
    padding: 10px 0;
    overflow: hidden;
    margin: 0 10px;
}
.btn-custom {
    color: #fff;
    background-color: #10acff;
    border-color: #10acff;
    padding: 8px 18px;
}
</style>
