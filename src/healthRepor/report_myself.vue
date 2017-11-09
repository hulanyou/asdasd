<template lang="html">
  <div class="jklt">
    <!--健康论坛-->
    <div class="container m_mt30  m_mb50">
      <div class="container h-crumb">
          <ul>
            <span class="fl">您现在的位置：</span>
            <li class="fl"><router-link to="/" tag="a">首页</router-link></li>
            <li class="fl active">我自己的健康报告</li>
          </ul>
        </div>
      <div class="left-73 fl">
        <div class="store-list" id="storeList">
          <div class="box">
            <h2 class="tit"><a href="##">我的医生报告</a></h2>
          </div>
          <div class="box">
            <h2 class="tit tit-nolink">健康检查报告<s class="cur ishide"></s></h2>
            <ul class="box_con" style="display:block;">
              <li class="li cur"><a href="#">基因测序报告</a></li>
              <li class="li"><a href="#">婚前检查报告</a></li>
              <li class="li"><a href="#">孕育检查报告</a></li>
              <li class="li"><a href="#">癌症筛查报告</a></li>
              <li class="li"><a href="#">常规体检报告</a></li>
              <li class="li"><a href="#">运动检查报告</a></li>
              <li class="li"><a href="#">代谢检查报告</a></li>
              <li class="li"><a href="#">心理检查报告</a></li>
              <li class="li"><a href="#">智力检查报告</a></li>
            </ul>
          </div>
          <div class="box">
            <h2 class="tit"><a href="##">评估诊断报告</a></h2>
          </div>
          <div class="box">
            <h2 class="tit"><a href="##">治疗康复报告</a></h2>
          </div>
          <div class="box">
            <h2 class="tit tit-nolink">预防保健报告 <s class="ishide"></s></h2>
            <ul class="box_con"  style="display:block;">
              <li class="li  cur"><a href="#">免疫管理报告</a></li>
              <li class="li"><a href="#">抗衰报告</a></li>
              <li class="li"><a href="#">美容报告</a></li>
              <li class="li"><a href="#">运动报告</a></li>
            </ul>
          </div>
          <div class="box">
            <h2 class="tit"><a href="##">健康饮食报告</a></h2>
          </div>
        </div>
        <div class="report-box">
          <div class="add-report">
            <router-link to="/report_add" tag="a">添加新报告 >></router-link>
          </div>
          <div class="year">2016</div>
          <ul>
            <li>
              <span>10-25</span>
              <p>基因检测12项</p>
             <div class="fr">
                <label class="down shang">详情</label>

              </div>
              <div class="details-des" >
                xxxxx基因详情报告
              </div>
            </li>
            <li>
              <span>10-25</span>
              <p>基因检测12项</p>
              <div class="fr">
                <label class="down shang">详情</label>

              </div>
              <div class="details-des" >
                xxxxx基因详情报告
              </div>
            </li>
            <li>
              <span>10-25</span>
              <p>基因检测12项</p>
             <div class="fr">
                <label class="down shang">详情</label>

              </div>
              <div class="details-des" >
                xxxxx基因详情报告
              </div>
            </li>
          </ul>
          <div class="year">2015</div>
          <ul>
            <li>
              <span>10-25</span>
              <p>基因检测12项</p>
             <div class="fr">
                <label class="down shang">详情</label>

              </div>
              <div class="details-des" >
                xxxxx基因详情报告
              </div>
            </li>
            <li>
              <span>10-25</span>
              <p>基因检测12项</p>
             <div class="fr">
                <label class="down shang">详情</label>

              </div>
              <div class="details-des" >
                xxxxx基因详情报告
              </div>
            </li>
            <li>
              <span>10-25</span>
              <p>基因检测12项</p>
             <div class="fr">
                <label class="down shang">详情</label>

              </div>
              <div class="details-des" >
                xxxxx基因详情报告
              </div>
            </li>
          </ul>
          <div class="no-report">
            <h4 class="link_t">您现在还没有检查报告或报告不完整</h4>
            <a href="##"> 如果您之前做过检查，请点击 <span class="f-color1">添加报告 &gt;&gt;</span></a>
            <a href="##">如果您没有做过检查，请进入 <span class="f-color1">健康检查 &gt;&gt;</span></a>
          </div>
        </div>
      </div>
     <div class="fr h-remind">
       <!--医嘱信息和健康头条  -->
       <report_r></report_r>

      </div>
    </div>

  <!--健康论坛 end-->
  </div>
</template>

