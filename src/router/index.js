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
            // 治疗康复
            {path:'/re_treatment',component:resolve => {require(['@/home/re_treatment'],resolve)}},
            // 预防保健
            {path:'/Preven_care',component:resolve => {require(['@/home/Preven_care'],resolve)}},
            // 健康饮食
            {path:'/healthy_diet',component:resolve => {require(['@/home/healthy_diet'],resolve)}},
            // 健康商城
            {path:'/mall_index',component:resolve => {require(['@/home/mall_index'],resolve)}},
            // 医院医生
            {path:'/hospital_index',component:resolve => {require(['@/home/hospital_index'],resolve)}},
            // 医院医生医院二级页面
            {path:'/hospital_index/select_address',component:resolve => {require(['@/home/select_address'],resolve)}},
            // 医院医生医生二级页面
            {path:'/hospital_index/select_department',component:resolve => {require(['@/home/select_department'],resolve)}},
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
      // 立即购买
      {path:'checkout_head',component:resolve => {require(['@/purchase/checkout_head'],resolve)}},
      // 健康检查添加家人购物车
      {path:'add_family',component:resolve => {require(['@/purchase/add_family'],resolve)}},
      // 核对订单信息
      {path:'checkout_shiwu',component:resolve => {require(['@/purchase/checkout_shiwu'],resolve)}},
      // 提交订单
      {path:'order_success',component:resolve => {require(['@/purchase/order_success'],resolve)}},
    ]
  },
