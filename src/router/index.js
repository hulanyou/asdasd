import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页路由
      {path:'/',component:resolve => {require(['@/components/home_header'],resolve)},
      children:[
            {path:'/',component:resolve => {require(['@/home/homeCon'],resolve)}},
            // 家庭医生
            {path:'/my_doctors',component:resolve => {require(['@/home/family_boctor'],resolve)}},
            // 家庭医生二级页面
            {path:'/my_doctors/my_doctorst',component:resolve => {require(['@/home/family_boctort'],resolve)}},
            // 家庭医生更多
            {path:'/my_doctors/boctor_more',component:resolve => {require(['@/home/family_boctortzj/boctor_more'],resolve)}},
            // 专家医生
            {path:'/my_doctors_expert2',component:resolve => {require(['@/home/expert_physician'],resolve)}},
            // 专家医生二级
            {path:'/my_doctors_expert2/my_doctors_expert',component:resolve => {require(['@/home/my_doctors_expert'],resolve)}},
            // 我的医生
            {path:'/doctors',component:resolve => {require(['@/home/doctors'],resolve)},
            children:[
              {path:'/',redirect:'my_doctors'},
              {path:'my_doctors',component:resolve => {require(['@/home/export_doctortzj/emy_doctors'],resolve)}},
              {path:'my_doctors_expert2',component:resolve => {require(['@/home/export_doctortzj/emy_doctors_expert2'],resolve)}},
              {path:'expert_consultation',component:resolve => {require(['@/home/export_doctortzj/expert_consultation'],resolve)}},
            ]
          },
            // 健康检查
            {path:'/health_check',component:resolve => {require(['@/home/healt_hexamination'],resolve)}},
            // 健康检查购买页面
            {path:'/health_checkDetails',component:resolve => {require(['@/home/health_checkDetails'],resolve)}},
            // 评估诊断
            {path:'/evaluation_diagnosis',component:resolve => {require(['@/home/evaluation_diagnosis'],resolve)}},
            // 健康治疗
            {path:'/re_treatment',component:resolve => {require(['@/home/re_treatment'],resolve)}},
            // 预防保健
            {path:'/Preven_care',component:resolve => {require(['@/home/Preven_care'],resolve)}},
            // 健康饮食
            {path:'/healthy_diet',component:resolve => {require(['@/home/healthy_diet'],resolve)}},
            // 商城
            {path:'/mall_index',component:resolve => {require(['@/home/mall_index'],resolve)}},
            // 医院医生
            {path:'/hospital_index',component:resolve => {require(['@/home/hospital_index'],resolve)}},
            // 健康报告路由
            // 我自己的
            {path:'/report_myself',component:resolve => {require(['@/healthRepor/report_myself'],resolve)}},
            // 我自己的二级
            {path:'/report_add',component:resolve => {require(['@/healthRepor/report_add'],resolve)}},
            // 我配偶的
            {path:'/report_love',component:resolve => {require(['@/healthRepor/report_love'],resolve)}},
            // 我孩子的
            {path:'/report_child',component:resolve => {require(['@/healthRepor/report_child'],resolve)}},
            // 健康比较
            {path:'/portrait_compare',component:resolve => {require(['@/healthRepor/portrait_compare'],resolve)}},
            //孕婴管理
            {path:'/preven_management',component:resolve => {require(['@/headMoudCon/preven_management'],resolve)}},
            //孕婴管理二级
            {path:'/news_details',component:resolve => {require(['@/headMoudCon/news_details'],resolve)}},
            // 钱包
            {path:'/my_wallet',component:resolve => {require(['@/headMoudCon/my_wallet'],resolve)},
            // 钱包三家路由
            // 代金券
            children:[
                {path:'/my_wallet',component:resolve => {require(['@/headMoudCon/wallet/cashcoupon/cashcoupon'],resolve)},
                // 四级路由代金券
                children:[
                  {path:'/',redirect:'my_qb'},
                  {path:'my_qb',component:resolve => {require(['@/headMoudCon/wallet/cashcoupon/asset_details'],resolve)}},
                  {path:'details',component:resolve => {require(['@/headMoudCon/wallet/cashcoupon/binding_vouchers'],resolve)}},
                ]
              },
              // 我的账户
              {path:'/my_account',component:resolve => {require(['@/headMoudCon/wallet/my_account/my_account'],resolve)},
              // 钱包四级路由我的账户
              children:[
                  {path:'/',redirect:'mingxi'},
                  {path:'mingxi',component:resolve => {require(['@/headMoudCon/wallet/my_account/asset_details'],resolve)}},
                  {path:'recharge',component:resolve => {require(['@/headMoudCon/wallet/my_account/recharge'],resolve)}},
                  {path:'withdrawals',component:resolve => {require(['@/headMoudCon/wallet/my_account/withdrawals'],resolve)}},
              ]
            },
            // 社会医疗保险
              {path:'/insurance',component:resolve => {require(['@/headMoudCon/wallet/insurance/insurance'],resolve)}},
              // 慈善救助基金
              {path:'/relief_fund',component:resolve => {require(['@/headMoudCon/wallet/relief_fund/relief_fund'],resolve)}},
              // 我的保险
              {path:'/my_insurance',component:resolve => {require(['@/headMoudCon/wallet/my_insurance/my_insurance'],resolve)}},
              // 添加保险
              {path:'/add_insurance',component:resolve => {require(['@/headMoudCon/wallet/add_insurance/add_insurance'],resolve)}},
            ]
          },
          // 钱包 我的保险 申请理赔
            {path:'/insurance_claim',component:resolve => {require(['@/headMoudCon/insurance_claim'],resolve)},
            children:[
                // 钱包 我的保险 申请理赔 子级
              {path:'/insurance_claim',component:resolve => {require(['@/headMoudCon/data_filling/data_filling'],resolve)}},
              {path:'data_two',component:resolve => {require(['@/headMoudCon/data_filling/data_two'],resolve)}},
              {path:'data_three',component:resolve => {require(['@/headMoudCon/data_filling/data_three'],resolve)}},
              {path:'data_four',component:resolve => {require(['@/headMoudCon/data_filling/data_four'],resolve)}},
            ]
          },
      ]
    },
    // 登陆注册子路由
      {path:'/login',component:resolve => {require(['@/login/login'],resolve)},
      children:[
          {path:'login_con',component:resolve => {require(['@/login/login_con'],resolve)}},
          {path:'register',component:resolve => {require(['@/login/register'],resolve)}},
          {path:'register2',component:resolve => {require(['@/login/register2'],resolve)}},
          {path:'register_success',component:resolve => {require(['@/login/register_success'],resolve)}},
      ]
    },
    // 健康检查立即购买
    {path:'/purchase',component:resolve => {require(['@/purchase/purchase_head'],resolve)},
    children:[
      {path:'checkout_head',component:resolve => {require(['@/purchase/checkout_head'],resolve)}},
      // 健康检查添加家人购物车
      {path:'add_family',component:resolve => {require(['@/purchase/add_family'],resolve)}},
    ]
  },

  ]
})
