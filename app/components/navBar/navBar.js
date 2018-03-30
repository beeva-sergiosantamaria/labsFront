
let Navbar = Vue.component("navbar-component", {
	template: 	`<div class="navBox">
					<div id="brandLine" class="brandLine">
						<div class="brandImage"><img src="app/assets/images/beevaLogo.png"/></div>
						<div class="calendar">
							<button class="button"><i class="material-icons calendarIcon">developer_board</i>Proximos eventos</button>
						</div>
					</div>
					<div id="menuBar" class="ToolsMenu" v-bind:class="{ toolsMenuFixed: scrollLevel }" v-on:scroll="handleScroll">
						<div v-on:click="ActiveMenuTool(item)" :id="item" v-for="item in ToolsMenu.Sections" v-bind:class="{ buttonsActive: item === ToolActive }" class="buttons">{{ item }}</div>
						<input type="text" class="SearchBar" v-model="inputValue" v-on:keyup="inputTypeHead($event.target.value)" placeholder="What are you looking for?"><i class="material-icons searchBarIcon">search</i></input>
						<div id="searchResultBox" class="searchResultBox">
							<div :id="item" v-for="item in itemsFounded" v-on:click="showFilterSearchResult(item)" class="searchResult"><div style="display: inline-block;" v-if="item.type == 'tag'">#</div>{{ item.tech }}</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
			ToolsMenu: {
				Sections: ['Tools', 'Stacks', 'Prototipes', 'Insights', 'Events']
			},
			ToolActive: 'Tools',
			scrollLevel : false,
			inputValue: "",
			itemsFounded: []
		}
	},
	methods: {
		ActiveMenuTool: function(value){
			this.$parent.bodyType = value;
			this.ToolActive = value;
		},
		 handleScroll () {
		    if( document.body.scrollTop > ( window.innerHeight + $("#brandLine").innerHeight()) ) {
		    	this.scrollLevel = true;
		    }
		    else this.scrollLevel = false;
		},
		inputTypeHead: function(word){
			this.itemsFounded = [];
			if( word.length > 0 ) {
				this.$parent.filterList.forEach( item =>{
					let itemClear = item.tag.replace(/[^\w]/g, '');
					if( itemClear.match(new RegExp('.{1,' + word.length + '}', 'g')).find( i => i.toLowerCase() == word.toLowerCase() ) && item.status) this.itemsFounded.push({"tech":item.tag, "type": item.type });
				})
			}
		},
		showFilterSearchResult: function(object){
			if(object.type == "tag"){
				this.inputValue = "";
				this.itemsFounded = [];
				this.$parent.filterList.forEach( item =>{
						if( item.tag == object.tech ) item.status = !item.status;
					})
				this.$parent.files.forEach( item => {
					if( item.tag == object.tech ) item.filtered = !item.filtered;
				})
			}
			else if( object.type == "title" ){
				this.inputValue = object.tech;
				this.itemsFounded = [];
			}
		}
	},
	created () {
	  	window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
	  	window.removeEventListener('scroll', this.handleScroll);
	}	
})			