
let dataBody = Vue.component("databody-component", {
	template: 	`<div class="bodyBox" id="cardTable">
					<div v-for="item in tools" class="grid-item infoCard">
						<img class="infoCardImage" src="app/assets/images/sketch.png"/>
						<div class="techName">{{ item.title }}</div>
						<div class="techType">{{ item.sections[6].content[0].content }}</div>
						<div class="techTag">{{ item.tag }}</div>
						<div class="techFooter">
							<div class="techStatusTitle">Status</div>
							<div class="techStatus">{{ item.sections[7].content[0].content }}</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
			tools: this.getToolsList()
		}
	},
	methods: {
		getToolsList: function(){
			let toolsList = [];
			new GitHubReader("beeva-labs", "labs-knowledge").getAreas("data/tools", tool => {
				tool.forEach((item) => {
					new GitHubReader("beeva-labs", "labs-knowledge").readFrom("data/tools/"+item.name, eachTool => {
						let parser = new ToolParser(eachTool,item.name);
						toolsList.push(parser.parse());
					}, err => {
						console.error(err);
					});
				});
			}, err => {
				console.error(err);
			});
			return toolsList;	
		}
	}	
})	

/*data: [
	{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'}
]*/
