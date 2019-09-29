import { css } from 'lit-element';

export const CanFeedbackStyles = css`
	:host {
		display: block;
	}
	:host([_warning]) > div > p {
		font-size: 13px;
	}
	:host div {
		display: flex;
	}
`;
