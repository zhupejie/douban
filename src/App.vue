<template>
  <div id="app">

    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from "./components/tabbar"
export default {
  name: 'app',
  components:{
    Tabbar
  },
  beforeCreate:function(){
    this.$router.push("/");
  }
}
</script>

<style>
  *{margin: 0;padding: 0}
  ul{list-style: none}
  a{text-decoration: none}
  img,input{border: none}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
