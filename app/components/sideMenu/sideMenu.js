
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
			active: false,
			itemsSelected: []
		}
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		},
		addFilter: function(value){
			if(this.itemsSelected.indexOf(value.tag) > -1 ) this.itemsSelected.splice($.inArray(value.tag, this.itemsSelected),1);
			else this.itemsSelected.push(value.tag);
			value.status = !value.status;
			this.$root.files.forEach( item => {
				if( this.itemsSelected.indexOf(item.tag) > -1 ) item.filtered = true;
				else item.filtered = false;
			})
			this.$root.filterList.forEach( item =>{
				if( this.itemsSelected.indexOf(item.tag) > -1 ) item.status = true;
				else item.status = false;
				//if( item.tag != object.tech ) item.status = !item.status;
			})
		}
	}	
})