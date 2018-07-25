<template>
	<div class="card">
		<div class="card-body">
			<div class="row justify-content-between mb-3 px-3">
				<h4 class="card-title">
					<i class="fas fa-flask mr-2"></i>
					Prototypes
				</h4>
				<div class="col-auto">
					<router-link to="/prototypes/new" tag="button" type="button" class="btn btn-primary btn-pill btn-sm">
						<i class="fa fa-plus mr-2"></i>
						Add new prototype
					</router-link>
				</div>
			</div>

			<div class="my-5">
				<SearchInput :timeout="400"/>
			</div>

			<p v-if="prototypes.length == 0" class="card-text">No prototypes stored on database. Create one now!</p>
			<div class="table-responsive" v-if="filterPrototypes().length">
				<PrototypeList :prototypes="filterPrototypes()"/>
			</div>
		</div>
	</div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import PrototypeList from '@/components/PrototypeList'

export default {
	data() {
		return {
			prototypes: [],
			query: null
		}
	},
	mounted() {
		if (this.$database) this.syncPrototypes();
		else this.$eventbus.$on("config-loaded", this.syncPrototypes);

		this.$on("search-query", q => this.query = q);
		this.$on("remove", this.removePrototype);
	},
	methods: {
		filterPrototypes() {
			return this.query ? this.prototypes.filter(prototype => prototype.title.toLowerCase().includes(this.query)) : this.prototypes;
		},
		syncPrototypes() {
			this.$database.get("prototypes") 
				.then(values => {
					if (values) {
						this.prototypes = [];

						Object.keys(values).forEach(id => {
							let prototype = values[id];
							prototype.id = id;

							this.prototypes.push(prototype);
						});
					}
				})
				.catch(err => {
					this.$eventbus.$emit("alert", { type: "danger", message: "Error synchronizing prototypes. Check console for more details" });
					console.error(err);
				});
		},
		removePrototype(prototype) {
			if (prototype) {
				let ref = `prototypes/${ prototype.id }`;
				this.$database.remove(ref) 
					.then(() => {
						this.$eventbus.$emit("alert", { type: "success", message: `prototype deleted!` });
						this.prototypes.forEach((t, index) => {
							if (t.id === prototype.id) this.prototypes.splice(index, 1);
						});
					})
					.catch(err => {
						this.$eventbus.$emit("alert", { type: "danger", message: "Error deleting prototype. Check console for more details" });
						console.error(err);
					});
			}

        }
	},
	components: {
		SearchInput,
		PrototypeList
	}
}
</script>