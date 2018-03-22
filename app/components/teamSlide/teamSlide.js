let teamslide = Vue.component("teamSlide-component", {
	template: 	`<div class="teamBox">
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/CarlosGonzalez.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/EnriqueOtero.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/IraManzano.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/JorgeAndres.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/PaulaCordero.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/MarianClaudiu.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/SergioSantamaria.png"/></div>
				</div>`,
	data() {
		return {
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
		}
	}	
})		