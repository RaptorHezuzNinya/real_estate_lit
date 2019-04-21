import { css } from 'lit-element';

export const hostStyles = css``;

export const reCollapseStyles = css`
	#collapsible {
		background-color: #777;
		color: white;
		cursor: pointer;
		padding: 18px;
		width: 100%;
		border: none;
		text-align: left;
		outline: none;
		font-size: 15px;
	}

	#collapsibleContent {
		padding: 0 18px;
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.2s ease-out;
		background-color: #f1f1f1;
	}
`;
