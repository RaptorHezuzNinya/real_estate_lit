import { css } from 'lit-element';

export const ReTestCardStyles = css`
	:host {
		/* display: block; */
		background-color: #ededed;
	}

	.card {
		box-shadow: 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2);
		border-radius: 2px;
		background-color: #fefefe;
		height: 88px;
		max-width: 500px;
		overflow: hidden;
		transition: 375ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.cardActive {
		height: 332px;
	}

	.cardActive .nonSharedContent {
		/* When closing, wait 75ms before fading and fade for longer */
		transition: 150ms;
		transition-delay: 75ms;
		opacity: 1;
	}

	.nonSharedContent {
		transition: 75ms;
		opacity: 0;
	}

	#cardHeader {
		cursor: pointer;
		width: 100%;
		height: 72px;
		padding-top: 16px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	}

	.cardHeaderTextContainer {
		display: inline-block;
		height: 100%;
		padding-top: 4px;
		width: auto;
	}

	.cardHeaderTitle {
		background-color: #2196f2;
		width: 184px;
		height: 16px;
		margin-bottom: 16px;
	}

	.cardHeaderSupportingText {
		/* background-color: #2196f2; */
		font-size: 15px;
		height: 16px;
		width: 136px;
	}

	.cardAvatarContainer {
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
	}

	.greySquaresContainer {
		width: 200%;
		padding: 10px;
	}

	.greySquare {
		margin: 8px;
		display: inline-block;
		width: 120px;
		height: 120px;
		background-color: #ededed;
		border-radius: 2px;
	}

	.greyLine {
		width: 160px;
		height: 16px;
		margin: 24px 16px;
		background-color: #ededed;
	}

	.greyLine:first-of-type {
		width: 220px;
		margin: 0 16px;
	}
`;
