<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import "@/assets/css/transition.scss";
export default{
  name:"app",
  data(){
    return{
      transitionName:'fade'
    }
  },
  watch:{
    '$route'(to,from){
      let toDepth = to.meta
      let fromDepth = from.meta
      /**
       * 正常情况 from < to
       */
      if(fromDepth > toDepth){
        this.transitionName = 'left'
      }else if(fromDepth < toDepth){
        this.transitionName = 'right'
      }else{
        this.transitionName = 'fade'
      }
    }
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-size: 40px;
}
#app{}
</style>
