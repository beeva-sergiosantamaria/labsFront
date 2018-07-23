<template>
	<button type="button" class="btn btn-secondary btn-pill mx-2" @click="signin">
		Signin with <i class="fab fa-lg fa-google"></i>
	</button>
</template>

<script>
export default {
	methods: {
		signed(user) {
			if (Object.prototype.hasOwnProperty.call(user, "credential")) delete user.credential;
			this.$database.put("users/pending", user.id, user)
				.then(res => {
					this.$parent.$emit("signed", user);
				})
				.catch(err => this.$parent.$emit("error", err));
		},
		signin() {
			this.$auth.login()
				.then(this.signed)
				.catch(err => this.$parent.$emit("error", err));
		}
	}
}
</script>