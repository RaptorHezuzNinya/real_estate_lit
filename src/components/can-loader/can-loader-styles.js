import { css } from 'lit-element';
import { canBlue, canGreen, canYellow, canRed } from '../../assets/css/colors';

export const CanLoaderStyles = css`
	:host {
		display: block;
	}

	:host([small]) {
		height: 48px;
		width: 48px;
	}

	:host {
		transform: translate(-50%, -50%);
		position: fixed;
		display: block;
		top: 50%;
		left: 50%;
		z-index: 999;
	}
	:host svg {
		width: 128px;
		height: 128px;
		display: block;
		top: 50%;
		left: 50%;
		z-index: 9;
	}
	:host svg .loading-ball {
		stroke-width: 0;
		cx: 64px;
		cy: 64px;
		animation-duration: 1.365s;
		animation-iteration-count: infinite;
		animation-direction: reverse;
		animation-timing-function: ease-in-out;
		webkit-transform: translate3d(0, 0, 0);
	}
	:host svg .loading-ball.one {
		fill: ${canBlue};
		r: 12px;
		animation-name: animateOne;
	}
	:host svg .loading-ball.two {
		fill: ${canGreen};
		r: 32px;
		animation-name: animateTwo;
		animation-delay: 0.125s;
	}
	:host svg .loading-ball.three {
		fill: ${canYellow};
		r: 32px;
		animation-name: animateThree;
		animation-delay: 0.25s;
	}
	:host svg .loading-ball.four {
		fill: ${canRed};
		r: 32px;
		animation-name: animateFour;
		animation-delay: 0.375s;
	}
	:host([small]) {
		transform: none;
		position: initial;
		display: block;
		top: initial;
		left: initial;
		z-index: initial;
	}
	:host([small]) svg {
		width: 48px;
		height: 48px;
		/* margin: 6px auto 0 auto; */
	}
	:host([small]) .loading-ball {
		cx: 24px;
		cy: 24px;
	}
	:host([small]) .loading-ball.one {
		animation-name: animateOneSmall;
		r: 6px;
	}
	:host([small]) .loading-ball.two {
		animation-name: animateTwoSmall;
		r: 16px;
	}
	:host([small]) .loading-ball.three {
		animation-name: animateThreeSmall;
		r: 16px;
	}
	:host([small]) .loading-ball.four {
		animation-name: animateFourSmall;
		r: 16px;
	}
	:host([small]) h4 {
		text-align: center;
	}
	@-moz-keyframes animateOne {
		0% {
			r: 12px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@-webkit-keyframes animateOne {
		0% {
			r: 12px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@-o-keyframes animateOne {
		0% {
			r: 12px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@keyframes animateOne {
		0% {
			r: 12px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@-moz-keyframes animateTwo {
		0% {
			r: 32px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 32px;
		}
	}
	@-webkit-keyframes animateTwo {
		0% {
			r: 32px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 32px;
		}
	}
	@-o-keyframes animateTwo {
		0% {
			r: 32px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 32px;
		}
	}
	@keyframes animateTwo {
		0% {
			r: 32px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 32px;
		}
	}
	@-moz-keyframes animateThree {
		0% {
			r: 48px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 48px;
		}
	}
	@-webkit-keyframes animateThree {
		0% {
			r: 48px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 48px;
		}
	}
	@-o-keyframes animateThree {
		0% {
			r: 48px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 48px;
		}
	}
	@keyframes animateThree {
		0% {
			r: 48px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 48px;
		}
	}
	@-moz-keyframes animateFour {
		0% {
			r: 64px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 64px;
		}
	}
	@-webkit-keyframes animateFour {
		0% {
			r: 64px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 64px;
		}
	}
	@-o-keyframes animateFour {
		0% {
			r: 64px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 64px;
		}
	}
	@keyframes animateFour {
		0% {
			r: 64px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 64px;
		}
	}
	@-moz-keyframes animateOneSmall {
		0% {
			r: 3px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 3px;
		}
	}
	@-webkit-keyframes animateOneSmall {
		0% {
			r: 3px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 3px;
		}
	}
	@-o-keyframes animateOneSmall {
		0% {
			r: 3px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 3px;
		}
	}
	@keyframes animateOneSmall {
		0% {
			r: 3px;
		}
		50% {
			r: 0;
		}
		100% {
			r: 3px;
		}
	}
	@-moz-keyframes animateTwoSmall {
		0% {
			r: 8px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 8px;
		}
	}
	@-webkit-keyframes animateTwoSmall {
		0% {
			r: 8px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 8px;
		}
	}
	@-o-keyframes animateTwoSmall {
		0% {
			r: 8px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 8px;
		}
	}
	@keyframes animateTwoSmall {
		0% {
			r: 8px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 8px;
		}
	}
	@-moz-keyframes animateThreeSmall {
		0% {
			r: 12px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@-webkit-keyframes animateThreeSmall {
		0% {
			r: 12px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@-o-keyframes animateThreeSmall {
		0% {
			r: 12px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@keyframes animateThreeSmall {
		0% {
			r: 12px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 12px;
		}
	}
	@-moz-keyframes animateFourSmall {
		0% {
			r: 16px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 16px;
		}
	}
	@-webkit-keyframes animateFourSmall {
		0% {
			r: 16px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 16px;
		}
	}
	@-o-keyframes animateFourSmall {
		0% {
			r: 16px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 16px;
		}
	}
	@keyframes animateFourSmall {
		0% {
			r: 16px;
		}
		45% {
			r: 0;
		}
		65% {
			r: 0;
		}
		100% {
			r: 16px;
		}
	}
`;
