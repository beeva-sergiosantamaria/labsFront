<template>
	<div class="card">
		<div class="card-body">
			<div class="row justify-content-between mb-3 px-3">
				<h4 class="card-title">
					<i class="fas fa-database mr-2"></i>
					Stacks
				</h4>
				<div class="col-auto">
					<router-link to="/stacks/new" tag="button" type="button" class="btn btn-primary btn-pill btn-sm">
						<i class="fa fa-plus mr-2"></i>
						Add new stack
					</router-link>
				</div>
			</div>

			<div class="my-5">
				<SearchInput :timeout="400"/>
			</div>

			<p v-if="stacks.length == 0" class="card-text">No stacks stored on database. Create one now!</p>
			<div class="table-responsive" v-if="filterStacks().length">
				<StackList :stacks="filterStacks()"/>
			</div>
		</div>
	</div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import StackList from '@/components/StackList'

export default {
	data() {
		return {
			stacks: [],
			query: null
		}
	},
	mounted() {
		if (this.$database) this.syncStacks();
		else this.$eventbus.$on("config-loaded", this.syncStacks);

		this.$on("search-query", q => this.query = q);
		this.$on("remove", this.removeStack);
	},
	methods: {
		filterStacks() {
			return this.query ? this.stacks.filter(stack => stack.title.toLowerCase().includes(this.query)) : this.stacks;
		},
		syncStacks() {
			this.$database.get("stacks") 
				.then(values => {
					if (values) {
						this.stacks = [];

						Object.keys(values).forEach(id => {
							let stack = values[id];
							stack.id = id;

							this.stacks.push(stack);
						});
					}
				})
				.catch(err => {
					this.$eventbus.$emit("alert", { type: "danger", message: "Error synchronizing stacks. Check console for more details" });
					console.error(err);
				});
		},
		removeStack(stack) {
			if (stack) {
				let ref = `stacks/${ stack.id }`;
				this.$database.remove(ref) 
					.then(() => {
						this.$eventbus.$emit("alert", { type: "success", message: `stack deleted!` });
						this.stacks.forEach((t, index) => {
							if (t.id === stack.id) this.stacks.splice(index, 1);
						});
					})
					.catch(err => {
						this.$eventbus.$emit("alert", { type: "danger", message: "Error deleting stack. Check console for more details" });
						console.error(err);
					});
			}

        }
	},
	components: {
		SearchInput,
		StackList
	}
}
</script>