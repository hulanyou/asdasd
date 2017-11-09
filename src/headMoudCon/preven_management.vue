<template lang="html">
  <div class="">
    <!--健康论坛-->
   <div class="layout m_mt30 m_mb50 over">
    <div class="container  ">
      <div class="container h-crumb">
          <ul>
            <span class="fl">您现在的位置：</span>
            <li class="fl"><a href="index.html">首页</a></li>
            <li class="fl active">孕婴管理</li>
          </ul>
        </div>
      <div class="left-73 fl">
        <div class="forum-box forum-box-bg m_mb50">
          <h3 class="tit-w border-b">每日健康头条</h3>
          <ul>
            <li>
              <router-link to="/news_details" tag="a">
                <div class="pic fl"><img src="../assets/img/adimg/ad-index01.jpg" alt=""></div>
                <div class="des">
                  <h4>全民口腔打造移动口腔医疗2.0时代 </h4>
                  <p>移动互联网高速发展的今天，移动医疗应用广受各大医疗健康及服务领服务于各种人群和平台的多元化模式的医疗APP正不断更新着传统的医疗健康行业，移动医疗市场的竞争已愈演愈烈。</p>
                  <div>
                    <span class="fl">2017/01/19</span>
                  </div>
                </div>
              </router-link>
            </li>
            <li>
                <router-link to="/news_details" tag="a">
                <div class="pic fl"><img src="../assets/img/adimg/ad-index02.jpg" alt=""></div>
                <div class="des">
                  <h4>小儿营养不良的危害是什么？ </h4>
                  <p>营养不良初期，身高并无影响，但随着病情加重，骨骼生长减慢，身高</p>
                 <div>
                    <span class="fl">2017/01/19</span>
                  </div>
                </div>
            </router-link>
            </li>
            <li class="item2">
              <router-link to="/news_details" tag="a">
                <h4>HPV疫苗，究竟你需不需要</h4>
                 <div class="pic">
                  <img src="../assets/img/adimg/ad-index03.jpg" alt="">
                  <img src="../assets/img/adimg/ad-index03.jpg" alt="">
                  <img src="../assets/img/adimg/ad-index03.jpg" alt="">
                </div>
                <div>
                    <span class="fl">2017/01/19</span>
                  </div>
            </router-link>
            </li>
             <li class="item2">
              <router-link to="/news_details" tag="a">
                <h4>HPV疫苗，究竟你需不需要</h4>
                 <div class="pic">
                  <img src="../assets/img/adimg/ad-index03.jpg" alt="">
                  <img src="../assets/img/adimg/ad-index03.jpg" alt="">
                  <img src="../assets/img/adimg/ad-index03.jpg" alt="">
                </div>
                <div>
                    <span class="fl">2017/01/19</span>
                  </div>
              </router-link>
            </li>
            <li>
            <router-link to="/news_details" tag="a">
                <div class="pic fl"><img src="../assets/img/adimg/ad-index01.jpg" alt=""></div>
                <div class="des">
                  <h4>全民口腔打造移动口腔医疗2.0时代 </h4>
                  <p>移动互联网高速发展的今天，移动医疗应用广受各大医疗健康及服务领服务于各种人群和平台的多元化模式的医疗APP正不断更新着传统的医疗健康行业，移动医疗市场的竞争已愈演愈烈。</p>
                  <div>
                    <span class="fl">2017/01/19</span>
                  </div>
                </div>
                </router-link>
            </li>
            <li>
            <router-link to="/news_details" tag="a">
                <div class="pic fl"><img src="../assets/img/adimg/ad-index02.jpg" alt=""></div>
                <div class="des">
                  <h4>小儿营养不良的危害是什么？ </h4>
                  <p>营养不良初期，身高并无影响，但随着病情加重，骨骼生长减慢，身高</p>
                 <div>
                    <span class="fl">2017/01/19</span>
                  </div>
                </div>
            </router-link>
            </li>
          </ul>
        </div>
        <!-- 分页 -->
        <div class="block">
         <el-pagination
           @size-change="handleSizeChange"
           @current-change="handleCurrentChange"
           :current-page="currentPage4"
           :page-sizes="[10]"
           :page-size="10"
           layout="total, sizes, prev, pager, next, jumper"
           :total="100">
         </el-pagination>
       </div>
      </div>
      <div class="fr h-remind">
        <!-- 医嘱 -->
        <headMoud_r></headMoud_r>
      </div>
      <div class="ad-box fr" style="margin-top: 20px;">
        <div><a href="##"><img src="../assets/img/adimg/ad_box1.jpg" alt=""></a></div>
      </div>
    </div>
  </div><!--健康论坛 end-->
  </div>
</template>

<script>
// 医嘱
import headMoud_r from '@/headMoudCon/headMoud_r';
export default {
  methods: {
     handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
     }
   },
   data() {
     return {
        currentPage4: 4
     };
   },
   components:{
     headMoud_r
   }
}
</script>

<style lang="css" scoped>
/*分页*/
.block{
  margin-left: 180px;
}
.forum-box {
    width: auto;
    border: 1px solid #e8e8e8;
    padding: 0 20px;
}
h3.tit-w {
    font-size: 18px;
    line-height: 50px;
}
.forum-box li:hover{
  background: #f7f7f7;
}
.forum-box li {
    width: 100%;
    padding: 20px 0;
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: #fff;
}
.forum-box li + li {
    border-top: 1px solid #e8e8e8;
}
.forum-box li a {
    overflow: hidden;
    display: block;
    color: #333333;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.forum-box .pic {
    width: 200px;
    height: 120px;
    overflow: hidden;
}
.forum-box .pic img {
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.forum-box .des {
    overflow: hidden;
    padding: 0 30px 0 20px;
    margin-left: 200px;
    height: 120px;
}
.forum-box li h4 {
    font-size: 18px;
    line-height: 40px;
}
.forum-box li p {
    max-height: 42px;
    overflow: hidden;
    word-wrap: break-word;
    -webkit-text-overflow: ellipsis;
    -khtml-text-overflow: ellipsis;
    -icab-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 5px;
}
.forum-box li span.fl {
    color: #999999;
    font-size: 14px;
}
.forum-box li.item2 h4 {
    line-height: 20px;
    margin-bottom: 10px;
}
.forum-box li h4 {
    font-size: 18px;
    line-height: 40px;
}
.forum-box li.item2 .pic {
    width: 100%;
    margin-bottom: 10px;
}
.forum-box li.item2 .pic img {
    float: left;
    width: 30%;
}
.forum-box li.item2 .pic img:hover{
  transform: scale(1.1);
  -ms-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);

}
.forum-box li.item2 .pic img + img {
    margin-left: 5%;
}

/*医嘱*/
/*.zc_reportitem li .y_pic3 {
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
}*/
</style>
