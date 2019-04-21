import { css } from 'lit-element';

export const ReButtonStyles = css`
	.btnHolder {
		border: 1px solid black;
		height: 35px;
		min-width: 100px;
	}
`;

export const host = css`
	:host {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
`;
