window.EventWatcher = new Vue();

let header = Vue.component("header-component",{
	template: 	`<div>
					<div style="overflow: hidden; height: 100%;" id="scene">
						<img class="backgroundScafold" src="app/assets/images/WebLabs-Fondo-azul.png"/>
						<img data-depth="0.4" data-limit-x="true" class="backGroundImage" src="app/assets/images/webLabs-sombra2.png"/>
						<img data-depth="0.8" data-limit-x="true" class="backGroundImage" src="app/assets/images/webLabs-sombra1.png"/>
						<img data-depth="0.9" data-limit-x="true" class="backGroundImage" src="app/assets/images/webLabs-ilustracion-probetas.png"/>
						<img data-depth="2" data-limit-x="true" class="backGroundImage" src="app/assets/images/webLabs-ilustracion-postit.png"/>
						<img data-depth="1.001" data-limit-x="true" class="backGroundImage" src="app/assets/images/webLabs-ilustracion-llamas.png"/>
					</div>
					<div class="general">
						<div class="lasbWaterMark">Web Labs | BEEVA</div>
						<div class="LabsTitle">Transferir. Evaluar. Ser referencia</div>
						<div class="labsSubtitle">Lorem ipsum dolor sit amen, consectetur adipiscing elit sed do eiusmod tempor.</div>
						<div class="LabsScrollButtonBox">
							<div class="labsScrollButton">Start exploring</div>
						</div>
					</div>
					<sidemenu></sidemenu>
					<navbar></navbar>
					<transition name="component-fade" mode="out-in">
						<component :is="dynamicComponent"></component>	
					</transition>	
					<labsFooter></labsFooter>
				</div>`,
	components:	{
		"navbar": Navbar,
		"sidemenu": SideMenu,
		"labsFooter": LabsFooter,
		"tools": tools,
		"detailedInfo": detailedInfo,
		"insights":insights,
		"stacks":stacks,
		"prototipes": prototipes
	},
	data() {
		return{
			dynamicComponent: "tools"
		}
	},
	created:  function(){
	}	
})
