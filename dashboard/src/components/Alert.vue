<template>
	<div class="card shadow rounded fade toast-alert"
		:class="[ { show: show }, type ]">
		<div class="card-body py-3 px-4">
			{{ message }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		timeout: {
			type: Number,
			default: 3000
		}
	},
	data() {
		return {
			show: false,
			message: "",
			type: "",
			types: [ "success", "warning", "danger" ],
		}
	},
	created() {
		this.$eventbus.$on("alert", ({ type, message }) => {
			if (this.types.indexOf(type) !== -1) this.alert(type, message);
		});
	},
	methods: {
		alert(type, message) {
			this.type = `alert-${ type }`;
			this.message = message;

			this.in().then(this.out);
		},
		in() {
			return new Promise((resolve) => {
				this.$el.style.display = "block";
				setTimeout(() => {
					this.show = true;
					resolve();
				}, 100);
			});
		},
		out() {
			return new Promise((resolve) => {
				setTimeout(() => {
					this.show = false;

					setTimeout(() => {
						this.$el.style.display = "none";
						resolve();
					}, 300);
				}, this.timeout);
			});
			
		}
	}
}
</script>

<style>
	.toast-alert {
		position: fixed;
		display: none;
		bottom: 50px;
		left: 50%;
		min-width: 200px;
		transform: translateX(-50%);
		z-index: 100;
	}
</style>
