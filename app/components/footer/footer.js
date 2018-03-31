let LabsFooter = Vue.component("labsFooter-component", {
	template: 	`<div class="footerBox">
					<img class="backgroundScafold footerBackground" src="app/assets/images/labs_footer.png"/>
					<div class="footerContent">
						<div class="footerTitle">Contact Us</div>
						<div class="footerSubTitle">Mail us for support or any questions!</div>
						<div class="mailButtonBox" v-on:click="sendMail">
							<div class="mailButton">Send an Email</div>
						</div>
					</div>
				</div>`,
	components: {
	},			
	data() {
		return {
		}
	},
	methods: {
		sendMail: function(){
		}
	}	
})		