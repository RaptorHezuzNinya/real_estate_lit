import { css } from 'lit-element';

export const hostStyles = css`
	display: block;
`;

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
		display: flex;
		justify-content: center;
	}
`;
