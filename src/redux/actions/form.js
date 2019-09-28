import axios from 'axios';

// UNICORN NOTE => :why export thse const
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = formData => ({
	type: 'SUBMIT_FORM',
	payload: formData
});
