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
						<input type="text" class="SearchBar" placeholder="What are you looking for?"><i class="material-icons searchBarIcon">search</i></input>

					</div>
				</div>`,
	data() {
		return {
			ToolsMenu: {
				Sections: ['Tools', 'Stacks', 'Prototipes', 'Insights', 'Events']
			},
			ToolActive: 'Tools',
			scrollLevel : false
		}
	},
	methods: {
		ActiveMenuTool: function(value){
			this.ToolActive = value;
		},
		 handleScroll () {
		    if( document.body.scrollTop > ( window.innerHeight + $("#brandLine").innerHeight()) ) {
		    	this.scrollLevel = true;
		    }
		    else this.scrollLevel = false;
		}
	},
	created () {
	  	window.addEventListener('scroll', this.handleScroll);
	},
	destroyed () {
	  	window.removeEventListener('scroll', this.handleScroll);
	}	
})			