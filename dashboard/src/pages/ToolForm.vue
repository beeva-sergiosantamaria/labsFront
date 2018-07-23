<template>
	<form class="m-0" @submit.prevent="submitForm">
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Tool Form</h4>
				<p class="card-text">Required information</p>

				<div class="row">
					<div class="col">
						<InputForm name="title" 
							type="text" 
							:label="{ text: 'Title', icon: 'fa fa-cog' }" 
							:required="true" 
							placeholder="Tool title or name" 
							:value="tool.title"/>
					</div>
					<div class="col">
						<SelectForm name="tag"
							:label="{ text: 'Tags', iconClass: 'fa fa-tag' }"
							:options="tags"
							:required="true"
							:value="tool.tag"/>
					</div>  
				</div>  

				<div class="row">
					<div class="col">
						<TextareaForm name="twitter"
							:label="{ text: 'Description for Twitter', iconClass: 'fab fa-twitter' }"
							:required="true"
							placeholder="Short description to share in twitter and other social networks..."
							:value="tool.twitter"/>
					</div>
					<div class="col">
						<SelectForm name="status"
							:label="{ text: 'Status', iconClass: 'fa fa-thermometer-full' }"
							:options="states"
							:required="true"
							:value="tool.status"/>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<TextareaForm name="description"
							:label="{ text: 'Description', iconClass: 'fa fa-align-left' }"
							:required="true"
							placeholder="Short description to introduce tool applications..."
							:value="tool.description"/>
					</div>
				</div>

				
				<LinkListInput name="links" 
					:label="{ text: 'Links', iconClass: 'fa fa-link' }" 
					:value="tool.links" 
					:required="true"/>
			</div>

			<div class="card-footer">
				<p class="card-text">Optional information</p>

				<LinkListInput name="graphics" 
					:label="{ text: 'Graphic material', iconClass: 'fa fa-bar-chart'}"
					:value="tool.graphics"/>

				<InputForm name="demo"
					type="url"
					:label="{ text: 'Demo', iconClass: 'fa fa-film' }"
					:required="false"
					placeholder="Url address to demo resource (video, ppt, ...)"
					:value="tool.demo"/>

				<InputForm name="logo"
					type="url"
					:label="{ text: 'Logo url', iconClass: 'far fa-bookmark' }"
					:required="false"
					placeholder="Tecnology brand logo"
					:value="tool.logo"/>

				<StepsInput name="steps"
					:label="{ text: 'First steps', iconClass:'fa fa-list-ol' }" 
					:value="tool.steps"/>
					
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
import StepsInput from '@/components/StepsInput'

export default {
	data(){
		return{
			toolKey: "",
			tool: {
				title: "",
				twitter: "",
				description: "",
				tag: "",
				status: "",
				demo: "",
				logo: "",
				graphics: "",
				steps: ""
			},
			tags: [ 
				"Frontend", "Backend", "Mobile", 
				"Big Data", "IoT", "Cloud", "DevOps", 
				"Security", "Blockchain", "DevOps", 
				"Human Computer Interfaces", "UX", "UI" 
			],
			states: [
				"Adopt", "Wait", "Work in progress"
			]
		}
	},
	mounted() {
		if (this.$route.params.id && this.$route.params.id !== "new") {
			if (this.$database) this.loadTool(this.$route.params.id);
			else this.$eventbus.$on("config-loaded", () => this.loadTool(this.$route.params.id));
		}
	},
	methods: {
		loadTool(id) {
			this.$database.get(`tools/${ id }`) 
				.then(res => {
					if (res) Object.entries(res).forEach(([ key, value ]) => this.tool[key] = value );
				}) 
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error getting tool info. Check console for more details" })
				});
		},
		submitForm() {
			this.$on("value", data => {
				if (data.value !== null) this.tool[data.name] = data.value;
			});

			this.$emit("submit");
			setTimeout(() => {
				if (this.$route.params.id === "new") {
					this.$database.append('tools/', this.tool)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `Tool ${ this.tool.title } created!` });
						}) 
						.catch((err) => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error creating tool. Check console for more details" });
						});
				} else {
					this.$database.update('tools/', this.$route.params.id, this.tool)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `Tool ${ this.tool.title } updated!` });
						})
						.catch((err) => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error updating tool. Check console for more details" });
						});
				}
				
			 	this.$router.push({ name: "tools" });
			}, 100);
		}
	},
	components: {
		InputForm,
		SelectForm,
		TextareaForm,
		LinkListInput,
		StepsInput
	}
}
</script>