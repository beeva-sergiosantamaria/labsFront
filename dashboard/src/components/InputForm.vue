<template>
	<div class="form-group">
		<label :for="name">
			<i v-if="label.iconClass" class="mr-2" :class="label.iconClass"></i>
			{{ label.text }} <span v-if="required" class="text-danger">*</span>
		</label>
		<input :id="name" :type="type" class="form-control" v-model="temp" :placeholder="placeholder">
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true,
			validator: val => {
				let valid = [ "text", "email", "url", "tel", "search" ];
				return valid.filter(v => v === val).length > 0;
			}
		},
		required: {
			type: Boolean,
			required: false,
			default: false
		},
		label: {
			type: Object,
			required: false,
			validator: val => {
				return Object.prototype.hasOwnProperty.call(val, "text") && typeof val.text === "string";
			}
		},
		placeholder: {
			type: String,
			required: false
		},
		value: {
			required: false
		}
	},
	watch: {
		value(val) {
			this.temp = val;
		}
	},
	data() {
		return {
			temp: null
		}
	},
	created() {
		this.$parent.$on("submit", () => {
			this.$parent.$emit("value", {
				name: this.name,
				value: this.temp
			});
		});
	}
}
</script>