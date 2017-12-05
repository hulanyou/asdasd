<template lang="html">
  <div class="">
<div class="y_orderserch">
	<form class="form-inline2 flex flex_wraps" id="searchForm" method="post">
	<div class="form-group flex">
		<label class="control-label">供应商名称：</label>
		<div class="y_seript">
			<input class="form-control" type="text" value="">
		</div>
	</div>
	<div class="form-group flex">
		<label class="control-label">状态：</label>
		<div class="y_seript">
			<input class="form-control" type="text" value="">
		</div>
	</div>
	<div class="form-group flex">
		<label class="control-label" for="listipt5">下单时间：</label>
		<div class="y_seript">
      <div class="block">
        <el-date-picker
         size="mini"
         v-model="value11"
         type="date"
         placeholder="选择日期"
         format="yyyy 年 MM 月 dd 日"
         value-format="yyyy-MM-dd" class="rili">
       </el-date-picker>
       <span>-</span>
       <el-date-picker
        size="mini"
        v-model="value11"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd" class="rili">
      </el-date-picker>
   </div>
		</div>
	</div>
  <div class="form-group flex">
		<label class="control-label">状态：</label>
		<div class="y_seript">
			<select name="state" id="state" class="form-control selec">
        <option value="">--请选择--</option>
      </select>
		</div>
	</div>
	</form>
</div>
<div class="form-group col-sm-12">
    <button class="btn btn-primary search" title="" rel="tooltip" data-original-title="查询">查询</button>
    <button class="btn" id="clearFastForm" type="button" title="" rel="tooltip" data-original-title="清空">清空</button>
  </div>
  </div>
</template>

<script>
export default {
	  data() {
  return {
    value10:'',
    value11: '',
    currentPage3: 1

  };
},
methods: {
     handleSizeChange(val) {
       console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
       console.log(`当前页: ${val}`);
     }
   }
}
</script>

<style lang="css" scoped>
.form-group{
	padding: 8px 18px;
}
.rili{
  border: 1px solid #e3e3e3;
  width: 132px;
/*  height: 19px;*/
}
.control-label{
	font-size: 14px;
	width: 86px;
	text-align: right;
}
.form-control{
	  box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    width: 260px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.selec{
	height: 34px;
	width: 280px;
}
.col-sm-12{
	background: #FFFFFF;
}
</style>
