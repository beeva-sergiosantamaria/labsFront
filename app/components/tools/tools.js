let tools = Vue.component("tools-component", {
	template: 	`<div class="bodyBox" id="cardTable">
					<div v-for="item in $root.files" v-on:click="$parent.openModal(item)" class="grid-item infoCard" v-bind:class="{ inforcardFiltered: item.filtered }">
						<img class="infoCardImage" v-bind:src="item.logo">
						<div class="infoCardText">
							<div class="techName">{{ item.title }}</div>
							<div class="techType">{{ item.tag }}</div>
							<div class="techTag">{{ item.tag }}</div>
						</div>
						<div class="techFooter" v-bind:class="checkTechStatus(item.status)">
							<div class="techStatusTitle">Status</div>
							<div class="techStatus">{{ item.status }}</div>
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
				case "wait":
					return "techToDiscard";
					break;
				case "adopt":
					return "techToAdopt";
					break;
				case "work in progress":
					return "techInProgress";
					break;
			}
		}
	}	
})