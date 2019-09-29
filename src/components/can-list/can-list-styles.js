import { css } from 'lit-element';

export const CanListStyles = css`
	:host {
		display: block;
	}

	:host([hidden]) {
		display: none !important;
	}

	.listNopadding {
		padding: 0;
	}

	.listNopadding can-list-item {
		margin-top: 2px;
	}
`;
