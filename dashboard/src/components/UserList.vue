<template>
	<div class="my-4">
		<div v-if="name" class="d-flex align-items-center my-4">
			<h5 class="my-1 mr-2">{{ name }}</h5>
			<span class="badge badge-pill badge-outline-secondary">{{ users.length }}</span>
		</div>

		<ul class="list-group">
			<li class="list-group-item d-flex justify-content-between align-items-center"
				v-for="(user, index) in users"
				:key="`user-${ index }`">
				<div class="d-flex align-items-center">
					<img :src="user.picture" width="48" height="48" class="mr-3 rounded-circle"/>
					<div>
						<span class="d-block">{{ user.name | capitalize }}</span>
						<small>{{ user.email }}</small>
					</div>
				</div>
				<div v-if="actions">
					<a href="#"
						class="badge badge-pill mr-2" 
						:class="action.class"
						v-for="(action, index) in actions"
						:key="`action-${ index }`"
						@click.prevent="handler(action.event, user)">
						{{ action.text }}
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: false
		},
		users: {
			type: Array,
			required: true,
			deep: true
		},
		actions: {
			type: Array,
			required: false,
			validadator(val) {
				val.forEach(element => {
					if (
						!(element instanceof Object) ||
						!Object.prototype.hasOwnProperty.call(element, "text") || 
						!Object.prototype.hasOwnProperty.call(element, "event")
					) return false;
				});

				return true;
			}
		}
	},
	methods: {
		handler(event, user) {
			this.$parent.$emit(event, user);
		}
	}
}
</script>