<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    //this.$router.push({name:"tOrdersIndex",query:{status:2}})
    //this.$router.push("configIndex")
    //this.$router.push("newsIndex")
    //this.$router.push("shouye")
    this.$router.push("Login")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
