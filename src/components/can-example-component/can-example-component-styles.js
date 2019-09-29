import { css } from 'lit-element';

export const CanExampleComponentStyles = css`
	:host {
		display: block;
	}
	p ::slotted(div) {
		color: green;
	}

	p {
		color: yellow;
	}
`;
