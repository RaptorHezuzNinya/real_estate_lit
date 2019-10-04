import { css } from 'lit-element';
import { canBlue, canGreen } from '../../assets/css/colors';

export const CanButtonV2Styles = css`
	:host {
		display: block;
	}

	:host([hidden]) {
		display: none;
	}

	button {
		font-family: relative;
	}

	button:hover {
		background-color: ${canGreen};
	}

	:host([green]) > button {
		background-color: ${canGreen};
	}
`;
