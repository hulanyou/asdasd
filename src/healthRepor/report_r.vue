<template lang="html">
  <div class="">
    <div class="title_70">医嘱与健康提醒</div>
    <ul class="zc_reportitem">
      <li>
        <a href="../my/prescribed_list3.html">
          <div class="y_pic3"><img src="../assets/img/intelligence_doc.png" style=" border-radius: 5px;"></div>
          <div class="y_ms3">
            <h2> <span class="fl">智能家庭医生</span> <span class="fr">下午14:00</span></h2>
            <h4>下午三点去医院注射黄体酮</h4>
          </div>
        </a>
      </li>
      <li>
        <a href="../my/prescribed_list.html">
          <div class="y_pic3">
            <img src="../assets/img/adimg/doc_img4.jpg" style=" border-radius: 5px;">
            <em class="tip">2</em>
          </div>
          <div class="y_ms3">
             <h2> <span class="fl">专家医生马波</span> <span class="fr fs12">下午14:00</span></h2>
            <h4>下达心血管疾病诊断评估医嘱</h4>
          </div>
        </a>
      </li>
      <li>
        <a href="../my/prescribed_list.html">
          <div class="y_pic3"><img src="../assets/img/adimg/doc_img1.jpg" style=" border-radius: 5px;"></div>
          <div class="y_ms3">
            <h2> <span class="fl">家庭医生高进</span> <span class="fr fs12">下午14:00</span></h2>
            <h4>推荐流行感冒相关药品</h4>
          </div>
        </a>
      </li>
    </ul>
    <div class="title_70">我孩子的每日健康头条</div>
    <div class="h_news_list">
      <a href="news_list_detail.html" class="item1 ui-link" data-ajax="false">
        <div class="txt">
          <h3>全民口腔</h3>
          <h4>打造移动口腔医疗2.0时代</h4>
          <p><span class="read">9381</span><span>224条评论</span><span>10分钟前</span></p>
        </div>
        <div class="pic"><img src="../assets/img/adimg/news_img1.png"> </div>
      </a>
      <a href="javascript:void(0)" class="item2 ui-link" data-ajax="false">
        <h3>HPV疫苗，究竟你需不需要</h3>
        <div class="pic">
          <img src="../assets/img/adimg/news_img2.png">
          <img src="../assets/img/adimg/news_img4.png">
          <img src="../assets/img/adimg/news_img5.png">
        </div>
        <p><span class="read">9381</span><span>224条评论</span><span>2小时前</span></p>
      </a>
      <a href="javascript:void(0)" class="item1 ui-link" data-ajax="false">
        <div class="txt">
          <h3>感冒了该吃什么药？</h3>
          <h4>感冒吃什么好的快，感冒是一种常见的多发病</h4>
          <p><span class="read">256</span><span>157条评论</span><span>12-15 22:14</span></p>
        </div>
        <div class="pic"><img src="../assets/img/adimg/news_img3.png"> </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.zc_reportitem li {
    position: relative;
    margin: 0 10px;
}
.zc_reportitem li a {
    overflow: hidden;
    padding: 10px 0;
    display: block;
}
.zc_reportitem li .y_pic3 {
    float: left;
    width: 45px;
    height: 45px;
    position: relative;
}
.zc_reportitem li .y_pic3 img {
    width: 100%;
    height: 100%;
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
.zc_reportitem li .y_ms3 h2 .fr {
    font-size: 12px;
    color: #999999;
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
.h_news_list {
    overflow: hidden;
    background: #fff;
    clear: both;
}
.h_news_list a {
    display: block;
    padding: 10px 0;
    overflow: hidden;
    margin: 0 10px;
}
.h_news_list .item1 .txt {
    float: left;
    width: 70%;
}
.h_news_list h3 {
    color: #666;
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.h_news_list h4 {
    font-size: 14px;
    color: #999;
    margin-bottom: .2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.h_news_list p {
    font-size: 12px;
    color: #999;
}
.h_news_list p span.read {
    padding-left: 20px;
    margin-right: 5px;
    background: url(../assets/img/icons/bg_in.png) 0 3px no-repeat;
}
.h_news_list p span {
    margin-right: 5px;
}
.h_news_list .item1 .pic img {
    width: 100%;
    height: 100%;
}
.h_news_list .item1 .pic {
    float: right;
    width: 80px;
    height: 50px;
}
.h_news_list a + a {
    border-top: 1px solid #e8e8e8;
}
.h_news_list .item2 .pic {
    margin: 5px 0;
    overflow: hidden;
    box-sizing: border-box;
}
.h_news_list .item2 .pic img {
    width: 32%;
    float: left;
}
</style>
