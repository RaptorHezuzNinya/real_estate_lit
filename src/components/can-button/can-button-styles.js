import { css } from 'lit-element';
import { canBlue, canGreen } from '../../assets/css/colors';

export const CanButtonStyles = css`
	:host {
		display: block;
		height: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	button {
		font-family: relative;
		position: relative;
		display: block;
		padding: 6px 18px;
		min-height: 36px;
		height: auto;
		margin: 18 0 18 0;
		border: 1px solid ${canBlue};
		background-color: #fff;
		font-size: 18px;
		font-weight: 400;
		cursor: pointer;
		outline: none;
		color: ${canBlue};
		border-radius: 3px;
	}

	:host([navigation]) > button {
		height: 100%;
		width: 100%;
		padding: 0;
		border: none;
		font: inherit;
		color: inherit;
		background-color: transparent;
		cursor: pointer;
	}

	:host([logout]) > button {
		height: 100%;
		width: 100%;
		padding: 0;
		display: flex;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	:host([downloadtip]) > button {
		width: 100%;
		height: 100%;
		background-color: inherit;
		border: none;
		padding: 0 10px;
	}

	button:first-letter {
		text-transform: uppercase;
	}

	button:hover {
		background-color: ${canGreen};
	}

	:host([green]) > button {
		background-color: ${canGreen};
	}
`;
