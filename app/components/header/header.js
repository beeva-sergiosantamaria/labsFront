Vue.use(ParallaxJS)

var fileData = 
[
	{ 	'sections': 
		[
			{ 'content': [{ 'type': 'text', 'href':"https://cdn.dribbble.com/users/122342/screenshots/1071387/threejs.png", 'type': "link", 'title':"ThreeJSLogo" }],'title': "logo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "resumen twiteable" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Descripción detallada" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Enlaces de interés y documentación" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Demo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Soporte audiovis al adyacente" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Primeros pasos" },
			{ 'content': [{ 'type': 'text', 'content': "VR" }],'title': "Categoría tecnológica" },
			{ 'content': [{ 'type': 'text', 'content': "To Adopt" }],'title': "Estado de la tecnología" }
		], 
		'tag': "AR-VR", 
		'title': "ThreeJS",
		'filtered': false 
	},
	{ 	'sections': 
		[
			{ 'content': [{ 'type': 'text', 'href':"https://static.onthehub.com/production/attachments/9/2d85cc11-25c3-e711-80f9-000d3af41938/9c91b77d-0628-474d-bd3c-2785194546ac.png", 'type': "link", 'title':"QuantumLogo" }],'title': "logo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "resumen twiteable" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Descripción detallada" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Enlaces de interés y documentación" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Demo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Soporte audiovis al adyacente" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Primeros pasos" },
			{ 'content': [{ 'type': 'text', 'content': "quantum" }],'title': "Categoría tecnológica" },
			{ 'content': [{ 'type': 'text', 'content': "Work in progress" }],'title': "Estado de la tecnología" }
		], 
		'tag': "Quantum Computing", 
		'title': "QuantumExperience",
		'filtered': false 
	},
	{ 	'sections': 
		[
			{ 'content': [{ 'type': 'text', 'href':"https://static.onthehub.com/production/attachments/9/2d85cc11-25c3-e711-80f9-000d3af41938/9c91b77d-0628-474d-bd3c-2785194546ac.png", 'type': "link", 'title':"QuantumLogo" }],'title': "logo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "resumen twiteable" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Descripción detallada" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Enlaces de interés y documentación" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Demo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Soporte audiovis al adyacente" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Primeros pasos" },
			{ 'content': [{ 'type': 'text', 'content': "quantum cloud proccessing" }],'title': "Categoría tecnológica" },
			{ 'content': [{ 'type': 'text', 'content': "To Adopt" }],'title': "Estado de la tecnología" }
		], 
		'tag': "Quantum Computing", 
		'title': "Quantum Test",
		'filtered': false  
	},
	{ 	'sections': 
		[
			{ 'content': [{ 'type': 'link', 'href':"https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2017/06/kubernetes-logo.png"}], 'title':"KuberLogo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "resumen twiteable" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Descripción detallada" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Enlaces de interés y documentación" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Demo" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Soporte audiovis al adyacente" },
			{ 'content': [{ 'type': 'text', 'content': [] }],'title': "Primeros pasos" },
			{ 'content': [{ 'type': 'text', 'content': "System platform" }],'title': "Categoría tecnológica" },
			{ 'content': [{ 'type': 'text', 'content': "To Adopt" }],'title': "Estado de la tecnología" }
		], 
		'tag': "DevOps", 
		'title': "Kubernetes",
		'filtered': false  
	},
];

/*data: [
	{'name':'Sketch', 'type':'Desing Tool', 'tag':'UX/UI', 'status':'Work in progress'}
]*/

window.EventWatcher = new Vue();

let header = new Vue({
	el: '#app',
	data: {
		files: [],
		filterList: [],
		bodyType: 'Tools'
	},
	template: 	`<div>
					<div style="overflow: hidden; height: 100%;" id="scene">
						<img class="backgroundScafold" src="app/assets/images/WebLabs-Fondo-azul.png"/>
						<img data-depth="0.4" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-sombra2.png"/>
						<img data-depth="0.8" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-sombra1.png"/>
						<img data-depth="0.9" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-Ilustracion-probetas.png"/>
						<img data-depth="2" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-Ilustracion-postit.png"/>
						<img data-depth="1.001" data-limit-x="true" class="backGroundImage" src="app/assets/images/WebLabs-Ilustracion-llamas.png"/>
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
					<labsbody v-if="bodyType == 'Tools'"></labsbody>
					<teamslide></teamslide>
					<labsFooter></labsFooter>
				</div>`,
	components:	{
		"navbar": Navbar,
		"sidemenu": SideMenu,
		"labsFooter": LabsFooter,
		"labsbody": dataBody,
		"teamslide": teamslide
	},
	created:  function(){
		/*new GitHubReader("beeva-labs", "labs-knowledge").getAreas("data/tools", tool => {
			tool.forEach(item => {
				if( this.filterList.find( i => i == item.name ) == undefined ) this.filterList.push(item.name);
				new GitHubReader("beeva-labs", "labs-knowledge").readFrom("data/tools/"+item.name, eachTool => {
					let parser = new ToolParser(eachTool,item.name);
					this.files.push(parser.parse());
				}, err => {
					console.error(err);
				});
			});
		}, err => {
			console.error(err);
		});*/
		this.files = fileData;
		fileData.forEach(item => {
			if( this.filterList.find( i => i == item.tag ) == undefined ) this.filterList.push(item.tag);
		});
	}	
})

var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	hoverOnly: true
});