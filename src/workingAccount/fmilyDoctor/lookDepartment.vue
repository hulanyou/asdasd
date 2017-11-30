<template lang="html">
  <div class="">
    <section class="h_testtit">
      <div class="box flex">
        <p class="active">内科</p>
        <p>外科</p>
        <p>儿科</p>
      </div>
      <div class="looK_content">
        <div class="con-box" v-for="i in lists">
          <p class="oneDepartment flex flex_jus_between"><span>{{i.title}}</span> <span>></span></p>
          <div class="twoDepartment" v-for="j in i.arr">
            <p>{{j.name}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]
      },
        {title:"内分泌科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]},
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]},
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]},
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]},
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]},
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]},
        {title:"呼吸内科",
        arr:[
          {name:"感染内科"},
          {name:"普通内科"},
          {name:"肾内科"},
          {name:"消化内科"},
          {name:"心内科"},
          {name:"神经内科"}
        ]}
      ]
    }
  }
  // mounted(){
  //   for(let temp of this.lists){
  //     this.arraa= temp.arr;
  //     console.log(this.arraa);
  //   }
  // }
}
</script>

<style lang="css" scoped>
.box{
  border-bottom: 1px solid #e3e3e3;
}
.box p:hover{
  color: #10adff;
  border-bottom: 2px solid #0097ff;
}
.box p{
  padding: 6px 38px;
  position: relative;
}
.box p:after{
  content: 'l';
  position: absolute;
  right: 0;
  color: #ccc;
}
.looK_content{
  width: 100%;
}
.con-box{
  border-left:1px solid #e3e3e3;
  border-right:1px solid #e3e3e3;
}

.con-box:last-child{
  border-bottom:1px solid #e3e3e3;
}

.oneDepartment{
  border-top:1px solid #e3e3e3;
  padding: 14px 10px;
}

.active{
  border-bottom: 2px solid #10adff;
}
.twoDepartment:first-child{
  display:block;
}
.twoDepartment{
  /*display:none;*/
  /*border-top:1px solid #e3e3e3;*/
  padding-left:70px;
}
.twoDepartment p{
  padding:12px 0;
  border-top:1px solid #e3e3e3;
}
</style>
