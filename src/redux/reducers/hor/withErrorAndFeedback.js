import { SHOW_FEEDBACK, HIDE_FEEDBACK, SHOW_ERROR, HIDE_ERROR } from '../../actions/ui.js';

import {
	UPDATE_CAMPAIGN_BASICS_SUCCESS,
	UPDATE_CAMPAIGN_BASICS_ERROR,
	UPDATE_CAMPAIGN_STORY_SUCCESS,
	UPDATE_CAMPAIGN_STORY_ERROR,
	UPDATE_CAMPAIGN_COVER,
	UPDATE_CAMPAIGN_VIDEO
} from '../../actions/campaignDashboard.js';
import { SET_CAMPAIGN_VIDEO } from '../../actions/campaign.js';

export const withErrorAndFeedback = (section, reducer) => (state, action) => {
	switch (action.type) {
		case `${section}_SHOW_ERROR`: {
			return {
				...state,
				error: action.error
			};
		}

		case `${section}_HIDE_ERROR`: {
			return {
				...state,
				error: false
			};
		}

		case `${section}_SHOW_FEEDBACK`: {
			return {
				...state,
				feedback: action.payload
			};
		}

		case `${section}_HIDE_FEEDBACK`: {
			return {
				...state,
				feedback: false
			};
		}
		case SHOW_FEEDBACK: {
			switch (action.label) {
				case UPDATE_CAMPAIGN_BASICS_SUCCESS: {
					const newState = {
						...state,
						basics: {
							...state['basics'],
							feedback: true
						}
					};

					return { ...newState };
				}

				case UPDATE_CAMPAIGN_COVER: {
					const newState = {
						...state,
						coverPhoto: {
							...state['coverPhoto'],
							feedback: action.payload ? action.payload : true
						}
					};

					return { ...newState };
				}

				case UPDATE_CAMPAIGN_VIDEO: {
					const newState = {
						...state,
						video: {
							...state['video'],
							feedback: action.payload ? action.payload : true
						}
					};

					return { ...newState };
				}

				case SET_CAMPAIGN_VIDEO: {
					const newState = {
						...state,
						video: {
							...state['video'],
							feedback: true
						}
					};
					return { ...newState };
				}

				case UPDATE_CAMPAIGN_STORY_SUCCESS: {
					return {
						...state,
						story: {
							...state['story'],
							feedback: action.payload ? action.payload : true
						}
					};
				}
			}
			return;
		}

		case HIDE_FEEDBACK: {
			switch (action.label) {
				case UPDATE_CAMPAIGN_BASICS_SUCCESS: {
					const newState = {
						...state,
						basics: {
							...state['basics'],
							feedback: null
						}
					};

					return { ...newState };
				}

				case UPDATE_CAMPAIGN_COVER: {
					const newState = {
						...state,
						coverPhoto: {
							...state['coverPhoto'],
							feedback: null
						}
					};
					return { ...newState };
				}

				case UPDATE_CAMPAIGN_VIDEO: {
					const newState = {
						...state,
						video: {
							...state['video'],
							feedback: null
						}
					};

					return { ...newState };
				}
				case SET_CAMPAIGN_VIDEO: {
					const newState = {
						...state,
						video: {
							...state['video'],
							feedback: null
						}
					};
					return { ...newState };
				}

				case UPDATE_CAMPAIGN_STORY_SUCCESS: {
					return {
						...state,
						story: {
							...state['story'],
							feedback: null
						}
					};
				}
			}
			return;
		}

		case SHOW_ERROR: {
			if (action.label === UPDATE_CAMPAIGN_STORY_ERROR) {
				return {
					...state,
					story: {
						...state['story'],
						error: action.error.data.error
					}
				};
			}
		}

		case HIDE_ERROR: {
			if (action.label === UPDATE_CAMPAIGN_BASICS_ERROR) {
				return {
					...state,
					basics: {
						...state['basics'],
						error: null
					}
				};
			}
			if (action.label === UPDATE_CAMPAIGN_STORY_ERROR) {
				return {
					...state,
					story: {
						...state['story'],
						error: null
					}
				};
			}
			if (action.label === LOGIN_USER_ERROR) {
				return {
					...state,
					user: {
						...state['user'],
						error: null
					}
				};
			}
		}

		default:
			return reducer(state, action);
	}
};
