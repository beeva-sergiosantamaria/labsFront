let detailedInfo = Vue.component("detailedInfo-component", {
	template: 	`<div class="techBox">
					<div class="closeFileBox">
						<div v-on:click="$parent.dynamicComponent = 'tools'" class="closeFileButton"><i class="material-icons closeFileIcon">close</i></div>
					</div>
					<div class="techFile">
						<div class="toolFileStatus">Work in progress</div>
						<div class="toolFileTag">#DevOps</div>
						<div class="toolFileTitleBox"><div class="toolFileTitle">GO/Goland</div></div>
						<div class="toolFileTypeBox"><div class="toolFileSubTitle">Languaje Programing</div></div>	
						<div class="toolFileDemoDescBox">
							<div class="toolFileDemoBox">
								<div class="toolFileDemoLink">
									<div>Demo:</div>
									<div>Algoritmo Grover</div>
								</div>
							</div>
							<div class="toolFileDescBox">
								<div class="toolFileDescTitle">The Go proggraming languaje is an open source project to make programmers more prodictuve</div>
								<div class="toolFileDescText">Go is expressive, concise, clean and efficient. It's concurrency mechanism make it easy to write programs that get most out of multicore and network machines, while it's novel type system enables flexible and modular program construction. Go compiles quickly to machine yet has te code.</div>
							</div>
						</div>
						<div class="ToolFileQuote">
							<div>"#Golang provides excellent profiling tools that can point directly to the allocation-heavy portions of a code"</div>
							<div class="tweetButton">Post on twitter</div>
						</div>
						<div class="toolFileAudiovisBox">
							<div class="toolFileAudiovisTitle">Contenido audiovisual</div>
							<div class="toolAudioVisFile">
								<div class="toolAudioVisLink">Tutorial experimento</div>
							</div>
							<div class="toolAudioVisFile">
								<div class="toolAudioVisLink">Tutorial experimento</div>
							</div>
							<div class="toolAudioVisFile">
								<div class="toolAudioVisLink">Tutorial experimento</div>
							</div>
						</div>
						<div class="toolFileLinksBox">
							<div class="linksTitle">Enlaces de interes: </div>
							<div class="linkOption"><b>IBM Quantum Experience</b> (https://quantumexperience.ng.bluemix.net/qx/experience)</div>
							<div class="linkOption"><b>Awesome Tutorial</b> (https://github.com/krishnakumarsekar/awesome-quantum-machine-learning)</div>
							<div class="linkOption"><b>Conclusiones</b> (https://docs.google.com/presentation/d/1gsaz5zkOGpdAoPFRoAJAwW9Tvz70meDYgfdslFop2PA/edit)</div>
						</div>
						<div class="toolFilefirstStepsBox">
							<div class="toolFilefirstStepsTitle">Primeros Pasos</div>
							<div><b>Beginners guide</b> (https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=beginners-guide&page=introduction)</div>
						</div>
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


/*<div class="toolFileDemoBox">
	<div class="toolFileDemoTitle">Demo</div>
	<div><b>Algoritmo Grover</b> (https://quantumexperience.ng.bluemix.net/qx/tutorial?sectionId=full-user-guide&page=004-Quantum_Algorithms~2F070-Grover%27s_Algorithm)</div>
</div>

(https://www.youtube.com/watch?v=pYD6bvKLI_c)*/