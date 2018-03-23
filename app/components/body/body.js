let dataBody = Vue.component("databody-component", {
	template: 	`<div class="bodyBox" id="cardTable">
					<div v-for="item in data" class="grid-item infoCard">
						<img class="infoCardImage" src="app/assets/images/sketch.png"/>
						<div class="techName">{{ item.name }}</div>
						<div class="techType">{{ item.type }}</div>
						<div class="techTag">{{ item.tag }}</div>
						<div class="techFooter">
							<div class="techStatusTitle">Status</div>
							<div class="techStatus">{{ item.status }}</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
			data: function(){
				let reader = new GitHubReader("beeva-labs", "labs-knowledge");
				let tools = [];
				reader.readFrom("data/tools/Quantum-computing", tool => {
					let parser = new ToolParser(tool);
					tools = parser.parse();
					return tools;
					//this.index.push(post);
				}, err => {
					console.error(err);
				});
			}

			/*data: [
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'},
				{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'}
			]*/
		}
	},
	methods: {
		sendMail: function(){
		}
	}	
})	

/*var $grid = $('#cardTable').masonry({
		    itemSelector: '.grid-item',
			gutter: 10,
			columnWidth: 250
		});*/