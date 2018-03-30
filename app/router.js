const routes = [
	{ 
		path: "/", 
		component: header,
		children: [
		]
	},
	{
		path: "/technology/:name",
		component: techologyFile
	}
]

const Router = new VueRouter({  routes });