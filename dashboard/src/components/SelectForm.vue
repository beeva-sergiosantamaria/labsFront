<template>
	<div class="form-group">                                           
		<label :for="name">
			<i v-if="label.iconClass" class="mr-2" :class="label.iconClass"></i>
			{{ label.text }} <span v-if="required" class="text-danger">*</span>
		</label>
		<select :id="name" class="form-control" v-model="temp" :required="required">
			<option v-for="(option, index) in options" :key="`o-${ index }`">{{ option }}</option>
		</select>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		options: {
			type: Array,
			required: true
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