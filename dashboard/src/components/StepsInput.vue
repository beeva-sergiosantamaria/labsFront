<template>
	<div class="my-4">
		<label v-if="label">
			<i v-if="label.iconClass" class="mr-2" :class="label.iconClass"></i>
			{{ label.text }} <span class="text-danger" v-if="required">*</span>
		</label>
		<p class="card-text my-4 text-muted" v-if="!tempList">No step found.</p>
		<ul v-if="tempList" class="list-group my-3">
			<li class="list-group-item d-flex justify-content-between align-items-center" 
				v-for="(item, index) in sortList()"
				:key="`i-${ index }`">
				<div>
					<span class="mr-3">{{ item.order }}</span>
					{{ item.content }}
				</div>
				<a href="#" class="text-danger" @click.prevent="removeItem(item)">
					<i class="fas fa-trash mr-2"></i>
				</a>
			</li>
		</ul>

		<label>New item</label>
		<div class="row">
			<div class="col-3">
				<div class="form-group">
					<input type="number" v-model="temp.order" class="form-control" placeholder="Order">
				</div>
			</div>

			<div class="col-7">
				<div class="form-group">
					<input type="text" v-model="temp.content" class="form-control" placeholder="Content">
				</div>
			</div>
			<div class="col-2">
				<button type="button" 
						class="btn btn-pill btn-outline-primary"
						:class="{ 'btn-outline-light disabled': !(this.temp.order && this.temp.content) }" 
						@click="addItem">Add</button>
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
				order: null,
				content: null
			},
			tempList: []
		}
	},
	created() {
		this.$parent.$on("submit", () => {
			this.$parent.$emit("value", {
				name: this.name,
				value: this.sortList()
			});
		});
	},
	methods: {
		addItem() {
			if (this.temp.order && this.temp.content) {
				this.tempList.push(this.temp);
				this.temp = {
					order: null,
					content: null
				};
			}
		},
		removeItem(item) {
			let index = this.tempList.indexOf(item);
			this.tempList.splice(index, 1);
		},
		sortList() {
			let items = this.tempList.slice();
			return items.sort((a, b) => a.order - b.order);
		}
	}
}
</script>