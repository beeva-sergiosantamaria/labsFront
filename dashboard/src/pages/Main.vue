<template>
	<div class="container my-5">
		<Navbar/>
		<div class="row my-5">
			<div class="col-2">
				<Sidebar/>
			</div>
			<div class="col-10">
				<transition name="fade">
					<router-view></router-view>
				</transition>
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