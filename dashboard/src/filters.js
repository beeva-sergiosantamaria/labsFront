import Vue from 'vue'

Vue.filter('capitalize', value => {
	if (!value) return "";
	
	let values = value.toString().toLowerCase().split(" ");
	values = values.map(val => val.charAt(0).toUpperCase() + val.slice(1))
	return values.join(" ");
});

Vue.filter('formatName', tag => {
	if (!tag) return "";
	
	tag = tag.toString().replace(" ", "");
	return tag.toLowerCase();
})