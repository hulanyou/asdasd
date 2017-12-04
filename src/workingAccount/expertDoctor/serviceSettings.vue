<template lang="html">
  <div class="server_lists">
    <section class="y_service y_mb20 bg_2">
      <ul class="z_list">
      <li class="clearfix libox" v-for="i in lists">
      <div class="fl pic "><img :src="i.images" alt=""></div>
      <div class="details ">
      <div class="li_tit"><span class="tit">{{i.title}}</span>
        <a class="open">{{i.caozuo}}</a>
      </div>
      <div class="li_sum">
      {{i.li_sum}}
      </div>
      </div>
      </a>
      </li>
      </ul>
    </section>
    <section class="y_service y_mb20 bg_2">
      <ul class="z_list">
      <li class="clearfix libox" v-for="i in assessment">
      <div class="fl pic "><img :src="i.images" alt=""></div>
      <div class="details ">
      <div class="li_tit"><span class="tit">{{i.title}}</span>
        <a class="open">{{i.caozuo}}</a>
      </div>
      <div class="li_sum">
      {{i.li_sum}}
      </div>
      </div>
      </a>
      </li>
      </ul>
    </section>
    <section class="y_service y_mb20 bg_2">
      <ul class="z_list">
      <li class="clearfix libox" v-for="i in healthcare">
      <div class="fl pic "><img :src="i.images" alt=""></div>
      <div class="details ">
      <div class="li_tit"><span class="tit">{{i.title}}</span>
        <a class="open">{{i.caozuo}}</a>
      </div>
      <div class="li_sum">
      {{i.li_sum}}
      </div>
      </div>
      </a>
      </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {
          images:"../../../static/images/my_doc4.png",
          title:"预约挂号",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },
        {
          images:"../../../static/images/my_doc4.png",
          title:"预约挂号",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/my_doc4.png",
          title:"预约挂号",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/my_doc4.png",
          title:"预约挂号",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/my_doc4.png",
          title:"预约挂号",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/my_doc4.png",
          title:"视频咨询",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/my_doc4.png",
          title:"图文咨询",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/my_doc4.png",
          title:"电话咨询",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        }
      ],
      assessment:[
        {
          images:"../../../static/images/card05.png",
          title:"专家评估",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/card05.png",
          title:"专家评估",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        }
      ],
      healthcare:[
        {
          images:"../../../static/images/card05.png",
          title:"保健卡",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        },{
          images:"../../../static/images/card07.png",
          title:"保健团卡",
          caozuo:"开通",
          li_sum:"您还没有开通此服务，点击开通"
        }
      ]
    }
  },
  methods:{
    serviceDetails(){
      let lis=document.querySelectorAll('.libox');
      let titles=document.querySelectorAll('.tit');
      for (let i = 0; i < lis.length; i++) {
        lis[i].onclick=()=>{
          if (titles[i].innerHTML == '预约挂号') {
            console.log(1);
          } else if (titles[i].innerHTML == '专家评估') {
            console.log(2);
          }else if (titles[i].innerHTML == '保健卡' || titles[i].innerHTML == '保健团卡') {
            console.log(3);
          }
        }

      }
    }
  },
  mounted(){
    this.serviceDetails();
  }
}
</script>

<style lang="css" scoped>
.server_lists{
  max-height: 500px;
  overflow: auto;
}

.bg_2 {
    background: #fff;
}
.y_mb20 {
    margin-bottom: 0.35rem;
}
.y_service .z_list .pic {
    /*margin-left: 14px;
    margin-right: 14px;
    margin-top: 8px;*/
    margin: 8px 14px;
    overflow: hidden;
    width: 40px;
    height:40px;
}
.details {
  padding-top: 6px;
}
.y_service .z_list .pic img {
    width: 100%;
}
.z_list .clearfix{
  position: relative;
}
.open{
position: absolute;
right: 18px;
top: 30%;
}
.y_service .details .li_sum {
    color: #999;
    margin-bottom: .35rem;
}
.y_service .z_list li, .y_service .z_list .clearfix {
    border-bottom: 1px solid #eee;
}
</style>
