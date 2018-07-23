<template>
	<section>
		<Alert/>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</section>
</template>

<script>
import Vue from 'vue'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

import '@/filters'

import Auth from '@/libs/auth'
import Storage from '@/libs/storage'
import Database from '@/libs/database'

import Alert from '@/components/Alert'

export default {
	data() {
		return {
			config: {}
		}
	},
	async created() {
		Vue.prototype.$eventbus = new Vue();
		Vue.prototype.$storage = new Storage();

		this.loadConfiguration().then(config => {
			this.config = config;

			let sdk = firebase.initializeApp(this.config.firebase);

			Vue.prototype.$auth = new Auth(sdk);
			Vue.prototype.$database = new Database(sdk);
			
			this.$eventbus.$emit("config-loaded");
		}).catch(error => {
			throw new Error(`Can't load app configuration: ${ error }`);
		});
	},
	methods: {
		async loadConfiguration() {
			try {
				const res = await fetch('config.json');
				return await res.json();
			} catch (e) {
				throw e;
			}
		}
	},
	components: {
		Alert
	}
}
</script>

<style>
	body::-webkit-scrollbar { width: 0 !important }
	body { -ms-overflow-style: none; }
	body { overflow: -moz-scrollbars-none; }

	.fade-enter-active, .fade-leave-active {
		transition-property: opacity;
		transition-duration: .25s;
	}

	.fade-enter-active {
		transition-delay: .25s;
	}

	.fade-enter, .fade-leave-active {
		opacity: 0;
	}
</style>
