let teamslide = Vue.component("teamSlide-component", {
	template: 	`<div class="teamBox">
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/CarlosGonzalez.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/EnriqueOtero.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/IraManzano.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/JorgeAndres.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/PaulaCordero.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/MarianClaudiu.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/SergioSantamaria.png"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/JesusMArtin.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/lucasmenendez.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/mariorodriguez.jpg"/></div>
					<div class="teamPhoto"><img src="app/components/teamSlide/photos/samuelmunoz.jpg"/></div>
				</div>`,
	data() {
		return {
		}
	},
	methods: {
		hoverEffect: function(){
			this.active = !this.active;
		}
	}	
})		