<template>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">Title</th>
				<th scope="col">Tag</th>
				<th scope="col">Status</th>
				<th scope="col">Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(tool, index) in tools" 
				:key="`tool-${ index }`">
				<td scope="row">{{ tool.title }}</td>
				<td>{{ tool.tag | capitalize  }}</td>
				<td>{{ tool.status | capitalize  }}</td>
				<td>
					<router-link tag="button" 
						class="btn btn-outline-primary btn-pill btn-sm py-1 mr-3" 
						:to="{ name: 'edit-tool', params: { id: tool.id } }">
							<i class="fa fa-edit mr-2"></i>
							Edit
					</router-link>
					<button type="button" 
							class="btn btn-outline-danger btn-pill btn-sm py-1" 
							@click.prevent="remove(tool)">
								<i class="fa fa-trash mr-2"></i>
								Delete
					</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props: {
		tools: {
			type: Array,
			required: true,
			deep: true
		}
	},
	methods: {
		remove(tool) {
			this.$parent.$emit("remove", tool);
		}
	}
}
</script>