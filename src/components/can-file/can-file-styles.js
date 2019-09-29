import { css } from 'lit-element';

export const CanFileStyles = css`
	:host {
		display: block;
	}

	:host([hidden]) {
		display: none !important;
	}
`;
