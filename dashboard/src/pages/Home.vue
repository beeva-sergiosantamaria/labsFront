<template>
	<div class="card">
		<div class="card-body">
			<h4 class="card-title">
				<i class="fas fa-hand-spock mr-2"></i>
				{{ title }}
			</h4>
			<p class="card-text" 
				v-for="(paragraph, index) in paragraphs" 
				:key="`p-${ index }`" 
				v-html="paragraph"></p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: "Welcome to LabsWeb Dashboard",
			paragraphs: [
				"If you are here today, it's because you are <b>winner</b> (and one of the chosen ones to innovate).",
				"Browse through resources to create new ones or edit them."
			]
		}
	}
}
</script>