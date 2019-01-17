import { html } from 'lit-element';

// when exported with default this is import statement:
// import menuComponentStyles from './menu-component-styles';
const menuComponentStyles = html`
	<style>
		.main-holder {
			background-color: green;
		}
	</style>
`;

export default menuComponentStyles;

// when exported with named export import statement:
// import { menuComponentStyles } from './menu-component-styles';
// export const menuComponentStyles = html`
// 	<style>
// 		.main-holder {
// 			background-color: green;
// 		}
// 	</style>
// `;