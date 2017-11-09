<template lang="html">
  <div class="">
    <!--健康论坛-->
   <div class="layout">
    <div class="container m_mt30  m_mb50 over">
      <div class="container h-crumb">
          <ul>
            <span class="fl">您现在的位置：</span>
            <li class="fl"><a href="index.html">首页</a></li>
            <li class="fl active">我配偶的健康报告</li>
          </ul>
        </div>
      <div class="left-73 fl">
        <div class="h_contacts">
          <h3>邀请配偶</h3>
           <div class="h-evaluatio" style="margin: 0; padding:20px 0 ;border: none;">
            <div class="form-group">
                提示：您已绑定配偶-张某某，请与当前配偶解除绑定之后才可绑定他人。
            </div>
          </div>

          <h3>我的配偶</h3>
          <ol>
            <li>
              <div class="apply">
                <a href="#" class="item ui-link" data-ajax="false">
                  <div class="img"><img src="../assets/img/adimg/m_portrait.jpg"></div>
                  <div class="m_tit">
                    <span class="name"><i class="male"></i>张某某</span>
                    <span class="age">25岁</span>
                    <span class="tag">大宝</span>
                    <span >北京 海淀</span>
                  </div>
                </a>
                <a class="btn btn-custom3 addit" @click="isshow=!isshow">编辑</a>
              </div>
            </li>
          </ol>
      </div>
       </div>
      <div class="fr h-remind">
        <!--医嘱信息和健康头条  -->
        <report_r></report_r>
      </div>
    </div>
  </div>
  <!--健康论坛 end-->
  <!-- 弹出框 -->
<div class="modal-open fadeIn" v-show="isshow">
  <div class="modal-dialog modal-sm">
     <div class="modal-content">
       <div class="modal-header">
           <button type="button" class="close" @click="isshow=!isshow"><span aria-hidden="true">×</span></button>
           <h4 class="modal-title">编辑信息</h4>
       </div>
       <div class="modal-body cart-add-addr">
           <dl>
             <dt>分组</dt>
             <dd>
               <select class="form-control">
                 <option>分组1</option>
                 <option>分组2</option>
               </select>
             </dd>
           </dl>
           <dl>
             <dt>关系</dt>
             <dd>
               <select class="form-control">
                 <option>亲戚1</option>
                 <option>亲戚2</option>
               </select>
             </dd>
           </dl>
           <dl>
             <dt>添加称谓</dt>
             <dd> <input type="text" class="form-control"> </dd>
           </dl>
       </div>
       <div class="modal-footer">
           <button class="btn btn-custom" @click="isshow=!isshow">保存</button>
           <button type="button" class="btn btn-custom3" @click="isshow=!isshow">解除绑定</button>
       </div>
     </div>
 </div>
</div>
<!-- End 弹出框 -->
  </div>
</template>

<script>
// 右边医嘱信息和健康头条
import report_r from '@/healthRepor/report_r'
export default {
  data(){
    return{
    isshow:false
    }
  },
  components:{
    report_r
  }
}
</script>

<style lang="css" scoped>

</style>
