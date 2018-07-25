<template>
	<div class="card">
		<div class="card-body ">
			<h4 class="card-title">
				<i class="fas fa-user-shield mr-2"></i>
				Users
			</h4>

			<user-list name="Pending" 
				v-if="pending.length"
				:users="pending"
				:actions="[
					{ event: 'accepted', text: 'Accept', class: 'badge-success' },
					{ event: 'declined', text: 'Decline', class: 'badge-danger' }
				]"/>
			
			<user-list name="Members" 
				v-if="members.length"
				:users="members"
				:actions="[
					{ event: 'remove', text: 'Remove', class: 'badge-danger' }
				]"/>
		</div>
	</div>
</template>

<script>
import UserList from '@/components/UserList'

export default {
	data() {
		return {
			members: [],
			pending: []
		}
	},
	mounted() {
		if (this.$database) this.syncUsers();
		else this.$eventbus.$on("config-loaded", this.syncUsers);

		this.$on("accepted", this.requestAccepted);
		this.$on("declined", this.requestDeclined);
		this.$on("remove", this.removeUser);
	},
	methods: {
		sync(type) {
			return this.$database.get(`users/${ type }`);
		},
		syncMembers() {
			this.sync("members").then(members => this.members = members ? Object.values(members) : [])
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error synchronizing members. Check console for more details." });
				});
		},
		syncPendings() {
			this.sync("pending").then(pending => this.pending = pending ? Object.values(pending) : [])
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error synchronizing pending requests. Check console for more details." });
				});
		},
		syncUsers() {
			this.syncMembers();
			this.syncPendings();
		},
		requestAccepted(user) {
			const oldRef = `users/pending/${ user.id }`;
			const newRef = "users/members";
			this.$database.put(newRef, user.id, user)
				.then(() => {
					this.$database.remove(oldRef)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `${ user.name } request accepted.` });
							this.syncUsers();
						})
						.catch(err => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error accepting pending request. Check console for more details." });
						});
				})
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error accepting pending request. Check console for more details." });
				});
		},
		requestDeclined(user) {
			const ref = `users/pending/${ user.id }`;
			this.$database.remove(ref)
				.then(() => {
					this.$eventbus.$emit("alert", { type: "success", message: `${ user.name } request declined.` });
					this.syncUsers();
				})
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error accepting pending request. Check console for more details." });
				});
		},
		removeUser(user) {
			let me = this.$storage.get("user");
			if (me.id !== user.id) {
				let ref = `users/members/${ user.id }`;
				this.$database.remove(ref)
					.then(() => {
						this.syncUsers();
						this.$eventbus.$emit("alert", { type: "success", message: `${ user.name } deleted.` });
					})
					.catch(err => {
						console.error(err);
						this.$eventbus.$emit("alert", { type: "danger", message: "Error removing user. Check console for more details." });
					});
			} else {
				this.$eventbus.$emit("alert", { type: "danger", message: "Error removing user. You can't remove yourself." });
			}
		}
	},
	components: {
		UserList
	}
}
</script>