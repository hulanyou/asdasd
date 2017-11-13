<template lang="html">
<div class="">
  <div class="slide-box">
      <!-- 家庭医生轮播组件 -->
      <slidebox></slidebox>
    </div>
    <div class="layout  m_mt30  p_mb50">
    <div class="container">
      <div class="left-73 fl">
        <div class="h-doctorms">
          <div class="pic fl">
            <img src="../assets/img/adimg/doc_img1.jpg" alt="">
          </div>
          <div class="mes">
              <span class="name">高进 <label>执业医师</label><span class="f-color fs14 m_ml20">正在服务</span></span>
            <p class="hos-name">高杨树社区医院</p>
            <p class="hos-name"> 挂号、电话、上门、视频、图文</p>
            <p class="skill w-80">医生简介：擅长脑血管疾病、中毒性和放射性脑病、老年性及血管性痴呆、 感染性性神经系统疾病、周围性神经疾病及肌肉...
              <router-link to="/boctor_more" tag="a" class="read-more">更多</router-link>
            </p>
          </div>
          <a class="btn btn-custom5" @click="isshow=!isshow">解除签约</a>
        </div>

        <div class="result m_mt20">
          <h3 class="tit-w border-b">常规服务:</h3>
          <ul class="ways ways2">
            <li class="fl ishide">
              <div class="icon"><img src="../assets/img/icons/way06.png" alt=""></div>
              <div class="btn">预约挂号</div>
              <div class="health-way">
                <div class="tit">预约挂号排班</div>
                <ul>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="fl ishide">
              <div class="icon"><img src="../assets/img/icons/way07.png" alt=""></div>
              <div class="btn">上门服务</div>
              <div class="health-way">
                <div class="tit">上门服务排班</div>
                <div class="instructions">
                  <p class="f-clr66">医生上门服务，可以满足对年老、体弱、残疾等特殊群体，提供不出门就能对疾病进行初步检查诊断，医生上门服务为您的健康保驾护航！ </p>
                  <p class="f-clr66">服务介绍 </p>
                  <p class="des">
                    1、医生上门服务会随带血压计、听诊器、常规医疗器具、手提B超、心电图仪、常规药品和应用中医适宜技术的简单器材、健康教育资料、健康处方等。<br>
                    2、基本服务内容包括：健康体检、老年病普查、常见病、多发病诊疗、发放健康处方、免费测量血压、采血、健康教育、术后康复等。 <br>
                    3、基本检查完成之后，医生会根据您身体情况，作出初步判断和诊治，必要的情况下，到相应医院治疗。<br>
                    4.点击"同意并继续"按钮，即视为您认可云朵益生的服务条款。
                  </p>
                  <p class="f-color2">提示：医生上门之前会跟您电话联系 </p>
                </div>
                <ul>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                  <li class="clear">
                    <p class="fl">02月23日<span>星期四 08:00-20:00</span></p>
                    <a href="checkout.html" class="btn btn-custom2 fr">预约</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="fl ishide">
              <div class="icon"><img src="../assets/img/icons/way08.png" alt=""></div>
              <div class="btn">电话咨询</div>
              <div class="health-way"></div>
            </li>
            <li class="fl ishide">
              <div class="icon"><img src="../assets/img/icons/way09.png" alt=""></div>
              <div class="btn">视频咨询</div>
                <div class="health-way"></div>
            </li>
            <li class="fl ishide">
              <div class="icon"><img src="../assets/img/icons/way10.png" alt=""></div>
              <div class="btn">图文咨询</div>
                <div class="health-way"></div>
            </li>
          </ul>
        </div>

        <div class="forum-box m_mt20">
          <h3 class="tit-w border-b">XX政府规定项目:</h3>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic2 fl"><img src="../assets/img/icons/card01.png" alt=""></div>
                <div class="des2">
                  <h4 class="m_mt20"> 政府服务项目</h4>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="forum-box m_mt20 forum-box-bg">
          <h3 class="tit-w border-b">巡诊服务:</h3>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic2 fl"><img src="../assets/img/icons/card02.png" alt=""></div>
                <div class="des2">
                  <h4> 巡诊关爱卡</h4>
                  <p class="line1 w-80">适用于术后康复、慢性病患者、老年人使用。家庭医生进行上门服务，提供居家医疗、慢病咨询、健康查体等健康管理。</p>
                  <p class="money">￥ 350</p>
                </div>
              </a>
              <a href="##" class="btn btn-custom3 pos-a">立即购买</a>
            </li>
          </ul>
        </div>

        <div class="forum-box forum-box2 m_mt20 forum-box-bg">
          <h3 class="tit-w border-b">更多服务:</h3>
          <ul>
            <li>
               <a href="javascript:void(0)">
                <div class="pic2 fl"><img src="../assets/img/icons/card03.png" alt=""></div>
                <div class="des2">
                  <h4>护理服务 </h4>
                  <p class="line1 w-80">专业护工团队，提供一对一的护理服务，家庭医生负责全程管理</p>
                  <p class="money">￥ 0-1800</p>
                </div>
              </a>
              <a href="##" class="btn btn-custom3 pos-a">立即购买</a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic2 fl"><img src="../assets/img/icons/card04.png" alt=""></div>
                <div class="des2">
                  <h4>护理服务 </h4>
                  <p class="line1 w-80">专业护工团队，提供一对一的护理服务，家庭医生负责全程管理</p>
                  <p class="money">￥ 0-1800</p>
                </div>
              </a>
              <a href="##" class="btn btn-custom3 pos-a">立即购买</a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic2 fl"><img src="../assets/img/icons/card05.png" alt=""></div>
                <div class="des2">
                  <h4>护理服务 </h4>
                  <p class="line1 w-80">专业护工团队，提供一对一的护理服务，家庭医生负责全程管理</p>
                  <p class="money">￥ 0-1800</p>
                </div>
              </a>
              <a href="##" class="btn btn-custom3 pos-a">立即购买</a>
            </li>
          </ul>
        </div>

        <ul class="list-box list-box-three m_mt20">
          <li>
            <a href="javascript:void(0)" class="list">
              <div class="pic"> <img src="../assets/img/icons/card06.png" alt=""></div>
              <div class="mes">
                <span class="name">基因检测</span>
                <p class="hos-name">基因检测、精密影像、癌症筛查、常规体检</p>
                <div class="money"><span>¥</span>1100-2400</div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="list">
              <div class="pic"> <img src="../assets/img/icons/card07.png" alt=""> </div>
              <div class="mes">
                <span class="name">基因检测</span>
                <p class="hos-name">基因检测、精密影像、癌症筛查、常规体检</p>
                <div class="money"><span>¥</span>1100-2400</div>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="list">
              <div class="pic"> <img src="../assets/img/icons/card08.png" alt=""> </div>
              <div class="mes">
                <span class="name">基因检测</span>
                <p class="hos-name">基因检测、精密影像、癌症筛查、常规体检</p>
                <div class="money"><span>¥</span>1100-2400</div>
              </div>
            </a>
          </li>
        </ul>

        <div class="tran-list tran-list-four m_mt20">
          <div class="clear">
            <h3 class="tit-b fl">培训直播: </h3>
            <a href="##" class="fr btn btn-link tit-fr">更多</a>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall01.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p class="level">有病没病，先看手，看手了解您...</p>
                </div>
              </a>
              <div class="tag pay"></div>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall01.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p class="level">有病没病，先看手，看手了解您...</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall01.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p class="level">有病没病，先看手，看手了解您...</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall01.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p class="level">有病没病，先看手，看手了解您...</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="tran-list tran-list-four">
          <div class="clear">
            <h3 class="tit-b fl">培训课件: </h3>
            <a href="##" class="fr btn btn-link tit-fr">更多</a>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall02.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p>有病没病，先看手，看手了解您...</p>
                </div>
              </a>
              <div class="tag pay"></div>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall02.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p>有病没病，先看手，看手了解您...</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall02.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p>有病没病，先看手，看手了解您...</p>
                </div>
              </a>
            </li>
             <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall02.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name">手指教您看健康</span>
                  <p>有病没病，先看手，看手了解您...</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="forum-box m_mt20">
          <div class="clear border-b">
            <h3 class="tit-w  fl">书籍: </h3>
            <a href="##" class="fr btn btn-link tit-fr">更多</a>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic fl"><img src="../assets/img/adimg/mall03.jpg" alt=""></div>
                <div class="des">
                  <h4>现代麻醉学（第四版） </h4>
                  <p class="line1 w-80">适用于科室医生，该书拓展了基础理论和相关的边缘学科知识 </p>
                  <p class="money">￥180</p>
                </div>
              </a>
              <a href="##" class="btn btn-custom3 pos-a">立即购买</a>
            </li>
          </ul>
        </div>

        <div class="result m_mt20">
          <h3 class="tit-w border-b">相关报道和论文: <a href="##" class="fr btn btn-link">更多</a></h3>
          <div class="word">
            <h4>社会活动</h4>
            <p class="des">
              社会活动， 全国中医疑难病学术报告会特邀专家，举办地点：国家卫生部报告厅2012年9月23日下午。
            </p>
            <h4>公益活动</h4>
            <p class="des des-hide" v-show="deshide">
              社会活动， 全国中医疑难病学术报告会特邀专家，举办地点：国家卫生部报告厅2012年9月23日下午，备受医疗界瞩目的“中医疑难病学术报告会”在卫生部隆重召开...<span class="link"  @click="deshow()">展开</span>
            </p>
            <p class="des des-show" v-show="desshow">
               社会活动， 全国中医疑难病学术报告会特邀专家，举办地点：国家卫生部报告厅2012年9月23日下午，备受医疗界瞩目的“中医疑难病学术报告会”在卫生部隆重召开。马波作为特邀专家出席会议，并与卫生部有关领导以及多家中医院、科研院(所)的专家、学者400余人共同围绕中医治疗疑难病、中医的传承与发展进行了全面交流与深入探讨.<span class="link" id="shrink"  @click="desshide()">收缩</span>
            </p>
          </div>
        </div>

        <div class="tran-list tran-list-four">
          <div class="clear">
            <h3 class="tit-b fl">推荐服务: </h3>
            <a href="##" class="fr btn btn-link tit-fr">更多</a>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall05.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall05.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall05.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall05.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="tran-list tran-list-four">
          <div class="clear">
            <h3 class="tit-b fl">推荐保健: </h3>
            <a href="##" class="fr btn btn-link tit-fr">更多</a>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall07.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall07.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall07.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall07.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="tran-list tran-list-four" style="margin-bottom:50px;">
          <div class="clear">
            <h3 class="tit-b fl">推荐药品: </h3>
            <a href="##" class="fr btn btn-link tit-fr">更多</a>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall06.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall06.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall06.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <div class="pic">
                  <img src="../assets/img/adimg/mall06.jpg" alt="">
                </div>
                <div class="mes">
                  <span class="name2">18-50岁 女性 无创DNA产前基因检测</span>
                  <p class="money">￥ 215</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ad-box fr">
        <familyboctortr></familyboctortr>
      </div>
    </div>
  </div>
  <!-- 弹出框 -->
