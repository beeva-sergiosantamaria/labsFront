Vue.use(ParallaxJS);

let app = new Vue({
	el: "#app",
	template:	`<router-view></router-view>`,
	router: Router,
	components: {
	},
	data() {
		return {
			files: [],
			filterList: [],
			bodyType: 'Tools'
		}
	},
	created() {
		this.loadDatas();
	},
	methods: {
		loadDatas: function(){
			this.files = fileData;
			fileData.forEach(item => {
				if( this.filterList.find( i => i.tag == item.tag ) == undefined ) this.filterList.push({ "tag": item.tag,"type": "tag", "status": true });
				if( this.filterList.find( i => i.tag == item.title ) == undefined ) this.filterList.push({ "tag": item.title,"type": "title", "parent": item.tag, "status": true });
			});
		}
	}
});

var scene = document.getElementById('scene');
if( scene ) { new Parallax(scene, { hoverOnly: true }) } 





















/*new GitHubReader("beeva-labs", "labs-knowledge").getAreas("data/tools", tool => {
	tool.forEach(item => {
		new GitHubReader("beeva-labs", "labs-knowledge").readFrom("data/tools/"+item.name, eachTool => {
			let parser = new ToolParser(eachTool,item.name).parse();
			this.files.push(parser);
			if( this.filterList.find( i => i.tag == parser.tag ) == undefined ) this.filterList.push({ "tag": parser.tag,"type": "tag", "status": true });
			if( this.filterList.find( i => i.tag == parser.title ) == undefined ) this.filterList.push({ "tag": parser.title,"type": "title", "parent": parser.tag, "status": true });
			window.sessionStorage.setItem('tick', "data loaded");
		}, err => {
			console.error(err);
		});
	});
}, err => {
	console.error(err);
});*/


/*this.files = fileData;
fileData.forEach(item => {
	if( this.filterList.find( i => i.tag == item.tag ) == undefined ) this.filterList.push({ "tag": item.tag,"type": "tag", "status": true });
	if( this.filterList.find( i => i.tag == item.title ) == undefined ) this.filterList.push({ "tag": item.title,"type": "title", "parent": item.tag, "status": true });
});	*/