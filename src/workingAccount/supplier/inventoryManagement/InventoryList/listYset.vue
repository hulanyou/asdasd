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
<tr v-for="s in data">
  <td>{{s.id}}</td>
  <td>{{s.commodity}}</td>
  <td>{{s.cangku}}</td>
  <td>{{s.cangkuLx}}</td>
  <td>{{s.kucun}}</td>
  <td>
    <router-link to="/workingAccount/supplier/inventoryManagement/InventoryList/ystSee" tag="a" class="btn btn-look">{{s.caozuo}}</router-link>
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
      data:[
        {
          id:"ctordinary0000000634",
          commodity:"澳洲进口Sukin/苏芊眼部抗氧化精华30ml",
          cangku:"全国范围",
          cangkuLx:"CDC",
          kucun:10000,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000633",
          commodity:"澳洲进口SUKIN/苏芊保湿喷雾爽肤水125ml",
          cangku:"全国范围",
          cangkuLx:"CDX",
          kucun:1000,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000632",
          commodity:"澳洲进口Chantelle 香娜露儿 羊胎素复合精华原液 6个10ml/支",
          cangku:"全国范围",
          cangkuLx:"CDX",
          kucun:1000,
          caozuo:"查看"
        },
        {
          id:"ctordinary0000000591",
          commodity:"澳洲进口新西兰karicare可瑞康羊奶粉3段900g/",
          cangku:"全国范围",
          cangkuLx:"CDX",
          kucun:1000,
          caozuo:"查看"
        },
        {
            id:"ctordinary0000000590",
            commodity:"澳洲进口新西兰karicare可瑞康羊奶粉二段900g	",
            cangku:"全国范围",
            cangkuLx:"CDX",
            kucun:1000,
            caozuo:"查看"
          },
          {
              id:"ctordinary0000000589",
              commodity:"澳洲进口新西兰karicare可瑞康羊奶粉一段900",
              cangku:"全国范围",
              cangkuLx:"CDX",
              kucun:1000,
              caozuo:"查看"
            },
            {
                id:"ctordinary0000000588",
                commodity:"澳洲进口可瑞康爱他美Aptamil白金版婴幼儿奶粉2段900g/苏千眼部抗氧精华30ml",
                cangku:"全国范围",
                cangkuLx:"CDX",
                kucun:1000,
                caozuo:"查看"
              },
              {
                  id:"ctordinary0000000587",
                  commodity:"澳洲进口可瑞康爱他美Aptamil白金版婴幼儿奶粉3段900g/苏千眼部抗氧精华30ml",
                  cangku:"全国范围",
                  cangkuLx:"CDX",
                  kucun:1000,
                  caozuo:"查看"
                }
      ]


    }
  }
}
</script>

<style lang="css">
</style>
