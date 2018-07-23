<template>
	<button type="button" class="btn btn-primary btn-pill mx-2" @click="login">
		Login with <i class="fab fa-lg fa-google"></i>
	</button>
</template>

<script>
export default {
	methods: {
		logged(user) {
			this.$database.get(`users/members/${ user.id }`)
				.then(allowed => {
					if (allowed) this.$parent.$emit("logged", user);
				})
				.catch(() => this.$parent.$emit("error", "Unregistered user. Please signin first!"));
		},
		login() {
			this.$auth.login()
				.then(this.logged)
				.catch(err => this.$parent.$emit("error", err));
		}
	}
}
</script>