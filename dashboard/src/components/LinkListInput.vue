<template>
	<div class="my-4">
		<label v-if="label">
			<i v-if="label.iconClass" :class="label.iconClass"></i>
			{{ label.text }} <span class="text-danger" v-if="required">*</span>
		</label>
		<p class="card-text pl-4 text-muted" v-if="!tempList.length">No items added.</p>
		<ul class="list-group my-3">
			<li class="list-group-item d-flex justify-content-between align-items-center" 
				v-for="(item, index) in tempList"
				:key="`i-${ index }`">
				<a :href="item.url" target="_blank">{{ item.title }}</a>
				<a href="#" class="text-danger" @click.prevent="removeItem(item)">
					<i class="fas fa-trash mr-2"></i>
				</a>
			</li>
		</ul>
		<div class="pl-4">
			<label>New Link</label>
			<div class="row pl-4">
				<div class="col-5">
					<div class="form-group">
						<input type="text" v-model="temp.title" class="form-control" placeholder="Item title">
					</div>
				</div>

				<div class="col-5">
					<div class="form-group">
						<input type="url" v-model="temp.url" class="form-control" placeholder="Item url">
					</div>
				</div>
				<div class="col-2">
					<button type="button" 
							class="btn btn-pill btn-outline-primary"
							:class="{ 'btn-outline-light disabled': !(this.temp.title && this.temp.url) }"
							@click="addItem">Add</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
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
			this.tempList = val;
		}
	},
	data() {
		return {
			temp: { 
				title: null,
				url: null
			},
			tempList: []
		}
	},
	created() {
		this.$parent.$on("submit", () => {
			this.$parent.$emit("value", {
				name: this.name,
				value: this.tempList
			});
		});
	},
	methods: {
		addItem() {
			if (this.temp.title && this.temp.url) {
				this.tempList.push(this.temp);
				this.temp = { 
					title: null,
					url: null
				};
			}
		},
		removeItem(item) {
			let index = this.tempList.indexOf(item);
			this.tempList.splice(index, 1);
		}
	}
}
</script>