import { css } from 'lit-element';
import { tablet, laptop, desktop } from '../../assets/css/breakpoints';

export const CanHeaderStyles = css`
	:host {
		display: block;
		background-color: #fff;
	}

	header {
		display: flex;
		justify-content: space-between;
		height: 65px;
		align-items: center;
	}

	.left {
		width: 20%;
	}

	.middle {
		width: 60%;
	}

	.middle > div {
		display: flex;
		justify-content: center;
	}

	.right {
		width: 20%;
	}

	@media screen and (${tablet}) {
		header {
			background-color: #ffa500;
		}
	}
	@media screen and (${laptop}) {
		header {
			background-color: #ff8c00;
		}
	}

	@media screen and (${desktop}) {
		header {
			background-color: #ff7f50;
		}
	}
`;
