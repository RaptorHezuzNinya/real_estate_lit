import { css } from 'lit-element';
import { canBlue } from '../../assets/css/colors';

export const CanListItemStyles = css`
	:host {
		display: block;
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([link]) {
		list-style: none;
		border-bottom: 1px solid ${canBlue};
		border-radius: 3px;
		display: flex;
	}

	:host([link]) a {
		list-style: none;
		width: 100%;
		border-right: 1px solid ${canBlue};
		line-height: 40px;
		text-align: center;
		font-size: 16px;
	}
`;
