let dataBody = Vue.component("databody-component", {
	template: 	`<div class="bodyBox" id="cardTable">
					<div v-for="item in tools" class="grid-item infoCard" v-on:click="eraseFile()" v-bind:class="{ inforcardFiltered: item.filtered }">
						<img class="infoCardImage" v-bind:src="item.sections[0].content[0].href">
						<div class="techName">{{ item.title }}</div>
						<div class="techType">{{ item.sections[7].content[0].content }}</div>
						<div class="techTag">{{ item.tag }}</div>
						<div class="techFooter">
							<div class="techStatusTitle">Status</div>
							<div class="techStatus">{{ item.sections[8].content[0].content }}</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
			tools: this.$parent.files
		}
	},
	methods: {
		eraseFile: function(){
			//console.log(this.$parent.files);
			//this.$parent.files.splice(0,1);
		}
	}	
})	
/*getToolsList: function(){
	let toolsList = [];
	new GitHubReader("beeva-labs", "labs-knowledge").getAreas("data/tools", tool => {
		tool.forEach((item) => {
			new GitHubReader("beeva-labs", "labs-knowledge").readFrom("data/tools/"+item.name, eachTool => {
				let parser = new ToolParser(eachTool,item.name);
				console.log(parser.parse());
				toolsList.push(parser.parse());
			}, err => {
				console.error(err);
			});
		});
	}, err => {
		console.error(err);
	});
	//console.log(toolsList);
	return toolsList;	
},*/