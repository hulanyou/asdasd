<template lang="html">
  <div class="">
    <div class="block">
      <span class="demonstration">周</span>
      <el-date-picker
        v-model="value3"
        type="week"
        format="yyyy 第 WW 周"
        placeholder="选择周">
      </el-date-picker>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value3: ''
      };
    }
  }
</script>
<style lang="css" scoped>
</style>
