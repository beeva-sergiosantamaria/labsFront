<template>
	<form class="m-0" @submit.prevent="submitForm">
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Prototype Form</h4>
				<p class="card-text text-danger mt-3 mb-5"><i class="fas fa-lock mr-2"></i>Required information</p>

				<div class="row my-3">
					<div class="col">
						<InputForm name="title" 
							type="text" 
							:label="{ text: 'Title', iconClass: 'fas fa-file-alt' }" 
							:required="true" 
							placeholder="Prototype title or name" 
							:value="prototype.title"/>
					</div>
					<div class="col">
						<SelectForm name="tag"
							:label="{ text: 'Tag', iconClass: 'fa fa-tags' }"
							:options="tags"
							:required="true"
							:value="prototype.tag"/>
					</div>
				</div>  

				<div class="row my-3">
					<div class="col">
						<TextareaForm name="description"
							:label="{ text: 'Description', iconClass: 'fa fa-align-left' }"
							:required="true"
							placeholder="Short description to introduce prototype applications..."
							:value="prototype.description"/>
					</div>
				</div>

				
				<LinkListInput name="technologies" 
					:label="{ text: 'Technologies', iconClass: 'fas fa-microchip' }" 
					:value="prototype.technologies" 
					:required="true"/>
			</div>

			<div class="card-footer">
				<p class="card-text text-info"><i class="fas fa-lock-open mr-2"></i> Optional information</p>

				<div class="row my-3">
					<div class="col">
						<LinkListInput name="graphics" 
							:label="{ text: 'Graphic material', iconClass: 'far fa-chart-bar'}"
							:value="prototype.graphics"/>
					</div>
				</div>

				<div class="row my-3">
					<div class="col">
						<TextareaForm name="scope"
							:label="{ text: 'Scope', iconClass: 'fas fa-binoculars' }"
							placeholder="The scope that current prototype is thinked for..."
							:value="prototype.scope"/>
					</div>
				</div>

				<div class="row my-3">
					<div class="col">
						<StepsInput name="steps"
							:label="{ text: 'First steps', iconClass:'fa fa-list-ol' }" 
							:value="prototype.steps"/>
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
import StepsInput from '@/components/StepsInput'

export default {
	data(){
		return{
			prototypeKey: "",
			prototype: {
				title: "",
				tag: "",
				description: "",
				scope: "",
				graphics: [],
				steps: []
			},
			tags: [ 
				"Frontend", "Backend", "Mobile", 
				"Big Data", "IoT", "Cloud", "DevOps", 
				"Security", "Blockchain", "DevOps", 
				"Human Computer Interfaces", "UX", "UI" 
			]
		}
	},
	mounted() {
		if (this.$route.params.id && this.$route.params.id !== "new") {
			if (this.$database) this.loadPrototype(this.$route.params.id);
			else this.$eventbus.$on("config-loaded", () => this.loadPrototype(this.$route.params.id));
		}
	},
	methods: {
		loadPrototype(id) {
			this.$database.get(`prototypes/${ id }`)
				.then(prototype => {
					prototype.id = id;
					this.prototype = prototype;
				})
				.catch(err => {
					console.error(err);
					this.$eventbus.$emit("alert", { type: "danger", message: "Error getting prototype info. Check console for more details" })
				});
		},
		submitForm() {
			this.$on("value", data => {
				if (data.value !== null) this.prototype[data.name] = data.value;
			});

			this.$emit("submit");
			setTimeout(() => {
				if (this.$route.params.id === "new") {
					this.$database.append('prototypes/', this.prototype)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `Prototype ${ this.prototype.title } created!` });
						}) 
						.catch((err) => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error creating prototype. Check console for more details" });
						});
				} else {
					this.$database.update('prototypes/', this.$route.params.id, this.prototype)
						.then(() => {
							this.$eventbus.$emit("alert", { type: "success", message: `prototype ${ this.prototype.title } updated!` });
						})
						.catch((err) => {
							console.error(err);
							this.$eventbus.$emit("alert", { type: "danger", message: "Error updating prototype. Check console for more details" });
						});
				}
				
			 	this.$router.push({ name: "prototypes" });
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