import { LitElement } from 'lit-element';

class ApiComponent extends LitElement {
	static get properties() {
		return {
			apiRoute: { type: String },
			path: { type: String },
			tenants: { type: Array }
		};
	}

	constructor() {
		super();
		this.axios = require('axios');
		this.apiRoute = 'http://127.0.0.1:5000/';
		this.path = '';
		this.responseData = false;
	}

	render() {
		const { apiRoute, path, axios } = this;
		axios
			.get(apiRoute + path)
			.then(response => {
				this.responseData = response;
				// console.log(response);
			})
			.catch(error => {
				// handle error
				console.log(error);
			})
			.then(() => {
				// always executed
			});
	}
}

customElements.define('api-component', ApiComponent);
