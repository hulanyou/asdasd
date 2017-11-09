<template lang="html">
  <div class="">
    <div class="tab-cotent">
        <div class="h-evaluatio h-evaluatio3">
          <div class="form-group">
              <label class="control-label" for="resigetname">输入代金券号：</label>
              <input type="text" required="" class="form-control2" id="resigetname" placeholder="输入">
            </div>
            <a href="#modal-tip" class="btn btn-custom" data-toggle="modal" style="margin-left:300px;">绑定</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.h-evaluatio3 {
    margin: 0;
    border: none;
}
.h-evaluatio {
    padding: 40px 0 60px 0;
}
.h-evaluatio .form-group {
    margin-bottom: 25px;
    padding-left: 30px;
    overflow: hidden;
    width: auto;
    line-height: 40px;
    zoom: 1;
}
.h-evaluatio .form-group .control-label {
    float: left;
    width: 105px;
    text-align: right;
}
.h-evaluatio .form-group .form-control2 {
    width: 42%;
    float: left;
    line-height: 14px;
    padding: 10px;
    font-size: 14px;
    color: #333;
}
.form-control2 {
    box-shadow: none;
    border-radius: 0;
    height: 19px;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    display: block;
    width: 90%;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.h-evaluatio3 .btn-custom {
    /*margin-left: 136px;*/
    margin: 20px 0 0 136px;
    width: 100px;
}
</style>
