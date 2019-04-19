import { css } from 'lit-element';

export const appStyles = css`
	.app {
		text-align: center;
		font-family: sans-serif;
		height: 100%;
		padding-top: 110px;
	}
	header {
		background-color: red;
		flex-direction: column;
		height: 110px;
		position: fixed;
		top: 0px;
		width: 100%;
		display: flex;
	}
`;

export const hostStyles = css`
	display: block;
`;
