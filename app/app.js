Vue.use(ParallaxJS);

let app = new Vue({
	el: "#app",
	template:	`<router-view></router-view>`,
	router: Router,
	components: {
	},
	data() {
		return {

		}
	},
	created() {
	}
});

var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	hoverOnly: true
});