<script>
// 右边医嘱信息和健康头条
import report_r from '@/healthRepor/report_r'
export default {
  data(){
    return{

    }
  },
  methods:{
    isshow(){
      let boxs=document.querySelectorAll('.ishide');
      let cons=document.querySelectorAll('.box_con');
      for (let i = 0; i < boxs.length; i++) {
        boxs[i].onclick=function(){
          if(cons[i].style.display == 'block'){
              cons[i].style.display = 'none';
              cons[i].classList.add("fadeIn");
              boxs[i].classList.remove("ishide");
              boxs[i].classList.add("jian");
          }else{
            cons[i].style.opacity = 1;
            cons[i].style.display='block';
            boxs[i].classList.remove("jian");
            boxs[i].classList.add("ishide");
          }
        }
      }
    },
    ishide(){
      let downs=document.querySelectorAll('.down');
      let details=document.querySelectorAll('.details-des');
      for (let i = 0; i < downs.length; i++) {
        downs[i].onclick=function(){
          if(details[i].style.display == 'none'){
            details[i].style.display = 'block';
            downs[i].innerHTML="收起";
            downs[i].classList.add("up");
            downs[i].classList.remove("shang");
          }else{
              details[i].style.display = 'none';
              downs[i].innerHTML="详情";
              downs[i].classList.add("shang");
              downs[i].classList.remove("up");
          }
        }
      }
    }
  },
  mounted(){
    this.isshow()
    this.ishide()
  },
  components:{
    report_r
  }
}
</script>

<style lang="css" scoped>
.store-list {
    height: auto!important;
    border: 1px solid #e8e8e8;
    float: left;
    margin-right: 20px;
    width: 160px;
}
.store-list .box {
    overflow: hidden;
    zoom: 1;
}
.box ul li a:hover{
color: #179aff;
}
.store-list .tit {
    cursor: pointer;
    font-size: 16px;
    background: #f2f2f2;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #e8e8e8;
    font-weight: normal;
    overflow: hidden;
    padding-left: 10px;
}
.store-list .tit.tit-nolink {
    cursor: default;
}
.store-list .tit .ishide {
    background: url(../assets/img/icons/bg_in.png) no-repeat -135px -87px;
    width: 10px;
    height: 10px;
    padding: 5px;
    margin-right: 6px;
    float: right;
    margin-top: 15px;
    cursor: pointer;
    opacity: 1;
}
.jian{
    background: url(../assets/img/icons/bg_in.png) no-repeat -95px -87px;
    width: 10px;
    height: 10px;
    padding: 5px;
    margin-right: 6px;
    float: right;
    margin-top: 15px;
    cursor: pointer;
}

.tit a:hover{
  color: #179aff;
}
.store-list ul li {
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    margin: 0px 5px;
    padding-left: 20px;
    color: #000;
}
.store-list a {
      color: #000;
}
/*  我自己的健康报告*/
.report-box {
  border: 1px solid #e8e8e8;
  margin-left: 170px;
  overflow: hidden;

}
.report-box .add-report a {
  display: inline-block;
  line-height: 40px;
  font-size: 16px;
  padding: 0 10px;
}
.report-box .add-report a:hover {
  color: #0b84e2;
  text-decoration: underline;
}
.report-box .year {
  line-height: 26px;
  background: #f8f8f8;
  padding: 0 20px;
  width: 100%;
  font-weight: bold;
}
.report-box ul {
  margin-bottom: 20px;
}
.report-box ul li {
  border-bottom: 1px solid #e8e8e8;
  line-height: 40px;
  min-height: 40px;
  margin: 0 20px;
}
.report-box ul li span {
  width: 20%;
  display: inline-block;
  float: left;
}
.report-box ul li p {
  width: auto;
  float: left;
  margin-right: 50px;
}
.report-box ul li div.fr {
  color: #179aff;
  margin-right: 30px;
  cursor: pointer;
}
.report-box ul li div.fr label {
  position: relative;
}
.shang:after {
  content: "";
  display: block;
  overflow: hidden;
  position: absolute;
  top: 8px;
  left: 120%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: #179aff transparent transparent transparent;
}
.up:after {
  content: "";
  display: block;
  overflow: hidden;
  position: absolute;
  top: 3px;
  left: 120%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: transparent transparent #179aff transparent;
}
.report-box .details-des {
  display: none;
  clear: both;
  border-top: 1px solid #e8e8e8;
  padding: 20px;
}
.report-box .btn-box {
  text-align: right;
  line-height: 20px;
  margin-top: 20px;
}
.report-box .no-report {
  margin: 100px auto;
  text-align: center;
  overflow: hidden;
}
.report-box .no-report h4 {
  font-size: 16px;
  margin-bottom: 30px;
}
.report-box .no-report a {
  display: block;
  color: #666;
  line-height: 25px;
}
.report-box .no-report a span {
  text-decoration: underline;
}


</style>
