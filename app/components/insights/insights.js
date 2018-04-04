
let insights = Vue.component("insights-component", {
	template: 	`<div class="postsBox">
					<div v-for="item in $root.listOfPost" class="postEntryCard" v-on:click="urlReditect(item.link)" v-bind:style="{ 'background': 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(' + item.thumbnail + ')' }">
						<div class="postCardTitle">{{ item.title }}</div>
					</div>
				</div>`,
	data() {
		return {
		}
	},
	methods: {
		urlReditect: function(dir){
			console.log(dir);
			window.open(dir, "_blank");
		}
	}	
})		