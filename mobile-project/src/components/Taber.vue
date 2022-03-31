<template>
  <div class="taber">
      <div class="taber-item" v-for="(item,index) in tabList" :key="index">
          <div class="icon">
              <i :class="item.icon" size="large"></i>
          </div>
          <span>{{ item.text }}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:"Taber",
  data(){
      return{
          tabList:[
              {
                  icon:"el-icon-s-ticket",
                  text:"购票"
              },
              {
                  icon:"el-icon-upload",
                  text:"云部署"
              },
              {
                  icon:"el-icon-camera-solid",
                  text:"相机"
              },
              {
                  icon:"el-icon-s-tools",
                  text:"设置"
              }
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
.taber{
    z-index: 9999;
    padding: 20px;
    background: linear-gradient(to right,rgb(17, 212, 238),rgb(94, 224, 207),rgb(124, 225, 243));
    color: #fff;
    width: 100%;
    display: flex;
    .taber-item{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        span{
            font-size: 24px;
        }
    }
}
</style>