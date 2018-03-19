let Navbar = Vue.component("navbar-component", {
	template: 	`<div class="navBox">
					<div class="brandLine">
						<div class="brandImage"><img src="app/assets/images/beevaLogo.png"/></div>
						<div class="calendar">
							<button class="button"><i class="material-icons left">developer_board</i>Proximos eventos</button>
						</div>
					</div>
					<div class="ToolsMenu">
						<button v-on:click="ActiveMenuTool(item)" :id="item" v-for="item in ToolsMenu.Sections" v-bind:class="{ buttonsActive: item === ToolActive }" class="buttons">{{ item }}</button>
					</div>
				</div>`,
	data() {
		return {
			ToolsMenu: {
				Sections: ['Tools', 'Stacks', 'Prototipes', 'Insights', 'Events']
			},
			ToolActive: 'Tools'
		}
	},
	methods: {
		ActiveMenuTool: function(value){
			this.ToolActive = value;
		}
	}	
})			