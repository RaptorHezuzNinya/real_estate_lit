import { css } from 'lit-element';

export const ReCardV2Styles = css`
	:host {
		background-color: #ededed;
	}

	.card {
		box-shadow: 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		background-color: #fefefe;
		height: 88px;
		max-width: 500px;
		padding: 0 12px;
		overflow: hidden;
		transition: 375ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.cardActive {
		height: 100%;
	}

	.cardActive .content {
		/* When closing, wait 75ms before fading and fade for longer */
		transition: 150ms;
		transition-delay: 75ms;
		opacity: 1;
		height: 100%;
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
	}

	.content {
		border: 1px solid red;
		transition: 75ms;
		opacity: 0;
	}

	.cardHeader {
		cursor: pointer;
		width: 100%;
		height: 72px;
		padding-top: 12px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	}

	.container {
		display: inline-block;
		height: 100%;
		padding-top: 4px;
		width: 100%;
	}

	.title {
		/* background-color: #2196f2; */
		/* width: 184px;
		height: 16px;
		margin-bottom: 16px; */
	}

	.supportText {
		font-size: 13px;
	}

	.cardContent {
		margin-top: 16px;
	}
	/* .cardAvatarContainer {
		display: inline-block;
		margin: 0 16px;
		height: 100%;
		float: left;
	}

	.cardAvatar {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background-color: #2196f2;
		display: inline-block;
	} */
	/* .paymentHolder {
		border-bottom: 0.5px solid lightgray;
		font-size: 15px;
		display: flex;
		justify-content: space-around;
	} */
`;
