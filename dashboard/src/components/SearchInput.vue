<template>
	<div class="input-group  input-group-seamless">
		<input type="text" class="form-control" placeholder="Search..." v-model="query" @input="listen">
		<div class="input-group-append">
			<div class="input-group-text">
				<i class="fa fa-search"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		timeout: {
			type: Number,
			default: 600
		}
	},
	data() {
		return {
			query: null,
			signal: null
		}
	},
	methods: {
		listen() {
			if (this.signal) clearTimeout(this.signal);
			this.signal = this.waitToEmit();
		},
		waitToEmit() {
			return setTimeout(() => {
				this.$parent.$emit("search-query", this.query);
			}, this.timeout);
		}
	}
}
</script>