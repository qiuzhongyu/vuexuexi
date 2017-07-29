<template>
  <div class="hello">
    <div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">ToList  个数 : {{total}}</h3>
			</div>
			<div class="panel-body"><!--内容-->
				<ul class="list-group">
					<li :class="{done:item.completed}" v-for="(item,index) in todos" class="list-group-item">
						{{index}}···{{item.title}}{{item.completed}}
						<button :class="item.completed?'btn-danger':'btn-success'" class="btn pull-right btn-xs" @click="toggleState(index)">{{item.completed?'已完成':'完成'}}</button>
						<button class="btn btn-info btn-xs pull-right" @click="deleteItem(index)">删除</button>
					</li>
					
				</ul>
				<input type="text" class="form-control" v-model="newData.title" name="" id="" value="" />
				<button @click="addNews(newData)" class="btn btn-success">添加</button>
			</div>
			<div class="panel-footer">
				
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
//    data:{
				newData:{
					id:null,
					title:'',
					completed:false
				},
				todos:[{//将要做的事
					id:1, 
					title:"吃饭",
					completed:false
				},
				{
					id:2,
					title:"睡觉",
					completed:false
				},
				{
					id:3,
					title:"打豆豆",
					completed:false
				}
				
				]
				
//			},
			
    }
  },
  methods:{//放方法的
				addNews(data){
					this.todos.push(data);
					this.newData={
						id:null,
						title:'',
						completed:false
					}
					console.log(this.todos.length)
				},
				toggleState(index){
					this.todos[index].completed=!this.todos[index].completed
				},
				deleteItem(index){
					this.todos.splice(index,1)
				}
			},
			//vue 的计算属性
			computed:{//计算属性 读 肯piu嘚特
				total(){
					return this.todos.length;
				}
			}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.done{
				color: yellow;
				text-decoration: line-through;
			}
</style>
