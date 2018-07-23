let detailedInfo = Vue.component("detailedInfo-component", {
	template: 	`<div class="modal-mask" id="modal-template">
					<div class="modal-wrapper">
						<div class="modal-container">
						    <div class="techBox">
								<div class="closeFileBox">
									<div v-on:click="$parent.activeInfoModal = false" class="closeFileButton"><i class="material-icons closeFileIcon">close</i></div>
								</div>
								<div class="techFile">
									<div class="toolFileStatus">{{ $parent.detailedInfoCard.status }}</div>
									<div class="toolFileTag">#{{ $parent.detailedInfoCard.tag }}</div>
									<div class="toolFileTitleBox"><div class="toolFileTitle">{{ $parent.detailedInfoCard.title }}</div></div>
									<div class="toolFileTypeBox"><div class="toolFileSubTitle">{{ $parent.detailedInfoCard.tag }}</div></div>	
									<div class="toolFileDemoDescBox">
										<div class="toolFileDemoBox">
											<div class="toolFileDemoLink">
												<div>Demo:</div>
												<div>Algoritmo Grover</div>
											</div>
										</div>
										<div class="toolFileDescBox">
											<div class="toolFileDescTitle">{{ $parent.detailedInfoCard.twitter }}</div>
											<div class="toolFileDescText">{{ $parent.detailedInfoCard.description }}.</div>
										</div>
									</div>
									<div class="ToolFileQuote">
										<div>"#{{ $parent.detailedInfoCard.twitter }}"</div>
										<div class="tweetButton">Post on twitter</div>
									</div>
									<div class="toolFileAudiovisBox">
										<div class="toolFileAudiovisTitle">Contenido audiovisual</div>
										<div class="toolAudioVisFile" v-for="link in  $parent.detailedInfoCard.graphics">
											<div class="toolAudioVisLink">{{link.title}}</div>
										</div>
									</div>
									<div class="toolFilefirstStepsBox">
										<div class="toolFilefirstStepsTitle">First Steps</div>
										<div class="toolFileFirstStepFile" v-for="step in $parent.detailedInfoCard.steps">
											<div class="firstStepOrder">{{step.order}}</div>
											<div class="firstSteptext">{{step.content}} </div>
										</div>
									</div>
									<div class="toolFileLinksBox">
										<div class="linksTitle">Link</div>
										<div class="linkOption" v-for="infoLink in $parent.detailedInfoCard.links"><b>{{infoLink.title}}</b> <p><a href="">{{infoLink.url}}</a></p></div>
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
	},
	destroyed: function(){
		console.log("component destroyed!!!");
	},
	methods: {
		activeMenu: function(){
			this.active = !this.active;
		}
	}	
})		
