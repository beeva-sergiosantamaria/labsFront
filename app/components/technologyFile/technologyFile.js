let techologyFile = Vue.component("tech-component", {
	template: 	`<div>
					<div class="techBox">{{ queryData }}</div>
				</div>`,
	data() {
		return {
			queryData: this.$route.params.name
		}
	},
	created: function(){
		console.log(this.$route.params.name);
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		}
	}	
})		