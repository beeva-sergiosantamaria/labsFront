<template>
	<form class="m-0" @submit.prevent="submitForm">
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Tool Form</h4>
				<p class="card-text text-danger mt-3 mb-5"><i class="fas fa-lock mr-2"></i>Required information</p>

				<div class="row my-3">
					<div class="col">
						<InputForm name="title" 
							type="text" 
							:label="{ text: 'Title', iconClass: 'fas fa-file-alt' }" 
							:required="true" 
							placeholder="Stack title or name" 
							:value="stack.title"/>
					</div>
					<div class="col">
						<SelectForm name="tag"
							:label="{ text: 'Tag', iconClass: 'fa fa-tags' }"
							:options="tags"
							:required="true"
							:value="stack.tag"/>
					</div>
				</div>
				<div class="row my-3">
					<div class="col">
						<TextareaForm name="description"
							:label="{ text: 'Description', iconClass: 'fa fa-align-left' }"
							:required="true"
							placeholder="Short description to introduce stack..."
							:value="stack.description"/>
					</div>
				</div>
				<div class="row my-3">
					<div class="col">
						<ToolsSelectForm name="tools"
							:label="{ text: 'Stack tools', iconClass: 'fas fa-toolbox' }"
							:required="true"
							:tools="tools"
							:value="stack.tools"/>
					</div>
				</div>
				<div class="row my-3">
					<div class="col">
						<LinkListInput name="links" 
							:label="{ text: 'Links and documentation', iconClass: 'fa fa-link' }" 
							:value="stack.links" 
							:required="true"/>
					</div>
				</div> 
				<div class="row my-3">
					<div class="col">
						<TextareaForm name="scope"
							:label="{ text: 'Scope', iconClass: 'fas fa-binoculars' }"
							:required="true"
							placeholder="The scope that current stack is thinked for..."
							:value="stack.scope"/>
					</div>
				</div>

				<button type="submit" class="btn btn-pill btn-primary btn-block mt-5 mb-4">
					<i class="fas fa-save mr-2"></i>
					Save
				</button>
			</div>
		</div>
	</form>
</template>

<script>
import InputForm from '@/components/InputForm'
import SelectForm from '@/components/SelectForm'
import TextareaForm from '@/components/TextareaForm'
import LinkListInput from '@/components/LinkListInput'
import ToolsSelectForm from '@/components/ToolsSelectForm'

export default {
	data(){
		return{
			stackKey: "",
			stack: {
				title: "",
				description: "",
				tag: "",
				tools: [],
				links: [],
				scope: ""
				
			},
			tools: [],
			tags: [ 
				"Frontend", "Backend", "Mobile", 
				"Big Data", "IoT", "Cloud", "DevOps", 
				"Security", "Blockchain", "DevOps", 
				"Human Computer Interfaces", "UX", "UI" 
			]
		}
	},
	mounted() {
		try { this.loadTools(); }
		catch(e) { this.$eventbus.$on("config-loaded", this.loadTools); }

		if (this.$route.params.id && this.$route.params.id !== "new") {
			if (this.$database) this.loadStack(this.$route.params.id);
			else this.$eventbus.$on("config-loaded", () => this.loadStack(this.$route.params.id));
		}
	},
	methods: {
		loadTools() {
			this.$database.get("tools")
				.then((tools, key) => {
					if (tools) {
						this.tools = Object.keys(tools).map(id => {
							let title = tools[id].title
							return { title, id }; 
						});
					}
				})
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error getting tool info. Check console for more details" })
				});
		},
		loadStack(id) {
			this.$database.get(`stacks/${ id }`)
				.then(stack => {
					stack.id = id;
					this.stack = stack;
				})
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error getting stack info. Check console for more details" })
				});
		},
		submitForm() {
			this.$on("value", data => {
				if (data.value !== null) this.stack[data.name] = data.value;
			});

			this.$emit("submit");

			

			setTimeout(() => {
				if (this.$route.params.id === "new") {
					this.$database.append('stacks/', this.stack)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `Tool ${ this.stack.title } created!` });
						}) 
						.catch((err) => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error creating tool. Check console for more details" });
						});
				} else {
					this.$database.update('stacks/', this.$route.params.id, this.stack)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `Tool ${ this.stack.title } updated!` });
						})
						.catch((err) => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error updating tool. Check console for more details" });
						});
				}
				
			 	this.$router.push({ name: "stacks" });
			}, 100);
		}
	},
	components: {
		InputForm,
		SelectForm,
		TextareaForm,
		LinkListInput,
		ToolsSelectForm,
	}
}
</script>

<style>

</style>
