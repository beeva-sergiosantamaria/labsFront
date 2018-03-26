
let SideMenu = Vue.component("sidemenu-component", {
	template: 	`<div>
					<div class="sideBox" v-bind:class="{ sideBoxOpen: active }">
						<div class="tagLabel">Tags</div>
						<div v-on:click="addFilter(item)" v-for="item in filtersCriteria" class="tagOption" v-bind:class="{ tagOptionActive: checkFilters(item) }">#{{ item }}</div>
					</div>
					<button class="filterButton" v-on:click="activeMenu"><i class="material-icons">edit</i></button>
				</div>`,
	data() {
		return {
			active: false,
			filtersActivate: [],
			filtersCriteria: this.getAreaFilters();
		}
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		},
		addFilter: function(value){
			if( this.filtersActivate.find( i => i == value ) ) this.filtersActivate.splice(this.filtersActivate.indexOf(value),1);
			else this.filtersActivate.push(value);
		},
		checkFilters: function(value){
			if( this.filtersActivate.find( i => i == value ) ) return true
			else return false	
		},
		getAreaFilters: function(){
			let areasFilter = [];
			new GitHubReader("beeva-labs", "labs-knowledge").getAreas("data/tools", tool => {
				tool.forEach((item) => {
						areasFilter.push(item.name);
					});
			}, err => {
				console.error(err);
			});
			return areasFilter;
		}
	}	
})		