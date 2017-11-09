import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // 首页子路由
      {path:'/',component:resolve => {require(['@/components/home_header'],resolve)},
      children:[
            {path:'/',component:resolve => {require(['@/home/homeCon'],resolve)}},
            {path:'/my_doctors',component:resolve => {require(['@/home/family_boctor'],resolve)}},
            {path:'/my_doctors_expert2',component:resolve => {require(['@/home/expert_physician'],resolve)}},
            {path:'/doctors',component:resolve => {require(['@/home/doctors'],resolve)}},
            {path:'/health_check',component:resolve => {require(['@/home/healt_hexamination'],resolve)}},
            {path:'/evaluation_diagnosis',component:resolve => {require(['@/home/evaluation_diagnosis'],resolve)}},
            {path:'/re_treatment',component:resolve => {require(['@/home/re_treatment'],resolve)}},
            {path:'/mall_index',component:resolve => {require(['@/home/mall_index'],resolve)}},
            {path:'/hospital_index',component:resolve => {require(['@/home/hospital_index'],resolve)}},
            // 健康报告路由
            {path:'/report_myself',component:resolve => {require(['@/healthRepor/report_myself'],resolve)}},
            {path:'/report_add',component:resolve => {require(['@/healthRepor/report_add'],resolve)}},
            {path:'/report_love',component:resolve => {require(['@/healthRepor/report_love'],resolve)}},
            {path:'/report_child',component:resolve => {require(['@/healthRepor/report_child'],resolve)}},
            {path:'/portrait_compare',component:resolve => {require(['@/healthRepor/portrait_compare'],resolve)}},
            //头部管理路由
            {path:'/preven_management',component:resolve => {require(['@/headMoudCon/preven_management'],resolve)}},
            {path:'/news_details',component:resolve => {require(['@/headMoudCon/news_details'],resolve)}},
            {path:'/my_wallet',component:resolve => {require(['@/headMoudCon/my_wallet'],resolve)},
            // 钱包三家路由
            children:[
                {path:'/my_wallet',component:resolve => {require(['@/headMoudCon/wallet/cashcoupon/cashcoupon'],resolve)},
                // 钱包四级路由代金券
                children:[
                  {path:'/my_wallet',component:resolve => {require(['@/headMoudCon/wallet/cashcoupon/asset_details'],resolve)}},
                  {path:'details',component:resolve => {require(['@/headMoudCon/wallet/cashcoupon/binding_vouchers'],resolve)}},
                ]
              },
              {path:'/my_account',component:resolve => {require(['@/headMoudCon/wallet/my_account/my_account'],resolve)},
              // 钱包四级路由我的账户
              children:[
                  {path:'/my_account',component:resolve => {require(['@/headMoudCon/wallet/my_account/asset_details'],resolve)}},
                  {path:'recharge',component:resolve => {require(['@/headMoudCon/wallet/my_account/recharge'],resolve)}},
                  {path:'withdrawals',component:resolve => {require(['@/headMoudCon/wallet/my_account/withdrawals'],resolve)}},
              ]
            },
              {path:'/insurance',component:resolve => {require(['@/headMoudCon/wallet/insurance/insurance'],resolve)}},
            ]
          }
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
  ]
})
