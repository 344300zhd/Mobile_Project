<template>
  <div class="page">
    <Header/>
    <div class="page-content">
      <GoodCard/>
    </div>
    <Taber/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Taber from "@/components/Taber";
import GoodCard from "@/components/GoodCard";
export default {
  name:"Index",
  components:{ Header,Taber,GoodCard }
}
</script>

<style lang="scss" scoped>
.page{
  font-size: 34px;
  box-sizing: border-box;
  background: #eee;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  .page-content{
    padding: 20px;
    flex:1;
    overflow-y: auto;
  }
}
</style>
