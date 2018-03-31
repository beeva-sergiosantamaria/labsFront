
let SideMenu = Vue.component("sidemenu-component", {
	template: 	`<div>
					<div class="sideBox" v-bind:class="{ sideBoxOpen: active }">
						<div class="tagLabel">Tags</div>
						<div v-on:click="addFilter(item)" v-for="item in $root.filterList" class="tagOption" v-if="item.type == 'tag'" v-bind:class="{ tagOptionActive: !item.status }">#{{ item.tag }}</div>
					</div>
					<button class="filterButton" v-on:click="activeMenu"><i class="material-icons">edit</i></button>
				</div>`,
	data() {
		return {
			active: false
		}
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		},
		addFilter: function(value){
			value.status = !value.status; 
			this.$root.files.forEach( item => {
				if( item.tag == value.tag ) item.filtered = !item.filtered;
			})
		}
	}	
})