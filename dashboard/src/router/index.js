import Vue from 'vue'
import VueRouter from 'vue-router'

import Storage from '@/libs/storage'

import Login from '@/pages/Login'
import Main from '@/pages/Main'
import Home from '@/pages/Home'
import Tools from '@/pages/Tools'
import ToolForm from '@/pages/ToolForm'
import Users from '@/pages/Users'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

const routes = [
	{ name: "login", path: "/login", component: Login },
	{ 
		path: "/", 
		component: Main,
		children: [
			{ name: "home", path: "", component: Home },
			{ name: "tools", path: "tools", component: Tools },
			{ name: "edit-tool", path: "tools/:id", component: ToolForm },
			{ name: "new-tool", path: "tools/new", component: ToolForm },
			{ name: "users", path: "users", component: Users }
		]
	},
	{ name: "notfound", path: "*", component: NotFound },
]

const Router = new VueRouter({ routes });

Router.beforeEach((to, _, next) => {
	const $storage = new Storage();

	let user = $storage.get("user");
	if (!user && to.path !== "/login") {
		next("login");
	} else {
		next();
	}
});

export default Router;