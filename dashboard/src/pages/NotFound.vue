<template>
	<div class="container my-5">
		<Navbar/>
		<div class="row my-5">
			<div class="col-2">
				<Sidebar/>
			</div>
			<div class="col-10">
				<div class="jumbotron">
					<h2 class="display-8">Ops! Something was wrong</h2>
					<p class="lead">The page you have requested has not been found :(</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
	components: {
		Navbar,
		Sidebar
	}
}
</script>

let NotFound = Vue.component("notfound-page", {
	template:	``,
});