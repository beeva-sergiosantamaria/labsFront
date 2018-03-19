let SideMenu = Vue.component("sidemenu-component", {
	template: 	`<div class="sideBox" v-bind:class="{ sideBoxOpen: active }">
					<button class="filterButton" v-on:click="activeMenu"><i class="material-icons">edit</i></button>
					<div class="tagLabel">Tags</div>
					<div v-on:click="addFilter(item)" v-for="item in filtersCriteria" class="tagOption" v-bind:class="{ tagOptionActive: checkFilters(item) }">#{{ item }}</div>
				</div>`,
	data() {
		return {
			active: false,
			filtersActivate: [],
			filtersCriteria: ['FrontEnd', 'BackEnd', 'mobile', 'Big Data', 'Machine Learning', 'IoT', 'Cloud', 'DevOps', 'Security', 'BlockChain', 'HCI', 'UX/UI']
		}
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
			console.log(this.active);
		},
		addFilter: function(value){
			if( this.filtersActivate.find( i => i == value ) ) this.filtersActivate.splice(this.filtersActivate.indexOf(value),1);
			else this.filtersActivate.push(value);
			console.log(this.filtersActivate);
		},
		checkFilters: function(value){
			if( this.filtersActivate.find( i => i == value ) ) return true
			else return false	
		}
	}	
})		