// 个人账户
//个人账户的重定向
//individualAccount第一个个人账户头部文件
    {path:'/individualAccount',component:resolve => {require(['@/individualAccount/individualAccount'],resolve)},
      children:[
        //个人账户页面里的第二个头部
        {path:'/individualAccount',component:resolve => {require(['@/individualAccount/personalAccount'],resolve)},

          children:[
              //个人账户页面的重定向（左侧的按钮包括订单等）
               {path:'/',redirect:'myOrder'},
               {path:'myOrder',component:resolve => {require(['@/individualAccount/myOrder/orderList'],resolve)},
                  children:[
                    //个人账户的我的订单列表
                      {path:'/',redirect:'lineItem'},
                        {path:'lineItem',component:resolve => {require(['@/individualAccount/myOrder/lineItem'],resolve)}},
                  ]
             },
          ]
      },

      ]
  },

    //工作账户
    {path:'/workingAccount',component:resolve => {require(['@/workingAccount/workingAccount'],resolve)},
    children:[
      // 工作账户账户明细
      {path:'/workingAccount',component:resolve => {require(['@/workingAccount/accountName'],resolve)},
      children:[
        // 供应商
        // 供应商重定向
          {path:'/',redirect:'supplier'},
          {path:'supplier',component:resolve => {require(['@/workingAccount/supplier/supplier'],resolve)},
          children:[
              // 供应商我的收益重定向
              {path:'/',redirect:'profit'},
              {path:'profit',component:resolve => {require(['@/workingAccount/supplier/profit'],resolve)}},
              // 供应商订单管理
              {path:'ordermanagement',component:resolve => {require(['@/workingAccount/supplier/ordermanagement'],resolve)}},
              // 供应商员工管理
              {path:'staffManagement',component:resolve => {require(['@/workingAccount/supplier/staffManagement'],resolve)}},
              // 供应商库存管理
              {path:'inventoryManagement',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement'],resolve)},
              children:[
                // 供应商库存列表重定向
                 {path:'/',redirect:'InventoryList'},
                 {path:'InventoryList',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList'],resolve)},
                 children:[
                  //  供应商全部重定向
                   {path:'/',redirect:'whole'},
                   {path:'whole',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList/listWhole'],resolve)}},
                   // 供应商全部列表查看
                   {path:'wholeSee',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList/wholeSee'],resolve)}},
                  //  供应商已设置
                  {path:'yset',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList/listYset'],resolve)}},
                  // 供应商已设置库存查看
                  {path:'ystSee',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList/ysetSee'],resolve)}},
                  // 供应商未设置
                  {path:'wset',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList/listWset'],resolve)}},
                  // 供应商已设置库存查看
                  {path:'wsetSee',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/InventoryList/wsetSee'],resolve)}},
                 ]
               },
                //  供应商库存预警
                {path:'inventoryWarning',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/inventoryWarning'],resolve)}},
                // 供应商可售出
                {path:'sellOut',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/sellOut/sellOut'],resolve)},
                children:[
                  // 供应商可售出重定向
                  {path:'/',redirect:'sellOutCon'},
                  {path:'sellOutCon',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/sellOut/sellOutCon'],resolve)}},
                  // 供应商可售出添加仓库
                  {path:'saddWarehouse',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/sellOut/saddWarehouse'],resolve)}},
                  // 供应商设置可售区域
                  {path:'availableArea',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/sellOut/availableArea'],resolve)}},
                  // 增加仓库可售区域
                  {path:'addSaleAreaWarehouse',component:resolve => {require(['@/workingAccount/supplier/inventoryManagement/sellOut/addSaleAreaWarehouse'],resolve)}},
                ]
              },

              ]
            },
          ]
        },
          // 全国事业部
          {path:'nationalDivision',component:resolve => {require(['@/workingAccount/nationalDivision/nationalDivision'],resolve)},
          children:[
            // 全国事业部员工管理
              {path:'/',redirect:'qStaffManagement'},
              {path:'qStaffManagement',component:resolve => {require(['@/workingAccount/supplier/staffManagement'],resolve)}},
              // 全国事业部我的收益
              {path:'qProfit',component:resolve => {require(['@/workingAccount/nationalDivision/profit'],resolve)}},
              //全国事业部绑定全国助销机构
              {path:'pdwholhMechanism',component:resolve => {require(['@/workingAccount/nationalDivision/pdwholhMechanism'],resolve)},
              children:[
                //全国事业部绑定全国助销机构内容
                {path:'/',redirect:'qStaffManagementCon'},
                {path:'qStaffManagementCon',component:resolve => {require(['@/workingAccount/nationalDivision/qStaffManagementCon'],resolve)}},
                // 全国事业部绑定全国助销机点击跳转事业部列表
                {path:'qStaffManagementConsy',component:resolve => {require(['@/workingAccount/nationalDivision/qStaffManagementConsy'],resolve)}},
                // 全国事业部绑定全国助销机点击跳转商品列表
                {path:'qStaffManagementConsp',component:resolve => {require(['@/workingAccount/nationalDivision/qStaffManagementConsp'],resolve)}},
                // 全国事业部绑定全国助销机点击绑定成功
                {path:'bindingSuccess',component:resolve => {require(['@/workingAccount/nationalDivision/bindingSuccess'],resolve)}},
                // 全国事业部绑定全国助销机点击绑定失败
                {path:'bindingshibai',component:resolve => {require(['@/workingAccount/nationalDivision/bindingshibai'],resolve)}},
              ]
            },
          ]
        },
        // 专家医生
        {path:'expertDoctor',component:resolve => {require(['@/workingAccount/expertDoctor/expertDoctor'],resolve)},
        children:[
          // 专家医生我的收益
          {path:'/',redirect:'zjqProfit'},
          {path:'zjqProfit',component:resolve => {require(['@/workingAccount/supplier/profit'],resolve)}},
          // 专家医生订单管理
          {path:'zjordermanagement',component:resolve => {require(['@/workingAccount/supplier/ordermanagement'],resolve)}},
          // 专家医生我的药品库
          {path:'myDrugStoreCon',component:resolve => {require(['@/workingAccount/expertDoctor/myDrugStoreCon'],resolve)},
          children:[
            //专家医生未添加
            {path:'/',redirect:'waddmyDrugStore'},
            {path:'waddmyDrugStore',component:resolve => {require(['@/workingAccount/expertDoctor/waddmyDrugStore'],resolve)}},
            // 专家医生药品选择列表
            {path:'myDrugStoreList',component:resolve => {require(['@/workingAccount/expertDoctor/myDrugStoreList'],resolve)}},
            // 专家医生添加成功
            {path:'addSuccess',component:resolve => {require(['@/workingAccount/expertDoctor/addSuccess'],resolve)}},
            // 专家医生添加失败
            {path:'addFail',component:resolve => {require(['@/workingAccount/expertDoctor/addFail'],resolve)}},
          ]
        },
        ]
      },
      // 家庭医生管理员
      {path:'fmilyDoctorCon',component:resolve => {require(['@/workingAccount/fmilyDoctor/fmilyDoctorCon'],resolve)},
      children:[
        // 家庭医生管理员订单管理
        {path:'/',redirect:'jtordermanagement'},
        {path:'jtordermanagement',component:resolve => {require(['@/workingAccount/supplier/ordermanagement'],resolve)}},
        // 家庭医生管理员我的收益
        {path:'jtqProfit',component:resolve => {require(['@/workingAccount/supplier/profit'],resolve)}},
        // 家庭医生管理员医院管理
        {path:'hospitalManagementCon',component:resolve => {require(['@/workingAccount/fmilyDoctor/hospitalManagementCon'],resolve)},
        children:[
          // 家庭医生管理员医院管理重定向
        {path:'/',redirect:'hospitalManagement'},
        {path:'hospitalManagement',component:resolve => {require(['@/workingAccount/fmilyDoctor/hospitalManagement'],resolve)}},
        // 家庭医生管理员医生管理没添加科室
        {path:'seeDepartment',component:resolve => {require(['@/workingAccount/fmilyDoctor/seeDepartment'],resolve)}},
        // 家庭医生管理员医生管理添加一级科室
        {path:'addOneDepartment',component:resolve => {require(['@/workingAccount/fmilyDoctor/addOneDepartment'],resolve)}},
        // 家庭医生管理员医生管理添加一级科室成功
        {path:'fmilyDoctorAddOneSuccess',component:resolve => {require(['@/workingAccount/fmilyDoctor/fmilyDoctorAddOneSuccess'],resolve)}},
        // 家庭医生管理员医生管理添加一级科室失败
        {path:'fmilyDoctorAddOneFail',component:resolve => {require(['@/workingAccount/fmilyDoctor/fmilyDoctorAddOneFail'],resolve)}},
        // 家庭医生管理员医生管理添加二级科室
        {path:'addTwoDepartment',component:resolve => {require(['@/workingAccount/fmilyDoctor/addTwoDepartment'],resolve)}},
        // 家庭医生管理员医生管理添加二级科室成功
        {path:'fmilyDoctorAddTwoSuccess',component:resolve => {require(['@/workingAccount/fmilyDoctor/fmilyDoctorAddTwoSuccess'],resolve)}},
        // 家庭医生管理员医生管理添加一级科室成功
        {path:'fmilyDoctorAddTwoFail',component:resolve => {require(['@/workingAccount/fmilyDoctor/fmilyDoctorAddTwoFail'],resolve)}},
        // 家庭医生管理员医生管理添加三级科室
        {path:'addThreeDepartment',component:resolve => {require(['@/workingAccount/fmilyDoctor/addThreeDepartment'],resolve)}},
        // 家庭医生管理员医生管理添加三级科室成功
        {path:'fmilyDoctorAddThreeSuccess',component:resolve => {require(['@/workingAccount/fmilyDoctor/fmilyDoctorAddThreeSuccess'],resolve)}},
        // 家庭医生管理员医生管理添加三级科室失败
        {path:'lookDepartment',component:resolve => {require(['@/workingAccount/fmilyDoctor/lookDepartment'],resolve)}},
        ]
      },
      // 家庭医生管理员医生管理医生审核
      {path:'DoctorreviewCon',component:resolve => {require(['@/workingAccount/fmilyDoctor/DoctorreviewCon'],resolve)},
      children:[
          // 家庭医生管理员医生管理医生审核重定向
          {path:'/',redirect:'Doctorreview'},
          {path:'Doctorreview',component:resolve => {require(['@/workingAccount/fmilyDoctor/Doctorreview'],resolve)}},
          // 家庭医生管理员医生管理医生审核已审核医生资料详情
          {path:'doctorDetails',component:resolve => {require(['@/workingAccount/fmilyDoctor/doctorDetails'],resolve)}},
      ]
    },
      ]
    },
      ]
    },
    ]
  },
  ]
})
