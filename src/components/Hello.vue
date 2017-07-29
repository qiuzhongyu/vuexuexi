<template>
  <div class="">
    	<!--数据显示-->
			{{message}}
			<span v-text="info"></span>
			<!--数据双向绑定-->
			<input type="text" name="" id="" value="" v-model="message"/>
			
			
			<br /><hr />
			<!--循环数组显示数据-->
			<ul>
				<li v-for="(v,index) in lists">{{index}}···{{v.id}}---{{v.title}}</li>
			</ul>
			<!--触发事件-->
			<button v-on:click="go()">v-on:click</button>
			<!--简写-->
			<button @click="run()">@click</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
//    data:{
					message:'hello world',
					info:'我是vue',
					lists:[{
							id:1,
							title:'吃饭'
						},
						{
							id:2,
							title:'睡觉'
						},
						{
							id:3,
							title:'打豆豆'
						},
						{
							id:4,
							title:'OK'
						}
					]
//				},
				
    }
  },
  methods:{
					go(){
						console.log('go go go')
					},
					run(){
						console.log('run run run')
					}
				}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
