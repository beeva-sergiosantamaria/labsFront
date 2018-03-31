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
			{ 'content': [{ 'type': 'text', 'content': "not yet" }],'title': "Estado de la tecnología" }
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
			{ 'content': [{ 'type': 'text', 'content': "work in progress" }],'title': "Estado de la tecnología" }
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



/*

*********replace this in header.create for get real datas*********

new GitHubReader("beeva-labs", "labs-knowledge").getAreas("data/tools", tool => {
	tool.forEach(item => {
		new GitHubReader("beeva-labs", "labs-knowledge").readFrom("data/tools/"+item.name, eachTool => {
			let parser = new ToolParser(eachTool,item.name).parse();
			this.files.push(parser);
			if( this.filterList.find( i => i.tag == parser.tag ) == undefined ) this.filterList.push({ "tag": parser.tag,"type": "tag", "status": true });
			if( this.filterList.find( i => i.tag == parser.title ) == undefined ) this.filterList.push({ "tag": parser.title,"type": "title", "parent": parser.tag, "status": true });
		}, err => {
			console.error(err);
		});
	});
}, err => {
	console.error(err);
});

*/