<div class="modal-open fadeIn" v-show="isshow">
  <div class="modal-dialog modal-sm">
     <div class="modal-content">
       <div class="modal-header">
           <button type="button" class="close" @click="isshow=!isshow"><span aria-hidden="true">×</span></button>
           <h4 class="modal-title">编辑信息</h4>
       </div>
       <div class="modal-body cart-add-addr">
          您是否确认解除当前家庭医生？
       </div>
       <div class="modal-footer">
           <router-link to="/my_doctorst" tag="a" class="btn btn-custom" @click="isshow=!isshow">确定</router-link>
           <!-- <button class="btn btn-custom" @click="isshow=!isshow"></button> -->
           <button type="button" class="btn btn-custom3" @click="isshow=!isshow">取消</button>
       </div>
     </div>
 </div>
</div>
<!-- End 弹出框 -->
</div>
</template>

<script>
import slidebox from '@/home/family_boctortzj/slide-box';
import familyboctortr from '@/home/family_boctortzj/family_boctortr'
export default {
  data(){
    return{
    isshow:false,
    desshow:false,
    deshide:true
    }
  },
  components:{
    slidebox,
    familyboctortr
  },
  methods:{
    deshow(){
      this.deshide=false;
      this.desshow=true;
    },
    desshide(){
      this.deshide=true;
      this.desshow=false;
    },
    ishide(){
      let lis=document.querySelectorAll('.ishide');
      let healths=document.querySelectorAll('.health-way');
      for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseenter=function(){
        healths[i].classList.add("fadeInDow");
        }
      }
    },
    isyins(){
      let lis=document.querySelectorAll('.ishide');
      let healths=document.querySelectorAll('.health-way');
      for (let i = 0; i < lis.length; i++) {
        lis[i].onmouseleave=function(){
        healths[i].classList.remove("fadeInDow");
        }
      }
    }
  },
  mounted() {
    this.ishide();
    this.isyins();
}
}
</script>

