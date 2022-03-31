<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name:"app",
  data(){
    return{
      transitionName:'fade'
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
</style>
