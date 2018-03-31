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
							<div class="linkOption"><b>IBM Quantum Experience</b> (https://quantumexperience.ng.bluemix.net/qx/experience)</div>
							<div class="linkOption"><b>Awesome Tutorial</b> (https://github.com/krishnakumarsekar/awesome-quantum-machine-learning)</div>
							<div class="linkOption"><b>Conclusiones</b> (https://docs.google.com/presentation/d/1gsaz5zkOGpdAoPFRoAJAwW9Tvz70meDYgfdslFop2PA/edit)</div>
						</div>
						<div class="toolFileDemoBox">
							<div class="toolFileDemoTitle">Demo</div>
							<div><b>Algoritmo Grover</b> (https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=full-user-guide&page=004-Quantum_Algorithms~2F070-Grover%27s_Algorithm)</div>
						</div>
						<div class="toolFileAudiovisBox">
							<div class="toolFileAudiovisTitle">Contenido audiovisual</div>
							<div><b>Tutorial experimento.</b> (https://www.youtube.com/watch?v=pYD6bvKLI_c)</div>
						</div>
						<div class="toolFilefirstStepsBox">
							<div class="toolFilefirstStepsTitle">Primeros Pasos</div>
							<div><b>Beginners guide</b> (https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=beginners-guide&page=introduction)</div>
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