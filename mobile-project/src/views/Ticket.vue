<template>
  <div class="ticket-box">
      <el-button @click="login">回去</el-button>
      <span>zilhoilnaiiiiiiiiifonnnnn</span>
  </div>
</template>

<script>
export default {
  name:"Ticket",
  data(){
      return{
          show:true
      }
  },
  methods:{
      login(){
          this.$router.push({path:"/"})
      }
  }
}
</script>

<style lang="scss" scoped>
.ticket-box{
     .fade-enter, .fade-leave-to {
      opacity: 0
    }
    .fade-leave, .fade-enter-to {
      opacity: 1
    }
    .fade-enter-active, .fade-leave-active {
      transition: all 1s
    }
}
</style>