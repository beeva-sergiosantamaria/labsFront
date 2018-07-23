import firebase from 'firebase/app'
import 'firebase/auth'

export default class Auth {
	constructor(sdk) {
		this.provider = new firebase.auth.GoogleAuthProvider();
		this.auth2 = sdk.auth();
	}

	currentUser() {
		return this.auth2.currentUser;
	}

	login() {
		return new Promise((resolve, reject) => {
			this.auth2.signInWithPopup(this.provider)
				.then((response) => {
					let profile = response.user;
					let credential = response.credential;

					resolve({
						credential,
						id: profile.uid,
						name: profile.displayName,
						email: profile.email,
						picture: profile.photoURL
					});
				})
				.catch(reject);
		});
	}

	logout() {
		return this.auth2.signOut();
	}
}