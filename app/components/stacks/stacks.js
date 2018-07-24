
let stacks = Vue.component("stacks-component",{
	template: 	`<div class="stackBox" id="stacksTable">
					<div v-for="item in stacksFiles" v-on:click="" class="stacksCard">
						<div class="stackHeader" v-bind:class="areaBackgroundColor(item.area)">
							<div class="techStatusTitle">Área</div>
							<div class="techStatus">{{ item.area }}</div>
						</div>
						<div class="stacksTechsList" v-for="techs in item.techs">
							<div class="techName">{{ techs }}</div>
						</div>
						<div class="stackFooter" v-bind:class="alcanceBackgroundColor(item.alcance)">
							<div class="techStatusTitle">Alcance</div>
							<div class="techStatus">{{ item.alcance }}</div>
						</div>
					</div>
				</div>`,
	components:	{
	},
	data() {
		return {
			stacksFiles:[
				{area:"front-end", alcance:"prototyping", techs:["AngularJS", "nodeJS", "mongoDB"]},
				{area:"back-end", alcance:"production", techs:["AngularJS", "nodeJS", "mongoDB"]},
				{area:"front-end", alcance:"prototyping", techs:["AngularJS", "nodeJS", "mongoDB"]}
			]
		}
	},
	methods: {
		alcanceBackgroundColor: function(alcance){
			switch (alcance.toLowerCase()){
				case "prototyping":
					return "prototypingStack";
					break;
				case "production":
					return "productionStack";
					break;
			}
		},
		areaBackgroundColor: function(area){
			switch (area.toLowerCase()){
				case "front-end":
					return "frontAreaBack";
					break;
				case "back-end":
					return "backAreaBack";
					break;
			}
		}
	}	
})