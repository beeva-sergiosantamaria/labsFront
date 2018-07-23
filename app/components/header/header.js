window.EventWatcher = new Vue();

let header = Vue.component("header-component",{
	template: 	`<div>
					<div style="overflow: hidden; height: 100%;" id="scene">
						<img class="backgroundScafold" src="app/assets/images/weblabs-fondo-azul.png"/>
						<img data-depth="0.4" data-limit-x="true" class="backGroundImage" src="app/assets/images/weblabs-sombra2.png"/>
						<img data-depth="0.8" data-limit-x="true" class="backGroundImage" src="app/assets/images/weblabs-sombra1.png"/>
						<img data-depth="0.9" data-limit-x="true" class="backGroundImage" src="app/assets/images/weblabs-ilustracion-probetas.png"/>
						<img data-depth="2" data-limit-x="true" class="backGroundImage" src="app/assets/images/weblabs-ilustracion-postit.png"/>
						<img data-depth="1.001" data-limit-x="true" class="backGroundImage" src="app/assets/images/weblabs-ilustracion-llamas.png"/>
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
					<transition name="modal"><detailedInfo v-if="activeInfoModal"></detailedInfo></transition>
					<transition name="modal-calendar"><calendarEvents v-if="activeCalendar"></calendarEvents></transition>
				</div>`,
	components:	{
		"navbar": Navbar,
		"sidemenu": SideMenu,
		"labsFooter": LabsFooter,
		"tools": tools,
		"detailedInfo": detailedInfo,
		"insights":insights,
		"stacks":stacks,
		"prototipes": prototipes,
		"calendarEvents": eventscalendar
	},
	data() {
		return{
			dynamicComponent: "tools",
			activeInfoModal: false,
			activeCalendar: false,
			detailedInfoCard:{},
			events: [
				{
					title: 'Event1',
					start: '2015-10-10 12:30:00',
				    end: '2015-10-10 16:30:00'
				},
				{
					title: 'Event2',
					start: '2015-10-07 17:30:00',
				    end: '2015-10-07 21:30:00'
				}
			]
		}
	},
	created:  function(){
	},
	methods: {
		openModal: function(fileData){
			this.detailedInfoCard = fileData;
			this.activeInfoModal = true;
		}
	}		
})
