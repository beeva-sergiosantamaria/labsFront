let tools = Vue.component("tools-component", {
	template: 	`<div class="bodyBox" id="cardTable">
					<div v-for="item in $root.files" v-on:click="$parent.dynamicComponent = 'detailedInfo'" class="grid-item infoCard" v-bind:class="{ inforcardFiltered: item.filtered }">
						<img class="infoCardImage" v-bind:src="item.sections[0].content[0].href">
						<div class="infoCardText">
							<div class="techName">{{ item.title }}</div>
							<div class="techType">{{ item.sections[7].content[0].content }}</div>
							<div class="techTag">{{ item.tag }}</div>
						</div>
						<div class="techFooter" v-bind:class="checkTechStatus(item.sections[8].content[0].content)">
							<div class="techStatusTitle">Status</div>
							<div class="techStatus">{{ item.sections[8].content[0].content }}</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
		}
	},
	methods: {
		eraseFile: function(){
		},
		checkTechStatus: function(value){
			switch (value.toLowerCase()){
				case "not yet":
					return "techToDiscard";
					break;
				case "to adopt":
					return "techToAdopt";
					break;
				case "work in progress":
					return "techInProgress";
					break;
			}
		}
	}	
})