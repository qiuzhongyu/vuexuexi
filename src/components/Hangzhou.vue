<template>
  <div class="hello">
    	<button class="btn btn-success" @click="ifIsShow=!ifIsShow">if  显示/隐藏{{ifIsShow}}</button>
			<div class="box" v-if="ifIsShow">
				我是切换的div if
			</div>
			<br />
			<button class="btn btn-success" @click="showIsShow=!showIsShow">show  显示/隐藏{{showIsShow}}</button>
			<div class="box" v-show="showIsShow">
				我是切换的div show
			</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ifIsShow:true,
			showIsShow:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
				width: 300px;
				height: 300px;
				background: yellow;
			}
</style>
