<template>
	<div class="d-flex justify-content-between align-items-center">
		<div class="col-auto">
			<img class="d-inline-block" height="50" src="assets/img/logo.png"/>
		</div>
		<div class="col-auto">
			<div class="container-fluid">
				<div class="row">
					<div class="col-auto">
						<img :src="user.picture" width="60" class="rounded-circle shadow-sm mr-3">
					</div>
					<div class="col-auto">
						<span class="d-block">{{ user.name }}</span>
						<a href="#" class="btn btn-sm btn-outline-secondary btn-pill my-2" @click.prevent="logout">
							<i class="fas fa-power-off mr-2"></i> Logout
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {}
		}
	},
	mounted() {
		let user = this.$storage.get("user");
		if (user) this.user = user;
	},
	methods: { 
		logout() {
			this.$auth.logout()
				.then(() => {
					this.$storage.remove("user");
					this.$eventbus.$emit("alert", { type: "success", message: "Bye!" });
					this.$router.push("login");
				})
				.catch((err) => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error logging out. Check console for more details!" });
				});
		}
	}
}
</script>