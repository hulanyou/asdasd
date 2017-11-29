<template lang="html">
  <div class="">
    <table width="100%" cellpadding="0" cellspacing="0" class="tabler">
  <thead>
  	<tr>
  		<th width="20%">SKU</th>
  		<th width="20%">商品</th>
  		<th width="15%">仓库</th>
  		<th width="15%">仓库类型</th>
  		<th width="15%">库存量</th>
  		<th>操作</th>
  	</tr>
  </thead>
<tbody>
  <tr v-for="l in data2">
    <td>{{l.id}}</td>
    <td>{{l.commodity}}</td>
    <td>{{l.cangku}}</td>
    <td>{{l.cangkuLx}}</td>
    <td>{{l.kucun}}</td>
    <td>
      <router-link to="/workingAccount/supplier/inventoryManagement/InventoryList/wsetSee" tag="a" class="btn btn-look">{{l.caozuo}}</router-link>
      </td>
  </tr>
</tbody>
  </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data2:[
        {
          id:"ctordinary0000000675	",
          commodity:"测试",
          cangku:"",
          cangkuLx:"",
          kucun:0,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000674	",
          commodity:"测试",
          cangku:"",
          cangkuLx:"",
          kucun:0,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000673	",
          commodity:"测试",
          cangku:"",
          cangkuLx:"",
          kucun:0,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000672	",
          commodity:"测试",
          cangku:"",
          cangkuLx:"",
          kucun:0,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000671	",
          commodity:"测试",
          cangku:"",
          cangkuLx:"",
          kucun:0,
          caozuo:"查看"
          },
          {
            id:"ctordinary0000000670	",
            commodity:"测试",
            cangku:"",
            cangkuLx:"",
            kucun:0,
            caozuo:"查看"
            },
            {
              id:"ctordinary0000000669	",
              commodity:"测试",
              cangku:"",
              cangkuLx:"",
              kucun:0,
              caozuo:"查看"
              },
              {
                id:"ctordinary0000000668	",
                commodity:"测试",
                cangku:"",
                cangkuLx:"",
                kucun:0,
                caozuo:"查看"
                }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
