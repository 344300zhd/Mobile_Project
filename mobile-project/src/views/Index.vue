<template>
  <div class="container">
    <div class="good" v-for="(item,index) in 10" :key="index">
      <div class="good-img">
        <img src="../assets/img/good-1.jpg" alt="">
      </div>
      <div class="good-info">
        <div class="good-name">江中健胃消食片</div>
        <div class="good-detail">
          江中牌健胃消食片，6~12岁儿童最好的选择，家中常备健胃消食片，
          宝宝吃饭再也不用担心了。4 * 24粒一盒，折扣价￥12.00。 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
  background: #eee;
  padding: 20px;
  .good{
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    margin-bottom: 20px;
    .good-img{
      img{
        width: 150px;
        height: 150px;
      }
    }
    .good-info{
      font-size: 34px;
      .good-name{
        font-weight: bold;
        margin-bottom: 10px;
      }
      .good-detail{
        font-size: 24px;
        color: rgb(56, 54, 54);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
