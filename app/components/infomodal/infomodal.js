let detailedInfo = Vue.component("detailedInfo-component", {
	template: 	`<div class="modal-mask" id="modal-template">
					<div class="modal-wrapper">
						<div class="modal-container">
						    <div class="techBox">
								<div class="closeFileBox">
									<div v-on:click="$parent.activeInfoModal = false" class="closeFileButton"><i class="material-icons closeFileIcon">close</i></div>
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
									<div class="toolFilefirstStepsBox">
										<div class="toolFilefirstStepsTitle">First Steps</div>
										<div class="toolFileFirstStepFile">
											<div class="firstStepOrder">01</div>
											<div class="firstSteptext">Download from <a href="https://goland.org/dll/" target="_blank">https://goland.org/dll/</a> </div>
										</div>
										<div class="toolFileFirstStepFile">
											<div class="firstStepOrder">02</div>
											<div class="firstSteptext">Install with: 'tar -C/usr/local -xzf go$VERSION. $OS-$ARCH.tar.gz'</div>
										</div>
										<div class="toolFileFirstStepFile">
											<div class="firstStepOrder">03</div>
											<div class="firstSteptext">Add Go to PATH: 'export PATH=$PATH:/usr/local/go/bin'</div>
										</div>
									</div>
									<div class="toolFileLinksBox">
										<div class="linksTitle">Link</div>
										<div class="linkOption"><b>IBM Quantum Experience</b> <p><a href="https://quantumexperience.ng.bluemix.net/qx/experience">https://quantumexperience.ng.bluemix.net/qx/experience</a></p></div>
										<div class="linkOption"><b>Awesome Tutorial</b> <p><a href="https://github.com/krishnakumarsekar/awesome-quantum-machine-learning">https://github.com/krishnakumarsekar/awesome-quantum-machine-learning</a></p></div>
										<div class="linkOption"><b>Conclusiones</b> <p><a href="https://docs.google.com/presentation/d/1gsaz5zkOGpdAoPFRoAJAwW9Tvz70meDYgfdslFop2PA/edit">https://docs.google.com/presentation/d/1gsaz5zkOGpdAoPFRoAJAwW9Tvz70meDYgfdslFop2PA/edit</a></p></div>
									</div>
								</div>
							</div>
				       	</div>
				    </div>
				</div>`,
	data() {
		return {
		}
	},
	created: function(done){
		console.log("component created!!!");
		$("modal-template").focus();
		/*$(document.body).on("mousewheel", function(event) {
		  event.preventDefault();
		  //event.stopPropagation();
		});*/
	},
	destroyed: function(){
		/*$(document.body).on("mousewheel", function(event) {
			return true;
			//event.preventDefault();
			//event.stopPropagation();
		  });*/
		console.log("component destroyed!!!");
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		}
	}	
})		
