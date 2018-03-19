
Vue.use(ParallaxJS)

let header = new Vue({
	el: '#app',
	data: {
	},
	template: 	`<div>
					<div style="overflow: hidden" id="scene">
						<img class="backgroundScafold" src="app/assets/images/WebLabs-Fondo-azul.png"/>
						<img data-depth="0.4" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-sombra2.png"/>
						<img data-depth="0.8" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-sombra1.png"/>
						<img data-depth="0.9" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-Ilustracion-probetas.png"/>
						<img data-depth="1" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-Ilustracion-postit.png"/>
						<img data-depth="1.01" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-Ilustracion-llamas.png"/>
					</div>
						<div class="general">
							<div class="lasbWaterMark">Web Labs | BEEVA</div>
							<div class="LabsTitle">Transferir. Evaluar. Ser referencia</div>
							<div class="labsSubtitle">Lorem ipsum dolor sit amen, consectetur adipiscing elit sed do eiusmod tempor.</div>
							<div class="LabsScrollButtonBox">
								<button class="labsScrollButton">Start exploring</button>
							</div>
						</div>
					<sidemenu></sidemenu>
					<navbar></navbar>
				</div>`,
	components:	{
		"navbar": Navbar,
		"sidemenu": SideMenu
	}		
})

var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
});