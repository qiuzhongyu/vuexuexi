<template>
  <div id="app">
  	
    <navbar></navbar>
    <!--<navbar></navbar>
    <navbar></navbar>-->
    	<!--router-view实际上是vue提供的一个组件-->
    <router-view></router-view>
  </div>
</template>

<script>
import navbara from '@/components/navbar'
export default {
  name: 'app',
  components: {
  	navbar:navbara
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
