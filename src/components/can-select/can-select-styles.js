import { css } from 'lit-element';
import { canGreen } from '../../assets/css/colors';

export const CanSelectStyles = css`
	:host {
		display: block;
	}
	:host > div > i {
		width: 40px;
		height: 40px;
	}
	/* remove default dropdown arrow */
	select {
		/* for Firefox */
		-moz-appearance: none;
		/* for Chrome */
		-webkit-appearance: none;
	}
	.mdc-select.mdc-select--outlined {
		width: 100%;
	}
	.mdc-select.mdc-select--outlined > i {
		left: auto;
		right: 8px;
		position: absolute;
		top: 8px;
		pointer-events: none;
		transform: rotate(0deg);
		transition: transform 0.2s ease-in;
	}

	.mdc-select.mdc-select--outlined.mdc-select--focused > i {
		transform: rotate(180deg);
		transition: transform 0.2s ease-in;
	}

	.mdc-select.mdc-select--outlined.mdc-select--focused > i svg path {
		stroke: ${canGreen};
	}
`;
