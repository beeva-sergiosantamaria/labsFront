let detailedInfo = Vue.component("detailedInfo-component", {
	template: 	`<div class="techBox">
					<div class="techFile">
						<div class="closeFileBox">
							<div v-on:click="$parent.dynamicComponent = 'infobox'" class="closeFileButton"><i class="material-icons closeFileIcon">close</i></div>
						</div>
						<div class="toolFileTitleBox">
							<div class="toolFileTitle">IBMQExperience</div> 
							<div class="toolFileTag">Quantum</div>
						</div>	
						<div class="ToolFileQuote"><q>IBM Q Experience es la plataforma que te permite comenzar en la computación cuántica.</q></div>
						<div class="toolFileLinksBox">
							<div class="linksTitle">Enlaces de interes: </div>
							<div class="linkOption">IBM Quantum Experience</div>
							<div>Awesome Tutorial</div>
							<div>Conclusiones</div>
						</div>
						<div class="toolFileDemoBox">
							<div class="toolFileDemoTitle">Demo</div>
							<div>Algoritmo Grover</div>
						</div>
						<div class="toolFileAudiovisBox">
							<div class="toolFileAudiovisTitle">Contenido audiovisual</div>
							<div>Tutorial demo.</div>
						</div>
						<div class="toolFilefirstStepsBox">
							<div class="toolFilefirstStepsTitle">Primeros Pasos</div>
						</div>
						<div class="toolFileStatus">Work in progress</div>
					</div>
				</div>`,
	data() {
		return {
		}
	},
	created: function(done){
		
	},
	beforeCreated: function(){
		//console.log(this.$route.params.name);
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		}
	}	
})		

/*
<div class="toolFileTitle">{{ $root.files[0].title }}</div>
<div class="toolFileTag">{{ $root.files[0].tag }}</div>
<div class="ToolFileQuote">{{ $root.files[0].sections[1].title }}</div>
<div class="closeFileButton" v-for="item in $root.files[0].sections[1].content.items">{{ item }}</div>*/