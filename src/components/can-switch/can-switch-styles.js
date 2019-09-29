import { css } from 'lit-element';
import { canGreen, green } from '../../assets/css/colors';

export const CanSwitchStyles = css`
	:host {
		display: block;
	}

	:host > div.mdc-switch {
		width: 65px;
	}
`;
