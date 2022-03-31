<template>
  <div class="header">
      <div class="header-left" @click="back">
          <i class="el-icon-arrow-left"></i>
      </div>
      <div class="header-main">
          <slot>天猫商城</slot>
      </div>
      <div class="header-right">
          <i class="el-icon-message-solid"></i>
      </div>
  </div>
</template>

<script>
export default {
  name:"Header",
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
}
</script>

<style lang="scss" scoped>
.header{
    z-index: 9999;
    display: flex;
    width: 100%;
    height: 90px;
    line-height: 90px;
    background: linear-gradient(to right,rgb(17, 212, 238),rgb(94, 224, 207),rgb(124, 225, 243));
    color: #fff;
    .header-left,.header-right{
        padding: 0 20px;
        width: 150px;
    }
    .header-left{
        text-align: left;
    }
    .header-right{
        text-align: right;
    }
    .header-main{
        flex:1;
        text-align: center;
    }
}
</style>