const routes = [
	{ 
		path: "/:menuOption?/:id?", 
		component: header,
		children: [
		]
	}
]

const Router = new VueRouter({ routes });