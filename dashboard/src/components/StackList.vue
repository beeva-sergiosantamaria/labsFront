<template>
	<table class="table">
		<thead>
			<tr>
				<th scope="col">Title</th>
				<th scope="col">Tag</th>
				<th scope="col">Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(stack, index) in stacks" 
				:key="`stack-${ index }`">
				<td scope="row">{{ stack.title }}</td>
				<td>{{ stack.tag | capitalize  }}</td>
				<td>
					<router-link tag="button" 
						class="btn btn-outline-primary btn-pill btn-sm py-1 mr-3" 
						:to="{ name: 'edit-stack', params: { id: stack.id } }">
							<i class="fa fa-edit mr-2"></i>
							Edit
					</router-link>
					<button type="button" 
							class="btn btn-outline-danger btn-pill btn-sm py-1" 
							@click.prevent="remove(stack)">
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
		stacks: {
			type: Array,
			required: true,
			deep: true
		}
	},
	methods: {
		remove(stack) {
			this.$parent.$emit("remove", stack);
		}
	}
}
</script>