<style lang="css" scoped>
.h-doctorms {
    position: relative;
    clear: both;
    overflow: hidden;
}
.h-doctorms .pic {
    width: 120px;
    height: 120px;
}
.h-doctorms .pic img {
    width: 100%;
    height: 100%;
}
.h-doctorms .mes {
    color: #333333;
    margin: 0 40px 0 140px;
}
.h-doctorms .mes .name {
    display: block;
    font-size: 22px;
    margin-bottom: 5px;
}
.h-doctorms .mes label {
    font-size: 16px;
    margin-left: 10px;
}
.h-doctorms .mes .skill {
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
    height: 42px;
}
.h-doctorms .btn {
    position: absolute;
    top: 25%;
    right: 40px;
}
.btn-custom5 {
    color: #fff;
    border-color: #f71231;
    background-color: #f71231;
    padding: 8px 18px;
}
.result {
    border: 1px solid #e8e8e8;
    position: relative;
    padding: 0 15px 0;
    z-index: 2;
}
h3.tit-w {
    font-size: 18px;
    line-height: 50px;
}
.tit-w ul li:hover{
  background: red;
}
.forum-box-bg li:hover {
  background: #fafafa;
}
.tran-list ul li:hover {
  border: 1px solid #10acff;
}

.result .ways {
    width: 100%;
    text-align: center;
    height: 140px;
}
.result .ways li.fl {
    width: 20%;
    height: 140px;
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.result .ways .icon {
    width: 60px;
    height: 60px;
    margin: 30px auto 10px;
    overflow: hidden;
}
.result .ways .icon img {
    width: 100%;
    height: 100%;
}
.result .ways .btn {
    font-size: 16px;
    padding: 0 5px;
}

.pos-a:hover{
  color: #fff;
 border-color: #f71231;
 background: #f71231;
}
.btn {
    font-size: 14px;
    text-align: center;
    border: 1px solid transparent;
    display: inline-block;
    padding: 8px 18px;
    cursor: pointer;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
.result .ways2 .health-way {
    width: 400px;
}
.result .health-way {
  border: 1px solid #e8e8e8;
  background: #fff;
  width: 100%;
  position: absolute;
  left: 0;
  top: 120px;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  -webkit-box-shadow: 0 0 5px rgba(140, 140, 140, 0.1);
  -moz-box-shadow: 0 0 5px rgba(140, 140, 140, 0.1);
  box-shadow: 0 0 5px rgba(140, 140, 140, 0.1);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.result .health-way.fadeInDow {
  opacity: 1;
  visibility: visible;
  top: 140px;
}
.result .health-way:before {
    content: "";
    display: block;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 80px;
    margin: -16px 0 0 -4px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
    border-color: transparent transparent #e8e8e8 transparent;
}
.result .health-way .tit {
    display: block;
    font-size: 18px;
    color: #333333;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    line-height: 50px;
}
.result .health-way li {
    line-height: 40px;
    padding: 0 20px;
    border-top: 1px solid #e8e8e8;
}
.result .health-way li a.btn {
    padding: 0px 16px;
    height: 25px;
    line-height: 25px;
    margin-top: 7px;
    font-size: 12px;
}
.result .ways .btn {
    font-size: 16px;
    padding: 0 5px;
}
.btn-custom2 {
    color: #10acff;
    border-color: #10acff;
    background-color: #fff;
}
.result .health-way .instructions {
    font-size: 12px;
    text-align: left;
    margin: 10px 20px;
    line-height: 20px;
}
.result .health-way .instructions p.f-clr66 {
    color: #666666;
}
.result .health-way .instructions p.des {
    color: #999999;
}
.f-color2 {
    color: #ff604c;
}
.forum-box {
    width: auto;
    border: 1px solid #e8e8e8;
    padding: 0 20px;
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
    border-bottom: 1px solid #e8e8e8;
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
.forum-box .pic2 {
    width: 90px;
    height: 90px;
    overflow: hidden;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.forum-box .pic2 img {
    width: 100%;
    height: 100%;
}
.forum-box .des2 {
    margin-left: 90px;
    height: 90px;
    overflow: hidden;
    padding: 0 30px 0 20px;
}
.forum-box li h4 {
    font-size: 18px;
    line-height: 40px;
}
.forum-box li p.line1 {
    max-height: 21px;
    -webkit-line-clamp: 1;
    margin-bottom: 0;
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
p.money {
    color: #f71231 !important;
    font-size: 20px;
    margin-bottom: 0;
}
.forum-box .btn.pos-a {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -26px;
}
.btn-custom3 {
    color: #f71231;
    border-color: #f71231;
    background-color: #fff;
    padding: 8px 18px;
}
.list-box {
    overflow: hidden;
}
.list-box-three li {
    width: 31.2%;
    margin-top: 0;
    margin-right: 2%;
    margin-right: 1.25%\9;
}
.list-box li {
    position: relative;
    float: left;
    text-align: center;
    overflow: hidden;
    margin-top: 20px;
}
.list-box .list {
    overflow: hidden;
    border: 1px solid #e8e8e8;
    display: block;
    padding: 30px 0 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.list-box .list .pic {
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin: 0 auto 5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}
.list-box .list .pic img {
    width: 100%;
    height: 100%;
}
.list-box .list .mes {
    font-size: 12px;
    color: #333333;
    margin: 0 10px;
}
.list-box .list .name {
    font-size: 14px;
    margin-top: 5px;
}
.list-box .list .hos-name {
    color: #999999;
    margin: 2px 0 5px;
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
}
.list-box .list .money {
    font-size: 20px;
    color: #f71231;
    margin-top: 5px;
}
.list-box li:hover{
  border: 1px solid #10acff;
}
.tran-list {
    overflow: hidden;
    clear: both;
}
.tit-b {
    font-size: 18px;
    line-height: 50px;
}
a.tit-fr {
    padding: 0 5px;
    line-height: 50px;
}
.clear:after, .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}
.tran-list-four ul li {
    width: 23.5%;
    margin-right: 2%;
    margin-right: 1.25%\9;
}
.tran-list ul li {
    float: left;
    width: 22%;
    margin-right: 2%;
    margin-right: 1.25%\9;
    position: relative;
}
.tran-list ul li a {
    display: block;
    color: #333333;
    border: 1px solid #e8e8e8;
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
.tran-list ul li .mes p {
    color: #999999;
}
.tran-list ul li .pay {
    background-position: 0 -200px;
}

.tran-list ul li .tag {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: url(../assets/img/icons/bg_in.png) no-repeat 0px -200px;
}
.word {
    padding-bottom: 20px;
}
.word h4 {
    font-size: 18px;
    margin: 10px 0 3px;
    font-weight: bold;
}
.word span.link {
    color: #10acff;
    cursor: pointer;
}
</style>
