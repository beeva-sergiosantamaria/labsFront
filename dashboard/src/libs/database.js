import firebase from 'firebase/app'
import 'firebase/database'

export default class Database {
	constructor(sdk) {
		this.database = sdk.database();
	}

	get(ref) {
		return new Promise((resolve, reject) => {
			this.database.ref(ref).once("value")
				.then(snapshot => resolve(snapshot.val()))
				.catch(reject);
		});
	}

	stop(ref) {
		this.database.ref(ref).off();
	}

	put(ref, key, data) {
		let _ref = `${ ref }/${ key }`;
		return this.database.ref(_ref).set(data);
	}

	append(ref, data) {
		let table = this.database.ref(ref);

		let newChild = table.push();
		return newChild.set(data);
	}

	update(ref, key, data) {
		let _ref = `${ ref }${ key }`;
		return this.database.ref(_ref).update(data);
	}

	remove(ref) {
		return this.database.ref(ref).set(null);
	}
}