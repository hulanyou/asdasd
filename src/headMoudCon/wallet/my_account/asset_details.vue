<template lang="html">
  <div class="">
    <div class="tab-cotent" >
      <div class="income">
        <div class="bill">
          <span class="fl">收入：+ 100</span>
          <label class="fr">2016-09-06 13：36</label>
        </div>
        <div class="bill">
          <span class="fl">收入：+ 100</span>
          <label class="fr">2016-09-06 13：36</label>
        </div>
        <div class="bill">
          <span class="fl">收入：+ 100</span>
          <label class="fr">2016-09-06 13：36</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.income .bill {
    line-height: 40px;
    overflow: hidden;
    margin: 0 20px;
}
.income .bill + .bill {
    border-top: 1px solid #e8e8e8;
}
.income .bill .fr {
    color: #999999;
}
</style>
