<template lang="html">
  <div class="">
    <div class="title_70">医嘱与健康提醒</div>
    <ul class="zc_reportitem">
      <li>
        <a href="##">
          <div class="y_pic3"><img src="../assets/img/intelligence_doc.png" style=" border-radius: 5px;"><em class="tip">2</em></div>
          <div class="y_ms3">
            <h2> <span class="fl">智能家庭医生</span> <span class="fr">下午14:00</span></h2>
            <h4>下午三点去医院注射黄体酮</h4>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
/*医嘱*/
.zc_reportitem li .y_pic3 {
    float: left;
    width: 45px;
    height: 45px;
    position: relative;
}
.zc_reportitem li a {
    overflow: hidden;
    padding: 10px 10px;
    display: block;
}
.zc_reportitem li .y_pic3 img {
    width: 100%;
    height: 100%;
}
.zc_reportitem li em.tip {
    position: absolute;
    right: -7px;
    top: -7px;
    width: 14px;
    height: 14px;
    background: #ff604c;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
    font-style: inherit;
}
.zc_reportitem li .y_ms3 {
    margin-left: 55px;
}
.zc_reportitem li .y_ms3 h2 {
    color: #666;
    font-size: 15px;
    margin-bottom: 2px;
    overflow: hidden;
    height: 25px;
    text-overflow: ellipsis;
    display: block;
}
.zc_reportitem li .y_ms3 h4 {
    font-size: 12px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

</style>
