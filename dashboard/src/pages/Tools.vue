<template>
	<div class="card">
		<div class="card-body">
			<div class="row justify-content-between mb-3 px-3">
				<h4 class="card-title">
					<i class="fas fa-toolbox mr-2"></i>
					Tools
				</h4>
				<div class="col-auto">
					<router-link to="/tools/new" tag="button" type="button" class="btn btn-primary btn-pill btn-sm">
						<i class="fa fa-plus mr-2"></i>
						Add new tool
					</router-link>
				</div>
			</div>

			<div class="my-5">
				<SearchInput :timeout="400"/>
			</div>

			<p v-if="tools.length == 0" class="card-text">No tools stored on database. Create one now!</p>
			<div class="table-responsive" v-if="filterTools().length">
				<ToolList :tools="filterTools()"/>
			</div>
		</div>
	</div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import ToolList from '@/components/ToolList'

export default {
	data() {
		return {
			tools: [],
			query: null
		}
	},
	mounted() {
		if (this.$database) this.syncTools();
		else this.$eventbus.$on("config-loaded", this.syncTools);

		this.$on("search-query", q => this.query = q);
		this.$on("remove", this.removeTool);
	},
	methods: {
		filterTools() {
			return this.query ? this.tools.filter(tool => tool.title.toLowerCase().includes(this.query)) : this.tools;
		},
		syncTools() {
			this.$database.get("tools") 
				.then(values => {
					if (values) {
						this.tools = [];

						Object.keys(values).forEach(id => {
							let tool = values[id];
							tool.id = id;

							this.tools.push(tool);
						});
					}
				})
				.catch(err => {
					this.$eventbus.$emit("alert", { type: "danger", message: "Error synchronizing tools. Check console for more details" });
					console.error(err);
				});
		},
		removeTool(tool) {
			if (tool) {
				let ref = `tools/${ tool.id }`;
				this.$database.remove(ref) 
					.then(() => {
						this.$eventbus.$emit("alert", { type: "success", message: `Tool deleted!` });
						this.tools.forEach((t, index) => {
							if (t.id === tool.id) this.tools.splice(index, 1);
						});
					})
					.catch(err => {
						this.$eventbus.$emit("alert", { type: "danger", message: "Error deleting tool. Check console for more details" });
						console.error(err);
					});
			}

        }
	},
	components: {
		SearchInput,
		ToolList
	}
}
</script>