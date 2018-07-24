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
			bodyType: 'Tools',
			listOfPost: [],
			firebase:  {
				apiKey: credentials.apiKey,
				authDomain: credentials.authDomain,
				databaseURL: credentials.databaseURL,
				projectId: credentials.projectId,
				storageBucket: "",
				messagingSenderId: credentials.messagingSenderId
			}
		}
	},
	created() {
		this.loadDatas();
	},
	methods: {
		loadDatas: function(){
			let sdk = firebase.initializeApp(this.firebase);
			let db = new Database(sdk);
			db.get("tools").then(tools => 
				$.each(tools, function(item) {
					tools[item].filtered = false;
					console.log(tools[item]);
					app.files.push(tools[item]);
					if( app.filterList.find( i => i.tag == tools[item].tag ) == undefined ) app.filterList.push({ "tag": tools[item].tag,"type": "tag", "status": true });
					if( app.filterList.find( i => i.tag == tools[item].title ) == undefined ) app.filterList.push({ "tag": tools[item].title,"type": "title", "parent": tools[item].tag, "status": true });
				})
			);
			console.log(this.files);
			console.log(this.filterList);
			new mediumData().getListOfPost("beeva-labs", postit => {
				this.listOfPost = postit.items;
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