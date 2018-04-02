let LabsFooter = Vue.component("labsFooter-component", {
	template: 	`<div class="footerBox">
					<div class="footerContent">
						<teamslide></teamslide>
						<div class="footerTitle">Contact Us</div>
						<div class="footerSubTitle">Mail us for support or any questions!</div>
						<div class="mailButtonBox" v-on:click="sendMail">
							<div class="mailButton">Send an Email</div>
						</div>
					</div>
				</div>`,
	components: {
		"teamslide": teamslide
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